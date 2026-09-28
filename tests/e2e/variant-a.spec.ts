import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { useVariant, viewport } from './matrix';

// Variant A specifics the shared matrix doesn't reach: its 404 sheet and its phone menu.
test.beforeEach(async ({ context, baseURL }) => {
  await useVariant(context, 'a', baseURL!);
});

for (const width of [390, 1440]) {
  test(`[a] the 404 sheet at ${width}px is accessible and leads back`, async ({ page }) => {
    await page.setViewportSize(viewport(width));
    const response = await page.goto('/not-a-page');
    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
    await expect(page.getByRole('link', { name: 'Selected work' })).toHaveAttribute('href', '/');
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    expect(violations.filter((v) => v.impact === 'serious' || v.impact === 'critical')).toEqual([]);
  });
}

test('[a] the phone menu closes with Escape and returns focus to its button', async ({ page }) => {
  await page.setViewportSize(viewport(390));
  await page.goto('/work/punt');
  const trigger = page.getByRole('button', { name: 'Open menu' });
  await trigger.click();
  const menu = page.getByRole('dialog', { name: 'Main menu' });
  await expect(menu).toBeVisible();
  await expect(menu.getByRole('link', { name: /Work/ })).toHaveAttribute('aria-current', 'page');
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(trigger).toBeFocused();
});

test('[a] the phone menu navigates and closes', async ({ page }) => {
  await page.setViewportSize(viewport(390));
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page
    .getByRole('dialog', { name: 'Main menu' })
    .getByRole('link', { name: /About/ })
    .click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole('dialog', { name: 'Main menu' })).toBeHidden();
});
