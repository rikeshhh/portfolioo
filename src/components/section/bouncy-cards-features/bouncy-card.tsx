import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { BounceCardProps } from "@/type/type";

export const BounceCard: React.FC<
  BounceCardProps & { children?: ReactNode }
> = ({ className = "", feature, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
      <div
        className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
      >
        <span
          className={`block text-center font-semibold ${feature.textColor}`}
        >
          {feature.demoText}
        </span>
      </div>
    </motion.div>
  );
};
