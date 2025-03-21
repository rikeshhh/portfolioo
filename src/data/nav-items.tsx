import { FileUser, GithubIcon, Linkedin } from "lucide-react";
export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rikesh-shrestha-a521b1197",
    icon: <Linkedin size={18} />,
    external: true,
  },
  {
    label: "Resume",
    href: "/file/RikeshShresthaResume.pdf",
    icon: <FileUser size={18} />,
    external: true,
  },
  {
    label: "Github",
    href: "https://github.com/rikeshhh",
    icon: <GithubIcon size={18} />,
    external: true,
  },
];
