import React from 'react';
import { viewMatrix } from '../models/Game';
import { getClassName } from '../models/Piece';
import { Context } from '../context';

export default function GameboardView(): JSX.Element {
  const game = React.useContext(Context);
  const matrix = viewMatrix(game);

  return (
    <div
      className="game-board"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${matrix[0].length}, var(--block-size))`,
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
          return <div key={`${i}-${j}`} className={classString} />;
        })
      )}
    </div>
  );
}
