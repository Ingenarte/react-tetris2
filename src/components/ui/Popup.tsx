// ui/Popup.tsx
import styled from 'styled-components';

/**
 * A reusable centered modal container.
 *
 * @remarks
 * - Absolutely positioned in the viewport center.
 * - Semi‐transparent dark background with rounded corners and drop shadow.
 * - Constrains its width to 90% of the viewport.
 *
 * @example
 * ```tsx
 * <Popup>
 *   <h2>Paused</h2>
 *   <button onClick={resume}>Resume</button>
 * </Popup>
 * ```
 */

export const Popup = styled.div`
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(27, 19, 44, 0.95);
  padding: 1rem 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 90%;
`;

export const PopupStart = styled(Popup)`
  background: rgba(63, 129, 28, 0.5);
`;

export const PopupGameOver = styled(Popup)`
  background: rgba(176, 32, 32, 0.9);
  box-shadow: 0 0 16px rgba(176, 32, 32, 0.5);
`;
