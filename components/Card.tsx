'use client';
import React, { FC, createRef, useCallback, useEffect, useState } from 'react';
import ModalProjects from '@/components/Modal';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { FaFilePdf } from 'react-icons/fa';
import { CiImageOn } from 'react-icons/ci';
import { FaFile } from 'react-icons/fa';
import Link from 'next/link';
import Video from './Video';
import { useMeasure } from 'react-use';
import ModalMobile from './projects/ModalMobile';

interface CardProps {
  projectProps: {
    background: string;
    logo: string;
    name: string;
    name_color: string;
    complete_name: string;
    content: string[];
    additional_files: boolean;
    files: string[];
  };
  openProject: (index: number | null) => void;
  closeProject: () => void;
  index: number;
}

const Card: FC<CardProps> = ({ projectProps, openProject, closeProject, index }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('project', projectProps.complete_name.toLowerCase());

      return params.toString();
    },
    [searchParams, projectProps.complete_name]
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

  useEffect(() => {
    const project = searchParams.get('project');
    if (project && project === projectProps.complete_name.toLowerCase()) {
      setModalOpen(true);
    }
  }, [searchParams, projectProps.complete_name]);

  const [bottomValue, setBottomValue] = useState('92px');
  const [fontSize, setFontSize] = useState<string>('inherit');
  const [cardRef, { height }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    const calculatedFontSize: string = `${Math.round(0.06 * height * 100) / 100}px`;
    const calculatedBottomValue: string = `${Math.round(0.2 * height * 100) / 100}px`;
    setFontSize(calculatedFontSize);
    setBottomValue(calculatedBottomValue);
  }, [height]);

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
        ref={cardRef}
        id="cardID"
        style={{
          paddingTop: bottomValue,
          paddingBottom: bottomValue,
          backgroundColor: projectProps.background,
        }}
        className="px-8 relative aspect-square flex flex-col justify-end items-center gap-12 group cursor-pointer size-full sm:size-full md:size-1/2 lg:size-1/3 xl:size-1/4 2xl:size-1/5 3xl:size-1/6 4xl:size-1/7 transition-all duration-250"
        onClick={openModal}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex items-center justify-center h-full scale-[.7]">
            <img
              src={`/images/${projectProps.logo}`}
              alt={`${projectProps.complete_name} logo`}
              className="group-hover:scale-110 transition-all duration-200"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <h2
            style={{ fontSize }}
            className={`uppercase tracking-[6px] text-center text-${projectProps.name_color}`}
          >
            {projectProps.name}
          </h2>
        </div>

        <div className="absolute left-0 w-full bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 w-full p-4 text-white font-extrabold text-center">
            <p>{projectProps.complete_name}</p>
          </div>
        </div>
      </div>

      <ModalProjects index={index} isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col">
          {projectProps.content.map((file, index) => {
            const fileParts = file.split('.');
            const fileExtension = fileParts.length > 1 ? (fileParts.pop() as string) : '';
            const isVideo = ['mp4', 'webm'].includes(fileExtension);

            return isVideo ? (
              <Video key={index} videoSrc={file} />
            ) : (
              <Image
                src={`/images/projets/${file}`}
                alt={`${projectProps.complete_name} — visual ${index + 1}`}
                key={index}
                width={1920}
                height={1080}
                sizes="(min-width: 1536px) 1300px, (min-width: 1280px) 1100px, (min-width: 1024px) 900px, (min-width: 768px) 700px, calc(100vw - 2rem)"
                className="max-w-full h-auto"
              />
            );
          })}

          {projectProps.additional_files && (
            <div className="bg-black w-full text-white flex flex-col justify-center items-center text-xl gap-3 pt-8">
              <p className="font-poppins font-bold">Attached files</p>
              <div className="flex gap-4">
                {projectProps.files.map((file, index) => {
                  return (
                    <Link
                      href={`/attached/${file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      className="flex flex-col items-center justify-center gap-2 hover:scale-105 hover:opacity-80 transition-all duration-250"
                    >
                      {getFileIcon(file)}
                      <p className="text-[8px]">{file}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </ModalProjects>
    </>
  );
};

export default Card;
