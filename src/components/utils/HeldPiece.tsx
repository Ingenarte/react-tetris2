import React from 'react';

import { Context } from '../../context';
import type { ActivePiece } from '../../models/Piece';
import PieceView from './PieceView';

/**
 * Shows the held piece (or empty 4×4) above the gameboard.
 */
export default function HeldPiece(): JSX.Element {
  const { heldPiece } = React.useContext(Context);

  const activePiece: ActivePiece | undefined = heldPiece?.piece
    ? { piece: heldPiece.piece, rotation: 0 }
    : undefined;

  return <PieceView piece={activePiece} />;
}
