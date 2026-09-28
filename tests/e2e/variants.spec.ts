import { expect, test } from '@playwright/test';
import { variantIds } from './matrix';

const variantOf = (page: import('@playwright/test').Page) =>
  page.locator('body').getAttribute('data-variant');

test('without a choice, the default variant renders', async ({ page }) => {
  await page.goto('/');
  expect(await variantOf(page)).toBe('a');
});

for (const variant of variantIds) {
  test(`?variant=${variant} renders ${variant} and persists across navigation`, async ({
    page,
  }) => {
    await page.goto(`/work/punt?variant=${variant}`);
    expect(await variantOf(page)).toBe(variant);
    await page.goto('/about');
    expect(await variantOf(page)).toBe(variant);
  });
}

test('an unknown ?variant= is ignored', async ({ page }) => {
  await page.goto('/?variant=z');
  expect(await variantOf(page)).toBe('a');
});

test('the switcher changes variant and keeps the current page', async ({ page }) => {
  await page.goto('/work/punt');
  const switcher = page.getByRole('group', { name: 'Choose a design variant' });
  await expect(switcher).toBeVisible();
  await switcher.getByRole('button', { name: /^B,/ }).click();
  await expect(page.locator('body')).toHaveAttribute('data-variant', 'b');
  expect(new URL(page.url()).pathname).toBe('/work/punt');
  await expect(switcher.getByRole('button', { name: /^B,/ })).toHaveAttribute(
    'aria-pressed',
    'true'
  );

  await page.goto('/activities');
  await expect(page.locator('body')).toHaveAttribute('data-variant', 'b');
});

test('the switcher is keyboard operable', async ({ page }) => {
  await page.goto('/');
  const option = page.getByRole('button', { name: /^C,/ });
  await option.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('body')).toHaveAttribute('data-variant', 'c');
});

test('the switcher can be collapsed to stay out of the way', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.locator('[data-variant-switcher] > button');
  await toggle.click();
  await expect(page.getByRole('group', { name: 'Choose a design variant' })).toBeHidden();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
