import { Project } from "@/type/type";

export const projects: Project[] = [
  {
    title: "Sweven Visuals",
    subtitle: "Web & Tech Solutions",
    description:
      "Cutting-edge site for web development and tech services with AI, Web3, and animated UI/UX.",
    src: "/project/sweven-visuals.png",
    link: "https://swevenvisuals.com",
    color: "#1e3a8a",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    title: "Portfolio Website",
    subtitle: "Journalist & Podcaster",
    description:
      "Interactive portfolio with dynamic content powered by Sanity CMS.",
    src: "/projects/martylogan.jpg",
    link: "https://martylogan.info",
    color: "#6d28d9",
    tech: ["Next.js", "Sanity CMS"],
  },
  {
    title: "Bidyarthi",
    subtitle: "Mentorship Platform",
    description:
      "Web app connecting students and mentors with 3D visuals and email features.",
    src: "/projects/bidyarthi.jpg",
    link: "https://bidhyarthi.com",
    color: "#047857",
    tech: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Framer Motion",
      "React Hook Form",
      "Nodemailer",
    ],
  },
  {
    title: "E-commerce Platform (Frontend)",
    subtitle: "Online Shopping",
    description: "Modern shopping app with payments and authentication.",
    src: "/projects/ecommerce-frontend.jpg",
    link: "https://ecommerce-frontend",
    color: "#b91c1c",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "NextAuth",
      "Zustand",
    ],
  },
  {
    title: "E-commerce Platform (Backend)",
    subtitle: "API Backend",
    description:
      "Scalable API with secure authentication and payment processing.",
    src: "/projects/ecommerce-backend.jpg",
    link: "https://ecommerce-backend",
    color: "#374151",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Passport",
      "Stripe",
      "Multer",
      "Nodemailer",
    ],
  },
  {
    title: "Asset Management System",
    subtitle: "Admin Dashboard",
    description: "Dashboard for tracking assets, payments, and file uploads.",
    src: "/project/assetsms.png",
    link: "https://aws",
    color: "#ea580c",
    tech: ["React", "Vite"],
  },
  {
    title: "Job Hunt",
    subtitle: "Recruitment Platform",
    description:
      "Web app linking job seekers and recruiters with profiles and tracking.",
    src: "/projects/jobhunt.jpg",
    link: "https://job-hun",
    color: "#4f46e5",
    tech: [
      "React",
      "Vite",
      "Material UI",
      "Styled-Components",
      "Tailwind CSS",
      "Firebase",
    ],
  },
];
