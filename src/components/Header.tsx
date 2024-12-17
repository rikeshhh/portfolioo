"use client";
import { ModeToggle } from "./theme/ModeToggle";
import { SlideTabsExample } from "./Tab";

export default function Header() {
  return <header className="w-full py-4 sticky top-0 z-50">
    <nav className="flex items-center justify-between w-full">
        <div>
          <h2>Rikesh Shrestha</h2>
          <span>Software Engineer</span>
        </div>
        <SlideTabsExample/>
        <ModeToggle/>
        <div className="flex gap-2">
          <p>Linkdein</p>
          <p>Resume</p>
        </div>
    </nav>
  </header>
  ;  
}
