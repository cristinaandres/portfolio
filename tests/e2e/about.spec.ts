import { expect, test } from '@playwright/test';
import { profile } from '../../content/profile.ts';

test('/about tells her story from the CV', async ({ page }) => {
  const response = await page.goto('/about');
  expect(response?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Cristina Andrés');

  for (const role of profile.experience) {
    await expect(
      page.getByRole('heading', { level: 3, name: `${role.title}, ${role.organisation}` })
    ).toBeVisible();
  }
  await expect(page.getByText('Future Fibres Rigging Systems')).toBeVisible();
  for (const study of profile.education) {
    await expect(
      page.getByRole('heading', {
        level: 3,
        name: new RegExp(study.school.replace(/[()]/g, '\\$&')),
      })
    ).toBeVisible();
  }
  await expect(
    page.getByRole('main').getByRole('link', { name: 'Download my CV (PDF)' })
  ).toHaveAttribute('href', '/pdf/CV.pdf');
  await expect(page.getByRole('img', { name: profile.photo.alt })).toBeVisible();
});

test('no page publishes her phone number', async ({ page }) => {
  for (const path of ['/', '/about', '/work/aqualung']) {
    await page.goto(path);
    const html = await page.content();
    expect(html, path).not.toMatch(/\+34|678\s?80\s?40\s?32/);
  }
});
