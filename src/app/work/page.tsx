

import { ContentCard } from "@/components/ContentCard";
import { projects } from "@/data/InfoData";
import HeroWorkCard from "@/components/HeroWorkCard";

export default function Work() {


  return (
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
  );
}
