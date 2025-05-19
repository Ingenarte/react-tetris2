import React from 'react';
import styled from 'styled-components';

import Divider from './Divider';

/**
 * A floating panel listing all keyboard controls and their descriptions.
 *
 * @remarks
 * - Uses a monospace font for key labels and responsive sizing for the panel.
 * - Automatically hides on small viewports via CSS media queries in parent styles.
 *
 * @example
 * ```tsx
 * import ControlsPanel from './ControlsPanel';
 *
 * // Renders a legend of all keybindings for the Tetris game
 * <ControlsPanel />;
 * ```
 *
 * @returns A styled `<div>` containing rows of key → description mappings.
 */

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(14px, 2vw, 18px);
  color: #f0f0f0;
  padding: 1rem;
  background: rgba(40, 32, 62, 0.4);
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  gap: 0.75rem;
  min-width: 220px;
`;

const Label = styled.p`
  margin: 0;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 600;
  text-transform: uppercase;
  color: #aaa;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const Key = styled.span`
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: rgba(201, 205, 209, 0.85);
  min-width: 70px;
  text-align: left;
`;

const Description = styled.span`
  color: #ddd;
  text-align: left;
  flex: 1;
`;

const ControlsPanel = (): React.JSX.Element => (
  <Panel>
    <Label>Controls</Label>
    <Divider />
    <Row>
      <Key>← →</Key>
      <Description>Move left / right</Description>
    </Row>
    <Row>
      <Key>↓</Key>
      <Description>Soft drop</Description>
    </Row>
    <Row>
      <Key>↑</Key>
      <Description>Rotate →</Description>
    </Row>
    <Row>
      <Key>Z</Key>
      <Description>Rotate ←</Description>
    </Row>
    <Row>
      <Key>Space</Key>
      <Description>Hard drop</Description>
    </Row>
    <Row>
      <Key>Shift</Key>
      <Description>Hold piece</Description>
    </Row>
    <Row>
      <Key>P</Key>
      <Description>Pause / Resume</Description>
    </Row>
    <Row>
      <Key>M</Key>
      <Description>Toggle sound</Description>
    </Row>
    <Row>
      <Key>Enter</Key>
      <Description>Start / Restart</Description>
    </Row>
  </Panel>
);

export default ControlsPanel;
