import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // usá la raíz como carpeta base
  build: {
    outDir: 'dist'
  }
});
