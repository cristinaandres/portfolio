'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== '/' && (
        <div className="fixed bottom-0 left-0 z-20 font-inter flex flex-col w-full bg-transparent p-4 md:p-12 xl:px-16 xl:py-6 pb-[max(env(safe-area-inset-bottom),1rem)] gap-4">
          <div className="w-full flex justify-between items-end">
            <div className="flex gap-8 h-full justify-end items-center w-full">
              <Link
                href={
                  'https://www.behance.net/cristinaandrs?tracking_source=userSearchProfilePanel'
                }
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M19.1881 12.3477C17.4999 12.3477 17.2654 14.0928 17.2654 14.0928H20.8545C20.8545 14.0928 20.8774 12.3477 19.1881 12.3477Z"
                    fill="black"
                  />
                  <path
                    d="M11.0451 14.093H7.8634V17.1184H10.6802C10.7281 17.1184 10.7999 17.1195 10.8839 17.1184C11.3371 17.1074 12.1961 16.9708 12.1961 15.6476C12.1961 14.077 11.0451 14.093 11.0451 14.093Z"
                    fill="black"
                  />
                  <path
                    d="M14.038 0.142578C6.8044 0.142578 0.94043 6.21488 0.94043 13.7068C0.94043 21.1987 6.8044 27.2721 14.038 27.2721C21.2705 27.2721 27.1344 21.1987 27.1344 13.7068C27.1344 6.21543 21.2699 0.142578 14.038 0.142578ZM16.7947 8.47732H21.3034V9.87103H16.7947V8.47732ZM14.5156 15.7885C14.5156 19.2431 11.0451 19.129 11.0451 19.129H7.86337H7.77029H5.35822V7.81076H7.77029H7.86337H11.0451C12.7726 7.81076 14.1364 8.79903 14.1364 10.824C14.1364 12.8491 12.4689 12.978 12.4689 12.978C14.6672 12.978 14.5156 15.7885 14.5156 15.7885ZM22.9501 15.6034H17.2872C17.2872 17.7056 19.21 17.5734 19.21 17.5734C21.0258 17.5734 20.9625 16.3554 20.9625 16.3554H22.8863C22.8863 19.5874 19.1456 19.3659 19.1456 19.3659C14.6587 19.3659 14.9475 15.0388 14.9475 15.0388C14.9475 15.0388 14.9432 10.6907 19.1456 10.6907C23.5692 10.6907 22.9501 15.6034 22.9501 15.6034Z"
                    fill="black"
                  />
                  <path
                    d="M11.8179 10.9997C11.8179 9.82251 11.0451 9.82251 11.0451 9.82251H10.6356H7.8634V12.3477H10.8478C11.3626 12.3477 11.8179 12.1764 11.8179 10.9997Z"
                    fill="black"
                  />
                </svg>
              </Link>

              <Link href={'https://www.linkedin.com/in/cristinaandrs/'} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <g clipPath="url(#clip0_6_7879)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 0.486328C21.7268 0.486328 28 6.75953 28 14.4863C28 22.2131 21.7268 28.4863 14 28.4863C6.2732 28.4863 0 22.2131 0 14.4863C0 6.75953 6.2732 0.486328 14 0.486328ZM9.62298 22.3543V11.4211H5.98823V22.3543H9.62298ZM22.7272 22.3543V16.0846C22.7272 12.7263 20.9342 11.164 18.5431 11.164C16.6151 11.164 15.7515 12.2243 15.2679 12.9691V11.4211H11.6341C11.6823 12.4469 11.6341 22.3543 11.6341 22.3543H15.2679V16.2484C15.2679 15.9216 15.2914 15.5949 15.3877 15.3613C15.6499 14.7086 16.2483 14.0325 17.2523 14.0325C18.5666 14.0325 19.0932 15.0354 19.0932 16.5046V22.3543H22.7272ZM7.83016 6.14922C6.58656 6.14922 5.77407 6.9668 5.77407 8.0384C5.77407 9.08741 6.56184 9.92752 7.78203 9.92752H7.80549C9.07288 9.92752 9.86174 9.08741 9.86174 8.0384C9.83823 6.9668 9.07293 6.14922 7.83016 6.14922Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_7879">
                      <rect width="28" height="28" fill="black" transform="translate(0 0.486328)" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center text-[8px] md:text-xs xl:text-sm items-center text-[#9F9F9F] border-t-[0.5px] border-black/50 py-4">
            Designed by Cristina Andrés & Developed by&nbsp;
            <Link
              href={'https://www.thomasmoserdev.com/'}
              target="_blank"
              className="hover:underline"
            >
              Thomas Moser
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
