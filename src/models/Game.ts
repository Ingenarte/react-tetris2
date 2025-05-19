// src/models/Game.ts

import {
  Matrix,
  PositionedPiece,
  Piece,
  buildMatrix,
  addPieceToBoard,
  isEmptyPosition,
  flipClockwise,
  flipCounterclockwise,
  moveDown,
  moveLeft,
  moveRight,
  setPiece,
  hardDrop,
  clearFullLines
} from './Matrix';
import Constants from '../constants';
import {
  createPieceQueue,
  getNext,
  type PieceQueue as PieceQueueType
} from '../modules/piece-queue';

export type State = 'PAUSED' | 'PLAYING' | 'LOST';

type HeldPiece = { available: boolean; piece: Piece };

function every<T>(list: T[]): boolean {
  return list.every(Boolean);
}

export type Game = {
  state: State;
  matrix: Matrix;
  piece: PositionedPiece;
  heldPiece: HeldPiece | undefined;
  queue: PieceQueueType;
  points: number;
  lines: number;
  justCleared?: number[];
  pendingClear?: boolean;
};

export const getLevel = (game: Game): number => Math.floor(game.lines / 10) + 1;

export type Action =
  | 'PAUSE'
  | 'RESUME'
  | 'TOGGLE_PAUSE'
  | 'TICK'
  | 'HOLD'
  | 'HARD_DROP'
  | 'MOVE_DOWN'
  | 'MOVE_LEFT'
  | 'MOVE_RIGHT'
  | 'FLIP_CLOCKWISE'
  | 'FLIP_COUNTERCLOCKWISE'
  | 'RESTART';

export const update = (game: Game, action: Action): Game => {
  switch (action) {
    case 'RESTART':
      return init();

    case 'PAUSE':
      return game.state === 'PLAYING' ? { ...game, state: 'PAUSED' } : game;

    case 'RESUME':
      return game.state === 'PAUSED' ? { ...game, state: 'PLAYING' } : game;

    case 'TOGGLE_PAUSE':
      if (game.state === 'PLAYING') return { ...game, state: 'PAUSED' };
      if (game.state === 'PAUSED') return { ...game, state: 'PLAYING' };
      return game;

    case 'HARD_DROP':
      if (game.state !== 'PLAYING') return game;
      const dropped = hardDrop(game.matrix, game.piece);
      return lockInPiece({ ...game, piece: dropped });

    case 'MOVE_DOWN':
      if (game.state !== 'PLAYING') return game;

      if (game.pendingClear) {
        const [newMatrix, , linesCleared] = clearFullLines(game.matrix);
        return commitPiece(
          { ...game, matrix: newMatrix },
          newMatrix,
          linesCleared
        );
      }

      const movedDown = applyMove(moveDown, game);
      if (movedDown.piece === game.piece) {
        return lockInPiece(movedDown);
      }
      return movedDown;

    case 'TICK':
      if (game.state !== 'PLAYING' && !game.pendingClear) return game;

      if (game.pendingClear) {
        const [newMatrix, , linesCleared] = clearFullLines(game.matrix);
        return commitPiece(
          { ...game, matrix: newMatrix },
          newMatrix,
          linesCleared
        );
      }

      const ticked = applyMove(moveDown, game);
      if (ticked.piece === game.piece) {
        return lockInPiece(ticked);
      }
      return ticked;

    case 'MOVE_LEFT':
      return applyMove(moveLeft, game);

    case 'MOVE_RIGHT':
      return applyMove(moveRight, game);

    case 'FLIP_CLOCKWISE':
      return applyMove(flipClockwise, game);

    case 'FLIP_COUNTERCLOCKWISE':
      return applyMove(flipCounterclockwise, game);

    case 'HOLD':
      if (game.state !== 'PLAYING') return game;
      if (game.heldPiece && !game.heldPiece.available) return game;

      // can we swap in the held piece?
      if (
        game.heldPiece &&
        !isEmptyPosition(game.matrix, {
          ...game.piece,
          piece: game.heldPiece.piece
        })
      ) {
        return game;
      }

      // pull next from queue
      const nextHold = getNext(game.queue);
      const newPieceForHold = game.heldPiece?.piece ?? nextHold.piece;

      return {
        ...game,
        heldPiece: { piece: game.piece.piece, available: false },
        piece: initializePiece(newPieceForHold),
        queue: newPieceForHold === nextHold.piece ? nextHold.queue : game.queue
      };

    default:
      throw new Error(`Unhandled action: ${action}`);
  }
};

export function getClearedLineIndexes(matrix: Matrix): number[] {
  return matrix.reduce<number[]>((acc, row, y) => {
    if (every(row)) acc.push(y);
    return acc;
  }, []);
}

function commitPiece(game: Game, matrix: Matrix, linesCleared: number): Game {
  const nextCommit = getNext(game.queue);
  const piece = initializePiece(nextCommit.piece);

  return {
    ...game,
    state: isEmptyPosition(matrix, piece) ? game.state : 'LOST',
    matrix,
    piece,
    heldPiece: game.heldPiece
      ? { ...game.heldPiece, available: true }
      : undefined,
    queue: nextCommit.queue,
    lines: game.lines + linesCleared,
    points: game.points + addScore(linesCleared),
    justCleared: [],
    pendingClear: false
  };
}

const lockInPiece = (game: Game): Game => {
  const withPiecePlaced = setPiece(game.matrix, game.piece);
  const justCleared = getClearedLineIndexes(withPiecePlaced);

  if (justCleared.length > 0) {
    return {
      ...game,
      matrix: withPiecePlaced,
      justCleared,
      pendingClear: true
    };
  }

  return commitPiece(game, withPiecePlaced, 0);
};

const pointsPerLine = 100;
const addScore = (lines: number) =>
  lines === 4 ? pointsPerLine * 10 : lines * pointsPerLine;

const initialPosition = {
  x: Constants.GAME_WIDTH / 2 - Constants.BLOCK_WIDTH / 2,
  y: 0
};

const initializePiece = (piece: Piece): PositionedPiece => ({
  position: initialPosition,
  piece,
  rotation: 0
});

const applyMove = (
  moveFn: (
    matrix: Matrix,
    piece: PositionedPiece
  ) => PositionedPiece | undefined,
  game: Game
): Game => {
  if (game.state !== 'PLAYING') return game;
  const moved = moveFn(game.matrix, game.piece);
  return moved ? { ...game, piece: moved } : game;
};

export const init = (): Game => {
  // start with 5-bag
  const startQueue = createPieceQueue(5);
  const first = getNext(startQueue);

  return {
    state: 'PAUSED',
    points: 0,
    lines: 0,
    matrix: buildMatrix(),
    piece: initializePiece(first.piece),
    heldPiece: undefined,
    queue: first.queue
  };
};

// for UI: overlay the current + ghost piece
export function viewMatrix(game: Game): Matrix {
  let board = game.matrix;
  board = addPieceToBoard(board, hardDrop(game.matrix, game.piece), true);
  return addPieceToBoard(board, game.piece);
}
