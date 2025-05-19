// src/components/ui/ThemeAudioButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeAudioButton } from '../ui/ThemeAudioButton';

const meta: Meta<typeof ThemeAudioButton> = {
  title: 'UI/ThemeAudioButton',
  component: ThemeAudioButton,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof ThemeAudioButton>;

/**
 * A simple “unmuted” state.  Note: this will call your real useThemeAudio(),
 * so if you need to prevent actual audio from playing, you’ll still need to
 * mock out that hook (via Vite alias or module mock).
 */
export const Default: Story = {
  args: {
    disabled: false
  }
};

/**
 * Shows the button in its disabled appearance.
 */
export const Disabled: Story = {
  args: {
    disabled: true
  }
};
