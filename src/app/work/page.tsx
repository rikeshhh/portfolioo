
"use client"
import { useEffect, useState } from "react";

import { ContentCard } from "@/components/ContentCard";
import { projects } from "@/data/InfoData";
import HeroWorkCard from "@/components/HeroWorkCard";
import Loader from "@/components/Loader";

export default function Work() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading ? (
      <Loader /> 
    ) : (
    <section className="work w-full grid grid-cols-1 gap-8">
      <HeroWorkCard/>
       {projects.map((project, index) => (
        <ContentCard
          key={index}
          title={project.title}
          description={project.description}
          subtitle={project.subtitle}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
        />
      ))}
    </section>
       )}
    </>
  );
}
