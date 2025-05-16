// ui/Digits.tsx
import React from 'react';
import styled from 'styled-components';

const Digit = styled.span`
  font-family: 'Courier New', monospace;
  font-size: clamp(20px, 5vw, 36px);
  min-width: 4ch;
  text-align: right;
  display: inline-block;
`;

const Digits: React.FC<{ children: number; count?: number }> = ({
  children,
  count = 4
}) => {
  let txt = children.toString();
  while (txt.length < count) txt = `0${txt}`;
  return <Digit>{txt}</Digit>;
};

export default Digits;
