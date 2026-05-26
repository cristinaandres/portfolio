/**
 * Single source of truth for site-wide SEO + GEO metadata.
 *
 * Override the canonical URL by setting `NEXT_PUBLIC_SITE_URL` in your
 * environment. All metadata, sitemap, robots, JSON-LD, and OG image
 * generation read from this object.
 */

const DEFAULT_SITE_URL = 'https://cristinadesigns.vercel.app';

function normalizeUrl(url: string): string {
  return url.replace(/\/$/, '');
}

export const siteConfig = {
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL),
  name: 'Cristina Andrés',
  shortName: 'Cristina Andrés Portfolio',
  jobTitle: 'Product, UX/UI & Graphic Designer',
  tagline:
    'Product, UX/UI and graphic designer building thoughtful brands and digital experiences.',
  description:
    'Portfolio of Cristina Andrés — product, UX/UI and graphic designer. Selected work for Aqualung, Curefab, Punt, Smurfit Kappa, Ares Domus, Sakana, Ciclogreen, Blossom and Montezuma.',
  bio: 'Passionate product and graphic designer with a solid foundation in industrial design engineering. Cristina balances form and function, bringing ideas to life with meticulous attention to detail and a keen eye for user experience.',
  locale: 'en_US',
  language: 'en',
  email: 'cristina.andresrr@gmail.com',
  calendly: 'https://calendly.com/cristina-andresrr/30min',
  developerName: 'Thomas Moser',
  developerUrl: 'https://www.thomasmoserdev.com/',
  socials: {
    behance: 'https://www.behance.net/cristinaandrs',
    linkedin: 'https://www.linkedin.com/in/cristinaandrs/',
  },
  knowsAbout: [
    'UX Design',
    'UI Design',
    'Product Design',
    'Graphic Design',
    'Branding',
    'Packaging Design',
    'Industrial Design Engineering',
  ],
  alumniOf: ['Polytechnical University of Valencia', 'He-ARC Neuchâtel', 'Hochschule Augsburg'],
  languages: ['Spanish', 'Catalan', 'French', 'English'],
  keywords: [
    'Cristina Andrés',
    'Cristina Andres',
    'portfolio',
    'product designer',
    'UX designer',
    'UI designer',
    'graphic designer',
    'industrial design',
    'branding',
    'packaging design',
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export const sameAs: string[] = [siteConfig.socials.behance, siteConfig.socials.linkedin];

export function absoluteUrl(path = '/'): string {
  const trimmed = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${trimmed}`;
}
