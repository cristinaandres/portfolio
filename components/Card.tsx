'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Modal from "@/components/Modal";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image';
import { FaFilePdf } from 'react-icons/fa';
import { CiImageOn } from "react-icons/ci";
import { FaFile } from "react-icons/fa";
import Link from 'next/link';
import Video from './Video';

const Card = ({ bg_color, logo, name, name_color, complete_name, content, additional_files, content_files }: { bg_color: string, logo: string, name: string, name_color: string, complete_name: string, content: string[], additional_files: boolean, content_files: string[] }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [contentFiles, setContentFiles] = useState<string[]>(content_files);
    const [showAdditionalFiles, setShowAdditionalFiles] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set("project", complete_name.toLowerCase());

            return params.toString()
        },
        [searchParams, complete_name]
    )


    const openModal = () => {
        setModalOpen(true);
        router.push(pathname + '?' + createQueryString('sort', 'asc'))
    };

    const closeModal = () => {
        setModalOpen(false);
        const params = new URLSearchParams(searchParams.toString())
        params.delete("project");
        const url = `${pathname}`
        router.push(url, undefined);
    };

    useEffect(() => {
        const project = searchParams.get('project')
        if (project && project === complete_name.toLowerCase()) {
            setModalOpen(true);
        }
    }, [searchParams, complete_name]);

    let elmnt = null;

    useEffect(() => {
        elmnt = document.getElementById("cardID");
    })

    const [bottomValue, setBottomValue] = useState('92px');
    const [fontSize, setFontSize] = useState('12px')

    useEffect(() => {
        const updateBottomValue = () => {
            const height = elmnt!.offsetHeight;
            setFontSize(`${0.03 * height}px`);
            setBottomValue(`${0.2 * height}px`);
        };


        updateBottomValue();
        window.addEventListener('resize', updateBottomValue);

        return () => window.removeEventListener('resize', updateBottomValue);
    }, []);

    // Function to select an icon based on the file extension
    const getFileIcon = (filename: string) => {
        const extension = filename.split('.').pop();
        switch (extension) {
            case 'pdf':
                return <FaFilePdf size={25} />;
            case 'png':
                return <CiImageOn size={25} />;
            case 'jpg':
                return <CiImageOn size={25} />;
            case 'jpeg':
                return <CiImageOn size={25} />;
            case 'gif':
                return <CiImageOn size={25} />;
            default:
                return <FaFile size={25} />;
        }
    };

    return (
        <>
            <div
                style={{
                    paddingTop: bottomValue,
                    paddingBottom: bottomValue,
                    backgroundColor: bg_color,
                }}
                className="px-8 relative aspect-square flex flex-col justify-end items-center gap-12 group cursor-pointer size-full sm:size-full md:size-1/2 lg:size-1/3 xl:size-1/4 2xl:size-1/5 3xl:size-1/6 4xl:size-1/7 transition-all duration-250"
                onClick={openModal}
                id="cardID"
            >
                <div className='h-full flex flex-col justify-between'>
                    <div className="flex items-center justify-center h-full scale-[.7]">
                        <img src={`/images/${logo}`} alt='Logo' className='group-hover:scale-110 transition-all duration-200' onContextMenu={e => e.preventDefault()} />
                    </div>

                    <h2
                        style={{
                            fontSize: fontSize
                        }}
                        className={`uppercase tracking-[6px] text-center text-${name_color}`}>{name}</h2>
                </div>


                <div className="absolute left-0 w-full bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 w-full p-4 text-white font-extrabold text-center">
                        <p>{complete_name}</p>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className='flex flex-col'>
                    {content.map((file, index) => {
                        const fileParts = file.split('.');
                        const fileExtension = fileParts.length > 1 ? fileParts.pop() as string : ''; // Safely handling the file extension
                        const isVideo = ['mp4', 'webm'].includes(fileExtension);

                        return isVideo ? (
                            <Video key={index} videoSrc={file} />
                        ) : (
                            <Image
                                src={`/images/projets/${file}`}
                                alt={'Project content'}
                                key={index}
                                width={1920}
                                height={1080}
                                className="max-w-full h-auto"
                            />
                        );
                    })}
                                        
                    {additional_files && (
                        <div className='bg-black w-full text-white flex flex-col justify-center items-center text-xl gap-3 pt-8'>
                            <p className='font-poppins font-bold'>Attached files</p>
                            <div className='flex gap-4'>
                                {
                                    content_files.map((file, index) => {
                                        return (
                                            <Link href={`/attached/${file}`} target='_blank' key={index} className='flex flex-col items-center justify-center gap-2 hover:scale-105 hover:opacity-80 transition-all duration-250'>
                                                {getFileIcon(file)}
                                                <p className='text-[8px]'>{file}</p>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        </>

    )
}

export default Card