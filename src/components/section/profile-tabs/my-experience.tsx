"use client";

import { Experience } from "@/data/InfoData";
import { ExperienceData } from "@/type/type";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function MyExperience() {
  const experienceList: ExperienceData["Experience"] = Experience;
  const sectionRef = useRef(null);

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl font-bold text-gray-800 mb-6 col-span-full"
      >
        My Experience
      </motion.h2>

      {experienceList.map((item) => (
        <motion.div
          key={item.company}
          variants={itemVariants}
          className="flex flex-col w-full"
        >
          {item.roles.map((role, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4"
            >
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                {item.company}
              </h3>
              <h4 className="text-lg font-medium text-gray-700">
                {role.title}
              </h4>
              <p className="text-gray-500 text-sm">{role.duration}</p>
              <p className="text-gray-500 text-sm mb-2">{role.type}</p>
              <p className="text-gray-600">{role.description}</p>
            </div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}
