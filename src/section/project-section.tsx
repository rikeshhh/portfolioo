"use client";

import { ReactLenis } from "lenis/react";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "@/components/section/project-section/project-card";
import { projects } from "@/data/project-data";

interface ProjectsSectionProps {
  id: string;
}

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <section id={id} ref={container} className="min-h-screen">
        <h2 className="text-4xl mt-36 md:text-6xl font-semibold text-center tracking-tight">
          My Projects
        </h2>

        {projects.slice(0, 8).map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={`p_${i}`}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </ReactLenis>
  );
}
