// ui/Divider.tsx
import styled from 'styled-components';

/**
 * A horizontal rule used to separate sections within panels.
 *
 * @remarks
 * - Renders a full-width `<hr>` without default borders.
 * - Uses a light top border and subtle box-shadow for depth.
 * - Provides consistent vertical spacing (`4px 0`).
 *
 * @example
 * ```tsx
 * <ScorePanel>
 *   <StatRow>…</StatRow>
 *   <Divider />
 *   <StatRow>…</StatRow>
 * </ScorePanel>
 * ```
 *
 * @returns A styled `<hr>` element.
 */

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  margin: 4px 0;
`;

export default Divider;
