"use client";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const workActive = pathname === "/work";
  const infoActive = pathname === "/";

  return (
    <footer className="container mx-auto flex gap-12 px-4 py-12">
      <ul className="flex flex-col [&>li]:md:text-2xl gap-6">
        <span className="flex items-center text-gray-400 text-base">MAIN</span>
        <li>
          <Link href="/" className={`${infoActive ? "text-gray-500" : ""}`}>
            Info
          </Link>
        </li>
        <li>
          <Link href="/work" className={`${workActive ? "text-gray-500" : ""}`}>
            Work
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col [&>li]:md:text-2xl gap-6">
        <span className="flex items-center text-gray-400 text-base">
          CONTACT
        </span>
        <li className="flex gap-2 items-center">
          <Link
            href="https://www.linkedin.com/in/rikesh-shrestha-a521b1197"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            LinkedIn <MoveUpRight size={12} />
          </Link>
        </li>
        <li className="flex gap-2">
          <Link
            href="/file/RikeshShresthaResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            Resume <MoveUpRight size={12} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
