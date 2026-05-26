import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import profilePic from '@/public/images/cristina.jpeg';

import ShareButton from '@/components/ShareButton';
import IconRow from '@/components/Logos/IconRow';
import BubbleRow from '@/components/BubbleRow';

const AboutPhone = () => {
  return (
    <>
      <div className="font-poppins w-screen bg-[#E2E2DB] flex flex-col py-12 overflow-x-hidden px-4">
        <div className="w-full flex justify-center">
          <Image
            src={profilePic}
            alt="Profile pic"
            width={189}
            height={210}
            className="rounded-[16px] grayscale hover:grayscale-0 transition-all duration-250"
          />
        </div>

        <div className="flex flex-col gap-5 pt-8">
          <h2 className="uppercase font-bold text-base tracking-[4px] max-w-prose">
            Hello, I&apos;m Cristina Andrés
          </h2>
          <p className="text-xs font-medium">
            I am a passionate product and graphic designer. With a solid foundation in industrial
            design engineering, I understand the intricate balance between form and function. My
            expertise extends beyond mere conceptualization; I bring ideas to life through
            meticulous attention to detail and a keen eye for user experience.
          </p>
        </div>
        <div className="flex gap-4 pt-4">
          <ShareButton />
          <Link
            href={'/pdf/CV.pdf'}
            target="_blank"
            className="uppercase text-white text-center text-xs md:text-[8px] xl:text-xs bg-black rounded-lg px-2 py-1 hover:bg-black/75"
          >
            Download CV
          </Link>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <h2 className="uppercase text-xs font-bold tracking-[6px]">Softwares</h2>
          <IconRow />
        </div>

        <div className="flex flex-col gap-8 pt-4">
          <div className="flex flex-col justify-between w-full text-xs pl-4 gap-6 border-l border-black">
            <div className="flex flex-col gap-2">
              <h2 className="uppercase font-bold tracking-[6px]">Experience</h2>
              <div className="flex flex-col gap-2 mt-3">
                <h3>
                  <b>UX/UI Designer</b>&nbsp;&nbsp;&nbsp;| since 2023
                </h3>
                <p>Freelancer</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3>
                  <b>Graphic Designer</b>&nbsp;&nbsp;&nbsp;| 2022
                </h3>
                <p>Future Fibres Rigging Systems S.L.</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="uppercase font-bold tracking-[6px]">Studies</h2>
              <div className="flex flex-col gap-2 mt-3">
                <h3 className="font-bold">
                  Industrial Design Engineering and Product Development{' '}
                </h3>
                <p>Polytechnical University of Valencia, Spain </p>
              </div>
              <div className="ml-2 border-l border-black flex flex-col gap-1 px-2 mt-2">
                <div className="flex gap-5">
                  <p>Erasmus</p>
                  <h3 className="font-bold">He-ARC Neuchâtel</h3>
                </div>
                <div className="flex gap-5">
                  <p>Erasmus</p>
                  <h3 className="font-bold">Hochschule of Applied Science Augsburg</h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="uppercase font-bold tracking-[6px]">Languages</h2>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex gap-1 items-center">
                  <p>Spanish</p>
                  <BubbleRow amount={5} />
                </div>
                <div className="flex gap-1 items-center">
                  <p>Catalan</p>
                  <BubbleRow amount={5} />
                </div>
                <div className="flex gap-1 items-center">
                  <p>French</p>
                  <BubbleRow amount={5} />
                </div>
                <div className="flex gap-1 items-center">
                  <p>English</p>
                  <BubbleRow amount={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPhone;
