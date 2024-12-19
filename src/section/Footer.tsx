import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto flex gap-12 px-4 py-12">
      <ul className="flex flex-col [&>li]:md:text-2xl gap-6">
        <span className="flex items-center text-gray-400 text-base">MAIN</span>
        <li>Work</li>
        <li>Info</li>
      </ul>
      <ul className="flex flex-col [&>li]:md:text-2xl gap-6">
        <span className="flex items-center text-gray-400 text-base">
          CONTACT
        </span>
        <li className="flex gap-2 items-center">
          {" "}
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
          {" "}
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
