"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/type/type";

export const ProjectCard: React.FC<CardProps> = ({
  i,
  project,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: project.color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[500px] w-full sm:w-[70%] max-w-4xl rounded-lg shadow-lg origin-top overflow-hidden"
      >
        <motion.div className="relative h-[75%] w-full" style={{ scale: imageScale }}>
          <Image
            src={project.src}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        <div className="p-6 h-[25%] flex flex-col justify-between text-white">
          <div>
            <h3 className="text-xl font-semibold truncate">{project.title}</h3>
            <p className="text-sm line-clamp-2">{project.description}</p>
          </div>
          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <span className="text-blue-300 hover:text-blue-100 text-sm font-medium transition-colors underline">
                View Project
              </span>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};