'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';

const ImagesGallery = ({ image }: { image: string }) => {
  const [images, setImages] = useState<{ src: string; width: number; height: number }[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/images?folder=${image}`);
        const data = await response.json();
        const imagePaths = data.images.map((filename: string) => ({
          src: filename,
          width: 720,
          height: 405,
        }));
        setImages(imagePaths);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, [image]);

  return (
    <>
      <div className="w-4/5 lg:w-2/3 max-w-[1440px] my-16 md:my-24 lg:my-40 border border-transparent">
        {images.length === 1 ? (
          <Image
            src={images[0].src}
            width={images[0].width}
            height={images[0].height}
            sizes="(min-width: 1440px) 960px, (min-width: 768px) 66vw, 80vw"
            alt="Project image"
            onClick={() => setIndex(0)}
            className="cursor-pointer w-full h-auto"
          />
        ) : (
          <RowsPhotoAlbum
            photos={images}
            targetRowHeight={200}
            spacing={16}
            onClick={({ index }) => setIndex(index)}
          />
        )}
      </div>

      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default ImagesGallery;
