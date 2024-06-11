import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='w-screen min-h-[80dvh] bg-[#E2E2DB] px-[148px] py-[92px] flex justify-center items-start '>
                <div className='w-full max-w-[1144px] flex flex-col justify-center'>
                    <div className='w-full px-[192px] flex flex-col'>
                        <h1 className='font-bold text-center text-xl'>Activities</h1>
                        <p className='mt-5 text-center'>This is the space where I show a little bit of who I am, my passions and my tastes. What follows is a collection of projects that I do during my free time. Some of them are more professional and others less, but all of them have a little piece of my heart.</p>
                    </div>
                    <div className='flex gap-8 mt-11'>
                        <Link href={'/activities/blender'} className='rounded-3xl border-4 border-[#E6793B] w-[360px] h-[360px] bg-white py-[92px] px-8 flex flex-col transition-all duration-250 hover:scale-105 items-center justify-end'>
                            <h3 className='uppercase font-bold tracking-[4px]'>3D Modeling</h3>
                        </Link>
                        <Link href={'/activities/drawings'} className='rounded-3xl border-4 border-[#E6793B] w-[360px] h-[360px] bg-white py-[92px] px-8 flex flex-col transition-all duration-250 hover:scale-105 items-center justify-end'>
                            <h3 className='uppercase font-bold tracking-[4px]'>Drawing</h3>
                        </Link>
                        <Link href={'/activities/animal-crossing'} className='rounded-3xl border-4 border-[#E6793B] w-[360px] h-[360px] bg-animal py-[92px] px-8 flex flex-col transition-all duration-250 hover:scale-105 bg-cover items-center justify-end'>
                            <h3 className='uppercase font-bold tracking-[4px]'>Animal Crossing</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page