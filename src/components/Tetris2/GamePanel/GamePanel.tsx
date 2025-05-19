import React from 'react';
import styled from 'styled-components';

import Tetris from '../TetrisEngine';

// ——————————————————————————————————————————————
//  Generic layout containers
// ——————————————————————————————————————————————

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

// ——————————————————————————————————————————————
//  Columns
// ——————————————————————————————————————————————

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

// ——————————————————————————————————————————————
//  Score panel
// ——————————————————————————————————————————————

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

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  margin: 4px 0;
`;

// ─────────────────────────────────────────────────────
//  Digits helper
// ─────────────────────────────────────────────────────
const Digits: React.FC<{ children: number; count?: number }> = ({
  children,
  count = 4
}) => {
  let txt = children.toString();
  while (txt.length < count) txt = `0${txt}`;
  return <Digit>{txt}</Digit>;
};

// ─────────────────────────────────────────────────────
//  Main component
// ─────────────────────────────────────────────────────
const GamePanel: React.FC = () => {
  return (
    <Container>
      {/* Juego */}
      <Tetris>
        {({
          Gameboard,
          HeldPiece,
          PieceQueue,
          points,
          linesCleared,
          state,
          level,
          credits
        }) => (
          <>
            {/* ---------- Layout principal ---------- */}
            <FlexWrapper style={{ opacity: state === 'PLAYING' ? 1 : 0.5 }}>
              {/* Columna izquierda (score + held) */}
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

              {/* Tablero centrado */}
              <GameboardWrapper>
                <Gameboard />
              </GameboardWrapper>

              {/* Cola de piezas */}
              <Sidebar>
                <PieceQueue />
              </Sidebar>
            </FlexWrapper>
            {/*  */}
          </>
        )}
      </Tetris>
    </Container>
  );
};

export default GamePanel;
