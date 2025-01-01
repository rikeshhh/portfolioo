import { ReactNode } from "react";

export interface BlogProps {
  blogHeadline:string;
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
  description: string;
  subtitle: string;
  imageUrl: string;
  projectUrl: string;
  rotate: string; // Specifies the rotation angle, e.g., "12deg"
  top: string; // Specifies the top position, e.g., "45%"
  left: string; // Specifies the left position, e.g., "60%"
}

export interface LinkBoxProps {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
}
export interface TabProps  {
  children: ReactNode;
  href: string;
};