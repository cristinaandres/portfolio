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

    const { isMenuOpen, toggleMenu } = useMenu();
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
            <div className='font-inter w-full bg-transparent py-4 xl:py-0 flex items-center justify-center gap-16 px-4 lg:px-12 transition-all duration-300 z-40'>
                <div className='w-full flex items-end justify-between max-w-[1440px] h-full'>
                    <div className='flex items-center xl:justify-start gap-8 h-full py-4 xl:py-2 transition-all duration-300'>
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

                        <div className='desktop w-full'>
                            <Link href={'/'} className='flex items-center justify-start gap-6'>
                                <div className=''>
                                    <MainLogo />
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='uppercase w-full text-start text-base font-bold tracking-[5px]'>Cristina Andrés</h2>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='gap-16 hidden xl:flex h-full justify-end items-center'>
                        <Link href={'/'} className={`pb-1 uppercase text-xs tracking-[6px] hover:font-bold flex items-end transition-all duration-300 ${isActive('/') ? 'border-b-4 border-black font-bold' : 'border-none font-normal'}`}>Work</Link>
                        <Link href={'/activities'} className={`pb-1 uppercase text-xs tracking-[6px] hover:font-bold flex items-end transition-all duration-300 ${isActive('/activities') ? 'border-b-4 border-black font-bold' : 'border-none font-normal'}`}>Activities</Link>
                        <Link href={'/services'} className={`pb-1 uppercase text-xs tracking-[6px] hover:font-bold flex items-end transition-all duration-300 ${isActive('/services') ? 'border-b-4 border-black font-bold' : 'border-none font-normal'}`}>Services</Link>
                        <Link href={'/about'} className={`pb-1 uppercase text-xs tracking-[6px] hover:font-bold flex items-end transition-all duration-300 ${isActive('/about') ? 'border-b-4 border-black font-bold' : ' border-none font-normal'}`}>About me</Link>
                        <button onClick={onOpen} className='pb-1 uppercase text-xs tracking-[6px] hover:font-bold flex items-end transition-all duration-300 font-normal'>Contact</button>
                        <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContentContact />
                        </Modal>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header