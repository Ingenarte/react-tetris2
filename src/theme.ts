// src/theme.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {} // <- required to satisfy internal constraint
}
