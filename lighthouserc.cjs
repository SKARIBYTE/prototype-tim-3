/**
 * Lighthouse CI configuration — Core Web Vitals budgets.
 *
 * Enforces Google's mobile "good" CWV thresholds:
 *   - Largest Contentful Paint (LCP) <= 2500 ms
 *   - Cumulative Layout Shift (CLS)  <= 0.1
 *   - Interaction to Next Paint (INP) <= 200 ms
 *
 * INP is a *field* metric with no direct lab audit, so in the lab we gate on
 * Total Blocking Time (TBT) — Lighthouse's recommended lab proxy — at the same
 * budget, and assert the experimental INP audit directly as a warning where the
 * build exposes it.
 *
 * Collection runs against the *production* server (build + start) on Lighthouse's
 * default mobile (Moto G4 / slow 4G) emulation.
 */

/** The fixed port the production server is started on for the audit. */
const PORT = 3100;
const BASE_URL = `http://localhost:${PORT}`;

/** Pages whose budgets are enforced in CI. */
const MARKETING_URLS = [`${BASE_URL}/`];

/**
 * Core Web Vitals budgets on mobile — Google's "good" thresholds.
 * These are the values that earn the best Lighthouse scores.
 */
const LCP_BUDGET_MS = 2500;
const INP_BUDGET_MS = 200;
const CLS_BUDGET = 0.1;

module.exports = {
  ci: {
    collect: {
      startServerCommand: `bun run start --port ${PORT}`,
      startServerReadyPattern: "Ready in",
      startServerReadyTimeout: 120000,
      url: MARKETING_URLS,
      numberOfRuns: 3,
      settings: {
        preset: process.env.LHCI_FORM_FACTOR === "desktop" ? "desktop" : undefined,
        onlyCategories: [
          "performance",
          "seo",
          "accessibility",
          "best-practices",
        ],
      },
    },
    assert: {
      aggregationMethod: "median-run",
      assertions: {
        "largest-contentful-paint": [
          "error",
          { maxNumericValue: LCP_BUDGET_MS },
        ],
        "cumulative-layout-shift": ["error", { maxNumericValue: CLS_BUDGET }],
        "total-blocking-time": ["error", { maxNumericValue: INP_BUDGET_MS }],
        "interaction-to-next-paint": [
          "warn",
          { maxNumericValue: INP_BUDGET_MS },
        ],
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./.lighthouseci",
    },
  },
};
