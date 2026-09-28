import { expect, test } from '@playwright/test';

for (const [from, to] of [
  ['/?project=Punt', '/work/punt'],
  ['/?project=punt', '/work/punt'],
  ['/?project=smurfit%20kappa', '/work/smurfit-kappa'],
  ['/?project=Ares%20Domus', '/work/ares-domus'],
]) {
  test(`${from} redirects to ${to}`, async ({ request }) => {
    const r = await request.get(from, { maxRedirects: 0 });
    expect(r.status()).toBe(308);
    expect(new URL(r.headers().location, 'http://x').pathname).toBe(to);
  });
}

test('an unknown ?project= stays on the home page', async ({ page }) => {
  const r = await page.goto('/?project=nope');
  expect(r?.status()).toBe(200);
  expect(new URL(page.url()).pathname).toBe('/');
});
