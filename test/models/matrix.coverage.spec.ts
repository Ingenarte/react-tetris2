// test/models/matrix.coverage.spec.ts
import { describe, it, expect } from 'vitest';

import {
  buildMatrix,
  moveDown,
  hardDrop,
  clearFullLines,
  isEmptyPosition,
  type Matrix
} from '../../src/models/Matrix';
import { init } from '../../src/models/Game';

describe('Matrix helpers', () => {
  it('creates an empty 20 × 10 board', () => {
    const m = buildMatrix();
    expect(m).toHaveLength(20);
    expect(m.every((row) => row.length === 10)).toBe(true);
    expect(m.flat().every((c) => c === null)).toBe(true);
  });

  it('moveDown increases the y-coordinate', () => {
    const game = init();
    const next = moveDown(game.matrix, game.piece)!;
    expect(next.position.y).toBeGreaterThan(game.piece.position.y);
  });

  it('hardDrop lands at the bottom while staying valid', () => {
    const game = init();
    const dropped = hardDrop(game.matrix, game.piece);
    expect(isEmptyPosition(game.matrix, dropped)).toBe(true);
    expect(dropped.position.y).toBeGreaterThan(15); // near the bottom
  });

  it('clearFullLines removes any filled rows', () => {
    const board: Matrix = buildMatrix();

    // Fill the bottom row with a valid piece id
    board[19] = new Array(10).fill('I');

    const [clean, clearedRows] = clearFullLines(board);
    // now returns the list of row-indices that were cleared
    expect(clearedRows).toEqual([19]);
    expect(clean[19].every((c) => c === null)).toBe(true);
  });
});
