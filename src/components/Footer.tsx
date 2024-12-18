import { MoveUpRight } from "lucide-react";

export default function Footer() {
  return ( 
    <footer className="container mx-auto flex gap-12 px-4 py-12">
      <ul className="flex flex-col [&>li]:md:text-2xl gap-6">
        <span className="flex items-center text-gray-400 text-base">MAIN</span>
        <li>Work</li>
        <li>Info</li>
      </ul>
      <ul className="flex flex-col [&>li]:md:text-2xl gap-6">
        <span className="flex items-center text-gray-400 text-base">CONTACT</span>
        <li className="flex gap-2 items-center">Linkedin <MoveUpRight size={20} /></li>
        <li className="flex gap-2">Resume <MoveUpRight size={20} /></li>
      </ul>
    </footer>
  );
}
