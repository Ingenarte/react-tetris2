// src/components/utils/PieceView.tsx
import React from 'react';
import styled from 'styled-components';
import { ActivePiece, getBlocks, getClassName } from '../../models/Piece';

/**
 * A simple 4×4 grid container for piece previews.
 */
const PreviewBoard = styled.div`
  display: grid;
  gap: 0;
`;

/**
 * Renders a small 4×4 preview of the current or next piece.
 * Falls back to an empty grid if no piece is passed.
 */
interface PieceViewProps {
  /** If provided, renders this piece’s 4×4 shape at its rotation. */
  piece?: ActivePiece;
}

const PieceView: React.FC<PieceViewProps> = ({ piece }) => {
  // 1) Compute the 4×4 block matrix for this piece (or all‐zeros)
  const blocks = React.useMemo(() => {
    const rotation = piece?.rotation ?? 0;
    const shape = piece ? getBlocks(piece.piece)[rotation] : undefined;
    return (
      shape! /* assert non‐null */ ?? [ // fallback 4×4 zeroes
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    );
  }, [piece]);

  // 2) grid dimensions
  const cols = blocks[0]?.length ?? 0;
  const rows = blocks.length;

  // 3) render each cell as a <div className="game-block [piece-?] [piece-preview]">
  return (
    <PreviewBoard
      style={{
        gridTemplateColumns: `repeat(${cols}, var(--preview-size))`,
        gridTemplateRows: `repeat(${rows}, var(--preview-size))`
      }}
      className='piece-view'
    >
      {blocks.flatMap((row, y) =>
        row.map((filled, x) => {
          // choose tetromino CSS class if this is a filled cell
          const colorClass =
            filled === 1 && piece ? getClassName(piece.piece) : '';
          // always include `game-block`, include `piece-preview` so CSS reduces opacity
          const className = [
            'game-block',
            colorClass,
            piece ? 'piece-preview' : ''
          ]
            .filter(Boolean)
            .join(' ');

          return <div key={`${y}-${x}`} className={className} />;
        })
      )}
    </PreviewBoard>
  );
};

export default PieceView;
