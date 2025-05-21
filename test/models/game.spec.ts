import { describe, it, expect } from 'vitest';

import { init, update } from '../../src/models/Game';

describe('Game reducer', () => {
  it('RESUME -> PLAYING', () => {
    const resumed = update(init(), 'RESUME');
    expect(resumed.state).toBe('PLAYING');
  });

  it('PAUSE -> PAUSED', () => {
    const playing = update(init(), 'RESUME');
    const paused = update(playing, 'PAUSE');
    expect(paused.state).toBe('PAUSED');
  });

  it('HARD_DROP bloquea la pieza', () => {
    const playing = update(init(), 'RESUME');
    const dropped = update(playing, 'HARD_DROP');
    expect(
      dropped.pendingClear ?? dropped.justCleared?.length
    ).not.toBeUndefined();
  });
});
