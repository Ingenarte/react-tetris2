// ui/LayoutWrappers.tsx
import styled from 'styled-components';

export const OuterContainer = styled.div`
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-weight: 300;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(18, 13, 31, 0.95);
`;

export const VerticallyCenterChildren = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const Container = styled.div`
  margin: 24px auto 0;
  width: 100%;
  padding: 0 1rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  transform: translateX(-5%);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Sidebar = styled(Column)`
  flex: 1;
  max-width: 200px;
`;

export const GameboardWrapper = styled(Column)`
  flex-shrink: 0;
  width: clamp(180px, 50vw, 240px);
`;

export const SidebarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 15%;
  flex: 1;
  max-width: 280px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const LabeledPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(14px, 2vw, 20px);
    font-weight: 600;
    color: rgba(102, 107, 198, 0.62);
    margin: 0;
  }
`;

export const ControlsLegend = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;
