import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import ActivityGallery from '@/components/activities/ActivityGallery';
import { activityImage, animalCrossingLogo, getActivity } from '@/content';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site.config';

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

const page = () => {
  const animalCrossing = getActivity('animal-crossing')!;
  const backdrop = activityImage(animalCrossing.backdrop);
  const logo = activityImage(animalCrossingLogo);
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
      <div className="relative flex min-h-[100dvh] flex-col items-center gap-10 overflow-hidden bg-[#6E9A8A] px-4 pb-40 pt-28 lg:px-12 lg:pt-36">
        <Image
          src={backdrop.src}
          alt=""
          width={backdrop.width}
          height={backdrop.height}
          sizes="100vw"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
        />
        <h1 className="relative">
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={`${siteConfig.name}'s Animal Crossing creative space`}
            sizes="(min-width: 1024px) 294px, 60vw"
            className="h-auto w-[60vw] max-w-[294px]"
            preload
          />
        </h1>
        <div className="relative flex w-full justify-center">
          <ActivityGallery images={animalCrossing.images} />
        </div>
      </div>
    </>
  );
};

export default page;
