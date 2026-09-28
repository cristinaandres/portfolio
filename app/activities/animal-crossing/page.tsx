import type { Metadata } from 'next';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site.config';
import { getViews } from '@/variants/server';
import { getActivity } from '@/content';

export const metadata: Metadata = {
  title: 'Animal Crossing',
  description: `${siteConfig.name}'s Animal Crossing creative space — a personal showcase of island design, environments and visual storytelling.`,
  alternates: { canonical: '/activities/animal-crossing' },
  openGraph: {
    title: `Animal Crossing · ${siteConfig.name}`,
    description: `${siteConfig.name}'s Animal Crossing creative space.`,
    url: `${siteConfig.url}/activities/animal-crossing`,
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Animal Crossing · ${siteConfig.name}`,
    description: `${siteConfig.name}'s Animal Crossing creative space.`,
    images: ['/twitter-image'],
  },
};

export default async function Page() {
  const { Activity } = await getViews();
  return (
    <>
      <JsonLd
        id="ld-breadcrumb-animalcrossing"
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Activities', path: '/activities' },
          { name: 'Animal Crossing', path: '/activities/animal-crossing' },
        ])}
      />
      <Activity activity={getActivity('animal-crossing')!} />
    </>
  );
}
