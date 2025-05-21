// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  test: {
    /** jsdom gives DOM + browser APIs inside Vitest */
    environment: 'jsdom',

    /** Provide global `describe`, `it`, `expect`, etc. */
    globals: true,

    /** Custom setup (mocks, global objects, etc.) */
    setupFiles: './test/setup.ts',

    /* ----------------------------------------------------------------
     * Exclude Playwright E2E files so Vitest only runs unit/integration
     * ---------------------------------------------------------------- */
    exclude: ['test/playground/e2e/**', '**/*.e2e.*', 'node_modules/**'],

    /* ------------------------ Code-coverage ------------------------- */
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],

      // Only include source files (not stories, tests, etc.)
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/**/__tests__/**',
        'src/**/stories/**',
        'test/playground/e2e/**',
        '**/*.e2e.*'
      ],

      // Minimum acceptable coverage %
      thresholds: {
        lines: 70,
        functions: 70,
        statements: 70
      }
    }
  }
});
