"use client";
import { motion, useSpring, useTransform, useViewportScroll } from "framer-motion";
import { JSX, useEffect, useLayoutEffect, useRef, useState } from "react";

import { projects } from "@/data/InfoData";
import { AnimatedPinDemo } from "@/components/AnimatedPinCard";
import HeroWorkCard from "@/components/HeroWorkCard";
// import { ContentCard } from "@/components/ContentCard";
import Loader from "@/components/Loader";

type Project = {
  title: string;
  description: string;
  subtitle: string;
  imageUrl: string;
  projectUrl: string;
};

export default function Work(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [containerSize, setContainerSize] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();

  const transform = useTransform(scrollY, [0, containerSize], [0, -containerSize]);
  const spring = useSpring(transform, { stiffness: 10, mass: 1 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize(entry.contentRect.height);
      }
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      document.body.style.height = `${containerRef.current.getBoundingClientRect().height}px`;
    }
  }, [containerSize]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <motion.div className="w-full">
          <motion.div ref={containerRef} style={{ y: spring }} className="work w-full grid grid-cols-1 gap-8 container mx-auto">
            <HeroWorkCard />
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
          </motion.div>
          <motion.button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="fixed bottom-4 right-4 bg-blue-500 p-2 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </>
  );
}
