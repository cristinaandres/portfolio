import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string; // Path to the video file
}

const Video: React.FC<VideoBackgroundProps> = ({ videoSrc }) => {
    return (
      <video
        className="w-full h-auto object-cover pointer-events-none"
        src={`/videos/projets/${videoSrc}`} // Assuming videos are stored in a specific directory
        autoPlay
        loop
        muted
        playsInline
      />
    );
  };
export default Video;
