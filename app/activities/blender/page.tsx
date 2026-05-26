import React from 'react';
import ImagesGallery from '@/components/ImagesGallery';

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-blender-background bg-cover relative flex flex-col justify-start items-center mt-20 pt-12">
        <div className="mb-32">
          <h1 className="absolute font-inter text-[56px] font-bold w-[468px] top-32 left-52">
            Welcome to my 3D corner
          </h1>
        </div>
        <ImagesGallery image={'blender'} />

        {/* <ThreeScene /> */}
      </div>
    </>
  );
};

export default page;
