import { expect, test } from '@playwright/test';
import { VARIANT_COOKIE } from '../../variants/config.ts';

// Runs only against a build made with VERCEL_ENV=production (npm run test:e2e:prod), alongside
// the rest of the suite.
test.describe('@production', () => {
  test('the switcher is not in the HTML', async ({ request }) => {
    for (const path of ['/', '/work/punt', '/about']) {
      const html = await (await request.get(path)).text();
      expect(html, path).not.toContain('data-variant-switcher');
      expect(html, path).not.toContain('Choose a design variant');
    }
  });

  test('?variant= and the cookie are ignored', async ({ page, context, baseURL }) => {
    await page.goto('/work/punt?variant=b');
    await expect(page.locator('body')).toHaveAttribute('data-variant', 'a');
    await context.addCookies([{ name: VARIANT_COOKIE, value: 'c', url: baseURL! }]);
    await page.goto('/about');
    await expect(page.locator('body')).toHaveAttribute('data-variant', 'a');
    expect((await context.cookies()).find((c) => c.name === VARIANT_COOKIE)?.value).toBe('c');
  });
});
