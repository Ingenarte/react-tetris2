import { Meta, StoryFn } from '@storybook/react';
import Button from '../ui/Button';


export default {
  title: 'UI/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Button>> = (args) => (
  <Button {...args}>Click me</Button>
);

export const Default = Template.bind({});
Default.args = {};