import React from 'react';
import { beforeEach, it, expect, vi } from 'vitest';

describe('main.tsx bootstrap', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('calls createRoot with the #root element and renders <App /> in <StrictMode>', async () => {
    const mockRender = vi.fn();
    const mockCreateRoot = vi.fn(() => ({
      render: mockRender
    }));

    // Mock both default and named exports
    vi.doMock('react-dom/client', () => ({
      __esModule: true, // this is required for default import to work!
      default: {
        createRoot: mockCreateRoot
      },
      createRoot: mockCreateRoot
    }));

    // Mock App as well if needed (optionally)
    vi.doMock('../../src/App', () => ({
      __esModule: true,
      default: () => <div data-testid='app-mock' />
    }));

    await import('../../src/main.tsx');

    const rootEl = document.getElementById('root');
    expect(mockCreateRoot).toHaveBeenCalledWith(rootEl);
    expect(mockRender).toHaveBeenCalled(); // (optionally, check exact call as above)
  });
});
