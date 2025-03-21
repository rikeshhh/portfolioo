"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, MoveUpRight, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { navItems } from "@/data/nav-items";

export default function CornerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: "100%", transition: { duration: 0.3 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.95, transition: { duration: 0.4 } },
  };

  return (
    <div className="fixed top-6 right-6 z-50  font-roboto">
      <Button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="p-3 bg-gray-900 text-white border border-gray-700 rounded-full hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-md"
      >
        <Menu size={28} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-gradient-to-t from-gray-900 to-slate-800 z-40"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center p-12 md:p-16 text-white"
            >
              <Button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="absolute top-6 right-6 p-3 bg-gray-800/80 backdrop-blur-md text-white border border-gray-600 rounded-full hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-md"
              >
                <X size={28} />
              </Button>

              <ul className="space-y-12 text-sm md:text-4xl font-extrabold tracking-tight">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex justify-between items-center gap-4 py-3 border-b border-gray-700/50 hover:text-blue-300 hover:border-blue-500 transition-all duration-300 group"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.label}
                      </span>
                      {item.icon || (
                        <MoveUpRight
                          size={28}
                          className="group-hover:rotate-45 transition-transform duration-300"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                className="absolute bottom-8 right-8"
              >
                <Link
                  href="#contact"
                  onClick={toggleMenu}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Contact Us <Mail size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
