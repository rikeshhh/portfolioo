import { Project } from "@/type/type";

interface CardProps {
  card: Project & { id: number };
}

export const Card = ({ card }: CardProps) => {
  return (
    <div className="group relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 md:p-6 backdrop-blur-sm bg-black/50 group-hover:bg-black/70 transition-all duration-300">
        <p className="text-xl md:text-3xl font-bold text-white uppercase mb-2">
          {card.title}
        </p>
        <p className="text-xs md:text-sm text-neutral-200 line-clamp-2 mb-2 md:mb-4">
          {card.description}
        </p>
        <a
          href={card.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm"
        >
          View Project
        </a>
      </div>
    </div>
  );
};
