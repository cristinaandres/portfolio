'use client'
import React, { useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; // Import icons

interface VideoBackgroundProps {
    videoSrc: string; // Path to the video file
}


const Video: React.FC<VideoBackgroundProps> = ({ videoSrc }) => {
    const [isMuted, setIsMuted] = useState(true); // State to handle mute functionality
    const videoRef = useRef<HTMLVideoElement>(null); // Ref to access the video element
    const toggleMute = () => {
        const currentState = videoRef.current?.muted ?? true;
        if (videoRef.current) {
            videoRef.current.muted = !currentState; // Toggle the mute state
            setIsMuted(!currentState);
        }
    };

    return (
        <div className="relative w-full h-full">
            <video
                ref={videoRef}
                className="w-full h-auto object-cover pointer-events-none"
                src={`/videos/projets/${videoSrc}`}
                autoPlay
                loop
                playsInline
                muted={isMuted}
            />
            <button
                className="absolute bottom-4 left-4 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
                {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>
        </div>
    );
};
export default Video;
