import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

/**
 * GLB Asset Optimization & Cloudflare R2 Upload CLI Tool
 * 
 * Usage:
 *   node scripts/manage-glb.mjs <action> <file1.glb> [file2.glb ...]
 * 
 * Actions:
 *   optimize            - Compress textures to WebP locally
 *   upload              - Upload GLB file(s) to Cloudflare R2 bucket
 *   optimize-and-upload - Run WebP texture optimization then upload to R2
 * 
 * Examples:
 *   node scripts/manage-glb.mjs optimize ./3d_models/Casher.glb
 *   node scripts/manage-glb.mjs upload ./public/assets/models/*.glb
 *   node scripts/manage-glb.mjs optimize-and-upload ./models/model1.glb ./models/model2.glb
 */

// Parse CLI Arguments
const args = process.argv.slice(2);
const validActions = ["optimize", "upload", "optimize-and-upload", "all"];

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  printHelp();
  process.exit(0);
}

let action = args[0].toLowerCase();
let filePaths = args.slice(1);

// Handle flag-style args (e.g., --action optimize --files f1.glb f2.glb)
if (action.startsWith("--action=")) {
  action = action.split("=")[1];
} else if (action === "--action" && args.length > 1) {
  action = args[1];
  filePaths = args.slice(2);
}

if (!validActions.includes(action)) {
  console.error(`Invalid action: '${action}'. Allowed actions: ${validActions.join(", ")}`);
  printHelp();
  process.exit(1);
}

if (filePaths.length === 0) {
  console.error("Error: No input GLB file(s) specified.");
  printHelp();
  process.exit(1);
}

// Expand & Validate File Paths
const filesToProcess = [];
for (const filePath of filePaths) {
  const resolved = path.resolve(filePath);
  if (fs.existsSync(resolved)) {
    const stat = fs.statSync(resolved);
    if (stat.isFile() && resolved.endsWith(".glb")) {
      filesToProcess.push(resolved);
    } else if (stat.isDirectory()) {
      // Find all .glb in directory
      const found = fs.readdirSync(resolved)
        .filter(f => f.endsWith(".glb"))
        .map(f => path.join(resolved, f));
      filesToProcess.push(...found);
    }
  } else {
    console.warn(`Warning: File not found '${filePath}' (skipping).`);
  }
}

if (filesToProcess.length === 0) {
  console.error("Error: No valid .glb files found to process.");
  process.exit(1);
}

// S3 / Cloudflare R2 setup
let s3 = null;
const R2_BUCKET = process.env.R2_BUCKET || "jhic";

function getS3Client() {
  if (s3) return s3;

  const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
  const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
  const R2_ENDPOINT = process.env.R2_ENDPOINT?.trim();

  if (!R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_ENDPOINT) {
    console.error("Error: Missing Cloudflare R2 credentials (R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_ENDPOINT) in .env");
    process.exit(1);
  }

  s3 = new S3Client({
    region: "auto",
    endpoint: R2_ENDPOINT,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
  });
  return s3;
}

// Optimization Helper
function optimizeGLB(inputPath) {
  const fileDir = path.dirname(inputPath);
  const baseName = path.basename(inputPath, ".glb");
  const outputPath = path.join(fileDir, `${baseName}_optimized.glb`);

  const rawSize = fs.statSync(inputPath).size;
  const rawMb = (rawSize / 1024 / 1024).toFixed(2);

  console.log(`\nOptimizing '${path.basename(inputPath)}' (Original: ${rawMb} MB)...`);

  try {
    execSync(`npx @gltf-transform/cli webp "${inputPath}" "${outputPath}"`, { stdio: "pipe" });
    const optSize = fs.statSync(outputPath).size;
    const optMb = (optSize / 1024 / 1024).toFixed(2);
    const reduction = Math.round((1 - optSize / rawSize) * 100);

    console.log(`WebP texture compression complete: ${optMb} MB (${reduction}% size reduction)`);
    return outputPath;
  } catch (err) {
    console.warn(`WebP optimization failed, using original file: ${err.message}`);
    return inputPath;
  }
}

// Upload Helper
async function uploadToR2(filePath) {
  const client = getS3Client();
  const filename = path.basename(filePath).replace("_optimized", "");
  const r2Key = `uploads/${filename}`;
  const fileSizeMb = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);

  console.log(`\nUploading '${path.basename(filePath)}' (${fileSizeMb} MB) to R2 bucket '${R2_BUCKET}' key '${r2Key}'...`);

  const buffer = fs.readFileSync(filePath);
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: r2Key,
    Body: buffer,
    ContentType: "model/gltf-binary",
    CacheControl: "public, max-age=31536000, immutable",
  });

  await client.send(command);
  console.log(`Uploaded successfully! Public URL: https://${process.env.R2_URL || "jhic.rndlab.my.id"}/${r2Key}`);
}

// Main Execution Flow
async function main() {
  console.log(`\nGLB CLI Tool | Action: [${action}] | Target Files: ${filesToProcess.length}`);

  for (let i = 0; i < filesToProcess.length; i++) {
    const file = filesToProcess[i];
    console.log(`\n--------------------------------------------------`);
    console.log(`[${i + 1}/${filesToProcess.length}] Processing File: ${path.basename(file)}`);

    let targetUploadFile = file;

    if (action === "optimize" || action === "all") {
      targetUploadFile = optimizeGLB(file);
    }

    if (action === "upload" || action === "all") {
      await uploadToR2(targetUploadFile);
    }
  }

  console.log(`\n--------------------------------------------------`);
  console.log(`All ${filesToProcess.length} file(s) processed successfully!\n`);
}

function printHelp() {
  console.log(`
GLB CLI Optimization & Cloudflare R2 Upload Script

Usage:
  node scripts/manage-glb.mjs <action> <file1.glb> [file2.glb ...]

Available Actions:
  optimize             Only optimize local GLB file(s) with WebP texture compression
  upload               Only upload local GLB file(s) to Cloudflare R2 bucket
  all  Optimize GLB file(s) then upload to Cloudflare R2

Examples:
  # Optimize a single local model
  node scripts/manage-glb.mjs optimize ./3d_models/Casher.glb

  # Upload multiple local models to R2
  node scripts/manage-glb.mjs upload model1.glb model2.glb

  # Optimize and upload all GLB models in a folder
  node scripts/manage-glb.mjs all ./public/assets/models/
`);
}

main().catch(err => {
  console.error("Fatal Error:", err);
  process.exit(1);
});
