import { MoveDown } from "lucide-react";

export default function HeroWorkCard() {
  return (
    <div className="group relative w-full max-w-5xl md:min-h-96  border border-b-2 bg-black border-gray-700 rounded-3xl overflow-hidden  text-white mx-auto hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center py-12 gap-8">
      <h2 className="text-3xl font-semibold mb-6 group-hover:text-gray-300 transition-colors duration-300 text-center">
        I craft products, interactions & stories.
      </h2>
        <p>Below You Can find My Creations</p>
        <a
          href="#contentCard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white rounded-lg  transition-colors duration-300 animate-bounce"
        >
          <MoveDown className="md:size-12" />
        </a>
      <div className="h-12 w-screen absolute bottom-0  bg-[#121212] z-50"></div>
    </div>
  );
}
