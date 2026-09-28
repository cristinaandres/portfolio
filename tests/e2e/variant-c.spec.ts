import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { useVariant } from './matrix';

// Variant C (Muestrario) specifics; the shared matrix covers overflow, axe and motion per route.
test.describe('@variants variant C', () => {
  test.beforeEach(async ({ context, baseURL }) => {
    await useVariant(context, 'c', baseURL!);
  });

  test('the phone menu is a disclosure that closes on Escape and after navigating', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const toggle = page.getByRole('button', { name: 'Menu' });
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const about = page.locator('#c-menu').getByRole('link', { name: 'About' });
    await expect(about).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.click();
    await about.click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#c-menu a[href="/about"]')).toHaveAttribute('aria-current', 'page');
  });

  test('the 404 is dressed as C and passes axe', async ({ page }, info) => {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto('/work/not-a-project');
      expect(response?.status()).toBe(404);
      await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
      const { violations } = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(violations.filter((v) => v.impact === 'serious' || v.impact === 'critical')).toEqual(
        []
      );
      await page.screenshot({ path: info.outputPath(`c_404-${width}.png`), fullPage: true });
    }
  });

  test('the pull-quote is her own sentence and is not repeated in the text', async ({ page }) => {
    await page.goto('/work/curefab');
    const quote = page.locator('article figure blockquote').first();
    await expect(quote).toContainText(
      'Working on this project was one of the most enriching experiences for me.'
    );
    await expect(
      page.getByText('Working on this project was one of the most enriching experiences for me.')
    ).toHaveCount(1);

    await page.goto('/work/blossom');
    await expect(page.getByText(/such a rare lamp needed an identity of its own/)).toHaveCount(1);
  });
});
