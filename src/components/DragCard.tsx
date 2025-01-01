import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import React, { MutableRefObject, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { projects } from "@/data/InfoData";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        My<span className="text-indigo-500">work.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="absolute inset-0 z-10 w-full" ref={containerRef}>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          subtitle={project.subtitle}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
          rotate={project.rotate}
          top={project.top}
          left={project.left}
          className={project.className}
          containerRef={containerRef}
          src={""}
          alt={""}
        />
      ))}
    </div>
  );
};

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
  title: string;
  description: string;
  subtitle: string;
  imageUrl: string;
  projectUrl: string;
}

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
  title,
  description,
  subtitle,
  imageUrl,
  projectUrl,
}: Props) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className="drag-elements absolute size-[360px]  bg-black text-white p-1 pb-4"
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    >
      <div className="flex flex-col items-start justify-start p-4 md:p-12 group-hover:bg-custom-gradient transition-colors duration-500">
        <h2 className=" font-bold mb-4 md:mb-6 group-hover:text-gray-300 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-400 text-base ">
          {subtitle}
          <span className="block text-gray-500 group-hover:text-white transition-colors duration-300 mt-2">
            {description}
          </span>
        </p>
      </div>

      <div className="relative w-full  h-auto md:aspect-[16/9] rounded-3xl overflow-hidden p-12">
        <div
          className="bg-contain bg-no-repeat bg-center w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 p-2 text-gray-500 bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <MoveRight className="text-white w-4 h-4" />
      </a>
    </motion.div>
  );
};
