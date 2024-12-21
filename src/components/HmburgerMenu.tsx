import { Menu, MoveUpRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
        <div className="block sm:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="p-2 border rounded-md border-gray-700 bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <Menu size={20} />
        </button>
  
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center text-white">
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
              className="absolute top-4 right-4 p-2 border rounded-md border-gray-700 bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <X size={24} />
            </button>
  
            <ul className="space-y-8 text-center">
              <li>
              <Link
              href="https://www.linkedin.com/in/rikesh-shrestha-a521b1197"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              LinkedIn <MoveUpRight size={12} />
            </Link>
              </li>
              <li>
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
          </div>
        )}
      </div>
    )
}