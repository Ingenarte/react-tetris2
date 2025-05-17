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
});
