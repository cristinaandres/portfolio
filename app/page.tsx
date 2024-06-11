'use client';
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import projets from '@/public/json/projets.json';
import ProjectCard from "@/components/projects/ProjectCard";
import useRippleEffect from "@/hooks/useRippleEffect";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { canvasRef, addRipple } = useRippleEffect();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const handleScroll = (event: WheelEvent) => {
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

  const openProject = (index: number | null) => {
    setActiveProjectIndex(index);
  };

  const closeProject = () => {
    setActiveProjectIndex(null);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const currentProject = projets[currentIndex];

  return (
    <div className="relative overflow-y-hidden h-screen">
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <ProjectCard
        slug={currentProject.name}
        bgColor={currentProject.bg_color}
        logo={currentProject.logo}
        completeName={currentProject.complete_name}
        name={currentProject.name}
        nameColor={currentProject.name_color}
        paddingTop={currentProject.padding_top}
        content={currentProject.content}
        currentIndex={currentIndex}
        totalProjects={projets.length}
        openProject={() => openProject(currentIndex)}
        closeProject={closeProject}
        additional_files={currentProject.additional_files}
        files={currentProject.files}
      />
    </div>
  );
}
