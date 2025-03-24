"use client";

import { Button } from "@/components/ui/button";
import { BouncyCardsFeatures } from "@/section/bouncy-cards-features";
import HeroSection from "@/section/hero-section";
import ProfileTabs from "@/section/profile-tabs";
import ProjectsSection from "@/section/project-section";
import TechStack from "@/section/tech-stack";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full py-8 container mx-auto">
      <HeroSection />
      <BouncyCardsFeatures />
      <ProjectsSection id="projects" />
      <TechStack />
      <ProfileTabs />
      <Link
        href="https://cal.com/rikesh-shrestha-gerx4j"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 animate-pulse-slow transition-all duration-300 transform hover:scale-105 z-50 sm:bottom-8 sm:right-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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
          <span>Book a Call</span>
        </Button>
      </Link>
    </section>
  );
}
