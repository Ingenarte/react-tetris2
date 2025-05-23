import * as Game from '../models/Game';
/**
 * Custom hook that wires up:
 * 1) the Game.update reducer + initial state
 * 2) the gravity tick timer (dispatches 'TICK' on an interval based on level)
 *
 * @returns { game, dispatch, level }
 */
export declare function useTetrisEngine(): {
    game: Game.Game;
    dispatch: import('react').Dispatch<Game.Action>;
    level: number;
};
//# sourceMappingURL=useTetrisEngine.d.ts.map