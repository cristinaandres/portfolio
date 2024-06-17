'use client';
import React, { useEffect, useState } from "react";
import projets from '@/public/json/projets.json';
import ProjectCard from "@/components/projects/ProjectCard";
import useRippleEffect from "@/hooks/useRippleEffect";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { canvasRef, addRipple } = useRippleEffect();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const openProject = (index: number | null) => {
    setActiveProjectIndex(index);
  };

  const closeProject = () => {
    setActiveProjectIndex(null);
  };

  const setIndex = (index: number) => {
    console.log(index)
    setCurrentIndex(index);
  }

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleScroll = (event: WheelEvent) => {
      if (activeProjectIndex !== null) return;
      event.preventDefault();
      const canvas = canvasRef.current;
      if (event.deltaY > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projets.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projets.length) % projets.length);
      }
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = rect.width / 2;
        const y = rect.height / 2;
        addRipple(x, y);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      touchEndY = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (activeProjectIndex !== null) return; // Prevent scroll if modal is open
      const canvas = canvasRef.current;
      if (touchStartY > touchEndY) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projets.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projets.length) % projets.length);
      }
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = rect.width / 2;
        const y = rect.height / 2;
        addRipple(x, y);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeProjectIndex, canvasRef, addRipple, projets.length]);



  return (
    <>
      <div className="relative overflow-y-hidden h-screen">        
        <ProjectCard
          currentIndex={currentIndex}
          openProject={() => openProject(currentIndex)}
          closeProject={closeProject}
          setIndex={setIndex} />
      </div>
    </>
  );
}
