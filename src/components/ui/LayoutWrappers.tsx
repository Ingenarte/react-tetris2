// ui/LayoutWrappers.tsx
import styled from 'styled-components';

/**
 * The outermost container for the Tetris app.
 *
 * - Sets up a full-viewport dark background.
 * - Uses flex layout to stack header / game board / footer.
 */
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

/**
 * A flex container that centers its children vertically and horizontally.
 *
 * - Useful for centering the game board in the middle of the screen.
 */
export const VerticallyCenterChildren = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

/**
 * A responsive wrapper to constrain the main content width.
 *
 * - Centers content horizontally with auto margins.
 * - Adds horizontal padding for small viewports.
 */
export const Container = styled.div`
  margin: 24px auto 0;
  width: 100%;
  padding: 0 1rem;
`;

/**
 * A horizontal flex container for the main game layout.
 *
 * - Aligns the gameboard and side panels.
 * - Adds wrapping and gap for narrow viewports.
 * - Shifts slightly left to compensate for sidebar padding.
 */
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  transform: translateX(-5%);
`;

/**
 * A simple column flex container.
 *
 * - Vertically stacks children and centers them.
 * - Used for side panels and wrappers around controls.
 */
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * A sidebar wrapper for right-hand panels.
 *
 * - Constrains max width.
 * - Flex-grows to fill available space.
 */
export const Sidebar = styled(Column)`
  flex: 1;
  max-width: 200px;
`;

/**
 * A wrapper around the Tetris board itself.
 *
 * - Prevents shrinking.
 * - Limits width with a clamp between 180px and 240px.
 */
export const GameboardWrapper = styled(Column)`
  flex-shrink: 0;
  width: clamp(180px, 50vw, 240px);
`;

/**
 * A wrapper for the left sidebar, containing ScorePanel and HOLD panel.
 *
 * - Places panels side-by-side on wide viewports.
 * - Switches to vertical stacking on narrow screens.
 */
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

/**
 * A small panel with a centered heading (e.g. “HOLD” or “NEXT”).
 *
 * - Stacks its children vertically with a small gap.
 * - Styles any `h1` inside for consistent typography.
 */
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

/**
 * A fixed positioned container for the controls legend.
 *
 * - Displays at bottom-right on desktop.
 * - Hides entirely on small viewports.
 */
export const ControlsLegend = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;
