import { MotionValue } from "framer-motion";
import { ReactNode } from "react";

export interface BlogProps {
  blogHeadline: string;
  blogLeft: string;
  blogLeftImage: string;
  blogRight: string;
  blogRightImage: string;
}
export interface BlogComponentProps {
  blogContent: BlogProps[];
}
interface Role {
  title: string;
  duration: string;
  type?: string;
  description: string;
}

interface ExperienceItem {
  company: string;
  logo: string;
  roles: Role[];
}

interface EducationItem {
  institution: string;
  logo: string;
  degree: string;
  duration: string;
  description: string;
}

export interface ExperienceData {
  Experience: ExperienceItem[];
}

export interface EducationData {
  Education: EducationItem[];
}
export interface ContentCardProps {
  title: string;
  description: string;
  subtitle: string;
  imageUrl: string;
  projectUrl: string;
}
export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  src: string;
  imageUrl?: string;
  link: string;
  projectUrl?: string;
  color: string;
  rotate?: number;
  tech?: string[];
}
export interface LinkBoxProps {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
}
export interface TabProps {
  children: ReactNode;
  href: string;
}

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export interface Field {
  id: keyof FormData;
  label: string;
  placeholder: string;
  type?: string;
  requiredMessage: string;
  isTextarea?: boolean;
}

export interface CardProps {
  i: number;
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export interface Feature {
  title: string;
  demoText: string;
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
}

export interface BounceCardProps {
  className?: string;
  feature: Feature;
}
