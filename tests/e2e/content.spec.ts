import { expect, test } from '@playwright/test';
import { getProjects, workPath } from '../../content/index.ts';
import { scrollThrough } from './matrix';

const projects = getProjects();

for (const project of projects) {
  test(`/work/${project.slug} renders its case study and every image loads`, async ({ page }) => {
    const failed: string[] = [];
    page.on('response', (r) => {
      if (r.request().resourceType() === 'image' && r.status() >= 400) failed.push(r.url());
    });

    const response = await page.goto(workPath(project));
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(project.name);
    for (const section of project.sections) {
      await expect(page.getByRole('heading', { level: 2, name: section.heading })).toBeVisible();
    }

    await scrollThrough(page);
    const broken = await page.$$eval('main img', (imgs) =>
      imgs
        .filter((img) => !(img as HTMLImageElement).naturalWidth)
        .map((img) => img.getAttribute('src'))
    );
    expect(broken).toEqual([]);
    expect(failed).toEqual([]);
    const missingAlt = await page.$$eval('main img:not([alt])', (imgs) => imgs.length);
    expect(missingAlt).toBe(0);
  });
}

test('an unknown project is a 404', async ({ page }) => {
  const response = await page.goto('/work/not-a-project');
  expect(response?.status()).toBe(404);
});

test('the home page links to every case study', async ({ page }) => {
  await page.goto('/');
  for (const project of projects) {
    await expect(page.locator(`main a[href="${workPath(project)}"]`).first()).toBeVisible();
  }
});

test('the sitemap lists every case study and nothing that 404s', async ({ page, request }) => {
  const xml = await (await request.get('/sitemap.xml')).text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  for (const project of projects) expect(urls).toContain(workPath(project));
  for (const path of urls) {
    const r = await page.goto(path);
    expect(r?.status(), path).toBe(200);
  }
});

test('llms.txt and llms-full.txt mention every project', async ({ request }) => {
  for (const file of ['/llms.txt', '/llms-full.txt']) {
    const text = await (await request.get(file)).text();
    for (const project of projects) expect(text, file).toContain(workPath(project));
    expect(text).not.toMatch(/\+34|678\s?804/);
  }
});
