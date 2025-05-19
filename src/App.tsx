import React, { useRef, useState, useEffect } from 'react';

import { Tetris2, Tetris2Handle } from './components/tetris2/Tetris2';
import { PopupStart, PopupGameOver } from './components/tetris2/ui/Popup';
import Button from './components/tetris2/ui/Button';

const App = (): React.JSX.Element => {
  const tetrisRef = useRef<Tetris2Handle>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const restartButtonRef = useRef<HTMLButtonElement>(null);

  const [hasStarted, setHasStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [level, setLevel] = useState(0);
  const [points, setPoints] = useState(0);
  const [linesCleared, setLinesCleared] = useState(0);

  const handleStart = () => {
    tetrisRef.current?.start();
    setHasStarted(true);
    setIsGameOver(false);
  };

  const handleGameOver = () => {
    setIsGameOver(true);
    setHasStarted(false);
    // console.log('Game Over');
  };

  const handleRestart = () => {
    tetrisRef.current?.restart();
    setHasStarted(false);
    setIsGameOver(false);
    setPoints(0);
    setLevel(0);
    setLinesCleared(0);
  };

  // ⬇️ Set focus when popups appear
  useEffect(() => {
    if (!hasStarted && !isGameOver) {
      playButtonRef.current?.focus();
    }
    if (isGameOver) {
      restartButtonRef.current?.focus();
    }
  }, [hasStarted, isGameOver]);

  return (
    <>
      <Tetris2
        ref={tetrisRef}
        credits={5555}
        manageCredits={true}
        showModals={false}
        soundEnabled={true}
        showControlsLegend={true}
        onGameOver={handleGameOver}
        onScoreChange={(score) => setPoints(score)}
        onLevelChange={(lvl) => setLevel(lvl)}
      />

      {!hasStarted && !isGameOver && (
        <PopupStart>
          <h2>Start Game</h2>
          <Button ref={playButtonRef} onClick={handleStart}>
            Play
          </Button>
        </PopupStart>
      )}

      {isGameOver && (
        <PopupGameOver>
          <h2>Game Over</h2>
          <table
            style={{
              margin: '1rem auto',
              borderCollapse: 'collapse',
              fontSize: 'clamp(14px, 2vw, 24px)',
              color: '#ddd',
              width: '100%',
              maxWidth: '300px'
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    padding: '0.5rem',
                    fontWeight: '600',
                    color: '#aaa'
                  }}
                >
                  Level
                </td>
                <td style={{ textAlign: 'right', padding: '0.5rem' }}>
                  {level}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    padding: '0.5rem',
                    fontWeight: '600',
                    color: '#aaa'
                  }}
                >
                  Lines
                </td>
                <td style={{ textAlign: 'right', padding: '0.5rem' }}>
                  {linesCleared}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    padding: '0.5rem',
                    fontWeight: '600',
                    color: '#aaa'
                  }}
                >
                  Points
                </td>
                <td style={{ textAlign: 'right', padding: '0.5rem' }}>
                  {points}
                </td>
              </tr>
            </tbody>
          </table>
          <Button ref={restartButtonRef} onClick={handleRestart}>
            Restart
          </Button>
        </PopupGameOver>
      )}
    </>
  );
};

export default App;
