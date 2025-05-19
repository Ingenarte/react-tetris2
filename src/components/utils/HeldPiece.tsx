// HeldPiece.tsx
import React from 'react';

import { Context } from '../../context';
import PieceView from './PieceView';
import type { ActivePiece } from '../../models/Piece';

export default function HeldPiece(): JSX.Element {
  const { heldPiece } = React.useContext(Context);

  const activePiece: ActivePiece | undefined = heldPiece?.piece
    ? { piece: heldPiece.piece, rotation: 0 }
    : undefined;

  return <PieceView piece={activePiece} />;
}
