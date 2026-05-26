import React from 'react';
import type { Metadata } from 'next';
import ImagesGallery from '@/components/ImagesGallery';
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
      <div className="min-h-[100dvh] bg-blender-background bg-cover relative flex flex-col justify-start items-center pt-24 lg:pt-32 px-4 lg:px-12">
        <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-[56px] leading-tight max-w-[20ch] text-center lg:text-left lg:absolute lg:top-32 lg:left-52 lg:w-[468px]">
          Welcome to my 3D corner
        </h1>
        <ImagesGallery image={'blender'} />
      </div>
    </>
  );
};

export default page;
