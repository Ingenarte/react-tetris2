// index.d.ts

import React from 'react';

export interface Tetris2Props {
  /** Width of the playfield in blocks (default: 10) */
  columns?: number;
  /** Height of the playfield in blocks (default: 20) */
  rows?: number;
  /** Starting level (0–level∞) */
  initialLevel?: number;
  /** Starting credits (lives) */
  initialCredits?: number;
  /** Callback when lines are cleared */
  onLineCleared?: (linesCleared: number) => void;
  /** Callback when points change */
  onPointsChanged?: (points: number) => void;
  /** Callback when the game is over */
  onGameOver?: () => void;
  /** Disable keyboard controls (useful for mobile) */
  disableKeyboard?: boolean;
  /** CSS class name to apply to the root container */
  className?: string;
  /** Inline styles for the root container */
  style?: React.CSSProperties;
}

export interface Tetris2Handle {
  /** Start or resume the game */
  start: () => void;
  /** Pause the game */
  pause: () => void;
  /** Reset to initial state */
  reset: () => void;
}

declare const Tetris2: React.ForwardRefExoticComponent<
  Tetris2Props & React.RefAttributes<Tetris2Handle>
>;

export default Tetris2;
