// ui/ThemeAudioButton.tsx
import React from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import styled, { css } from 'styled-components';

import { useThemeAudio } from '../../hooks/audio/useThemeAudio';

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
  pointer-events: none; /* reserve room for a hidden play button */
`;

const MuteBtn = styled.button.attrs({
  type: 'button'
})`
  ${IconBase};
  background: #28203e;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #f0f0f0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3a2c5b;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    background: #28203e;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 107, 198, 0.3);
    border-color: rgba(16, 16, 31, 0.3);
  }
`;

interface ThemeAudioButtonProps {
  /** When true, the mute/unmute button is disabled */
  disabled?: boolean;
}

/**
 * Renders a mute/unmute toggle button for the Tetris theme music.
 *
 * @remarks
 * - Uses the `useThemeAudio` hook to read `isMuted` state and `toggleMute` action.
 * - Displays a placeholder spacer to reserve layout space for a potential play button.
 * - When `disabled` is true, the button is non-interactive and styled accordingly.
 *
 * @param props.disabled - If true, disables the button to prevent toggling.
 *
 * @example
 * ```tsx
 * <ThemeAudioButton disabled={false} />
 * ```
 */
export const ThemeAudioButton: React.FC<ThemeAudioButtonProps> = ({
  disabled = false
}) => {
  const { isMuted, toggleMute } = useThemeAudio();

  return (
    <Wrapper>
      <Spacer />
      <MuteBtn
        data-testid='audio-toggle'
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

export default ThemeAudioButton;
