import type { Meta, StoryFn } from '@storybook/react';

import Divider from '../ui/Divider';

export default {
  title: 'UI/Divider',
  component: Divider,
  parameters: { layout: 'centered' }
} as Meta<typeof Divider>;

const Template: StoryFn<typeof Divider> = () => <Divider />;

export const Default = Template.bind({});
Default.args = {};
