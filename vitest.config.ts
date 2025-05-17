import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      all: false,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/**/__tests__/**', 'src/**/stories/**'],

      thresholds: {
        lines: 70,
        functions: 70,
        statements: 70
      }
    }
  }
});
