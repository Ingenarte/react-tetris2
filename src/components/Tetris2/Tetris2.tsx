import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { useThemeAudio } from '../../hooks/audio/useThemeAudio';
import { ThemeAudioButton } from '../../hooks/ThemeAudioButton';
import Tetris from '../game/TetrisEngine';
import {
  Container,
  ControlsLegend,
  FlexWrapper,
  GameboardWrapper,
  LabeledPanel,
  OuterContainer,
  Sidebar,
  SidebarLeft,
  VerticallyCenterChildren
} from './ui/LayoutWrappers';
import ScorePanel from './ui/ScorePanel';
import { Popup, PopupGameOver, PopupStart } from './ui/Popup';
import Alert from './ui/Alert';
import Button from './ui/Button';
import ControlsPanel from './ui/ControlsPanel';

export type Tetris2Handle = {
  start: () => void;
};

interface Props {
  credits?: number;
  manageCredits?: boolean;
  showModals?: boolean;
  soundEnabled?: boolean;
  showControlsLegend?: boolean;
  onGameOver?: () => void;
  onScoreChange?: (score: number) => void;
  onLevelChange?: (level: number) => void;
}

export const Tetris2 = forwardRef<Tetris2Handle, Props>(
  (
    {
      credits,
      manageCredits,
      showModals = true,
      soundEnabled = true,
      showControlsLegend = true,
      onGameOver,
      onScoreChange,
      onLevelChange
    },
    ref
  ) => {
    const { isMuted, isPlaying, toggleMute, togglePlay } = useThemeAudio();
    const resumeRef = useRef<() => void>();
    const hasStartedRef = useRef(false);

    useImperativeHandle(ref, () => ({ start: () => resumeRef.current?.() }));

    return (
      <OuterContainer>
        <VerticallyCenterChildren>
          <Container>
            {soundEnabled && <ThemeAudioButton />}
            <Tetris credits={credits} manageCredits={manageCredits}>
              {({
                Gameboard,
                HeldPiece,
                PieceQueue,
                controller,
                points,
                linesCleared,
                state,
                level,
                credits
              }) => {
                const handleStart = () => {
                  if (!isPlaying && soundEnabled) togglePlay();
                  if (isMuted && soundEnabled) toggleMute();
                  controller.resume();
                  hasStartedRef.current = true;
                };
                React.useEffect(() => {
                  onScoreChange?.(points);
                }, [points]);
                React.useEffect(() => {
                  onLevelChange?.(level);
                }, [level]);
                React.useEffect(() => {
                  if (state === 'LOST') onGameOver?.();
                }, [state]);

                resumeRef.current = handleStart;

                React.useEffect(() => {
                  const handleKeyDown = (e: KeyboardEvent) => {
                    if (e.key === 'Enter') {
                      if (state === 'PAUSED' && hasStartedRef.current) {
                        controller.resume();
                      } else if (state === 'LOST') {
                        controller.restart();
                        hasStartedRef.current = false;
                        if (!isPlaying && soundEnabled) togglePlay();
                        if (isMuted && soundEnabled) toggleMute();
                      } else if (!hasStartedRef.current && state === 'PAUSED') {
                        handleStart();
                      }
                    }

                    if (e.key.toLowerCase() === 'm') {
                      toggleMute();
                    }
                  };

                  window.addEventListener('keydown', handleKeyDown);
                  return () =>
                    window.removeEventListener('keydown', handleKeyDown);
                }, [state, controller, soundEnabled, isMuted, isPlaying]);

                return (
                  <>
                    <FlexWrapper
                      style={{ opacity: state === 'PLAYING' ? 1 : 0.5 }}
                    >
                      <SidebarLeft>
                        <ScorePanel
                          credits={credits}
                          points={points}
                          linesCleared={linesCleared}
                          level={level}
                        />
                        <LabeledPanel>
                          <h1>HOLD</h1>
                          <HeldPiece />
                        </LabeledPanel>
                      </SidebarLeft>
                      <GameboardWrapper>
                        <Gameboard />
                      </GameboardWrapper>
                      <Sidebar>
                        <LabeledPanel>
                          <h1>NEXT</h1>
                          <PieceQueue />
                        </LabeledPanel>
                      </Sidebar>
                    </FlexWrapper>
                    {showControlsLegend && (
                      <ControlsLegend>
                        <ControlsPanel />
                      </ControlsLegend>
                    )}

                    {showModals &&
                      state === 'PAUSED' &&
                      (hasStartedRef.current ? (
                        <Popup>
                          <Alert>Paused</Alert>
                          <Button onClick={controller.resume}>Resume</Button>
                        </Popup>
                      ) : (
                        <PopupStart>
                          <Alert>Start Game</Alert>
                          <Button onClick={handleStart}>Play</Button>
                        </PopupStart>
                      ))}

                    {showModals && state === 'LOST' && (
                      <PopupGameOver>
                        <Alert>Game Over</Alert>
                        <div
                          style={{
                            marginTop: '1rem',
                            textAlign: 'left',
                            fontSize: 'clamp(14px, 2vw, 26px)',
                            color: '#ddd'
                          }}
                        >
                          <p>
                            <strong>Level:</strong> {level}
                          </p>
                          <p>
                            <strong>Lines:</strong> {linesCleared}
                          </p>
                          <p>
                            <strong>Points:</strong> {points}
                          </p>
                        </div>

                        <Button
                          onClick={() => {
                            controller.restart();
                            hasStartedRef.current = false;
                            if (!isPlaying && soundEnabled) togglePlay();
                            if (isMuted && soundEnabled) toggleMute();
                          }}
                        >
                          Restart
                        </Button>
                      </PopupGameOver>
                    )}
                  </>
                );
              }}
            </Tetris>
          </Container>
        </VerticallyCenterChildren>
      </OuterContainer>
    );
  }
);

Tetris2.displayName = 'Tetris2';
