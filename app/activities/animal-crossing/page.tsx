import React from 'react';
import Image from 'next/image';
import ImagesGallery from '@/components/ImagesGallery';

const page = () => {
  return (
    <>
      <div className="min-h-[100dvh] bg-animalcrossing-background bg-cover relative flex flex-col justify-start items-center pt-24 lg:pt-32">
        <div className="relative w-[60vw] max-w-[294px] aspect-[294/202] z-20 mb-8 lg:absolute lg:top-1/5 lg:mb-0">
          <Image
            src={'/images/activities/animal-crossing/logo.png'}
            alt="Logo Animal Crossing"
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
