// src/hooks/useThemeAudio.ts
import { useEffect, useState, useCallback } from 'react';

export type ThemeAudioControls = {
  isPlaying: boolean;
  isMuted: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
};

/* ─────────── shared singleton audio ─────────── */
const audio = new Audio('/audio/tetris.mp3');
audio.loop = true;
audio.volume = 0.8;

let playing = false;
let muted = false;

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((fn) => fn());
/* ────────────────────────────────────────────── */

export function useThemeAudio(): ThemeAudioControls {
  /* local dummy state just to force re-render on every change */
  const [, bump] = useState(0);

  useEffect(() => {
    const trigger = () => bump((v) => v + 1);
    listeners.add(trigger);
    return () => {
      listeners.delete(trigger);
    };
  }, []);

  /* controls */
  const togglePlay = useCallback(() => {
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    playing = !playing;
    notify();
  }, []);

  const toggleMute = useCallback(() => {
    audio.muted = !audio.muted;
    muted = audio.muted;
    notify();
  }, []);

  return { isPlaying: playing, isMuted: muted, togglePlay, toggleMute };
}
