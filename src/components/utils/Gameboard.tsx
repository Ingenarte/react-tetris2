// src/components/utils/GameboardView.tsx
import { useContext } from 'react';

import styled from 'styled-components';
import { Context } from '../../context';
import { viewMatrix } from '../../models/Game';
import { getClassName } from '../../models/Piece';
import { GameBlock } from './GameBlock';

const Board = styled.div`
  display: grid;
`;

export default function GameboardView(): JSX.Element {
  const game = useContext(Context);
  const matrix = viewMatrix(game);
  const justCleared = game.justCleared ?? [];

  // Compute grid dimensions
  const columns = matrix[0]?.length ?? 0;
  const rows = matrix.length;

  return (
    <Board
      style={{
        gridTemplateColumns: `repeat(${columns}, var(--block-size))`,
        gridTemplateRows: `repeat(${rows}, var(--block-size))`
      }}
    >
      {matrix.flatMap((row, y) =>
        row.map((cell, x) => {
          const isClearing = justCleared.includes(y);

          // Empty cell
          if (cell === null) {
            return <GameBlock key={`${y}-${x}`} clearing={isClearing} />;
          }

          // Ghost preview cell
          if (cell === 'ghost') {
            return (
              <GameBlock
                key={`${y}-${x}`}
                ghost
                clearing={isClearing}
                className='ghost'
              />
            );
          }

          // Real tetromino cell: look up its CSS class (e.g. "piece-i")
          const pieceClass = getClassName(cell);
          return (
            <GameBlock
              key={`${y}-${x}`}
              className={pieceClass}
              clearing={isClearing}
            />
          );
        })
      )}
    </Board>
  );
}
