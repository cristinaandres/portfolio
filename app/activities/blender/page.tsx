import type { Metadata } from 'next';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site.config';
import { getViews } from '@/variants/server';
import { getActivity } from '@/content';

export const metadata: Metadata = {
  title: '3D Modeling in Blender',
  description: `Personal 3D modeling experiments by ${siteConfig.name} created in Blender — exploring form, lighting and material studies.`,
  alternates: { canonical: '/activities/blender' },
  openGraph: {
    title: `3D Modeling in Blender · ${siteConfig.name}`,
    description: `Personal 3D modeling experiments by ${siteConfig.name} created in Blender.`,
    url: `${siteConfig.url}/activities/blender`,
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `3D Modeling in Blender · ${siteConfig.name}`,
    description: `Personal 3D modeling experiments by ${siteConfig.name} created in Blender.`,
    images: ['/twitter-image'],
  },
};

export default async function Page() {
  const { Activity } = await getViews();
  return (
    <>
      <JsonLd
        id="ld-breadcrumb-blender"
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Activities', path: '/activities' },
          { name: '3D Modeling', path: '/activities/blender' },
        ])}
      />
      <Activity activity={getActivity('blender')!} />
    </>
  );
}
