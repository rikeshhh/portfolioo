"use client";
import { Dot } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

import { BlogOne, BlogThree, BlogTwo } from "@/data/InfoData";
import InfoCard from "@/components/InfoCard";
import InfoCardTwo from "@/components/InfoCardTwo";
import Loader from "@/components/Loader";
import MyEducation from "@/section/Education";
import MyExperience from "@/section/Experience";
import Stack from "@/section/Stack";

export default function Info() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="work w-full min-h-screen font-unbounded ">
          <div className="flex flex-col justify-center items-center container mx-auto md:px-56 gap-16">
            <div className="w-full flex flex-col justify-start items-start py-24 px-4 border-b-2 border-gray-400">
              <span className="flex items-center text-gray-400">
                <Dot size={48} strokeWidth={3} />
                About me
              </span>
              <h2 className="md:text-6xl font-semibold">
                I’m a 
                <span className="relative">
                 {""}    developer
                  <svg
                    viewBox="0 0 286 73"
                    fill="none"
                    className="absolute  -right-2  bottom-0 translate-y-1"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{
                        duration: 1.25,
                        ease: "easeInOut",
                      }}
                      d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                      stroke="#007BFF"
                      strokeWidth="4"
                    />
                  </svg>
                </span>{" "}
                passionate about creating beautiful products that empower
                people.
              </h2>
              <div className="py-4  text-gray-400 md:hidden block">
                <span className="flex items-cente">Software Engineer</span>
                <p>Rikesh Shrestha</p>
              </div>
            </div>
            <InfoCard blogContent={BlogOne} />
            <InfoCardTwo blogContent={BlogTwo} />
            <InfoCard blogContent={BlogThree} />
            <Stack />
            <MyExperience />
            <MyEducation />
          </div>
        </section>
      )}
    </>
  );
}
