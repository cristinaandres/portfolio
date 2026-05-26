import React from 'react';
import Image from 'next/image';
import ImagesGallery from '@/components/ImagesGallery';

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-animalcrossing-background bg-cover relative flex flex-col justify-start items-center mt-20 pt-12">
        <div className="absolute top-1/5 z-20">
          <Image
            src={'/images/activities/animal-crossing/logo.png'}
            alt="Logo Animal Crossing"
            width={294}
            height={202}
          />
        </div>
        <ImagesGallery image={'animal-crossing'} />
      </div>
    </>
  );
};

export default page;
