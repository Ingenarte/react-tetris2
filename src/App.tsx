import { Tetris2 } from './components/tetris2/Tetris2';

/**
 * Root application.
 *
 * WCAG 2.1 requires every page to expose exactly one “main” landmark.
 * Wrapping the game board in `<main>` satisfies both:
 *   • `landmark-one-main`
 *   • `region`                (all content must live in landmarks)
 */
const App = (): React.JSX.Element => (
  <main /* the only main landmark on the page */>
    <Tetris2 />
  </main>
);

export default App;
