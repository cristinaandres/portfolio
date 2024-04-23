'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Modal from "@/components/Modal";

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import Image from 'next/image';

const Card = ({ bg_color, logo, name, name_color, complete_name, content }: { bg_color: string, logo: string, name: string, name_color: string, complete_name: string, content: string[] }) => {
    const [isModalOpen, setModalOpen] = useState(false);

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

    // useEffect(() => {
    //     const updateBottomValue = () => {
    //         if (ref.current) {
    //             const height = ref.current.offsetHeight;
    //             ref.current.style.setProperty('--bottom-value', `${0.2 * height}px`);
    //         }
    //     };

    //     updateBottomValue();
    //     window.addEventListener('resize', updateBottomValue);

    //     return () => window.removeEventListener('resize', updateBottomValue);
    // }, []);
    const ref = useRef(null);
    const elmnt = document.getElementById("cardID");

    const [bottomValue, setBottomValue] = useState('92px'); // Default value

    useEffect(() => {
        const updateBottomValue = () => {
            if (ref.current) {
                const height = elmnt!.offsetHeight;
                setBottomValue(`${0.2 * height}px`);
            }
        };


        updateBottomValue();
        window.addEventListener('resize', updateBottomValue);

        return () => window.removeEventListener('resize', updateBottomValue);
    }, []);


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

                    <div className="flex items-center justify-center h-full scale-80">
                        <img src={`/images/${logo}`} alt='Logo' className='group-hover:scale-110 transition-all duration-200' onContextMenu={e => e.preventDefault()} />
                    </div>
                    <h2 className={`  uppercase text-xs tracking-[6px] text-center text-${name_color}`}>{name}</h2>

                </div>



                <div className="absolute left-0 w-full bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 w-full  p-4 text-white text-center">
                        <p>{complete_name}</p>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className='flex flex-col gap-4'>
                    {content.map((link, index) => {
                        return (
                            <Image src={`/images/projets/${link}`} alt={'Project content'} key={index}
                                width={1920}
                                height={1080}
                                className="max-w-full h-auto" />
                        )
                    })}
                </div>

            </Modal>
        </>

    )
}

export default Card