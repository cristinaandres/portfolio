"use client"

import { useState } from 'react';
import Figma from './Figma';
import Illustrator from './Illustrator';
import InDesign from './InDesign';
import Lightroom from './Lightroom';
import Photoshop from './Photoshop';
import Canva from './Canva';
import SolidWorks from './SolidWorks';

const IconRow = () => {
    const [hoveredIcon, setHoveredIcon] = useState('');

    return (
        <div className='flex gap-4 xl:gap-6 items-center flex-wrap'>
            <div
                className={`transition-all ${hoveredIcon === 'figma' ? 'scale-105' : 'grayscale'} ${hoveredIcon === '' ? 'grayscale-0' : ''}`}
                onMouseEnter={() => setHoveredIcon('figma')}
                onMouseLeave={() => setHoveredIcon('')}
            >
                <Figma />
            </div>
            <div
                className={`transition-all ${hoveredIcon === 'photoshop' ? 'scale-105' : 'grayscale'}  ${hoveredIcon === '' ? 'grayscale-0' : ''}`}
                onMouseEnter={() => setHoveredIcon('photoshop')}
                onMouseLeave={() => setHoveredIcon('')}
            >
                <Photoshop />
            </div>
            <div
                className={`transition-all ${hoveredIcon === 'lightroom' ? 'scale-105' : 'grayscale'} ${hoveredIcon === '' ? 'grayscale-0' : ''}`}
                onMouseEnter={() => setHoveredIcon('lightroom')}
                onMouseLeave={() => setHoveredIcon('')}
            >
                <Lightroom />
            </div>
            <div
                className={`transition-all ${hoveredIcon === 'illustrator' ? 'scale-105' : 'grayscale'} ${hoveredIcon === '' ? 'grayscale-0' : ''}`}
                onMouseEnter={() => setHoveredIcon('illustrator')}
                onMouseLeave={() => setHoveredIcon('')}
            >
                <Illustrator />
            </div>
            <div
                className={`transition-all ${hoveredIcon === 'indesign' ? 'scale-105' : 'grayscale'} ${hoveredIcon === '' ? 'grayscale-0' : ''}`}
                onMouseEnter={() => setHoveredIcon('indesign')}
                onMouseLeave={() => setHoveredIcon('')}
            >
                <InDesign />
            </div>
            <div
                className={`transition-all ${hoveredIcon === 'canva' ? 'scale-105' : 'grayscale'} ${hoveredIcon === '' ? 'grayscale-0' : ''}`}
                onMouseEnter={() => setHoveredIcon('canva')}
                onMouseLeave={() => setHoveredIcon('')}
            >
                <Canva />
            </div>
            <div
                className={`transition-all ${hoveredIcon === 'solidworks' ? 'scale-105' : 'grayscale'} ${hoveredIcon === '' ? 'grayscale-0' : ''}`}
                onMouseEnter={() => setHoveredIcon('solidworks')}
                onMouseLeave={() => setHoveredIcon('')}
            >
                <SolidWorks />
            </div>
        </div>
    );
}

export default IconRow;
