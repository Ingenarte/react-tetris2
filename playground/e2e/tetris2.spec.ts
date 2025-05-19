import { test, expect } from '@playwright/test';

// import { test, expect } from '@playwright/test';
// import { injectAxe, checkA11y } from '@axe-core/playwright';
import axe from '@axe-core/playwright';

/* Helpers ------------------------------------------------------------- */
const clickStart = async (page) => {
  // Wait for the Play button to become attached & visible
  await page.getByTestId('start-btn').waitFor({ state: 'visible' });
  await page.getByTestId('start-btn').click();
};

test.beforeEach(async ({ page }) => {
  // Point to root served by Vite (Playwright's webServer)
  await page.goto('/');
});

/* 1 ─ Smoke: render + start ------------------------------------------ */
test('renders and starts the game', async ({ page }) => {
  await expect(page.getByTestId('tetris2-root')).toBeVisible();
  await clickStart(page);
  await expect(page.getByTestId('score')).toBeVisible();
});

/* 2 ─ Movement -------------------------------------------------------- */
test('moves a piece left/right', async ({ page }) => {
  await clickStart(page);

  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowRight');

  // Board still visible = we didn't crash
  await expect(page.getByTestId('gameboard')).toBeVisible();
});

/* 3 ─ Game over + restart -------------------------------------------- */
test('shows Game Over and restarts', async ({ page }) => {
  await clickStart(page);

  // force a quick loss (assumes 20 rows)
  for (let i = 0; i < 40; i++) await page.keyboard.press('ArrowDown');

  await expect(page.getByTestId('popup-gameover')).toBeVisible();
  await page.getByTestId('restart-btn').click();
  await expect(page.getByTestId('score')).toHaveText('0');
});

/* 4 ─ Audio toggle ---------------------------------------------------- */
test('audio can be toggled', async ({ page }) => {
  await expect(page.getByTestId('audio-toggle')).toBeVisible();
  await page.getByTestId('audio-toggle').click();
});

/* 5 ─ Accessibility (axe-core) --------------------------------------- */
test('basic accessibility', async ({ page }) => {
  await axe.injectAxe(page);
  await axe.checkA11y(page, undefined, {
    detailedReport: true,
    detailedReportOptions: { html: true }
  });
});
