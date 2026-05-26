import React from 'react';
import ImagesGallery from '@/components/ImagesGallery';

const page = () => {
  return (
    <>
      <div className="min-h-[100dvh] bg-blender-background bg-cover relative flex flex-col justify-start items-center pt-24 lg:pt-32 px-4 lg:px-12">
        <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-[56px] leading-tight max-w-[20ch] text-center lg:text-left lg:absolute lg:top-32 lg:left-52 lg:w-[468px]">
          Welcome to my 3D corner
        </h1>
        <ImagesGallery image={'blender'} />

        {/* <ThreeScene /> */}
      </div>
    </>
  );
};

export default page;
