// ui/Button.tsx
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 24px;
  padding: 0.5rem 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(18px, 3vw, 24px);
  border-radius: 6px;
  background: #28203e;
  color: #f0f0f0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background: #3a2c5b;
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.96);
  }
`;

export default Button;
