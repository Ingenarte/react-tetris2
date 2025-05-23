import { default as React } from 'react';
export type GameBlockProps = React.HTMLAttributes<HTMLDivElement> & {
    /** draw this as a translucent “ghost” piece */
    ghost?: boolean;
    /** fire the cleared-line flash animation */
    clearing?: boolean;
    /** render at preview size (for the small queue) */
    preview?: boolean;
};
/**
 * A single square on the gameboard.
 *
 * @param ghost    render this as the “ghost” overlay
 * @param clearing apply the line-clear flash animation
 * @param preview  shrink to preview size (used in the queue)
 * @param className any extra CSS class (e.g. "piece-i") to color a block
 */
export declare function GameBlock({ ghost, clearing, preview, className, ...rest }: GameBlockProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=GameBlock.d.ts.map