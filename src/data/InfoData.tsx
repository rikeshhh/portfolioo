import { BlogProps, Project } from "@/type/type";

export const BlogOne: BlogProps[] = [
  {
    blogLeft: "Hello, I'm a Frontend Developer",
    blogLeftImage: "https://cdsassets.apple.com/live/7WUAS350/images/macos/monterey/macos-monterey-mba-screenshot-toolbar.jpg",
    blogRight:
      "I specialize in creating interactive and user-friendly web interfaces using modern technologies like React and Tailwind CSS.",
    blogRightImage: "https://cdsassets.apple.com/live/7WUAS350/images/macos/monterey/macos-monterey-mba-screenshot-toolbar.jpg",
  },
];

export const BlogTwo: BlogProps[] = [
  {
    blogLeft: "My Journey into Web Development",
    blogLeftImage: "https://cdsassets.apple.com/live/7WUAS350/images/macos/monterey/macos-monterey-mba-screenshot-toolbar.jpg",
    blogRight:
      "From learning the basics of HTML and CSS to mastering frameworks like Next.js, my passion for coding keeps me motivated.",
    blogRightImage: "https://cdsassets.apple.com/live/7WUAS350/images/macos/monterey/macos-monterey-mba-screenshot-toolbar.jpg",
  },
];

export const BlogThree: BlogProps[] = [
  {
    blogLeft: "What I Do in My Free Time",
    blogLeftImage: "https://cdsassets.apple.com/live/7WUAS350/images/macos/monterey/macos-monterey-mba-screenshot-toolbar.jpg",
    blogRight:
      "Apart from coding, I enjoy exploring new tech, blogging, and occasionally dabbling in graphic design to keep my creativity flowing.",
    blogRightImage: "https://cdsassets.apple.com/live/7WUAS350/images/macos/monterey/macos-monterey-mba-screenshot-toolbar.jpg",
  },
];


export const Experience= [
  {
    company: "Intuji",
    logo: "https://path-to-intuji-logo.com/logo.png", // Replace with actual logo URL
    roles: [
      {
        title: "Software Engineer Trainee",
        duration: "Apr 2024 - Oct 2024 · 7 mos",
        type: "On-site",
        description:
          '"As a trainee, I contributed to footwear, fencing, and healthcare projects, gained experience in WordPress CMS by enhancing UIs, and worked with APIs to integrate functionalities and improve user experience."',
      },
      {
        title: "Intern",
        duration: "Jan 2024 - Apr 2024 · 4 mos",
        description:
          '"As an intern, I worked on personal projects to enhance my frontend skills, focusing on creating responsive and user-friendly designs."',
      },
    ],
  },
];

export const Education= [
  {
    institution: "Kantipur City College",
    logo: "https://path-to-kantipur-city-college-logo.com/logo.png", // Replace with actual logo URL
    degree: "Bachelor's Degree, Information Technology",
    duration: "2019 - 2024",
    description: "Completed my bachelor's in BCA.",
  },
];
export const projects: Project[] = [
  {
    title: "Stadia Bluetooth",
    description: "Giving a second life to over a million controllers",
    subtitle: "Google 232",
    imageUrl: "/images/sss.png", 
    projectUrl: "https://github.com/username/stadia-bluetooth",
  },
  {
    title: "Project 2",
    description: "Another project description here",
    subtitle: "Project Subtitle 2",
    imageUrl: "/images/sss.png", 
    projectUrl: "https://github.com/username/project-2",
  },
];