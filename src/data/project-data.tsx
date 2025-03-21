import { Project } from "@/type/type";

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    subtitle: "Online Shopping",
    description: "A full-featured online store with payment integration.",
    src: "/projects/ecommerce.jpg",
    link: "https://example.com/ecommerce",
    color: "#5196fd",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Showcase",
    description: "A sleek personal portfolio with smooth animations.",
    src: "/projects/portfolio.jpg",
    link: "https://example.com/portfolio",
    color: "#8f89ff",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Task Manager",
    subtitle: "Productivity Tool",
    description: "A productivity app for managing tasks.",
    src: "/projects/taskmanager.jpg",
    link: "https://example.com/taskmanager",
    color: "#13006c",
    tech: ["Vue.js", "Firebase"],
  },
  {
    title: "Weather App",
    subtitle: "Weather Updates",
    description: "Real-time weather updates with a clean UI.",
    src: "/projects/weather.jpg",
    link: "https://example.com/weather",
    color: "#ed649e",
    tech: ["React", "API Integration"],
  },
];