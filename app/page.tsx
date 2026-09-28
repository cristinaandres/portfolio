import type { Metadata } from 'next';
import { JsonLd, projectsSchema } from '@/components/seo/JsonLd';
import { getProjects } from '@/content';
import { siteConfig } from '@/lib/site.config';
import { getViews } from '@/variants/server';

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — ${siteConfig.jobTitle}`,
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    images: ['/twitter-image'],
  },
};

export default async function Home() {
  const { Home } = await getViews();
  return (
    <>
      <JsonLd id="ld-projects" data={projectsSchema()} />
      <Home projects={getProjects()} />
    </>
  );
}
