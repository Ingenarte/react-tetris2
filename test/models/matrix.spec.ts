import { describe, it, expect } from 'vitest';
import {
  buildMatrix,
  moveDown,
  isEmptyPosition,
  type Matrix,
  type PositionedPiece // <- import the right type
} from '../../src/models/Matrix';

describe('Matrix helpers', () => {
  const matrix = buildMatrix();

  // Use PositionedPiece, not ActivePiece
  const piece: PositionedPiece = {
    piece: 'I',
    rotation: 0,
    position: { x: 0, y: 0 }
  };

  it('moveDown descends one row', () => {
    const next = moveDown(matrix, piece)!;
    expect(next.position.y).toBe(1);
  });

  it('isEmptyPosition detects collisions', () => {
    const filled: Matrix = matrix.map((row, y) =>
      y === 0 ? row.map(() => 'I') : row
    ) as Matrix;

    expect(isEmptyPosition(filled, piece)).toBe(false);
  });
});
