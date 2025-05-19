// src/components/utils/GameBlock.tsx
import React from 'react';
import styled from 'styled-components';

export type GameBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  /** draw this as a translucent “ghost” piece */
  ghost?: boolean;
  /** fire the cleared-line flash animation */
  clearing?: boolean;
  /** render at preview size (for the small queue) */
  preview?: boolean;
};

const Div = styled.div<GameBlockProps>`
  /* base block */
  width: var(--block-size);
  height: var(--block-size);
  box-sizing: border-box;
  border: 1px solid #333;
  border-radius: 4px;

  /* if preview (small queue), shrink it */
  ${({ preview }) =>
    preview &&
    `
      width: var(--preview-size);
      height: var(--preview-size);
    `}

  /* ghost styling */
  ${({ ghost }) =>
    ghost &&
    `
      background-color: rgba(255,255,255,0.1);
      border: 1px dashed rgba(255,255,255,0.15);
      border-radius: 4px;
    `}

  /* cleared-line animation */
  ${({ clearing }) =>
    clearing &&
    `
      animation: flashOut 200ms ease-in-out forwards;
    `}
`;

/**
 * A single square on the gameboard.
 *
 * @param ghost    render this as the “ghost” overlay
 * @param clearing apply the line-clear flash animation
 * @param preview  shrink to preview size (used in the queue)
 * @param className any extra CSS class (e.g. "piece-i") to color a block
 */
export function GameBlock({
  ghost,
  clearing,
  preview,
  className,
  ...rest
}: GameBlockProps) {
  return (
    <Div
      ghost={ghost}
      clearing={clearing}
      preview={preview}
      className={className}
      {...rest}
    />
  );
}
