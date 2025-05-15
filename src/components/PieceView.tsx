import React from 'react';
import { getBlocks, getClassName, Piece } from '../models/Piece';
import './styles.css';

type Props = {
  piece?: Piece;
};

const defaultBlock = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
] as const;

const PieceView: React.FC<Props> = ({ piece }): JSX.Element => {
  const rotation = piece?.rotation ?? 0;
  const fromPiece = piece ? getBlocks(piece)[rotation] : undefined;
  const blocks = fromPiece ?? defaultBlock;

  const className = piece ? getClassName(piece) : '';


  return (
    <div
      className="piece-view"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${blocks[0].length}, var(--preview-size))`,
        gridTemplateRows: `repeat(${blocks.length}, var(--preview-size))`,
        gap: '0'
      }}
    >
      {blocks.flatMap((row, i) =>
        row.map((block, j) => {
          const cellClass = `game-block ${
            block && piece ? className : 'block-empty'
          } piece-preview`;
          return <div key={`${i}-${j}`} className={cellClass} />;
        })
      )}
    </div>
  );
};

export default PieceView;
