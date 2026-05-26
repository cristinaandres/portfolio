import React from 'react';
import Image from 'next/image';
import instagram from '@/public/images/instagram.svg';
const Instagram = () => {
  return (
    <>
      <Image src={instagram} alt="log Instagram " width={32} height={32} />
    </>
  );
};

export default Instagram;
