// The routes and widths every quality check runs over. Tickets add their routes here.
import type { BrowserContext } from '@playwright/test';
import { getProjects, workPath } from '../../content/index.ts';
import { VARIANT_COOKIE, variants, type VariantId } from '../../variants/config.ts';

export const widths = [390, 768, 1440] as const;

/** Every variant is held to the same quality bar; a production build only ever renders the default. */
export const variantIds: VariantId[] =
  process.env.VERCEL_ENV === 'production' ? ['a'] : (Object.keys(variants) as VariantId[]);

/** Puts the browser in a variant before the first request, as the switcher's cookie would. */
export async function useVariant(context: BrowserContext, variant: VariantId, baseURL: string) {
  await context.addCookies([{ name: VARIANT_COOKIE, value: variant, url: baseURL }]);
}

export const workRoutes = getProjects().map((p) => workPath(p));

export const activityRoutes = ['/activities', '/activities/blender', '/activities/animal-crossing'];

export const routes = ['/', '/about', ...workRoutes, ...activityRoutes];

export function viewport(width: number) {
  return { width, height: width < 768 ? 844 : 900 };
}

/** Scrolls to the bottom and back so lazy images load before checks and screenshots. */
export async function scrollThrough(page: import('@playwright/test').Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await settle(page, { includeLazy: true });
}

/**
 * Waits for the page and its images to finish loading. Not 'networkidle': a Vercel preview keeps
 * a prefetch request open, so the network never goes idle there. Lazy images count only once
 * the page has been scrolled through.
 */
export async function settle(
  page: import('@playwright/test').Page,
  { includeLazy = false }: { includeLazy?: boolean } = {}
) {
  await page.waitForLoadState('load');
  await page.waitForFunction(
    (lazy) =>
      Array.from(document.images).every((img) => img.complete || (!lazy && img.loading === 'lazy')),
    includeLazy
  );
}
