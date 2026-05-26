import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import ImagesGallery from '@/components/ImagesGallery';
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
      <h1 className="sr-only">{siteConfig.name}&apos;s Animal Crossing creative space</h1>
      <div className="min-h-[100dvh] bg-animalcrossing-background bg-cover relative flex flex-col justify-start items-center pt-24 lg:pt-32">
        <div className="relative w-[60vw] max-w-[294px] aspect-[294/202] z-20 mb-8 lg:absolute lg:top-1/5 lg:mb-0">
          <Image
            src={'/images/activities/animal-crossing/logo.png'}
            alt="Animal Crossing logo"
            fill
            sizes="(min-width: 1024px) 294px, 60vw"
            className="object-contain"
            priority
          />
        </div>
        <ImagesGallery image={'animal-crossing'} />
      </div>
    </>
  );
};

export default page;
