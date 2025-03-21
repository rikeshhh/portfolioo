"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiRedux,
  SiGithub,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "text-white" },
  { name: "React", icon: <SiReact size={40} />, color: "text-cyan-400" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
    color: "text-teal-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} />,
    color: "text-blue-500",
  },
  { name: "Node.js", icon: <SiNodedotjs size={40} />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, color: "text-green-600" },
  {
    name: "Socket.io",
    icon: <SiSocketdotio size={40} />,
    color: "text-gray-300",
  },
  { name: "Redux", icon: <SiRedux size={40} />, color: "text-purple-500" },
  { name: "GitHub", icon: <SiGithub size={40} />, color: "text-gray-200" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-16  from-gray-900 to-slate-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight"
        >
          My Tech Stack
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl hover:bg-gray-700/70 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className={cn("opacity-80 hover:opacity-100", tech.color)}>
                {tech.icon}
              </span>
              <span className="text-sm md:text-base font-semibold text-gray-200">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
