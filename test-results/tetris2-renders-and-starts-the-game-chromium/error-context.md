# Test info

- Name: renders and starts the game
- Location: /Users/francorodrigo/Dropbox2nd/Tetris/react-tetris/playground/e2e/tetris2.spec.ts:20:1

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for getByTestId('start-btn') to be visible

    at clickStart (/Users/francorodrigo/Dropbox2nd/Tetris/react-tetris/playground/e2e/tetris2.spec.ts:10:39)
    at /Users/francorodrigo/Dropbox2nd/Tetris/react-tetris/playground/e2e/tetris2.spec.ts:22:9
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | // import { test, expect } from '@playwright/test';
   4 | // import { injectAxe, checkA11y } from '@axe-core/playwright';
   5 | import axe from '@axe-core/playwright';
   6 |
   7 | /* Helpers ------------------------------------------------------------- */
   8 | const clickStart = async (page) => {
   9 |   // Wait for the Play button to become attached & visible
> 10 |   await page.getByTestId('start-btn').waitFor({ state: 'visible' });
     |                                       ^ Error: locator.waitFor: Test ended.
  11 |   await page.getByTestId('start-btn').click();
  12 | };
  13 |
  14 | test.beforeEach(async ({ page }) => {
  15 |   // Point to root served by Vite (Playwright's webServer)
  16 |   await page.goto('/');
  17 | });
  18 |
  19 | /* 1 ─ Smoke: render + start ------------------------------------------ */
  20 | test('renders and starts the game', async ({ page }) => {
  21 |   await expect(page.getByTestId('tetris2-root')).toBeVisible();
  22 |   await clickStart(page);
  23 |   await expect(page.getByTestId('score')).toBeVisible();
  24 | });
  25 |
  26 | /* 2 ─ Movement -------------------------------------------------------- */
  27 | test('moves a piece left/right', async ({ page }) => {
  28 |   await clickStart(page);
  29 |
  30 |   await page.keyboard.press('ArrowLeft');
  31 |   await page.keyboard.press('ArrowRight');
  32 |
  33 |   // Board still visible = we didn't crash
  34 |   await expect(page.getByTestId('gameboard')).toBeVisible();
  35 | });
  36 |
  37 | /* 3 ─ Game over + restart -------------------------------------------- */
  38 | test('shows Game Over and restarts', async ({ page }) => {
  39 |   await clickStart(page);
  40 |
  41 |   // force a quick loss (assumes 20 rows)
  42 |   for (let i = 0; i < 40; i++) await page.keyboard.press('ArrowDown');
  43 |
  44 |   await expect(page.getByTestId('popup-gameover')).toBeVisible();
  45 |   await page.getByTestId('restart-btn').click();
  46 |   await expect(page.getByTestId('score')).toHaveText('0');
  47 | });
  48 |
  49 | /* 4 ─ Audio toggle ---------------------------------------------------- */
  50 | test('audio can be toggled', async ({ page }) => {
  51 |   await expect(page.getByTestId('audio-toggle')).toBeVisible();
  52 |   await page.getByTestId('audio-toggle').click();
  53 | });
  54 |
  55 | /* 5 ─ Accessibility (axe-core) --------------------------------------- */
  56 | test('basic accessibility', async ({ page }) => {
  57 |   await axe.injectAxe(page);
  58 |   await axe.checkA11y(page, undefined, {
  59 |     detailedReport: true,
  60 |     detailedReportOptions: { html: true }
  61 |   });
  62 | });
  63 |
```