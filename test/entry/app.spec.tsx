import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

import App from '../../src/App';

// Mock Tetris2 as a default export for both ESM and CJS compatibility
vi.mock('../../src/components/tetris2/Tetris2', () => ({
  __esModule: true,
  Tetris2: () => <div data-testid='tetris2-mock' />
}));

describe('App component', () => {
  it('renders a single <main> landmark', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('renders the Tetris2 component inside <main>', () => {
    render(<App />);
    const tetris = screen.getByTestId('tetris2-mock');
    const main = screen.getByRole('main');
    expect(main).toContainElement(tetris);
  });
});
