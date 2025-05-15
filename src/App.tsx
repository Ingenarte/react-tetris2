import React from 'react';
import styled from 'styled-components';
import TypedShell from '../app/TypedShell';
import GamePanel from '../app/GamePanel';

const Container = styled.div`
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 300;
  width: 100%;
  position: relative;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const VerticallyCenterChildren = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const App = (): JSX.Element => (
  <Container>
    <VerticallyCenterChildren>
      <GamePanel />
    </VerticallyCenterChildren>
  </Container>
);

export default App;
