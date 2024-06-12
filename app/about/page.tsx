
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/images/cristina.jpeg'

import ShareButton from '@/components/ShareButton'
import IconRow from '@/components/Logos/IconRow'
import BubbleRow from '@/components/BubbleRow'
import AboutPhone from '@/components/About/AboutPhone'
import AboutTablet from '@/components/About/AboutTablet'
import AboutDesktop from '@/components/About/AboutDesktop'

function page() {
    return (
        <>
            <div className="mobile">
                <AboutPhone />
            </div>
            <div className="tablet">
                <AboutTablet />
            </div>
            <div className="desktop min-h-[80dvh] h-screen w-full bg-[#E2E2DB] items-center justify-center">
                <AboutDesktop />
            </div>
        </>
    )
}

export default page