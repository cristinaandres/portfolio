import { expect, test } from '@playwright/test';
import { viewport } from './matrix';

test.describe('contact dialog', () => {
  test('keyboard: Tab reaches Contact, focus stays inside, Escape closes and returns focus', async ({
    page,
  }) => {
    await page.setViewportSize(viewport(1440));
    await page.goto('/about');
    const trigger = page.getByRole('navigation').getByRole('button', { name: 'Contact' });

    for (
      let i = 0;
      i < 40 && !(await trigger.evaluate((el) => el === document.activeElement));
      i++
    ) {
      await page.keyboard.press('Tab');
    }
    await expect(trigger).toBeFocused();

    await page.keyboard.press('Enter');
    const dialog = page.getByRole('dialog', { name: 'Contact' });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('link', { name: /cristina\.andresrr@gmail\.com/ })).toBeVisible();
    await expect(dialog.getByRole('link', { name: /Calendly/ })).toBeVisible();
    await expect(dialog.getByRole('link', { name: /LinkedIn/ })).toBeVisible();
    await expect(dialog.getByRole('link', { name: /Behance/ })).toBeVisible();

    for (let i = 0; i < 12; i++) {
      await page.keyboard.press('Tab');
      const outside = await page.evaluate(() => {
        const el = document.activeElement;
        return !!el && el !== document.body && !el.closest('dialog');
      });
      expect(outside, `focus left the dialog after ${i + 1} Tab presses`).toBe(false);
    }

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test('a click on the backdrop closes it', async ({ page }) => {
    await page.setViewportSize(viewport(1440));
    await page.goto('/');
    await page.getByRole('navigation').getByRole('button', { name: 'Contact' }).click();
    const dialog = page.getByRole('dialog', { name: 'Contact' });
    await expect(dialog).toBeVisible();
    await page.mouse.click(10, 10);
    await expect(dialog).toBeHidden();
  });

  test('opens from the phone menu', async ({ page }) => {
    await page.setViewportSize(viewport(390));
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    await page
      .getByRole('dialog', { name: 'Main menu' })
      .getByRole('button', { name: 'Contact' })
      .click();
    await expect(page.getByRole('dialog', { name: 'Contact' })).toBeVisible();
  });

  test('share falls back to copying the link, with feedback', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.setViewportSize(viewport(1440));
    await page.addInitScript(() => {
      // Desktop Chrome has no Web Share API; make sure the fallback is what's tested.
      Object.defineProperty(navigator, 'share', { value: undefined });
    });
    await page.goto('/about');
    await page.getByRole('navigation').getByRole('button', { name: 'Contact' }).click();
    await page.getByRole('button', { name: 'Share this page' }).click();
    await expect(page.getByRole('status')).toHaveText('Link copied to the clipboard.');
    expect(await page.evaluate(() => navigator.clipboard.readText())).toContain('/about');
  });
});
