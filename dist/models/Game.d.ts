import { Matrix, PositionedPiece, Piece } from './Matrix';
import { PieceQueue as PieceQueueType } from '../modules/piece-queue';
export type State = 'PAUSED' | 'PLAYING' | 'LOST';
type HeldPiece = {
    available: boolean;
    piece: Piece;
};
export type Game = {
    state: State;
    matrix: Matrix;
    piece: PositionedPiece;
    heldPiece: HeldPiece | undefined;
    queue: PieceQueueType;
    points: number;
    lines: number;
    justCleared?: number[];
    pendingClear?: boolean;
};
export declare const getLevel: (game: Game) => number;
export type Action = 'PAUSE' | 'RESUME' | 'TOGGLE_PAUSE' | 'TICK' | 'HOLD' | 'HARD_DROP' | 'MOVE_DOWN' | 'MOVE_LEFT' | 'MOVE_RIGHT' | 'FLIP_CLOCKWISE' | 'FLIP_COUNTERCLOCKWISE' | 'RESTART';
export declare const update: (game: Game, action: Action) => Game;
export declare function getClearedLineIndexes(matrix: Matrix): number[];
export declare const init: () => Game;
export declare function viewMatrix(game: Game): Matrix;
export {};
//# sourceMappingURL=Game.d.ts.map