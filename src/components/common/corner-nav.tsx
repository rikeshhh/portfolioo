"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, MoveUpRight, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/data/nav-items";
import { useSmoothScroll } from "@/hooks/smooth-scroll";
import { Button } from "../ui/button";

const menuVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.2 } },
};

const CornerNav: React.FC = () => {
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
        className="p-2 bg-gray-900/90 backdrop-blur-md text-purple-300 border border-purple-500/50 rounded-lg hover:bg-gray-800/90 hover:text-purple-400 hover:shadow-neon transition-all duration-300 shadow-md"
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
            className="absolute top-14 right-0 w-72 bg-gradient-to-b from-gray-900 to-slate-950/95 backdrop-blur-lg border border-purple-500/30 rounded-xl shadow-neon p-6 z-40"
          >
            <ul className="space-y-3 text-base font-semibold text-gray-200">
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center justify-between gap-2 px-3 py-2 bg-gray-800/50 rounded-md hover:bg-purple-900/70 hover:text-purple-300 transition-all duration-300 group"
                    >
                      <span className="group-hover:text-neon-purple transition-colors duration-300">
                        {item.label}
                      </span>
                      <MoveUpRight
                        size={16}
                        className="group-hover:text-purple-400 group-hover:rotate-45 transition-all duration-300"
                      />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between gap-2 px-3 py-2 bg-gray-800/50 rounded-md hover:bg-purple-900/70 hover:text-purple-300 transition-all duration-300 group"
                    >
                      <span className="group-hover:text-neon-purple transition-colors duration-300">
                        {item.label}
                      </span>
                      {item.icon || (
                        <MoveUpRight
                          size={16}
                          className="group-hover:text-purple-400 group-hover:rotate-45 transition-all duration-300"
                        />
                      )}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Link
                href="https://cal.com/rikesh-shrestha-gerx4j"
                onClick={toggleMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-md shadow-lg hover:shadow-neon hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CornerNav;
