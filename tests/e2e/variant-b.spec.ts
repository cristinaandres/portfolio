import { expect, test } from '@playwright/test';
import { useVariant } from './matrix';

// Variant B (Isla): the room's hotspots and the phone menu. Switching exists only outside production.
test.describe('@variants variant B', () => {
  test.beforeEach(async ({ context, baseURL }) => {
    await useVariant(context, 'b', baseURL!);
  });

  test('every hotspot in the room is a real link to the work, activities or about', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    for (const [name, href] of [
      ['Screen · UX/UI', '#on-the-screen'],
      ['Shelf · Products', '#on-the-shelf'],
      ['Wall · Brands', '#on-the-wall'],
      ['Console · Activities', '/activities'],
      ['Window · About me', '/about'],
    ]) {
      await expect(page.getByRole('link', { name })).toHaveAttribute('href', href);
    }
    for (const id of ['on-the-screen', 'on-the-shelf', 'on-the-wall']) {
      await expect(page.locator(`#${id} a[href^="/work/"]`).first()).toBeVisible();
    }
  });

  test('on a phone the hotspots become a list and the menu is a disclosure', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(
      page.getByRole('list', { name: 'What the room opens' }).getByRole('link')
    ).toHaveCount(5);
    await expect(page.getByRole('link', { name: 'All work' }).first()).toBeVisible();

    const menu = page.getByRole('button', { name: 'Menu' });
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await menu.click();
    await expect(page.getByRole('button', { name: 'Close' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await page.locator('#isla-menu').getByRole('link', { name: 'About me' }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.locator('#isla-menu')).toBeHidden();
  });

  test('Say hi opens the contact dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.getByRole('button', { name: 'Say hi' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
  });
});
