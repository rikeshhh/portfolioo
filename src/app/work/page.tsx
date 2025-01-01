"use client";

import { projects } from "@/data/InfoData";
import { AnimatedPinDemo } from "@/components/AnimatedPinCard";
import HeroWorkCard from "@/components/HeroWorkCard";
// import { ContentCard } from "@/components/ContentCard";

type Project = {
  title: string;
  description: string;
  subtitle: string;
  imageUrl: string;
  projectUrl: string;
};

export default function Work() {
  return (
        <div className="w-full">
            <HeroWorkCard />
          <div className="work w-full grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
            {projects.map((project: Project, index: number) => (
              <section
                key={index}
                className="w-full z-10"
              >
                <AnimatedPinDemo
                  title={project.title}
                  description={project.description}
                  subtitle={project.subtitle}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                />
              </section>
            ))}
          </div>
        </div>  
  );
}
