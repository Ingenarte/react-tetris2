import { useReducer, useEffect, useMemo } from 'react';

import * as Game from '../models/Game';

/**
 * Custom hook that wires up:
 * 1) the Game.update reducer + initial state
 * 2) the gravity tick timer (dispatches 'TICK' on an interval based on level)
 *
 * @returns { game, dispatch, level }
 */
export function useTetrisEngine() {
  // 1) reducer: [gameState, dispatch]
  const [game, dispatch] = useReducer(Game.update, Game.init());

  // 2) derive level
  const level = Game.getLevel(game);

  // 3) on PLAYING state, start/clear the tick timer
  useEffect(() => {
    if (game.state !== 'PLAYING') {
      return;
    }
    // gravity formula from Tetris Worlds
    const intervalMs = Math.pow(0.8 - (level - 1) * 0.007, level - 1) * 1000;

    const id = window.setInterval(() => dispatch('TICK'), intervalMs);
    return () => window.clearInterval(id);
  }, [game.state, level]);

  // 4) memoize the return value
  return useMemo(() => ({ game, dispatch, level }), [game, dispatch, level]);
}
