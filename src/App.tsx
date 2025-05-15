import React from 'react';
import styled from 'styled-components';
import GamePanel from '../app/GamePanel';

const Container = styled.div`
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-weight: 300;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(18, 13, 31, 0.95);

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   height: 2px;
  //   width: 100%;
  //   background: red;
  //   pointer-events: none;
  // }
`;

const VerticallyCenterChildren = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const App = (): JSX.Element => (
  <Container>
    <VerticallyCenterChildren>
      <GamePanel />
    </VerticallyCenterChildren>
  </Container>
);

export default App;
