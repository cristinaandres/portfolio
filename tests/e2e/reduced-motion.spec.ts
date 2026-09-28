import { expect, test } from '@playwright/test';
import { routes } from './matrix';

// With reduced motion requested, nothing should animate once the page has settled.
test.use({ colorScheme: 'light' });

for (const route of routes) {
  test(`${route} respects prefers-reduced-motion`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(route);
    await page.waitForLoadState('networkidle');
    const running = await page.evaluate(() =>
      document
        .getAnimations()
        .filter((a) => {
          const timing = a.effect?.getComputedTiming();
          return a.playState === 'running' && Number(timing?.duration ?? 0) > 50;
        })
        .map((a) => {
          const target = (a.effect as KeyframeEffect | null)?.target as Element | null;
          return `${target?.nodeName ?? 'unknown'}.${target?.className ?? ''} (${a.constructor.name})`;
        })
    );
    expect(running).toEqual([]);
  });
}
