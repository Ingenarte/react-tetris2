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

const MuteBtn = styled.button<{ disabled?: boolean }>`
  ${IconBase};
  background: #28203e;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #f0f0f0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  transition: background 0.2s;

  &:hover {
    background: ${({ disabled }) => (disabled ? '#28203e' : '#3a2c5b')};
  }
`;

interface Props {
  disabled?: boolean;
}

export const ThemeAudioButton: React.FC<Props> = ({ disabled }) => {
  const { isMuted, toggleMute } = useThemeAudio();

  return (
    <Wrapper>
      <Spacer />
      <MuteBtn
        onClick={() => {
          if (!disabled) toggleMute();
        }}
        disabled={disabled}
        title={isMuted ? 'Un-mute' : 'Mute'}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </MuteBtn>
    </Wrapper>
  );
};
