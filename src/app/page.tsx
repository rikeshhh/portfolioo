"use client";

import { BouncyCardsFeatures } from "@/section/bouncy-cards-features";
import HeroSection from "@/section/hero-section";
import ProfileTabs from "@/section/profile-tabs";
import ProjectsSection from "@/section/project-section";
import TechStack from "@/section/tech-stack";

export default function Home() {
  return (
    <section className="w-full py-8 container mx-auto">
      <HeroSection/>
      <BouncyCardsFeatures/>
      <ProjectsSection />
      <TechStack/>
      <ProfileTabs />
    </section>
  );
}
