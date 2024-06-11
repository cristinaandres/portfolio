import Link from 'next/link';
import React, { useEffect, useState, CSSProperties, useCallback } from 'react';
import { useNameColor } from '@/context/NameColorContext';
import ModalProjects from "@/components/Modal";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Video from '../Video';
import Image from 'next/image';
import { CiImageOn } from 'react-icons/ci';
import { FaFilePdf, FaFile } from 'react-icons/fa';

type ProjectProps = {
    slug: string;
    bgColor: string;
    logo: string;
    completeName: string;
    name: string;
    nameColor: string;
    paddingTop: number;
    content: string[];
    currentIndex: number;
    totalProjects: number;
    additional_files: boolean;
    files: string[];
    openProject: (index: number | null) => void;
    closeProject: () => void;
};

const ProjectCard: React.FC<ProjectProps> = ({
    slug,
    bgColor,
    logo,
    completeName,
    name,
    nameColor,
    paddingTop,
    content,
    currentIndex,
    totalProjects,
    additional_files,
    files,
    openProject,
    closeProject,
}) => {

    const [animate, setAnimate] = useState(false);
    const { setNameColor } = useNameColor();

    useEffect(() => {
        setAnimate(true);
        setNameColor(nameColor);
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const [isModalOpen, setModalOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set("project", completeName.toLowerCase());

            return params.toString()
        },
        [searchParams, completeName]
    )

    const openModal = () => {
        setModalOpen(true);
        openProject(null);
        router.push(pathname + '?' + createQueryString('sort', 'asc'))
    };

    const closeModal = () => {
        setModalOpen(false);
        closeProject();
        const params = new URLSearchParams(searchParams.toString())
        params.delete("project");
        const url = `${pathname}`
        router.push(url, undefined);
    };

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


    // Determine if bgColor is a color or an image URL
    const isColor = bgColor.startsWith('#') || bgColor.startsWith('rgb');
    const backgroundStyle: CSSProperties = isColor
        ? { backgroundColor: bgColor }
        : { position: 'relative' };
    return (
        <div className="flex flex-col items-center justify-center h-[100dvh]" style={backgroundStyle}>
            {!isColor && (
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/images/projets/backgrounds/${bgColor})` }}></div>
            )}
            {!isColor && (
                <div className="absolute inset-0 bg-black opacity-50"></div>
            )}
            <div className="overflow-hidden text-4xl font-bold uppercase relative z-10">
                <div
                    onClick={openModal}
                    className={`text-2xl md:text-4xl xl:text-6xl text-center font-bold cursor-pointer transition-all duration-300 text-${nameColor} hover:text-pink-500 ${animate ? 'slide-in-from-top' : ''}`}
                >
                    {completeName}
                </div>
            </div>

            <div className="absolute bottom-4 text-white flex items-center space-x-1 gap-4 z-10" style={{ color: nameColor }}>
                <span>{currentIndex + 1}</span>
                <div className="flex space-x-1 gap-1">
                    {Array.from({ length: totalProjects }, (_, i) => (
                        <span
                            key={i}
                            className={`block h-4 rounded-sm transition-width duration-[2s] ease-in-out ${i === currentIndex ? 'border-2 border-pink-500 w-6 ' : 'w-0.5'
                                }`}
                            style={{ backgroundColor: i === currentIndex ? '' : nameColor }}
                        ></span>
                    ))}
                </div>
                <span>{totalProjects}</span>
            </div>


            <ModalProjects index={currentIndex} isOpen={isModalOpen} onClose={closeModal}>
                <div className='flex flex-col'>
                    {content.map((file, index) => {
                        const fileParts = file.split('.');
                        const fileExtension = fileParts.length > 1 ? fileParts.pop() as string : '';
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
                                    files.map((file, index) => {
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
            </ModalProjects>

        </div>
    );
};

export default ProjectCard;
