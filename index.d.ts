import React from 'react';

export interface Tetris2Props {
  /** Initial credit count */
  credits?: number;
  /** Whether to deduct credits when starting */
  manageCredits?: boolean;
  /** Show/hide pause/start/game over popups */
  showModals?: boolean;
  /** Enable or disable audio */
  soundEnabled?: boolean;
  /** Show keyboard controls legend */
  showControlsLegend?: boolean;
  /** Called when the game ends */
  onGameOver?: () => void;
  /** Called when the score changes */
  onScoreChange?: (score: number) => void;
  /** Called when the level changes */
  onLevelChange?: (level: number) => void;
}

export interface Tetris2Handle {
  /** Start or resume the game */
  start: () => void;
  /** Restart the game from level 0 */
  restart: () => void;
}

declare const Tetris2: React.ForwardRefExoticComponent<
  Tetris2Props & React.RefAttributes<Tetris2Handle>
>;

export default Tetris2;
