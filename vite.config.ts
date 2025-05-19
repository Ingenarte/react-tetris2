import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: 'tsconfig.build.json', // ← use build config
      // belt-and-braces: double-exclude just in case
      exclude: ['**/*.stories.*', '**/*.test.*']
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Tetris2',
      formats: ['es', 'cjs'],
      fileName: (fmt) => `index.${fmt}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
