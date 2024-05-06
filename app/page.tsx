'use client'
import React, { useCallback, useState } from "react";
import projets from '@/public/json/projets.json'
import Card from "@/components/Card";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Home() {

  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);


  const openProject = (index: number|null) => {
    setActiveProjectIndex(index);
  };

  const closeProject = () => {
    setActiveProjectIndex(null);
  };
  

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-screen w-width flex flex-wrap">
        {projets.map((project, index) => {
          return (
            <Card
              key={index}
              projectProps={project}
              openProject={() => openProject(index)}
              closeProject={closeProject}
              index={index}/>
          )
        })}

      </div>
    </main>
  );
}
