import type { Meta, StoryFn } from '@storybook/react';
import { Popup, PopupStart, PopupGameOver } from '../ui/Popup';
import Button from '../ui/Button';

export default {
  title: 'UI/Popup',
  parameters: { layout: 'centered' },
} as Meta;

const Content = () => (
  <div style={{ color: '#fff' }}>
    <p>This is popup content</p>
    <Button>OK</Button>
  </div>
);

export const DefaultPopup: StoryFn = () => <Popup><Content /></Popup>;

export const StartPopup: StoryFn = () => (
  <PopupStart>
    <Content />
  </PopupStart>
);

export const GameOverPopup: StoryFn = () => (
  <PopupGameOver>
    <Content />
  </PopupGameOver>
);