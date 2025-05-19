import { Meta, StoryFn } from '@storybook/react';

import Alert from '../ui/Alert';

export default {
  title: 'UI/Alert',
  component: Alert,
  argTypes: { children: { control: 'text' } }
} as Meta;

const Template: StoryFn = (args) => <Alert {...args}>This is an alert</Alert>;

export const Default = Template.bind({});
Default.args = {};
