import { default as React } from 'react';
/**
 * A panel displaying the current game statistics: credits, points, lines, and level.
 *
 * @remarks
 * - Uses a monospace “Digits” component to zero-pad each numeric value.
 * - Inserts dividers between each stat for visual separation.
 * - Font sizes and spacing clamp responsively for different viewport sizes.
 *
 * @param props.credits - The number of remaining credits (lives).
 * @param props.points - The current score points.
 * @param props.linesCleared - Total lines cleared so far.
 * @param props.level - Current game level.
 *
 * @example
 * ```tsx
 * <ScorePanel
 *   credits={2}
 *   points={123}
 *   linesCleared={4}
 *   level={5}
 * />
 * ```
 */
declare const ScorePanel: ({ credits, points, linesCleared, level }: {
    credits: number;
    points: number;
    linesCleared: number;
    level: number;
}) => React.JSX.Element;
export default ScorePanel;
//# sourceMappingURL=ScorePanel.d.ts.map