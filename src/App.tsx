import React, { useRef } from 'react';
import { Tetris2, Tetris2Handle } from './components/game/Tetris2';

const App = (): React.JSX.Element => {
  const tetrisRef = useRef<Tetris2Handle>(null);

  const handleStart = () => {
    tetrisRef.current?.start();
  };

  return (
    <>
      <button onClick={handleStart}>Iniciar juego</button>
      <Tetris2
        ref={tetrisRef}
        credits={5555}
        manageCredits={false}
        showModals={false}
        soundEnabled={true}
        onGameOver={() => {
          console.log('Game Over');
        }}
        onScoreChange={(score) => {
          console.log('Score changed:', score);
        }}
        onLevelChange={(level) => {
          console.log('Level changed:', level);
        }}
      />
    </>
  );
};

export default App;
