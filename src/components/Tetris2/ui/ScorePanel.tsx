// ui/ScorePanel.tsx
import React from 'react';
import styled from 'styled-components';
import Digits from './Digits';
import Divider from './Divider';

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

const StatRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem;
`;

const ScorePanel = ({
  credits,
  points,
  linesCleared,
  level
}: {
  credits: number;
  points: number;
  linesCleared: number;
  level: number;
}): React.JSX.Element => (
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
);

export default ScorePanel;
