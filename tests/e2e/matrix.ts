// The routes and widths every quality check runs over. Tickets add their routes here.
import { getProjects, workPath } from '../../content/index.ts';

export const widths = [390, 768, 1440] as const;

export const workRoutes = getProjects().map((p) => workPath(p));

export const routes = ['/', '/about', ...workRoutes];

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
  await page.waitForLoadState('networkidle');
}
