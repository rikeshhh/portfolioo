import { GithubIcon, MoveDown } from "lucide-react";
import Link from "next/link";

export default function HeroWorkCard() {
  return (
    <div className=" w-full h-auto md:h-screen flex flex-col items-center justify-center px-4 gap-8">
      <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-center text-gray-100">
        I craft products, interactions, and stories.
      </h2>

      <div className="text-center max-w-lg">
        <p className="mb-4 text-gray-400">
          Explore my journey as a developer. Discover my projects and creations
          on GitHub!
        </p>
        <Link
          href="https://github.com/rikeshhh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
          className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-600 transition-colors duration-300"
        >
          <GithubIcon size={22} />
          <span className="font-medium">Visit My GitHub</span>
        </Link>
      </div>

      <div className="flex items-center justify-center mt-8">
        <a
          href="#contentCard"
          aria-label="Scroll to projects section"
          className="text-gray-400 hover:text-white rounded-lg transition duration-300 animate-bounce"
        >
          <MoveDown size={30} />
        </a>
      </div>
    </div>
  );
}
