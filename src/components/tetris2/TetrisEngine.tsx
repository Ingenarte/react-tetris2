import React, { useState, useMemo } from 'react';

import * as Game from '../../models/Game';
import { Context } from '../../context';
import HeldPiece from '../utils/HeldPiece';
import GameboardView from '../utils/Gameboard';
import PieceQueue from '../utils/PieceQueue';
import {
  KeyboardMap,
  useKeyboardControls
} from '../../hooks/useKeyboardControls';
import { useTetrisEngine } from '../../hooks/useTetrisEngine';

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

const defaultKeyboardMap: KeyboardMap = {
  down: 'MOVE_DOWN',
  left: 'MOVE_LEFT',
  right: 'MOVE_RIGHT',
  space: 'HARD_DROP',
  z: 'FLIP_COUNTERCLOCKWISE',
  x: 'FLIP_CLOCKWISE',
  up: 'FLIP_CLOCKWISE',
  p: 'TOGGLE_PAUSE',
  c: 'HOLD',
  shift: 'HOLD'
};

/**
 * The main Tetris “engine” + render-prop wrapper.
 *
 * @param props.manageCredits  if `true`, each resume will decrement `credits`
 * @param props.credits        starting credits (default 9999)
 * @param props.keyboardControls  override the key→action map
 * @param props.children       render-prop receiving game state + controller
 */
export default function Tetris(props: Props): JSX.Element {
  // 1) pull in game / dispatch / current level & gravity ticker
  const { game, dispatch, level } = useTetrisEngine();

  // 2) credits state (only decremented if manageCredits=true)
  const [credits, setCredits] = useState(props.credits ?? 9999);
  const manage = props.manageCredits !== false;

  // 3) wire up keyboard → dispatch
  useKeyboardControls(props.keyboardControls ?? defaultKeyboardMap, dispatch);

  // 4) build a controllers object that satisfies our Controller type
  const controller: Controller = useMemo(
    () => ({
      pause: () => dispatch('PAUSE'),
      resume: () => {
        if (manage) {
          if (credits > 0) {
            setCredits((c) => c - 1);
            dispatch('RESUME');
          }
        } else {
          dispatch('RESUME');
        }
      },
      hold: () => dispatch('HOLD'),
      hardDrop: () => dispatch('HARD_DROP'),
      moveDown: () => dispatch('MOVE_DOWN'),
      moveLeft: () => dispatch('MOVE_LEFT'),
      moveRight: () => dispatch('MOVE_RIGHT'),
      flipClockwise: () => dispatch('FLIP_CLOCKWISE'),
      flipCounterclockwise: () => dispatch('FLIP_COUNTERCLOCKWISE'),
      restart: () => dispatch('RESTART')
    }),
    [dispatch, credits, manage]
  );

  // 5) provide game state via context + render children
  return (
    <Context.Provider value={game}>
      {props.children({
        HeldPiece,
        Gameboard: GameboardView,
        PieceQueue,
        points: game.points,
        linesCleared: game.lines,
        level,
        state: game.state,
        controller,
        credits
      })}
    </Context.Provider>
  );
}
