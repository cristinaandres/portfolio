import { defineConfig, devices } from '@playwright/test';

// Parallel worktrees each pick their own PORT so they never test another build.
const PORT = Number(process.env.PORT ?? 3100);

// Drives the production build (`npm run test:e2e` builds first) like a visitor would.
// A production build (VERCEL_ENV=production) runs everything except variant switching (@variants),
// with the default variant only; any other build runs everything except the @production checks.
const production = process.env.VERCEL_ENV === 'production';

export default defineConfig({
  testDir: 'tests/e2e',
  grepInvert: production ? /@variants/ : /@production/,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: process.env.BASE_URL ?? `http://localhost:${PORT}`,
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: `npx next start -p ${PORT}`,
        port: PORT,
        // Never test a leftover server: always the build this run just made.
        reuseExistingServer: false,
        timeout: 60_000,
      },
});
