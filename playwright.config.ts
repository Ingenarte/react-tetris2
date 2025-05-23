import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: 'test/playground/e2e',
  retries: process.env.CI ? 4 : 0,
  timeout: 30_000,
  use: { trace: 'on-first-retry', headless: isCI ? false : true },

  /* Spins up the playground before the tests run */
  webServer: {
    // Starts Vite in the playground directory
    command: 'npm run dev -- --port 5173',
    port: 5173,
    cwd: 'test/playground',
    reuseExistingServer: true
  },

  /* Run on Chromium and WebKit (Safari) */
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    ...(!isCI
      ? [
          {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }
          }
        ]
      : [])
  ]
});
