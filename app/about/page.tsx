
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/images/cristina.jpeg'
import Figma from '@/components/Logos/Figma'
import Photoshop from '@/components/Logos/Photoshop'
import Lightroom from '@/components/Logos/Lightroom'
import Illustrator from '@/components/Logos/Illustrator'
import InDesign from '@/components/Logos/InDesign'

import ShareButton from '@/components/ShareButton'
import IconRow from '@/components/Logos/IconRow'
import BubbleRow from '@/components/BubbleRow'

function page() {
    return (
        <>
            <div className='font-poppins w-full bg-[#E2E2DB] flex flex-col items-center pt-[124px] pb-[197px]'>
                <div className='w-[1440px] flex flex-col items-center px-[152px] gap-10'>
                    <div className='flex pl-[248px]'>
                        <div className='flex flex-col justify-between gap-10 border-r border-black pr-4'>
                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-4'>
                                    <Image src={profilePic} alt='Profile pic' width={176} height={195} className='rounded-[16px] grayscale hover:grayscale-0 transition-all duration-250' />
                                    <div className='flex flex-col justify-between w-full'>
                                        <div className='flex flex-col gap-5'>
                                            <h2 className='uppercase font-bold text-base tracking-[4px]'>Hello, I&apos;m Cristina Andrés</h2>
                                            <p className='text-xs font-medium'>I am a passionate product and graphic designer.  With a solid foundation in industrial design engineering, I understand the intricate balance between form and function. My expertise extends beyond mere conceptualization; I bring ideas to life through meticulous attention to detail and a keen eye for user experience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-4 justify-start pl-[192px] items-end w-full'>
                                    <ShareButton />
                                    <Link href={'/pdf/CV.pdf'} target='_blank' className='uppercase text-white text-xs bg-black rounded-lg px-2 py-1 hover:bg-black/75'>Download CV</Link>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='uppercase text-xs font-bold tracking-[6px]'>Softwares</h2>
                                <IconRow />
                            </div>
                        </div>



                        <div className='flex flex-col justify-between text-xs w-full pl-4 gap-6'>

                            <div className='flex flex-col gap-2'>
                                <h2 className='uppercase font-bold tracking-[6px]'>Experience</h2>
                                <div className='flex flex-col gap-2 mt-3'>
                                    <h3><b>UX/UI Designer</b>&nbsp;&nbsp;&nbsp;| since 2023</h3>
                                    <p>Freelancer</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h3><b>Graphic Designer</b>&nbsp;&nbsp;&nbsp;| 2022</h3>
                                    <p>Future Fibres Rigging Systems S.L.</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h2 className='uppercase font-bold tracking-[6px]'>Studies</h2>
                                <div className='flex flex-col gap-2 mt-3'>
                                    <h3 className='font-bold'>Industrial Design Engineering and Product Development </h3>
                                    <p>Polytechnical University of Valencia, Spain </p>

                                </div>
                                <div className='ml-2 border-l border-black flex flex-col gap-1 px-2 mt-2'>
                                    <div className='flex gap-5'>
                                        <p>Erasmus</p>
                                        <h3 className='font-bold'>He-ARC Neuchâtel</h3>
                                    </div>
                                    <div className='flex gap-5'>
                                        <p>Erasmus</p>
                                        <h3 className='font-bold'>Hochschule of Applied Science Augsburg</h3>
                                    </div>

                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <h2 className='uppercase font-bold tracking-[6px]'>Languages</h2>
                                <div className='flex gap-8 mt-3'>
                                    <div className='flex gap-1 items-center'>
                                        <p>Spanish</p>
                                        <BubbleRow amount={5} />
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <p>Catalan</p>
                                        <BubbleRow amount={5} />
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <p>French</p>
                                        <BubbleRow amount={5} />
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <p>English</p>
                                        <BubbleRow amount={5} />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default page