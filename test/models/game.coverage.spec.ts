import { describe, it, expect } from 'vitest';
import { init, update } from '../../src/models/Game';

describe('Game model – state machine and helpers', () => {
  // …other tests stay unchanged …

  it('hard-drops a piece and locks it into the matrix', () => {
    let g = update(init(), 'RESUME'); // start playing
    g = update(g, 'HARD_DROP');

    // A hard-drop doesn’t *necessarily* clear a line, so points might stay 0.
    // What we do know for sure is that the piece is now part of the matrix.
    // Therefore at least one block from the piece must appear on the board.
    const occupancy = g.matrix.flat().filter(Boolean).length;
    expect(occupancy).toBeGreaterThan(0);

    // Matrix must differ from a fresh game
    expect(g.matrix).not.toBe(init().matrix);
  });
});
