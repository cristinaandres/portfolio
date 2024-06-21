'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import MainLogo from './Logos/MainLogo'
import { usePathname } from 'next/navigation'
import { Modal, useDisclosure } from "@nextui-org/react";
import ModalContentContact from './ModalContentContact'
import classNames from 'classnames';
import { useMenu } from '../context/MenuContext'
import { useNameColor } from '@/context/NameColorContext'
import TransitionLink from './TransitionLink'

const Header = () => {
    const pathname = usePathname();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const { isMenuOpen, toggleMenu } = useMenu();
    const { nameColor } = useNameColor();
    useEffect(() => {
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-30 font-inter py-4 xl:py-0 flex items-center justify-center gap-16 px-4 lg:px-12 bg-transparent ${pathname === '/' ? `text-${nameColor}` : ' text-black'}`}>
                <div className='w-full flex items-center justify-between max-w-[1440px] h-full'>
                    <div className='flex items-center xl:justify-start gap-8 h-full py-4 xl:py-2'>
                        <div className='flex flex-col'>
                            <div className='block xl:hidden z-20'>
                                <button className={classNames(`tham tham-e-squeeze tham-w-6 `, { 'tham-active': isMenuOpen })} onClick={toggleMenu}>
                                    <div className={`tham-box `}>
                                        <div className={`tham-inner  ${isMenuOpen ? 'bg-white' : `bg-${nameColor}`}`} />
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className='mobile'>
                            <div className='flex items-center justify-between gap-6'>
                                <h2 className={`uppercase w-full text-end text-xs font-bold tracking-[12px] order-1`}>Cristina Andrés</h2>
                                <Link href={'/'} className='order-3 xl:order-2'>
                                    <MainLogo nameColor={nameColor} />
                                </Link>
                            </div>
                        </div>

                        <div className='tablet'>
                            <div className='flex items-center justify-between gap-6'>
                                <h2 className='uppercase w-full text-end text-base font-bold tracking-[12px] order-1'>Cristina Andrés</h2>
                                <Link href={'/'} className='order-3 xl:order-2'>
                                    <MainLogo nameColor={pathname === '/' ? nameColor : 'black'} />
                                </Link>
                            </div>
                        </div>

                        <div className='desktop w-full'>
                            <Link href={'/'} className='flex items-center justify-start gap-6'>
                                <div className=''>
                                    <MainLogo nameColor={pathname === '/' ? nameColor : 'black'} />
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='uppercase w-full text-start text-base font-bold tracking-[5px]'>Cristina Andrés</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='gap-10 hidden xl:flex h-[100%] justify-end items-center'>
                        <TransitionLink href={'/'} label={'Work'} nameColor={nameColor} />
                        <TransitionLink href={'/activities'} label={'Activities'} nameColor={nameColor} />
                        <TransitionLink href={'/about'} label={'About me'} nameColor={nameColor} />
                        <button onClick={onOpen} className={`p-2 uppercase text-xs tracking-[6px] hover:font-bold flex items-start gap-2 justify-center text-center transition-[font-weight] duration-300 font-normal rounded-md ${pathname === '/' ? (nameColor === 'black' ? 'bg-black text-white' : 'bg-white text-black') : 'bg-black text-white'} `}>Contact</button>

                        <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContentContact />
                        </Modal>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header