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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col sm:flex-row relative -top-[10%] h-auto w-full sm:w-[85%] max-w-5xl rounded-xl shadow-xl origin-top overflow-hidden bg-white/90 backdrop-blur-sm"
      >
        <motion.div
          className="relative w-full sm:w-1/2 h-64 sm:h-[400px]"
          style={{ scale: imageScale }}
        >
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
        </motion.div>

        <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-gray-800">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>
          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm sm:text-base font-semibold transition-colors">
                Explore Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};
