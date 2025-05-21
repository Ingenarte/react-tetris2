# react‑tetris2

[![npm version](https://img.shields.io/npm/v/react-tetris2?color=crimson&logo=npm)](https://www.npmjs.com/package/react-tetris2)
[![CI](https://github.com/INGENARTE/react-tetris2/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/react-tetris2/actions)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-tetris2)](https://bundlephobia.com/package/react-tetris2)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

> **react‑tetris2** – A fully‑typed, accessible Tetris component & hook for **React 18+** built with TypeScript.

## ✨ Features

- **Strict TypeScript 5** – Public API is 100 % typed.
- **Headless or UI** – Use the `useTetris()` hook or the `<Tetris2 />` component.
- **Accessible** – Keyboard‑only play, ARIA roles, and screen‑reader friendly scoring.
- **Themeable** – Colors, fonts and audio via **styled‑components** (peer dependency).
- **Lightweight** – Core < 7 kB gzipped (excluding audio).
- **Imperative handle** – `start()`, `pause()`, `reset()` methods exposed via ref.

## 🚀 Installation

```bash
# npm
npm i react-tetris2 styled-components
# pnpm
pnpm add react-tetris2 styled-components
```

> **Note**: `styled-components` is listed as a **peerDependency**.  
> Replace it with your own CSS system if preferred.

## 🤖 Quick start

```tsx
import React, { useRef } from 'react';
import Tetris2, { Tetris2Handle } from 'react-tetris2';

export default function Demo() {
  const game = useRef<Tetris2Handle>(null);

  return (
    <>
      <Tetris2
        ref={game}
        rows={20}
        columns={10}
        onGameOver={() => alert('Game Over')}
      />
      <button onClick={() => game.current?.start()}>Start</button>
      <button onClick={() => game.current?.pause()}>Pause</button>
    </>
  );
}
```

## 📝 API

### Props

| Prop            | Type                      | Default        | Description                     |
| --------------- | ------------------------- | -------------- | ------------------------------- |
| `rows`          | `number`                  | `20`           | Board height in blocks          |
| `columns`       | `number`                  | `10`           | Board width in blocks           |
| `initialLevel`  | `number`                  | `0`            | Starting speed level            |
| `autoStart`     | `boolean`                 | `false`        | Begin automatically on mount    |
| `theme`         | `TetrisTheme`             | `classicTheme` | Colors, font & audio            |
| `onLineCleared` | `(lines: number) => void` | —              | Callback when lines are cleared |
| `onScoreChange` | `(score: number) => void` | —              | Callback on score update        |
| `onGameOver`    | `() => void`              | —              | Callback when game ends         |
| `className`     | `string`                  | —              | Root CSS class                  |

### Imperative API

| Method    | Description              |
| --------- | ------------------------ |
| `start()` | Start or resume the game |
| `pause()` | Pause the current game   |
| `reset()` | Reset state to initial   |

Consult `index.d.ts` for the full API surface.

## 🎨 Theme & Audio

The default `classicTheme` ships with a string‑quartet arrangement of **“Korobeiniki (Tetris Theme)”** by **Gregor Quendel**, licensed under the [Pixabay License](https://pixabay.com/service/license/).  
Swap the track by passing your own audio file in the `theme.audio` field.

## 🧪 Contributing

1. `git clone` & `pnpm install`
2. `pnpm dev` – Live playground
3. `pnpm test` – Unit + E2E
4. Open a pull request against `main`

## 🛣️ Roadmap (posible)

- [ ] Multiplayer LAN
- [ ] AI opponent
- [ ] Replay export / import

## 📜 License

**MIT** – see [`LICENSE`](./LICENSE) for details.  
Original work © 2015 [Matthew Brandly](https://github.com/brandly).  
Additions & refactor © 2025 [INGENARTE](https://github.com/Ingenarte).  
Audio © 2024 [Gregor Quendel](https://pixabay.com/users/gregorquendel-19912121/).

TETRIS® is a registered trademark of Tetris Holding LLC. This project is not affiliated with or endorsed by Tetris Holding LLC, Nintendo, or The Tetris Company.
