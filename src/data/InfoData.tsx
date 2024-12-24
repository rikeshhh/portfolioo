import { BlogProps, Project } from "@/type/type";

export const BlogOne: BlogProps[] = [
  {
    blogHeadline: "Hello, I'm a Frontend Developer",
    blogLeft: "Crafting intuitive and dynamic web interfaces is my passion. I thrive on creating seamless user experiences.",
    blogLeftImage: "https://cdn.pixabay.com/photo/2020/08/06/17/50/business-5468706_1280.png",
    blogRight: "I specialize in modern technologies like React, Tailwind CSS, and Firebase, with experience in healthcare and e-commerce projects.",
    blogRightImage: "https://cdn.pixabay.com/photo/2024/12/17/13/39/working-9273178_1280.png",
  },
];

export const BlogTwo: BlogProps[] = [
  {
    blogHeadline: "My Journey into Web Development",
    blogLeft: "From experimenting with HTML to mastering React and Next.js, my journey has been hands-on and fulfilling.",
    blogLeftImage: "https://cdn.pixabay.com/photo/2014/04/03/10/32/hiker-310829_1280.png",
    blogRight: "I've built projects like an asset management dashboard and a job portal connecting recruiters and job seekers.",
    blogRightImage: "https://cdn.pixabay.com/photo/2018/05/12/22/34/worker-3394755_1280.png",
  },
];

export const BlogThree: BlogProps[] = [
  {
    blogHeadline: "What I Do in My Free Time",
    blogLeft: "When not coding, you'll find me fishing, experimenting in the kitchen, or diving into new tech trends.",
    blogLeftImage: "https://cdn.pixabay.com/photo/2022/04/08/18/43/fishing-7120075_1280.png",
    blogRight: "Cooking and fishing help me relax, while exploring tech keeps my creativity flowing.",
    blogRightImage: "https://cdn.pixabay.com/photo/2017/10/06/23/43/woman-2825084_1280.png",
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
    title: "Customer To Customer",
    description: "A platform enabling customers to buy and sell items directly to each other, giving unused products a new life.",
    subtitle: "Revolutionizing Peer-to-Peer Commerce",
    imageUrl: "/screenshot/custom2c.png",
    projectUrl: "https://customer2customer.vercel.app/",
  },
  {
    title: "Assets Management System",
    description: "A comprehensive tool for managing and tracking organizational assets efficiently and securely.",
    subtitle: "Streamlining Asset Tracking for Organizations",
    imageUrl: "/screenshot/assetsms.png",
    projectUrl: "https://asset-management-system-one.vercel.app/",
  },
  {
    title: "Student Management System",
    description: "An application for managing student information, courses, and academic records in an educational institution.",
    subtitle: "Simplifying Student Data Management",
    imageUrl: "/screenshot/studentms.png",
    projectUrl: "https://student-management-system-wine.vercel.app/",
  },
  {
    title: "Weather Forecastor",
    description: "A real-time weather forecasting application providing accurate predictions for various locations worldwide.",
    subtitle: "Real-Time Weather Updates at Your Fingertips",
    imageUrl: "/screenshot/weatherfore.png",
    projectUrl: "https://intuji-t-3.vercel.app/",
  },
  {
    title: "Dashboard",
    description: "An interactive dashboard showcasing key metrics and visualizations for effective data-driven decision-making.",
    subtitle: "Data Insights and Visualizations Simplified",
    imageUrl: "/screenshot/rrms.png",
    projectUrl: "https://rr-dashboard-beryl.vercel.app/",
  },
  {
    title: "Multi User Tic Tac Toe",
    description: "A multiplayer version of the classic Tic Tac Toe game, allowing users to compete in real time.",
    subtitle: "Experience Classic Tic Tac Toe with Friends Online",
    imageUrl: "/screenshot/ticTac.png",
    projectUrl: "https://socket-jet.vercel.app/",
  },
];
