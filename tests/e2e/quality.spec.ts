import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { routes, scrollThrough, viewport, widths } from './matrix';

// The quality bar from AGENTS.md: no horizontal scroll, no serious accessibility violations.
for (const route of routes) {
  for (const width of widths) {
    test(`${route} at ${width}px: no overflow, no serious axe violations`, async ({
      page,
    }, info) => {
      await page.setViewportSize(viewport(width));
      await page.goto(route);
      await scrollThrough(page);

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth
      );
      expect(overflow, 'horizontal overflow in px').toBeLessThanOrEqual(0);

      const { violations } = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      const serious = violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(
        serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)
      ).toEqual([]);

      await page.screenshot({
        path: info.outputPath(`${route.replaceAll('/', '_') || 'home'}-${width}.png`),
        fullPage: true,
      });
    });
  }
}
