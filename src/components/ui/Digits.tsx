// ui/Digits.tsx
import React from 'react';
import styled from 'styled-components';

/**
 * Renders a numeric value padded with leading zeros to a fixed width.
 *
 * @remarks
 * - Uses a monospace font so digits line up vertically.
 * - Defaults to 4 digits, but can be configured via the `count` prop.
 *
 * @param children
 *   The numeric value to display.
 * @param count
 *   The total number of digits to render (pads with leading zeros).
 *   @default 4
 *
 * @example
 * ```tsx
 * <Digits>5</Digits>           // “0005”
 * <Digits count={2}>12</Digits> // “12”
 * <Digits count={6}>42</Digits> // “000042”
 * ```
 *
 * @returns A styled `<span>` containing the zero-padded number.
 */

const Digit = styled.span`
  font-family: 'Courier New', monospace;
  font-size: clamp(20px, 5vw, 36px);
  min-width: 4ch;
  text-align: right;
  display: inline-block;
`;

interface DigitsProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Value to display */
  children: number;
  /** Total digits to pad to (default = 4) */
  count?: number;
}

/**
 * Zero-pads a number and renders it inside a monospace `<span>`.
 * All extra props (e.g. `data-testid`, `className`, `style`) are forwarded
 * to the underlying element so external code and tests can target it.
 */
const Digits: React.FC<DigitsProps> = ({ children, count = 4, ...rest }) => {
  let txt = children.toString();
  while (txt.length < count) txt = `0${txt}`;

  return <Digit {...rest}>{txt}</Digit>;
};

export default Digits;
