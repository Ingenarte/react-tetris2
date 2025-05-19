import React from 'react';
import { createRoot } from 'react-dom/client';

// Import the package as if it were an external dependency
import { Tetris2 } from './dist/index.esm.js'; // This should point to your package entry

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tetris2 />
  </React.StrictMode>
);
