import { default as React } from 'react';
import { KeyboardMap } from '../../hooks/useKeyboardControls';
import * as Game from '../../models/Game';
export type Controller = {
    pause: () => void;
    resume: () => void;
    hold: () => void;
    hardDrop: () => void;
    moveDown: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    flipClockwise: () => void;
    flipCounterclockwise: () => void;
    restart: () => void;
};
export type RenderFn = (params: {
    HeldPiece: React.ComponentType;
    Gameboard: React.ComponentType;
    PieceQueue: React.ComponentType;
    points: number;
    linesCleared: number;
    level: number;
    state: Game.State;
    controller: Controller;
    credits: number;
}) => React.ReactElement;
type Props = {
    keyboardControls?: KeyboardMap;
    children: RenderFn;
    credits?: number;
    manageCredits?: boolean;
};
/**
 * The main Tetris “engine” + render-prop wrapper.
 *
 * @param props.manageCredits  if `true`, each resume will decrement `credits`
 * @param props.credits        starting credits (default 9999)
 * @param props.keyboardControls  override the key→action map
 * @param props.children       render-prop receiving game state + controller
 */
export default function Tetris(props: Props): JSX.Element;
export {};
//# sourceMappingURL=TetrisEngine.d.ts.map