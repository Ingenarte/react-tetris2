// src/theme.ts
import 'styled-components';

declare module 'styled-components' {
  // Disable the empty-object rule here because styled-components
  // requires an empty DefaultTheme interface for augmentation.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme {}
}