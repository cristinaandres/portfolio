'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import PhotoAlbum from 'react-photo-album';


const ImagesGallery = () => {
    const [open, setOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const folderName = 'showcase';
                const response = await fetch(`/api/images?folder=${folderName}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const imagePaths = data.map((filename: string) => ({
                    src: `/images/activities/animal-crossing/showcase/${filename}`,
                    width: 720,
                    height: 405
                }));

                console.log(imagePaths);
                setImages(imagePaths);
            } catch (error) {
                console.error('Failed to fetch images:', error);
            }
        };

        fetchImages();
    }, []);


    return (
        <>
            <div className='min-h-screen bg-animalcrossing-background bg-cover relative flex flex-col justify-start items-center'>
                <div className='absolute top-1/5 z-20'>
                    <Image src={'/images/activities/animal-crossing/logo.png'} alt='Logo Animal Crossing' width={294} height={202} />
                </div>
                <div className='w-2/3 my-40'>
                    <PhotoAlbum photos={images} layout="rows" targetRowHeight={200} spacing={16} onClick={({ index }) => setIndex(index)} />
                </div>

                <Lightbox
                    slides={images}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </div>
        </>
    )
}

export default ImagesGallery