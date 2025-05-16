import React from 'react';
import { Context } from '../../context';
import PieceView from './PieceView';

export default function HeldPiece(): JSX.Element {
  const { heldPiece } = React.useContext(Context);
  return <PieceView piece={heldPiece?.piece} />;
}
