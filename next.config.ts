import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.BUN_ENV === "production",
  },
};

export default nextConfig;
