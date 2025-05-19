// playground/e2e/tetris2.spec.ts
import { test, expect, Page } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import { injectAxe } from 'axe-playwright';

/* ───────────────────────── Helpers ────────────────────────── */
const clickStart = async (page: Page): Promise<void> => {
  const playBtn = page.getByTestId('start-btn');
  await playBtn.waitFor({ state: 'visible' });
  await playBtn.click();
};

test.beforeEach(async ({ page }) => {
  /* Vite’s webServer serves the app at “/” during e2e runs */
  await page.goto('/');
});

/* 1 ─ Smoke ► render + start ──────────────────────────────── */
test('renders and starts the game', async ({ page }) => {
  await expect(page.getByTestId('tetris2-root')).toBeVisible();

  await clickStart(page);

  // <Digits> is rendered one frame later – wait for it, then assert.
  await page.getByTestId('score').waitFor();
  await expect(page.getByTestId('score')).toBeVisible();
});

/* 2 ─ Movement ────────────────────────────────────────────── */
test('moves a piece left/right', async ({ page }) => {
  await clickStart(page);

  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowRight');

  // If we didn’t crash, the board is still on-screen.
  await expect(page.getByTestId('gameboard')).toBeVisible();
});

/* 3 ─ Game-over → restart ─────────────────────────────────── */
test('shows Game Over and restarts', async ({ page }) => {
  await clickStart(page);

  /* Force a quick loss:
     Hard-drop pieces until the Game-Over popup appears.
     400 drops = 20 rows × 20 columns – plenty for every run. */
  for (let i = 0; i < 400; i++) {
    await page.keyboard.press('ArrowDown');
    if (await page.getByTestId('popup-gameover').isVisible()) break;
  }

  await expect(page.getByTestId('popup-gameover')).toBeVisible();

  await page.getByTestId('restart-btn').click();
  // <Digits> zero-pads to four characters → expect “0000”.
  await expect(page.getByTestId('score')).toHaveText('0000');
});

/* 4 ─ Audio toggle ────────────────────────────────────────── */
test('audio can be toggled', async ({ page }) => {
  const toggle = page.getByTestId('audio-toggle');
  await expect(toggle).toBeVisible();
  await toggle.click();
});

/* 5 ─ Accessibility (axe-core) ────────────────────────────── */
test('basic accessibility', async ({ page }) => {
  // Start the game first so every widget is visible/opaque.
  await clickStart(page);

  await injectAxe(page);
  const results = await new AxeBuilder({ page }).analyze();

  // Fail the test if *any* WCAG violation is found.
  expect(results.violations).toHaveLength(0);
});
