import React from 'react';
import styled from 'styled-components';
import Tetris from '../src/components/Tetris';
import Controller from './Controller';

const Container = styled.div`
  margin: 24px auto 0;
  // width: 100%;
  // max-width: 476px;
  padding: 0 1rem;
`;

const Score = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat';
  font-size: clamp(16px, 2vw, 24px);
  color: #888;
  margin-bottom: 1rem;
`;

const LeftHalf = styled.div`
  text-align: left;
`;

const RightHalf = styled.div`
  text-align: right;
`;

const LabelText = styled.p`
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  color: #aaa;
  font-family: 'Montserrat', sans-serif;
`;

const Digit = styled.span`
  font-family: 'Montserrat';
  padding: 1px;
  margin: 1px;
  font-size: clamp(20px, 5vw, 36px);
`;

const Column = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const LeftColumn = styled(Column)`
  width: clamp(60px, 20vw, 88px);
`;

const RightColumn = styled(LeftColumn)`
  padding-left: 15px;
`;

const MiddleColumn = styled(Column)`
  width: clamp(180px, 50vw, 240px);
`;

const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(27, 19, 44, 0.95); /* tono violeta oscuro traslúcido */
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Alert = styled.h2`
  color: #f0f0f0;
  margin: 0;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
`;

const Button = styled.button`
  margin-top: 24px;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-size: clamp(24px, 2vw, 36px);
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
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
    transform: scale(0.9);
  }
`;

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 8px;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const GamePanel = (): JSX.Element => (
  <Container>
    <Tetris>
      {({
        Gameboard,
        HeldPiece,
        PieceQueue,
        points,
        linesCleared,
        state,
        controller
      }) => (
        <div>
          <div style={{ opacity: state === 'PLAYING' ? 1 : 0.5 }}>
            <Score>
              <LeftHalf>
                <LabelText>points</LabelText>
                <Digits>{points}</Digits>
              </LeftHalf>
              <RightHalf>
                <LabelText>lines</LabelText>
                <Digits>{linesCleared}</Digits>
              </RightHalf>
            </Score>
            <ColumnsWrapper>
              <LeftColumn>
                <HeldPiece />
              </LeftColumn>

              <MiddleColumn>
                <Gameboard />
              </MiddleColumn>

              <RightColumn>
                <PieceQueue />
              </RightColumn>
            </ColumnsWrapper>

            {/* <Controller controller={controller} /> */}
          </div>
          {state === 'PAUSED' && (
            <Popup>
              <Alert>Paused</Alert>
              <Button onClick={controller.resume}>Resume</Button>
            </Popup>
          )}

          {state === 'LOST' && (
            <Popup>
              <Alert>Game Over</Alert>
              <Button onClick={controller.restart}>Start</Button>
            </Popup>
          )}
        </div>
      )}
    </Tetris>
  </Container>
);

type DigitsProps = {
  children: number;
  count?: number;
};
const Digits = ({ children, count = 4 }: DigitsProps): JSX.Element => {
  let str = children.toString();

  while (str.length < count) {
    str = `${0}${str}`;
  }

  return (
    <>
      {str.split('').map((digit, index) => (
        <Digit key={index}>{digit}</Digit>
      ))}
    </>
  );
};

export default GamePanel;
