// src/components/stories/ControlsPanel.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import ControlsPanel from '../ui/ControlsPanel';

const meta: Meta<typeof ControlsPanel> = {
  title: 'UI/ControlsPanel',
  component: ControlsPanel,
  parameters: { layout: 'centered' }
};
export default meta;

type Story = StoryObj<typeof ControlsPanel>;

export const Default: Story = {
  // no args needed
};