import type { Meta, StoryFn } from '@storybook/react';
import {
  OuterContainer,
  VerticallyCenterChildren,
  Container,
  FlexWrapper,
  Column,
  Sidebar,
  GameboardWrapper,
  SidebarLeft,
  LabeledPanel,
  ControlsLegend
} from '../ui/LayoutWrappers';

export default {
  title: 'Layout/Wrappers',
  parameters: { layout: 'fullscreen' },
} as Meta;

export const OuterContainerStory: StoryFn = () => (
  <OuterContainer>
    <p style={{ color: '#fff' }}>OuterContainer</p>
  </OuterContainer>
);

export const VerticallyCenterChildrenStory: StoryFn = () => (
  <OuterContainer style={{ minHeight: '200px' }}>
    <VerticallyCenterChildren>
      <p style={{ color: '#fff' }}>Centered Content</p>
    </VerticallyCenterChildren>
  </OuterContainer>
);

export const ContainerStory: StoryFn = () => (
  <Container>
    <p style={{ color: '#fff' }}>Container</p>
  </Container>
);

export const FlexWrapperStory: StoryFn = () => (
  <FlexWrapper>
    <div style={{ width: 50, height: 50, background: '#666' }} />
    <div style={{ width: 50, height: 50, background: '#888' }} />
  </FlexWrapper>
);

export const ColumnStory: StoryFn = () => (
  <Column>
    <p style={{ color: '#fff' }}>Column</p>
    <p style={{ color: '#fff' }}>Next line</p>
  </Column>
);

export const SidebarStory: StoryFn = () => (
  <Sidebar>
    <p style={{ color: '#fff' }}>Sidebar</p>
  </Sidebar>
);

export const GameboardWrapperStory: StoryFn = () => (
  <GameboardWrapper>
    <div style={{ width: 80, height: 80, background: '#444' }} />
  </GameboardWrapper>
);

export const SidebarLeftStory: StoryFn = () => (
  <SidebarLeft>
    <p style={{ color: '#fff' }}>Left</p>
    <p style={{ color: '#fff' }}>Right</p>
  </SidebarLeft>
);

export const LabeledPanelStory: StoryFn = () => (
  <LabeledPanel>
    <h1 style={{ margin: 0 }}>Label</h1>
    <p>Content</p>
  </LabeledPanel>
);

export const ControlsLegendStory: StoryFn = () => (
  <ControlsLegend>
    <p style={{ color: '#fff' }}>Legend</p>
  </ControlsLegend>
);