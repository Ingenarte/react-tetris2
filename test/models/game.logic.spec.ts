import { describe, it, expect } from 'vitest';

import { init, update, getLevel, Game } from '../../src/models/Game';

describe('Game model – state machine', () => {
  it('init() returns a paused game with zero score and lines', () => {
    const g = init();
    expect(g.state).toBe('PAUSED');
    expect(g.points).toBe(0);
    expect(g.lines).toBe(0);
  });

  it('getLevel() increases every 10 lines', () => {
    let g: Game = { ...init(), lines: 0 };
    expect(getLevel(g)).toBe(1);

    g = { ...g, lines: 9 };
    expect(getLevel(g)).toBe(1);

    g = { ...g, lines: 10 };
    expect(getLevel(g)).toBe(2);

    g = { ...g, lines: 25 };
    expect(getLevel(g)).toBe(3);
  });

  it('update() switches states: PAUSE → RESUME → TOGGLE_PAUSE', () => {
    let g: Game = { ...init(), state: 'PLAYING' };

    g = update(g, 'PAUSE');
    expect(g.state).toBe('PAUSED');

    g = update(g, 'RESUME');
    expect(g.state).toBe('PLAYING');

    g = update(g, 'TOGGLE_PAUSE');
    expect(g.state).toBe('PAUSED');
  });

  it('RESTART resets score and lines but keeps the game paused', () => {
    let g: Game = { ...init(), points: 500, lines: 20 };
    g = update(g, 'RESTART');

    expect(g.state).toBe('PAUSED');
    expect(g.points).toBe(0);
    expect(g.lines).toBe(0);
  });

  // --- ADDITIONAL TESTS FOR EDGE CASES AND BRANCH COVERAGE ---

  it('keeps state PAUSED if already paused and PAUSE is dispatched', () => {
    // Should remain in PAUSED state if PAUSE action is received again
    const g = update(init(), 'PAUSE');
    expect(g.state).toBe('PAUSED');
  });

  it('sets state to LOST if a new piece cannot spawn after line clear', () => {
    let g = update(init(), 'RESUME');

    // Fill a row to ensure it gets cleared
    g.matrix[19] = Array(10).fill('I');
    g.pendingClear = true;

    // Fill the spawn zone where the next piece will try to appear
    // Specifically, the I piece in horizontal orientation will occupy row 0
    g.matrix[0][3] = 'I';
    g.matrix[0][4] = 'I';
    g.matrix[0][5] = 'I';
    g.matrix[0][6] = 'I';

    // Clear the line and spawn the new piece
    g = update(g, 'TICK');

    // Next TICK: spawn fails, game should be over
    g = update(g, 'TICK');

    expect(g.state).toBe('LOST');
  });

  it('throws on unknown action', () => {
    const g = update(init(), 'RESUME');
    // @ts-expect-error intentionally dispatching an unknown action
    expect(() => update(g, 'NOT_A_REAL_ACTION')).toThrow();
  });

  it('does not increase points or lines on RESTART', () => {
    let g = update(init(), 'RESUME');
    g = { ...g, points: 10, lines: 10 };
    g = update(g, 'RESTART');
    expect(g.points).toBe(0);
    expect(g.lines).toBe(0);
  });
});
