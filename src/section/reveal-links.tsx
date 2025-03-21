"use client";

import FlipLink from "@/components/section/reveal-link/flip-link";
import React from "react";

export const RevealLink = () => {
  return (
    <footer className="grid place-content-center gap-4 bg-gray-900 px-8 py-14 text-white">
      <FlipLink href="https://twitter.com/yourhandle">Twitter</FlipLink>
      <FlipLink href="https://linkedin.com/in/yourprofile">LinkedIn</FlipLink>
      <FlipLink href="https://facebook.com/yourpage">Facebook</FlipLink>
      <FlipLink href="https://instagram.com/yourhandle">Instagram</FlipLink>
    </footer>
  );
};

export default RevealLink;
