import type { Meta, StoryFn } from '@storybook/react';

import Digits from '../ui/Digits';

export default {
  title: 'UI/Digits',
  component: Digits,
  argTypes: {
    children: { control: 'number' },
    count: { control: 'number' }
  }
} as Meta<typeof Digits>;

const Template: StoryFn<typeof Digits> = (args) => <Digits {...args} />;

export const FourDigits = Template.bind({});
FourDigits.args = {
  children: 7,
  count: 4
};

export const SixDigits = Template.bind({});
SixDigits.args = {
  children: 123,
  count: 6
};
