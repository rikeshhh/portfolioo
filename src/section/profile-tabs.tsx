"use client";

import MyEducation from "@/components/section/profile-tabs/my-education";
import MyExperience from "@/components/section/profile-tabs/my-experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";

export default function ProfileTabs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full  py-12 min-h-screen px-4"
    >
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger
            value="experience"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md py-2"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md py-2"
          >
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="education">
          <MyEducation />
        </TabsContent>

        <TabsContent value="experience">
          <MyExperience />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
