import { MoveRight } from "lucide-react";

import { ContentCardProps } from "@/type/type";

export function ContentCard({
  title,
  description,
  subtitle,
  imageUrl,
  projectUrl,
}: ContentCardProps) {
  return (
    <div id="contentCard" className="group relative w-full max-w-5xl md:min-h-screen border border-gray-700 rounded-3xl overflow-hidden bg-black text-white mx-auto hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="md:p-12 flex flex-col items-start justify-start group-hover:bg-custom-gradient transition-colors duration-500 p-4">
        <h2 className="text-3xl font-bold mb-6 group-hover:text-gray-300 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-400 text-lg">
          {subtitle}
          <span className="block text-gray-500 group-hover:text-white transition-colors duration-300 mt-2">
            {description}
          </span>
        </p>
      </div>
      <div className="relative w-full overflow-hidden md:p-12 aspect-[16/9] md:aspect-auto">
        <div
          className="bg-center bg-cover w-full h-full bg-no-repeat transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 right-0 p-4  text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
      >
        <MoveRight />
      </a>
    </div>
  );
}
