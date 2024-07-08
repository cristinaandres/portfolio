import React from 'react'
import ThreeScene from '@/components/blender/ThreeScene'
const page = () => {
    return (
        <>
            <div className='min-h-screen w-full flex bg-[#E6A7B6] relative'>
                <h1 className='z-10 absolute font-inter text-[56px] font-bold w-[468px] top-52 left-52'>Welcome to my 3D corner</h1>
                <ThreeScene />
            </div>
        </>
    )
}

export default page