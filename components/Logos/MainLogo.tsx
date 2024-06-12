import React from 'react'
import Image from 'next/image';
type SVGProps = {
    nameColor: string;
};

const MainLogo: React.FC<SVGProps> = ({ nameColor }) => {
    return (
        <>
            {nameColor === 'black' && (
                <Image src={'/images/logo.svg'} alt='Logo Cristina' width={63} height={63} />
            )}
            {nameColor === 'white' && (
                <Image src={'/images/logo_white.svg'} alt='Logo Cristina' width={63} height={63} />
            )}
        </>
    )
}

export default MainLogo