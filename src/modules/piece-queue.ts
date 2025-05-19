// src/modules/piece-queue.ts

import { Piece, pieces } from '../models/Piece';

export type PieceQueue = {
  minimumLength: number;
  queue: Piece[];
  bucket: Piece[];
};

/** Return a brand-new shuffled 7-bag */
export function shuffleBag(): Piece[] {
  const bag = pieces.slice();
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // non-null assertions below placate TS with noUncheckedIndexedAccess
    const tmp: Piece = bag[i]!;
    bag[i] = bag[j]!;
    bag[j] = tmp;
  }
  return bag;
}

/** Start with an empty queue + a freshly shuffled bag */
export function createPieceQueue(minimumLength: number): PieceQueue {
  return fill({
    minimumLength,
    queue: [],
    bucket: shuffleBag()
  });
}

/**
 * Consume the next piece and return both it and the updated queue state.
 * Uses non-null assert on [0]! because we checked length above.
 */
export function getNext(pieceQueue: PieceQueue): {
  piece: Piece;
  queue: PieceQueue;
} {
  if (pieceQueue.queue.length === 0) {
    throw new Error('Cannot getNext from an empty queue');
  }
  const next: Piece = pieceQueue.queue[0]!; // ! needed here
  const rest: Piece[] = pieceQueue.queue.slice(1);

  const updatedQueue = fill({
    minimumLength: pieceQueue.minimumLength,
    queue: rest,
    bucket: pieceQueue.bucket
  });

  return { piece: next, queue: updatedQueue };
}

/** Refill queue up to minimumLength, reshuffling bucket as needed */
function fill(state: PieceQueue): PieceQueue {
  const { minimumLength } = state;
  const newQueue: Piece[] = state.queue.slice();
  let newBucket: Piece[] = state.bucket.slice();

  while (newQueue.length < minimumLength) {
    if (newBucket.length === 0) {
      newBucket = shuffleBag();
    }
    // shift()! is safe here because we just checked length>0
    const piece: Piece = newBucket.shift()!;
    newQueue.push(piece);
  }

  return {
    minimumLength,
    queue: newQueue,
    bucket: newBucket
  };
}
