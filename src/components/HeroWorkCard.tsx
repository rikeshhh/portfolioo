import { MoveDown } from "lucide-react";
import { useTheme } from "next-themes";

export default function HeroWorkCard() {
  const { theme }: { theme?: string } = useTheme();

  return (
    <div className={`${theme==="dark"?"":"bg-white text-black"}  group p-4 relative w-full max-w-5xl md:min-h-96 light:text-red-500  border border-b-2 bg-black border-gray-700 rounded-3xl overflow-hidden  mx-auto hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center py-12 gap-8`}>
      <h2 className="text-3xl font-semibold mb-6  transition-colors duration-300 text-center">
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
    </div>
  );
}
