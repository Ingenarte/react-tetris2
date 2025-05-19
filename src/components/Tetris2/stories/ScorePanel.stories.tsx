import type { Meta, StoryFn } from '@storybook/react';

import ScorePanel from '../ui/ScorePanel';

export default {
  title: 'UI/ScorePanel',
  component: ScorePanel,
  argTypes: {
    credits: { control: 'number' },
    points: { control: 'number' },
    linesCleared: { control: 'number' },
    level: { control: 'number' }
  }
} as Meta<typeof ScorePanel>;

const Template: StoryFn<typeof ScorePanel> = (args) => <ScorePanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  credits: 2,
  points: 123,
  linesCleared: 4,
  level: 5
};
