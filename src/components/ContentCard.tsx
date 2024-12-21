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
    <div
      id="contentCard"
      className="group relative w-full max-w-5xl md:min-h-screen border border-gray-700 rounded-3xl overflow-hidden bg-black text-white mx-auto hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <div className="flex flex-col items-start justify-start p-4 md:p-12 group-hover:bg-custom-gradient transition-colors duration-500">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 group-hover:text-gray-300 transition-colors duration-300">{title}</h2>
        <p className="text-gray-400 text-base md:text-lg">
          {subtitle}
          <span className="block text-gray-500 group-hover:text-white transition-colors duration-300 mt-2">
            {description}
          </span>
        </p>
      </div>

      <div className="relative w-full h-64 md:h-auto md:aspect-[16/9] rounded-3xl overflow-hidden p-12">
        <div
          className="bg-cover bg-no-repeat bg-center w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <MoveRight className="text-white w-6 h-6" />
      </a>
    </div>
  );
}
