'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MainLogo from './Logos/MainLogo';
import { usePathname } from 'next/navigation';
import { Modal, useDisclosure } from '@heroui/react';
import ModalContentContact from './ModalContentContact';
import classNames from 'classnames';
import { useMenu } from '../context/MenuContext';
import { useNameColor } from '@/context/NameColorContext';
import TransitionLink from './TransitionLink';

const Header = () => {
  const pathname = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { isMenuOpen, toggleMenu } = useMenu();
  const { nameColor } = useNameColor();
  const [color, setColor] = useState<string>('white');
  useEffect(() => {
    setColor(pathname === '/' ? (nameColor === 'black' ? 'white' : 'black') : 'white');
    console.log(pathname);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [nameColor, pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-30 font-inter pt-[max(env(safe-area-inset-top),1rem)] pb-4 xl:pb-0 xl:pt-[env(safe-area-inset-top)] flex items-center justify-center gap-16 px-4 lg:px-12 bg-transparent ${pathname === '/' ? `text-${nameColor}` : ' text-black'}`}
      >
        <div className="w-full flex items-center justify-between max-w-[1440px] h-full">
          <div className="flex items-center xl:justify-start gap-8 h-full py-4 xl:py-2">
            <div className="flex flex-col">
              <div className="block xl:hidden z-20">
                <button
                  className={classNames(`tham tham-e-squeeze tham-w-6 `, {
                    'tham-active': isMenuOpen,
                  })}
                  onClick={toggleMenu}
                >
                  <div className={`tham-box `}>
                    <div className={`tham-inner  ${isMenuOpen ? 'bg-white' : `bg-${nameColor}`}`} />
                  </div>
                </button>
              </div>
            </div>

            <div className="mobile">
              <div className="flex items-center justify-between gap-6">
                <h2
                  className={`uppercase w-full text-end text-xs font-bold tracking-[12px] order-1`}
                >
                  Cristina Andrés
                </h2>
                <Link href={'/'} className="order-3 xl:order-2">
                  <MainLogo nameColor={nameColor} />
                </Link>
              </div>
            </div>

            <div className="tablet">
              <div className="flex items-center justify-between gap-6">
                <h2 className="uppercase w-full text-end text-base font-bold tracking-[12px] order-1">
                  Cristina Andrés
                </h2>
                <Link href={'/'} className="order-3 xl:order-2">
                  <MainLogo nameColor={pathname === '/' ? nameColor : 'black'} />
                </Link>
              </div>
            </div>

            <div className="desktop w-full">
              <Link href={'/'} className="flex items-center justify-start gap-6">
                <div className="">
                  <MainLogo nameColor={pathname === '/' ? nameColor : 'black'} />
                </div>
                <div className="flex flex-col">
                  <h2 className="uppercase w-full text-start text-base font-bold tracking-[5px]">
                    Cristina Andrés
                  </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="gap-10 hidden xl:flex h-[100%] justify-end items-center">
            <TransitionLink href={'/'} label={'Work'} nameColor={nameColor} />
            <TransitionLink href={'/activities'} label={'Activities'} nameColor={nameColor} />
            {/* <TransitionLink href={'/about'} label={'About me'} nameColor={nameColor} /> */}
            <button
              onClick={() => window.open('/pdf/CV.pdf', '_blank', 'noopener,noreferrer')}
              className={`px-4 py-1 uppercase text-xs hover:font-bold focus-visible:outline-2 focus-visible:outline-current flex items-center gap-2 justify-between text-center transition-[font-weight] duration-300 font-normal rounded-md ${pathname === '/' ? (nameColor === 'black' ? 'bg-black text-white' : 'bg-white text-black') : 'bg-black text-white'} `}
            >
              <span>CV</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill={color}
              >
                <path
                  d="M6.0024 10.5758C5.93961 10.5757 5.87755 10.5623 5.82026 10.5366C5.76297 10.5108 5.71173 10.4734 5.66987 10.4266L1.48121 5.78149C1.42365 5.71714 1.38593 5.63753 1.37257 5.55223C1.35922 5.46693 1.37082 5.3796 1.40596 5.30074C1.4411 5.22188 1.49828 5.15486 1.57063 5.10775C1.64299 5.06064 1.72741 5.03546 1.81375 5.03522H3.49106V0.947761C3.49106 0.829008 3.53823 0.715118 3.62221 0.631146C3.70618 0.547175 3.82007 0.5 3.93882 0.5H8.06718C8.18593 0.5 8.29982 0.547175 8.3838 0.631146C8.46777 0.715118 8.51494 0.829008 8.51494 0.947761V5.03403H10.1914C10.2777 5.03426 10.3621 5.05945 10.4345 5.10655C10.5068 5.15366 10.564 5.22068 10.5992 5.29954C10.6343 5.3784 10.6459 5.46574 10.6325 5.55103C10.6192 5.63633 10.5815 5.71595 10.5239 5.7803L6.33494 10.4278C6.29297 10.4743 6.24168 10.5116 6.1844 10.5371C6.12711 10.5626 6.06511 10.5758 6.0024 10.5758ZM2.82031 5.92955L6.0024 9.4594L9.18479 5.92955H8.06718C7.94843 5.92955 7.83454 5.88238 7.75056 5.79841C7.66659 5.71443 7.61942 5.60054 7.61942 5.48179V1.39552H4.38658V5.48179C4.38658 5.60054 4.33941 5.71443 4.25544 5.79841C4.17146 5.88238 4.05757 5.92955 3.93882 5.92955H2.82031Z"
                  fill={color}
                />
                <path
                  d="M10.051 12.4971H1.94925C1.4325 12.4965 0.937067 12.291 0.571639 11.9256C0.206212 11.5603 0.000632108 11.0649 0 10.5481V9.4087C0 9.28995 0.0471747 9.17606 0.131146 9.09208C0.215118 9.00811 0.329007 8.96094 0.447761 8.96094C0.566515 8.96094 0.680405 9.00811 0.764376 9.09208C0.848348 9.17606 0.895522 9.28995 0.895522 9.4087V10.5481C0.895917 10.8274 1.00707 11.0952 1.20461 11.2927C1.40214 11.4901 1.66994 11.6012 1.94925 11.6015H10.051C10.3303 11.6012 10.5981 11.4901 10.7956 11.2926C10.9931 11.0952 11.1042 10.8274 11.1045 10.5481V9.4087C11.1045 9.28995 11.1517 9.17606 11.2356 9.09208C11.3196 9.00811 11.4335 8.96094 11.5522 8.96094C11.671 8.96094 11.7849 9.00811 11.8689 9.09208C11.9528 9.17606 12 9.28995 12 9.4087V10.5481C11.9994 11.0648 11.7938 11.5602 11.4285 11.9255C11.0631 12.2909 10.5677 12.4964 10.051 12.4971Z"
                  fill={color}
                />
              </svg>
            </button>
            <button
              onClick={onOpen}
              className={`px-3 py-1 uppercase text-xs hover:font-bold focus-visible:outline-2 focus-visible:outline-current flex items-center gap-2 justify-between text-center transition-[font-weight] duration-300 font-normal rounded-md ${pathname === '/' ? (nameColor === 'black' ? 'bg-black text-white' : 'bg-white text-black') : 'bg-black text-white'} `}
            >
              <span>Contact</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill={color}
              >
                <g clipPath="url(#clip0_269_1850)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.4375 5.625V7.875C8.4375 8.49632 7.93382 9 7.3125 9H1.125C0.50368 9 0 8.49632 0 7.875V1.6875C0 1.06618 0.50368 0.5625 1.125 0.5625H3.375V1.6875H1.125V7.875H7.3125V5.625H8.4375ZM7.87337 1.9205L4.33362 5.46025L3.53812 4.66475L7.07787 1.125H5.06087V0H8.99837V3.9375H7.87337V1.9205Z"
                    fill={color}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_269_1850">
                    <rect width="9" height="9" fill={color} />
                  </clipPath>
                </defs>
              </svg>
            </button>

            <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContentContact />
            </Modal>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
