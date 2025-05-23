// src/components/ui/Alert.tsx
import styled from 'styled-components';

/**
 * A heading used for modal and inline alert messages.
 *
 * @remarks
 *  - Built as an `<h2>` to reflect semantic importance.
 *  - Font size clamps between 24px and 36px for responsive scaling.
 *
 * @propchildren
 *  The content to display inside the alert (usually text).
 *
 * @example
 * ```tsx
 * <Alert>Game Over!</Alert>
 * ```
 */

const Alert = styled.h2`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 500;
  color: #f0f0f0;
`;

export default Alert;
