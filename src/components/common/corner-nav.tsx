"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, MoveUpRight, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/data/nav-items";
import { useSmoothScroll } from "@/hooks/smooth-scroll";
import { Button } from "../ui/button";

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "circle(0% at 95% 5%)",
  },
  visible: {
    opacity: 1,
    clipPath: "circle(150% at 95% 5%)",
    transition: {
      duration: 0.9,
      ease: [0.6, 0, 0.2, 1],
    },
  },
  exit: {
    clipPath: "circle(0% at 95% 5%)",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0, 0.2, 1],
    },
  },
};

const LiquidSideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollToSection } = useSmoothScroll();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    scrollToSection(e, href);
    toggleMenu();
  };

  return (
    <div className="fixed top-4 right-4 z-50 font-roboto">
      <Button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="relative z-50 p-2 bg-gradient-to-br  text-gray border border-red-500/50 rounded-full hover:bg-gradient-to-br hover:from-red-700 hover:to-orange-600 hover:shadow-[0_0_15px_rgba(239,68,68,0.7)] transition-all duration-300 shadow-md"
      >
        <motion.div
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-gradient-to-br from-gray-900/95 via-slate-950/90 to-gray-900/95 backdrop-blur-md z-40 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-25 pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.4), transparent 60%)",
                  "radial-gradient(circle at 90% 30%, rgba(147, 51, 234, 0.4), transparent 60%)",
                  "radial-gradient(circle at 85% 25%, rgba(147, 51, 234, 0.4), transparent 60%)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-10">
              <motion.ul
                className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-100"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    whileHover={{ scale: 1.05, color: "#d8b4fe" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.href.startsWith("#") ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="flex items-center gap-3 px-2 py-1 transition-all duration-300 group"
                      >
                        <span className="group-hover:text-purple-300">
                          {item.label}
                        </span>
                        <MoveUpRight
                          size={16}
                          className="sm:w-4 md:w-5 lg:w-6 text-gray-400 group-hover:text-purple-400 group-hover:rotate-45 transition-all duration-300"
                        />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 px-2 py-1 transition-all duration-300 group"
                      >
                        <span className="group-hover:text-purple-300">
                          {item.label}
                        </span>
                        {item.icon || (
                          <MoveUpRight
                            size={16}
                            className="sm:w-4 md:w-5 lg:w-6 text-gray-400 group-hover:text-purple-400 group-hover:rotate-45 transition-all duration-300"
                          />
                        )}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                initial="hidden"
                animate="show"
                className="mt-6 sm:mt-8 md:mt-10"
              >
                <Link
                  href="https://cal.com/rikesh-shrestha-gerx4j"
                  onClick={toggleMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Book Now</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiquidSideNav;
