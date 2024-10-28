'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
    ContactShadows,
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Model } from './Deskroom5';


const ThreeScene: React.FC = () => {
    return (
        <>
            <div className='h-[99dvh] w-full'>
                <Canvas>
                    <color attach="background" args={["#E6A7B6"]} />
                    <Environment preset="studio" />
                    <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
                    <OrbitControls />
                    <Model position={[0, 0.1, 0]} />
                    {/* <ContactShadows /> */}
                </Canvas>
            </div>
        </>
    );
};

export default ThreeScene;
