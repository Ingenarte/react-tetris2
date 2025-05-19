import React from 'react';
import { Context } from '../../context';
import type { ActivePiece } from '../../models/Piece';
import PieceView from './PieceView';

/**
 * Shows the “NEXT” queue as a vertical list of 4×4 previews.
 */
export default function PieceQueue(): JSX.Element {
  const { queue } = React.useContext(Context);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // ← stack vertically
        gap: '0.5rem' // adjust to taste
      }}
    >
      {queue.queue.map((pieceType, i) => {
        const preview: ActivePiece = { piece: pieceType, rotation: 0 };
        return <PieceView key={i} piece={preview} />;
      })}
    </div>
  );
}
