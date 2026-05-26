'use client';
import React, { useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface VideoBackgroundProps {
  videoSrc: string;
}

const Video: React.FC<VideoBackgroundProps> = ({ videoSrc }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const toggleMute = () => {
    const currentState = videoRef.current?.muted ?? true;
    if (videoRef.current) {
      videoRef.current.muted = !currentState;
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
        className="absolute bottom-4 left-4 z-10 p-2 text-white bg-black/50 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-white rounded-full min-w-11 min-h-11 flex items-center justify-center"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>
    </div>
  );
};
export default Video;
