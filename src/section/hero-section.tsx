"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TextAnimation from "@/components/section/hero-section/text-animation";
import { RandomizedTextEffect } from "@/components/section/hero-section/text-randomized";
import { useSmoothScroll } from "@/hooks/smooth-scroll";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const { scrollToSection } = useSmoothScroll();
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center space-y-10 relative z-10 flex  flex-col justify-center"
      >
        <TextAnimation
          as="h1"
          text="Hey, I'm "
          classname="text-2xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-lg"
          direction="down"
          lineAnime={true}
          viewport={{ once: true }}
        />
        <RandomizedTextEffect text="Frontend Developer" />

        <TextAnimation
          as="p"
          text="Crafting dope web experiences"
          classname="text-xl md:text-3xl  font-medium"
          direction="up"
          letterAnime={true}
          viewport={{ once: true }}
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
        />

        <motion.div variants={buttonVariants}>
          <motion.a
            href="#projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            See My Projects
          </motion.a>
        </motion.div>

        <motion.div
          variants={{
            hidden: { width: 0, opacity: 0 },
            visible: {
              width: "120px",
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.9 },
            },
          }}
          className="h-1 bg-blue-500 mx-auto rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
