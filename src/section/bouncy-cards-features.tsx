import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { features } from "@/data/features";
import { BounceCard } from "@/components/section/bouncy-cards-features/bouncy-card";
import { CardTitle } from "@/components/section/bouncy-cards-features/bouncy-card-title";

export const BouncyCardsFeatures = () => {
  return (
    <section className=" px-4 py-12 text-gray-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          What I Bring to the Table
          <span className="text-blue-500"> Skills & Vibes</span>
        </h2>
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-blue-700"
          >
            See My Work
          </motion.button>
        </Link>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard feature={features[0]} className="col-span-12 md:col-span-4">
          <CardTitle>{features[0].title}</CardTitle>
        </BounceCard>
        <BounceCard feature={features[1]} className="col-span-12 md:col-span-8">
          <CardTitle>{features[1].title}</CardTitle>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard feature={features[2]} className="col-span-12 md:col-span-8">
          <CardTitle>{features[2].title}</CardTitle>
        </BounceCard>
        <BounceCard feature={features[3]} className="col-span-12 md:col-span-4">
          <CardTitle>{features[3].title}</CardTitle>
        </BounceCard>
      </div>
    </section>
  );
};
