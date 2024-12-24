"use client";

import { FileUser, Linkedin} from "lucide-react";
import Link from "next/link";

import { SlideTabsExample } from "@/components/Tab";
// import { ModeToggle } from "@/components/theme/ModeToggle";
import HamburgerMenu from "@/components/HmburgerMenu";

export default function Header() {

  return (
    <header className="w-full py-4 sticky top-0 z-50 container mx-auto px-4">
      <nav className="flex items-center justify-between w-full gap-2">
        <div className="md:block hidden">
          <h2>Rikesh Shrestha</h2>
          <span>Software Engineer</span>
        </div>
        <SlideTabsExample />
        <div className="gap-4 md:block hidden">
          <div className="flex gap-4">
          <Link
              href="https://www.linkedin.com/in/rikesh-shrestha-a521b1197"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              LinkedIn <Linkedin size={18} />
            </Link>
            <Link
                href="/file/RikeshShresthaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              Resume <FileUser size={18} />
            </Link>
          </div>
        </div>
      <HamburgerMenu/>
      </nav>
    </header>
  );
}
