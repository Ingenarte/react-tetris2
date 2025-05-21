/**
 * The outermost container for the Tetris app.
 *
 * - Sets up a full-viewport dark background.
 * - Uses flex layout to stack header / game board / footer.
 */
export declare const OuterContainer: import('styled-components').StyledComponent<"div", any, {}, never>;
/**
 * A flex container that centers its children vertically and horizontally.
 *
 * - Useful for centering the game board in the middle of the screen.
 */
export declare const VerticallyCenterChildren: import('styled-components').StyledComponent<"div", any, {}, never>;
/**
 * A responsive wrapper to constrain the main content width.
 *
 * - Centers content horizontally with auto margins.
 * - Adds horizontal padding for small viewports.
 */
export declare const Container: import('styled-components').StyledComponent<"div", any, {}, never>;
/**
 * A horizontal flex container for the main game layout.
 *
 * - Aligns the gameboard and side panels.
 * - Adds wrapping and gap for narrow viewports.
 * - Shifts slightly left to compensate for sidebar padding.
 */
export declare const FlexWrapper: import('styled-components').StyledComponent<"div", any, {}, never>;
/**
 * A simple column flex container.
 *
 * - Vertically stacks children and centers them.
 * - Used for side panels and wrappers around controls.
 */
export declare const Column: import('styled-components').StyledComponent<"div", any, {}, never>;
/**
 * A sidebar wrapper for right-hand panels.
 *
 * - Constrains max width.
 * - Flex-grows to fill available space.
 */
export declare const Sidebar: import('styled-components').StyledComponent<"div", any, {}, never>;
/**
 * A wrapper around the Tetris board itself.
 *
 * - Prevents shrinking.
 * - Limits width with a clamp between 180px and 240px.
 */
export declare const GameboardWrapper: import('styled-components').StyledComponent<"div", any, {}, never>;
/**
 * A wrapper for the left sidebar, containing ScorePanel and HOLD panel.
 *
 * - Places panels side-by-side on wide viewports.
 * - Switches to vertical stacking on narrow screens.
 */
export declare const SidebarLeft: import('styled-components').StyledComponent<"div", any, {}, never>;
/**
 * A small panel with a centered heading (e.g. “HOLD” or “NEXT”).
 *
 * - Stacks its children vertically with a small gap.
 * - Styles any `h1` inside for consistent typography.
 */
export declare const LabeledPanel: import('styled-components').StyledComponent<"div", any, {}, never>;
/**
 * A fixed positioned container for the controls legend.
 *
 * - Displays at bottom-right on desktop.
 * - Hides entirely on small viewports.
 */
export declare const ControlsLegend: import('styled-components').StyledComponent<"div", any, {}, never>;
//# sourceMappingURL=LayoutWrappers.d.ts.map