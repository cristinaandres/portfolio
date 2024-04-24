'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import MainLogo from './Logos/MainLogo'
import { usePathname } from 'next/navigation'
import { Modal, useDisclosure } from "@nextui-org/react";
import ModalContentContact from './ModalContentContact'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { IoMenu } from "react-icons/io5";


const Header = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>

            <div className='font-inter w-full bg-white py-4 lg:py-8 flex lg:flex-col items-center justify-center gap-16 transition-all duration-300'>
                <div className='flex items-center justify-between lg:justify-center gap-8 w-full px-8  transition-all duration-300'>
                    <div className='block lg:hidden'>
                        <IoMenu size={52} />
                    </div>

                    <div className='flex items-center justify-between gap-6'>
                        <h2 className='uppercase w-full text-end text-base lg:text-2xl font-bold tracking-[12px] order-1'>Cristina</h2>
                        <Link href={'/'} className='order-3 lg:order-2'>
                            <MainLogo />
                        </Link>
                        <h2 className='uppercase w-full text-start text-base lg:text-2xl font-bold tracking-[12px] order-2 lg:order-3'>Andrés</h2>
                    </div>

                </div>

                <div className=' gap-16 hidden lg:flex'>
                    <Link href={'/'} className={`pb-1 uppercase text-xs tracking-[6px] hover:border-b hover:border-black  transition-all duration-300 ${isActive('/') ? 'font-bold' : 'font-normal'}`}>Work</Link>
                    <Link href={'/services'} className={`pb-1 uppercase text-xs tracking-[6px] hover:border-b hover:border-black transition-all duration-300 ${isActive('/services') ? 'font-bold' : 'font-normal'}`}>Services</Link>
                    <Link href={'/about'} className={`pb-1 uppercase text-xs tracking-[6px] hover:border-b hover:border-black transition-all duration-300 ${isActive('/about') ? 'font-bold' : 'font-normal'}`}>About me</Link>
                    <button onClick={onOpen} className='pb-1 uppercase text-xs tracking-[6px] hover:border-b hover:border-black transition-all duration-300 font-normal'>Contact</button>
                    <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContentContact />
                    </Modal>
                </div>

            </div>
        </>
    )
}

export default Header