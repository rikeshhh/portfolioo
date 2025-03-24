"use client";

import FlipLink from "@/components/section/reveal-link/flip-link";
import React from "react";

export const RevealLink = () => {
  return (
    <footer className="grid place-content-center gap-4 bg-gray-900 px-8 py-4 text-white w-full">
      <FlipLink href="/file/RikeshShresthaResume.pdf">Resume</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/rikesh-shrestha-a521b1197">
        LinkedIn
      </FlipLink>
      <FlipLink href="https://github.com/rikeshhh">Github</FlipLink>
    </footer>
  );
};

export default RevealLink;
