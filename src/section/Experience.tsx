"use client";

import { Experience } from "@/data/InfoData";
import { ExperienceData } from "@/type/type";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MyExperience() {
  const experienceList: ExperienceData["Experience"] = Experience;
  
  // Create a reference to track the section
  const sectionRef = useRef(null);
  
  // Track if the section is in view
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={sectionRef}
      className="w-full grid md:grid-cols-2 grid-cols-1 items-center justify-center border-b-[1px] border-gray-400 relative overflow-hidden"
    >
      <h2 className="text-4xl">My Experience</h2>
      
      {experienceList.map((item) => (
        <div key={item.company} className="flex flex-col w-full">
          {item.roles.map((role, index) => (
            <div key={index} className="p-8 flex flex-col gap-4">
              <h2 className="text-red-600">{item.company}</h2>
              <h3>{role.title}</h3>
              <p>{role.duration}</p>
              <p>{role.type}</p>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      ))}

      {/* Animated Image 1 - Moves from Right to Middle */}
      <motion.div
        className="absolute top-[50%] right-[-20%] md:right-[-15%] w-40 h-40"
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: "30%", opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        <Image src="/avatar.png" alt="logo" width={160} height={160} />
      </motion.div>

      {/* Animated Image 2 - Moves from Left to Middle */}
      <motion.div
        className="absolute top-[60%] left-[-20%] md:left-[-15%] w-40 h-40"
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: "30%", opacity: 1 } : { x: "-100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
      >
        <Image src="/avatar.png" alt="logo" width={160} height={160} />
      </motion.div>
    </div>
  );
}
