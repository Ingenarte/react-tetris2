import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'test/playground/e2e',
  retries: process.env.CI ? 2 : 0,
  timeout: 30_000,
  use: { trace: 'on-first-retry' },

  /* Spins up the playground before the tests run */
  webServer: {
    // Starts Vite in the playground directory
    command: 'npm run dev -- --port 5173',
    port: 5173,
    cwd: 'test/playground',
    reuseExistingServer: !process.env.CI // speeds up local runs
  },

  /* Run on Chromium and WebKit (Safari) */
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'webkit', use: { browserName: 'webkit' } }
  ]
});
