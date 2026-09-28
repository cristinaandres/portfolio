import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import ActivityGallery from '@/components/activities/ActivityGallery';
import { activityImage, getActivity } from '@/content';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site.config';

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

const page = () => {
  const blender = getActivity('blender')!;
  const backdrop = activityImage(blender.backdrop);
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
      <div className="relative flex min-h-[100dvh] flex-col items-center gap-12 overflow-hidden bg-white px-4 pb-48 pt-28 lg:px-12 lg:pt-36">
        <Image
          src={backdrop.src}
          alt=""
          width={backdrop.width}
          height={backdrop.height}
          sizes="100vw"
          className="pointer-events-none absolute bottom-0 left-0 h-auto w-full"
        />
        <h1 className="relative font-inter font-bold text-3xl sm:text-4xl lg:text-[56px] leading-tight max-w-[20ch] text-center">
          Welcome to my 3D corner
        </h1>
        <div className="relative flex w-full justify-center">
          <ActivityGallery images={blender.images} />
        </div>
      </div>
    </>
  );
};

export default page;
