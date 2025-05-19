import React from 'react';

import './styles.css';
import { Context } from '../../context';
import { viewMatrix } from '../../models/Game';
import { getClassName } from '../../models/Piece';

export default function GameboardView(): JSX.Element {
  const game = React.useContext(Context);
  const matrix = viewMatrix(game);
  const justCleared = game.justCleared ?? []; // <-- líneas recientemente eliminadas

  return (
    <div
      className='game-board'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${matrix[0]!.length}, var(--block-size))`, // ! because matrix is fixed-size
        gridTemplateRows: `repeat(${matrix.length}, var(--block-size))`
      }}
    >
      {matrix.flatMap((row, i) =>
        row.map((block, j) => {
          let classString = 'game-block';

          if (!block) {
            classString += ' block-empty';
          } else if (block === 'ghost') {
            classString += ' ghost';
          } else {
            classString += ` ${getClassName(block)}`;
          }

          // 👇 Animación para líneas limpiadas
          if (justCleared.includes(i)) {
            classString += ' cleared-line';
          }

          return <div key={`${i}-${j}`} className={classString} />;
        })
      )}
    </div>
  );
}
