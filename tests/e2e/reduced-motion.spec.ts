import { expect, test } from '@playwright/test';
import { routes, useVariant, variantIds } from './matrix';

// With reduced motion requested, nothing should animate once the page has settled.
test.use({ colorScheme: 'light' });

for (const variant of variantIds) {
  for (const route of routes) {
    test(`[${variant}] ${route} respects prefers-reduced-motion`, async ({
      page,
      context,
      baseURL,
    }) => {
      await useVariant(context, variant, baseURL!);
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
}
