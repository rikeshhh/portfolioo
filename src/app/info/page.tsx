"use client";
import { Dot } from "lucide-react";
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
              <h2 className="md:text-7xl font-semibold">
                I am passionate about creating beautiful products that empower
                people.
              </h2>
          <div className="py-4  text-gray-400 md:hidden block">
          <span className="flex items-cente">
                Software Engineer
              </span>
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
