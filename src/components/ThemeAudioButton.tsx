//  src/components/ThemeAudioButton.tsx
import React from 'react';
import { useThemeAudio } from '../hooks/useThemeAudio';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 12px;
`;

/* fixed-size square so the layout never jumps */
const IconBase = css`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 6px;
  font-size: 18px;
`;

const Spacer = styled.div`
  ${IconBase};
  pointer-events: none; /* reserve room for a hidden play btn */
`;

const MuteBtn = styled.button`
  ${IconBase};
  background: #28203e;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #f0f0f0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3a2c5b;
  }
`;

export const ThemeAudioButton: React.FC = () => {
  const { isMuted, toggleMute } = useThemeAudio();

  return (
    <Wrapper>
      <Spacer /> {/* invisible play/pause placeholder */}
      <MuteBtn onClick={toggleMute} title={isMuted ? 'Un-mute' : 'Mute'}>
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </MuteBtn>
    </Wrapper>
  );
};
