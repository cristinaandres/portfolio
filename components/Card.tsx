'use client'
import React, { useCallback, useEffect, useState } from 'react'
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
        [searchParams]
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
    }, [complete_name]);


    return (
        <>
            <div
                style={{
                    backgroundColor: bg_color,
                }}
                className="relative aspect-square flex flex-col justify-center items-center gap-12 group cursor-pointer  size-full sm:size-full md:size-1/2 lg:size-1/3 xl:size-1/4 2xl:size-1/5 3xl:size-1/6 4xl:size-1/7 transition-all duration-250"
                onClick={openModal}
            >
                <div className="border border-black flex items-center justify-center px-8 scale-80">
                    <img src={`/images/${logo}`} alt='Logo' className='group-hover:scale-110 transition-all duration-200' />
                </div>
                <h2
                    className={`absolute bottom-[92px]  uppercase text-xs tracking-[6px] text-center text-${name_color}`}>{name}</h2>

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
                            <img src={`/images/projets/${link}`} alt={'Project content'} key={index} className="max-w-full h-auto" />
                        )
                    })}
                </div>

            </Modal>
        </>

    )
}

export default Card