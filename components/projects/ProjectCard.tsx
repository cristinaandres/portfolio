import Link from 'next/link';
import React, { useEffect, useState, CSSProperties, useCallback } from 'react';
import { useNameColor } from '@/context/NameColorContext';
import projects from '@/public/json/projets.json';
import ModalProjects from '@/components/Modal';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Video from '../Video';
import Image from 'next/image';
import { CiImageOn } from 'react-icons/ci';
import { FaFilePdf, FaFile } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ProjectCardProps, ProjectProps } from '@/utils/types';


const ProjectCard: React.FC<ProjectCardProps> = ({
    currentIndex,
    openProject,
    closeProject,
    setIndex,
}) => {
    const [animate, setAnimate] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [project, setProject] = useState<ProjectProps>(projects[0]);
    const { setNameColor } = useNameColor();

    useEffect(() => {
        setAnimate(true);
        setProject(projects[currentIndex]);
        setNameColor(projects[currentIndex].name_color);
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
            const params = new URLSearchParams(searchParams.toString());
            params.set('project', project.complete_name.toLowerCase());

            return params.toString();
        },
        [searchParams, project.complete_name]
    );

    const openModal = () => {
        setModalOpen(true);
        openProject(null);
        router.push(pathname + '?' + createQueryString('sort', 'asc'));
    };

    const closeModal = () => {
        setModalOpen(false);
        closeProject();
        const params = new URLSearchParams(searchParams.toString());
        params.delete('project');
        const url = `${pathname}`;
        router.push(url, undefined);
    };

    const getFileIcon = (filename: string) => {
        const extension = filename.split('.').pop();
        switch (extension) {
            case 'pdf':
                return <FaFilePdf size={25} />;
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'gif':
                return <CiImageOn size={25} />;
            default:
                return <FaFile size={25} />;
        }
    };

    const isColor = project.background.startsWith('#') || project.background.startsWith('rgb');
    const backgroundStyle: CSSProperties = isColor
        ? { backgroundColor: project.background }
        : { position: 'relative' };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    return (
        <div className="flex flex-col items-center justify-center h-[100dvh]" style={backgroundStyle}>
            {!isColor && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/projets/backgrounds/${project.background})` }}
                ></div>
            )}
            {!isColor && <div className="absolute inset-0 bg-black opacity-50"></div>}
            <div className={`relative z-10 flex flex-col items-center text-${project.name_color} `}>
                <div
                    onClick={openModal}
                    className={`font-bodoni uppercase text-2xl md:text-4xl xl:text-[80px] text-center font-bold cursor-pointer transition-all duration-300 hover:text-[#FF73F9] ${animate ? 'slide-in-from-top' : ''}`}
                >
                    {project.title}
                </div>
                <div className='font-poppins mt-10 flex gap-5 justify-center'>
                    <p>{project.year}</p>
                    <p className='max-w-[180px]'>{project.description}</p>
                </div>
                <span className={`w-fit px-5 py-2 mt-24 rounded-full border border-${project.name_color} ${animate ? 'slide-in-from-top' : ''}`}>{project.label}</span>
            </div>

            <div className="absolute bottom-4 flex flex-col items-center justify-center group z-10 h-20">
                <motion.div
                    className="hidden group-hover:flex gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {Array.from({ length: projects.length }, (_, i) => (
                        <motion.div
                            key={i}
                            onClick={() => setIndex(i)}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                backgroundColor: currentIndex === i ? 'transparent' : projects[i].card_color,
                                borderColor: currentIndex === i ? '#FF73F9' : 'transparent',
                                borderWidth: currentIndex === i ? '1px' : '0',
                            }}
                            className={`transition-all duration-300 rounded-md ease-in-out w-[120px] h-20 flex items-center justify-center relative px-4 cursor-pointer`}
                            variants={itemVariants}
                        >
                            <Image
                                src={'/images/' + projects[i].logo}
                                alt='Logo of the project'
                                fill
                                objectFit='contain'
                                style={{
                                    opacity: currentIndex === i ? 0 : 100,
                                }}
                                className='scale-80'
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex items-center space-x-1 gap-4 group-hover:hidden" style={{ color: project.name_color }}>
                    <span>{currentIndex + 1}</span>
                    <div className="flex space-x-1 gap-1">
                        {Array.from({ length: projects.length }, (_, i) => (
                            <span
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`block h-4 rounded-sm transition-width duration-[2s] ease-in-out ${i === currentIndex ? 'border-2 border-[#FF73F9] w-6 ' : 'w-0.5'
                                    }`}
                                style={{ backgroundColor: i === currentIndex ? '' : project.name_color }}
                            ></span>
                        ))}
                    </div>
                    <span>{projects.length}</span>
                </div>
            </div>

            <ModalProjects index={currentIndex} isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex flex-col">
                    {project.content.map((file, index) => {
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

                    {project.additional_files && (
                        <div className="bg-black w-full text-white flex flex-col justify-center items-center text-xl gap-3 pt-8">
                            <p className="font-poppins font-bold">Attached files</p>
                            <div className="flex gap-4">
                                {project.files.map((file, index) => (
                                    <Link
                                        href={`/attached/${file}`}
                                        target="_blank"
                                        key={index}
                                        className="flex flex-col items-center justify-center gap-2 hover:scale-105 hover:opacity-80 transition-all duration-250"
                                    >
                                        {getFileIcon(file)}
                                        <p className="text-[8px]">{file}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </ModalProjects>
        </div>
    );
};

export default ProjectCard;
