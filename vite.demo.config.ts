// vite.demo.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'demo',
  base: '/react-tetris2/',
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'demo-dist',
    emptyOutDir: true
  }
});
