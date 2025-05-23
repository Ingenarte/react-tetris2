import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      insertTypesEntry: true,
      exclude: ['**/*.stories.*', '**/*.test.*']
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Tetris2',
      formats: ['es', 'cjs'],
      fileName: (fmt) => (fmt === 'es' ? 'index.esm.js' : 'index.cjs.js')
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
        exports: 'named'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
