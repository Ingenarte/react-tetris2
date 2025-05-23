import { default as React } from 'react';
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
export declare const ThemeAudioButton: React.FC<ThemeAudioButtonProps>;
export default ThemeAudioButton;
//# sourceMappingURL=ThemeAudioButton.d.ts.map