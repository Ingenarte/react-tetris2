import { default as React } from 'react';
import { ActivePiece } from '../../models/Piece';
/**
 * Renders a small 4×4 preview of the current or next piece.
 * Falls back to an empty grid if no piece is passed.
 */
interface PieceViewProps {
    /** If provided, renders this piece’s 4×4 shape at its rotation. */
    piece?: ActivePiece;
}
declare const PieceView: React.FC<PieceViewProps>;
export default PieceView;
//# sourceMappingURL=PieceView.d.ts.map