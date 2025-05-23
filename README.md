# react‑tetris2

[![npm version](https://img.shields.io/npm/v/react-tetris2?color=crimson&logo=npm)](https://www.npmjs.com/package/react-tetris2)
[![CI](https://github.com/INGENARTE/react-tetris2/actions/workflows/ci.yml/badge.svg)](https://github.com/INGENARTE/react-tetris2/actions/workflows/ci.yml)
[![Unit Tests](https://github.com/INGENARTE/react-tetris2/actions/workflows/unit.yml/badge.svg)](https://github.com/INGENARTE/react-tetris2/actions/workflows/unit.yml)
[![E2E Tests](https://github.com/INGENARTE/react-tetris2/actions/workflows/e2e.yml/badge.svg)](https://github.com/INGENARTE/react-tetris2/actions/workflows/e2e.yml)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-tetris2)](https://bundlephobia.com/package/react-tetris2)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

> **react‑tetris2** – Plug-and-play `<Tetris2/>` component for **React 18+**, built with TypeScript.

## ✨ Features

- **Fully typed API** – Strictly typed props and methods with TypeScript 5.
- **Modular architecture** – Use as a component with optional ref control.
- **Keyboard controls** – Playable entirely via keyboard input.
- **Imperative API** – Call `start()`, `restart()` via `ref` for external control.

## 🚀 Installation

```bash
# npm
npm i react-tetris2
# pnpm
pnpm add react-tetris2
```

> **Note:** `react` and `react-dom` are required as peer dependencies.  
> Make sure your project includes them (React 18+ supported).

## 🤖 Quick start

Use the component right after installation — no additional setup required.

### Example: `main.tsx` (Vite)

> 💡 Make sure to **comment out global CSS imports** (e.g., `index.css`) to avoid style conflicts.

```tsx
// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Tetris2 from 'react-tetris2';
// import './index.css'; // optional: comment this out to avoid conflicts

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tetris2 />
  </StrictMode>
);
```

## 🔧 Customized usage

For advanced control and customization, use a `ref` and props:

```tsx
// src/main.tsx
import React, { StrictMode, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Tetris2, { Tetris2Handle } from 'react-tetris2';

function App() {
  const game = useRef<Tetris2Handle>(null);

  return (
    <>
      <Tetris2
        ref={game}
        credits={3}
        manageCredits={true}
        showModals={true}
        soundEnabled={true}
        showControlsLegend={true}
        onGameOver={() => alert('Game Over!')}
        onScoreChange={(score) => console.log('Score:', score)}
        onLevelChange={(level) => console.log('Level:', level)}
      />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => game.current?.start()}>Start</button>
        <button onClick={() => game.current?.restart()}>Restart</button>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## 📝 API

### Props

| Prop                 | Type                      | Default | Description                           |
| -------------------- | ------------------------- | ------- | ------------------------------------- |
| `credits`            | `number`                  | —       | Number of available game credits      |
| `manageCredits`      | `boolean`                 | `false` | Enable credit-based game start        |
| `showModals`         | `boolean`                 | `true`  | Show start/pause/game over modals     |
| `soundEnabled`       | `boolean`                 | `true`  | Enable background music               |
| `showControlsLegend` | `boolean`                 | `true`  | Show control instructions below board |
| `onGameOver`         | `() => void`              | —       | Callback when the player loses        |
| `onScoreChange`      | `(score: number) => void` | —       | Callback when score updates           |
| `onLevelChange`      | `(level: number) => void` | —       | Callback when level updates           |

### Imperative API

| Method      | Description              |
| ----------- | ------------------------ |
| `start()`   | Start or resume the game |
| `restart()` | Restart the game         |

Consult `index.d.ts` for the full API surface.

## 🎵 Audio

This component includes background music: a string-quartet arrangement of  
**“Korobeiniki (Tetris Theme)”** by **Gregor Quendel**, licensed under the [Pixabay License](https://pixabay.com/service/license/).

## 🧪 Contributing

We welcome contributions! Follow the steps below to get started:

1. **Clone the repository and install dependencies**

   ```bash
   git clone https://github.com/Ingenarte/react-tetris2.git
   cd react-tetris2
   npm install
   ```

2. **Start the local playground**

   This will launch a development environment with hot reload:

   ```bash
   npm dev
   ```

3. **Run the full test suite (unit + E2E)**

   Make sure your changes don't break anything:

   ```bash
   npm test       # or: npm fulltest
   ```

4. **Create a feature branch**

   Avoid working directly on `master`:

   ```bash
   git checkout -b your-feature-name
   ```

5. **Commit and push your changes**

   Follow Conventional Commits if possible:

   ```bash
   git commit -m "feat: add new animation for line clear"
   git push origin your-feature-name
   ```

6. **Open a Pull Request**

   Submit your PR against the `master` branch at:  
   [https://github.com/Ingenarte/react-tetris2/pulls](https://github.com/Ingenarte/react-tetris2/pulls)

---

> 💡 Tip: You can also run Storybook locally with:
>
> ```bash
> npm run storybook
> ```

> 🛠️ Internal tools like `lint`, `typecheck`, and `build` are available via npm scripts.  
> Always run `npm fulltest` before pushing.

## 🛣️ Roadmap (posible)

- [ ] Enhanced accessibility (ARIA roles, focus trapping, high-contrast mode)
- [ ] Multiplayer LAN
- [ ] AI opponent
- [ ] Replay export / import

## 📜 License

**MIT** – see [`LICENSE`](./LICENSE) for details.  
Original work © 2015 [Matthew Brandly](https://github.com/brandly).  
Additions & refactor © 2025 [INGENARTE](https://github.com/Ingenarte).  
Audio © 2024 [Gregor Quendel](https://pixabay.com/users/gregorquendel-19912121/).

TETRIS® is a registered trademark of Tetris Holding LLC. This project is not affiliated with or endorsed by Tetris Holding LLC, Nintendo, or The Tetris Company.
