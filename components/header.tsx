'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import MainLogo from './Logos/MainLogo'
import { usePathname } from 'next/navigation'
import { Modal, useDisclosure } from "@nextui-org/react";
import ModalContentContact from './ModalContentContact'
import classNames from 'classnames';
import Menu from './Menu'
import { useMenu } from './context/MenuContext'

const Header = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
      const { isMenuOpen,toggleMenu } = useMenu();
    // const toggleMenu = () => {
    //     setMenuOpen(!isMenuOpen);
    //     toggleBodyScroll(!isMenuOpen);
    //   };

    useEffect(() => {
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <>
            <div className='font-inter w-full bg-white py-4 xl:py-8 flex xl:flex-col items-center justify-center gap-16 transition-all duration-300 z-40'>
                <div className='flex items-center justify-between xl:justify-center gap-8 w-full px-4 md:px-8 transition-all duration-300'>
                    <div className='flex flex-col'>
                        <div className='block xl:hidden z-20'>
                            <button className={classNames(`tham tham-e-squeeze tham-w-6`, { 'tham-active': isMenuOpen })} onClick={toggleMenu}>
                                <div className="tham-box">
                                    <div className="tham-inner" />
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className='mobile'>
                        <div className='flex items-center justify-between gap-6'>
                            <h2 className='uppercase w-full text-end text-xs font-bold tracking-[12px] order-1'>Cristina Andrés</h2>
                            <Link href={'/'} className='order-3 xl:order-2'>
                                <MainLogo />
                            </Link>
                        </div>
                    </div>

                    <div className='tablet'>
                        <div className='flex items-center justify-between gap-6'>
                            <h2 className='uppercase w-full text-end text-base font-bold tracking-[12px] order-1'>Cristina Andrés</h2>
                            <Link href={'/'} className='order-3 xl:order-2'>
                                <MainLogo />
                            </Link>
                        </div>
                    </div>

                    <div className='desktop'>
                        <div className='flex items-center justify-between gap-6'>
                            <h2 className='uppercase w-full text-end text-xs md:text-base xl:text-2xl font-bold tracking-[12px] order-1'>Cristina</h2>
                            <Link href={'/'} className='order-3 xl:order-2'>
                                <MainLogo />
                            </Link>
                            <h2 className='uppercase w-full text-start text-xs md:text-base xl:text-2xl font-bold tracking-[12px] order-2 xl:order-3'>Andrés</h2>
                        </div>
                    </div>
                </div>

                <div className=' gap-16 hidden xl:flex'>
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