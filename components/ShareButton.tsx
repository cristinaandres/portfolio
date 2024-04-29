'use client'
import React from 'react'
import { Modal, useDisclosure } from "@nextui-org/react";
import ModalContentSocials from '@/components/ModalContentSocials'


const ShareButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <button onClick={onOpen} className='uppercase text-white text-xs md:text-[8px] xl:text-xs bg-black rounded-lg py-1 hover:bg-black/75 min-w-24 w-auto md:w-full xl:w-auto'>Share</button>
            <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContentSocials />
            </Modal>
        </>
    )
}

export default ShareButton