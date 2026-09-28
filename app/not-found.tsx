import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';
import { getViews } from '@/variants/server';

export const metadata: Metadata = {
  title: 'Page not found',
  description: `The page you are looking for does not exist on ${siteConfig.name}'s portfolio.`,
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  const { NotFound } = await getViews();
  return <NotFound />;
}
