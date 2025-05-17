// test/setup.ts
import { vi, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers'; // ← importa todo

expect.extend(matchers); // ahora sí existen las funciones

// stub Audio para JSDOM
class StubAudio {
  loop = false;
  muted = false;
  volume = 1;
  play = vi.fn(() => Promise.resolve());
  pause = vi.fn();
}
globalThis.Audio = StubAudio as unknown as typeof Audio;
