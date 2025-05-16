import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import styled from 'styled-components';
import { useThemeAudio } from '../../hooks/audio/useThemeAudio';
import { ThemeAudioButton } from '../../hooks/ThemeAudioButton';
import Tetris from './TetrisEngine';

const OuterContainer = styled.div`
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-weight: 300;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(18, 13, 31, 0.95);
`;

const VerticallyCenterChildren = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const Container = styled.div`
  margin: 24px auto 0;
  width: 100%;
  padding: 0 1rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = styled(Column)`
  flex: 1;
  max-width: 200px;
`;

const GameboardWrapper = styled(Column)`
  flex-shrink: 0;
  width: clamp(180px, 50vw, 240px);
`;

const StatRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(16px, 2vw, 24px);
  color: #f0f0f0;
  padding: 1rem;
  background: rgba(40, 32, 62, 0.8);
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  gap: 0.75rem;
`;

const Label = styled.p`
  margin: 0;
  padding-top: 2px;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 600;
  text-transform: uppercase;
  color: #aaa;
`;

const Digit = styled.span`
  font-family: 'Courier New', monospace;
  font-size: clamp(20px, 5vw, 36px);
  min-width: 4ch;
  text-align: right;
  display: inline-block;
`;

const SidebarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 15%;
  flex: 1;
  max-width: 280px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(27, 19, 44, 0.95);
  padding: 1rem 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 90%;
`;
const PopupStart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(63, 129, 28, 0.5);
  padding: 1rem 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 90%;
`;

const PopupGameOver = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(176, 32, 32, 0.69);
  padding: 1rem 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 16px rgba(176, 32, 32, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 90%;
`;

const Alert = styled.h2`
  margin: 0;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  color: #f0f0f0;
`;

const Button = styled.button`
  margin-top: 24px;
  padding: 0.5rem 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(18px, 3vw, 24px);
  border-radius: 6px;
  background: #28203e;
  color: #f0f0f0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background: #3a2c5b;
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.96);
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  margin: 4px 0;
`;

const Digits: React.FC<{ children: number; count?: number }> = ({
  children,
  count = 4
}) => {
  let txt = children.toString();
  while (txt.length < count) txt = `0${txt}`;
  return <Digit>{txt}</Digit>;
};

export type Tetris2Handle = {
  start: () => void;
};

interface Props {
  credits?: number;
  manageCredits?: boolean;
  showModals?: boolean;
  soundEnabled?: boolean;
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

                return (
                  <>
                    <FlexWrapper
                      style={{ opacity: state === 'PLAYING' ? 1 : 0.5 }}
                    >
                      <SidebarLeft>
                        <Score>
                          <StatRow>
                            <Label>Credits</Label>
                          </StatRow>
                          <StatRow>
                            <Digits>{credits}</Digits>
                          </StatRow>
                          <Divider />
                          <StatRow>
                            <Label>Points</Label>
                          </StatRow>
                          <StatRow>
                            <Digits>{points}</Digits>
                          </StatRow>
                          <Divider />
                          <StatRow>
                            <Label>Lines</Label>
                          </StatRow>
                          <StatRow>
                            <Digits>{linesCleared}</Digits>
                          </StatRow>
                          <Divider />
                          <StatRow>
                            <Label>Level</Label>
                          </StatRow>
                          <StatRow>
                            <Digits>{level}</Digits>
                          </StatRow>
                        </Score>
                        <HeldPiece />
                      </SidebarLeft>
                      <GameboardWrapper>
                        <Gameboard />
                      </GameboardWrapper>
                      <Sidebar>
                        <PieceQueue />
                      </Sidebar>
                    </FlexWrapper>

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
