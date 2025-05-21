import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import GamePanel from '../../src/components/tetris/GamePanel/GamePanel';

/** ----------------------------------------------------------------
 *  Mock TetrisEngine *before* importing GamePanel
 *  ---------------------------------------------------------------- */
vi.mock('../../src/components/tetris/TetrisEngine', async () => {
  const FakeEngine: React.FC<{
    children: (p: {
      Gameboard: React.FC;
      HeldPiece: React.FC;
      PieceQueue: React.FC;
      points: number;
      linesCleared: number;
      state: 'PLAYING' | 'PAUSED' | 'LOST';
      level: number;
      credits: number;
    }) => React.ReactNode;
  }> = ({ children }) => (
    <>
      {children({
        Gameboard: () => <div data-testid='gameboard' />,
        HeldPiece: () => <div data-testid='held' />,
        PieceQueue: () => <div data-testid='queue' />,
        points: 123,
        linesCleared: 4,
        state: 'PLAYING',
        level: 5,
        credits: 2
      })}
    </>
  );
  return { default: FakeEngine };
});

/** ----------------------------------------------------------------
 *  Tests
 *  ---------------------------------------------------------------- */
describe('<GamePanel>', () => {
  it('renders scoreboard, board, held piece and queue', () => {
    render(<GamePanel />);

    // Score area
    expect(screen.getByText(/credits/i)).toBeInTheDocument();
    expect(screen.getByText('0002')).toBeInTheDocument();

    expect(screen.getByText(/points/i)).toBeInTheDocument();
    expect(screen.getByText('0123')).toBeInTheDocument();

    expect(screen.getByText(/lines/i)).toBeInTheDocument();
    expect(screen.getByText('0004')).toBeInTheDocument();

    expect(screen.getByText(/level/i)).toBeInTheDocument();
    expect(screen.getByText('0005')).toBeInTheDocument();

    // Stub components
    expect(screen.getByTestId('gameboard')).toBeVisible();
    expect(screen.getByTestId('held')).toBeVisible();
    expect(screen.getByTestId('queue')).toBeVisible();
  });
});
