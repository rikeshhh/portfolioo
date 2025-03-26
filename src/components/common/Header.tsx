"use client";
import React from "react";

import LiquidSideNav from "./corner-nav";

export default function Header() {
  return (
    <header className="w-full py-4 sticky top-0 z-50 container mx-auto px-4">
      <LiquidSideNav />
    </header>
  );
}
