// src/components/utils/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

 /* —————————————————————————————
     Local Font: Montserrat
  ————————————————————————————— */
  @font-face {
    font-family: 'Montserrat';
    src: url('/src/assets/fonts/montserrat/Montserrat-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/src/assets/fonts/montserrat/Montserrat-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/src/assets/fonts/montserrat/Montserrat-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  /* —————————————————————————————
     Variables & resets 
  ————————————————————————————— */
  :root {
    --block-size: clamp(14px, 4vw, 28px);
    --preview-size: clamp(12px, 3vw, 18px);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: #120d1f;
    color: #f0f0f0;
  }

  /* —————————————————————————————
     Game-board / preview block styles
  ————————————————————————————— */
  .game-block {
    margin: 0;
    aspect-ratio: 1/1;
    padding: 0;
    width: var(--block-size);
    height: var(--block-size);
    border: 0.1px solid rgba(65, 52, 78, 0.35);
    background-color: rgba(27, 19, 44, 0.18);
    border-radius: 4px;
  }

  .piece-view {
    margin-bottom: 12px;
  }
  .piece-view:first-child {
    margin-top: 4px;
  }
  .piece-view .game-block {
    width: var(--preview-size);
    height: var(--preview-size);
  }

  /* —————————————————————————————
     Tetromino colors
  ————————————————————————————— */
  .piece-i { background-color: #42c8f4; }
  .piece-j { background-color: #5d9bf5; }
  .piece-l { background-color: #f2b63c; }
  .piece-o { background-color: #e7d84b; }
  .piece-s { background-color: #84d686; }
  .piece-t { background-color: #bb84e8; }
  .piece-z { background-color: #f36f6f; }

  /* —————————————————————————————
     Cleared-line flash animation
  ————————————————————————————— */
  @keyframes flashOut {
    0%   { background-color: #ffffff; opacity: 1; }
    100% { background-color: transparent; opacity: 0.3; }
  }
  .cleared-line {
    animation: flashOut 200ms ease-in-out forwards;
  }
`;
