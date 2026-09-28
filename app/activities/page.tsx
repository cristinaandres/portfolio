import type { Metadata } from 'next';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site.config';
import { getViews } from '@/variants/server';
import { getActivities } from '@/content';

export const metadata: Metadata = {
  title: 'Activities',
  description: `Personal projects and creative side-quests by ${siteConfig.name} — 3D modeling in Blender and Animal Crossing island design.`,
  alternates: { canonical: '/activities' },
  openGraph: {
    title: `Activities · ${siteConfig.name}`,
    description: `Personal projects and creative side-quests by ${siteConfig.name}.`,
    url: `${siteConfig.url}/activities`,
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Activities · ${siteConfig.name}`,
    description: `Personal projects and creative side-quests by ${siteConfig.name}.`,
    images: ['/twitter-image'],
  },
};

export default async function Page() {
  const { Activities } = await getViews();
  return (
    <>
      <JsonLd
        id="ld-breadcrumb-activities"
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Activities', path: '/activities' },
        ])}
      />
      <Activities activities={getActivities()} />
    </>
  );
}
