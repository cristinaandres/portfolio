'use client';

import { useCallback, useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import projets from '@/public/json/projets.json';
import { useCarouselNavigation } from '@/hooks/useCarouselNavigation';

export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const openProject = (index: number | null) => setActiveProjectIndex(index);
  const closeProject = () => setActiveProjectIndex(null);
  const setIndex = (index: number) => setCurrentIndex(index);

  const goNext = useCallback(() => setCurrentIndex((prev) => (prev + 1) % projets.length), []);
  const goPrev = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + projets.length) % projets.length),
    []
  );

  useCarouselNavigation({
    onNext: goNext,
    onPrev: goPrev,
    enabled: activeProjectIndex === null,
  });

  return (
    <div className="relative overflow-y-hidden h-dvh" aria-label="Project carousel">
      <ProjectCard
        currentIndex={currentIndex}
        openProject={() => openProject(currentIndex)}
        closeProject={closeProject}
        setIndex={setIndex}
      />
    </div>
  );
}
