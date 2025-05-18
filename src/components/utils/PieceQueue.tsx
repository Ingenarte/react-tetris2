import React from 'react';
import { Context } from '../../context';
import PieceView from './PieceView';
import type { Piece } from '../../models/Piece';

export default function PieceQueue(): JSX.Element {
  const { queue } = React.useContext(Context);

  return (
    <div>
      {queue.queue.map((piece: Piece, i: number) => (
        <PieceView key={i} piece={{ piece, rotation: 0 }} />
      ))}
    </div>
  );
}
