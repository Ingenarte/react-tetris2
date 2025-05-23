/**
 * A primary styled button for actions like “Play”, “Restart”, etc.
 *
 * @remarks
 * - Always rendered as a `<button type="button">` via `attrs`.
 * - Scales responsively between 18px and 24px font size.
 * - Applies hover, active, and focus styles for accessibility.
 *
 * @propchildren
 * The content displayed inside the button (text, icons, or both).
 *
 * @example
 * ```tsx
 * <Button>Play</Button>
 * <Button>
 *   <Icon /> Start
 * </Button>
 * ```
 */
declare const Button: import('styled-components').StyledComponent<"button", any, {
    type: "button";
}, "type">;
export default Button;
//# sourceMappingURL=Button.d.ts.map