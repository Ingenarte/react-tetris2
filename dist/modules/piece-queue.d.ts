import { Piece } from '../models/Piece';
export type PieceQueue = {
    minimumLength: number;
    queue: Piece[];
    bucket: Piece[];
};
/** Return a brand-new shuffled 7-bag */
export declare function shuffleBag(): Piece[];
/** Start with an empty queue + a freshly shuffled bag */
export declare function createPieceQueue(minimumLength: number): PieceQueue;
/**
 * Consume the next piece and return both it and the updated queue state.
 * Uses non-null assert on [0]! because we checked length above.
 */
export declare function getNext(pieceQueue: PieceQueue): {
    piece: Piece;
    queue: PieceQueue;
};
//# sourceMappingURL=piece-queue.d.ts.map