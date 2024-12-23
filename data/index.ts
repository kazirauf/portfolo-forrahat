import html from "../public/skill/html.png";
import css from "../public/skill/CSS.png";
import tailwind from "../public/skill/tailwind-logo.png";
import bootstrap from "../public/skill/Bootstrap_logo.svg.png";
import flobite from "../public/skill/flowbite-logo.png";
import javascript from "../public/skill/JavaScript-logo.png";
import typescript from "../public/skill/Typescript_logo_2020.svg.png";
import nextjs from "../public/skill/dango-inner-2.webp";
import react from "../public/skill/React-icon.svg.png";
import mongodb from "../public/skill/mongodb_thumbnail.webp";
import firebase from "../public/skill/1_R4c8lHBHuH5qyqOtZb3h-w.png";
import express from "../public/skill/102 copy.png";
import redux from "../public/skill/13142323.png";
import daisy from "../public/skill/76870092.png";
import metarialui from "../public/skill/Material UI-icon-for-blog.jpg";
import shadcnui from "../public/skill/139895814.png";
import figma from "../public/figma.png";
import notion from "../public/notion.png";
import discord from "../public/discord.png";
import slack from "../public/vscode.png";
import photoshop from "../public/github.webp";
import protopie from "../public/cnva.png";
import framer from "../public/clickup.png";
import raindrop from "../public/postman-icon.svg";
import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Complete Web Development Course Certificate",
    description: "Jul  Dec 2023 By Programming Hero",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/skill/ph-l1-c.png",
    link: "https://drive.google.com/file/d/1blaKlqDB_OOvPINJnJtujcs7k5-AnX_L/view",
    spareImg: "",
  },
  {
    id: 2,
    title: "Winners of CodeforCareer season 2 post",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/skill/winner.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Stellar Award Certificate",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/skill/bfgghj.png",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fork & Flavor",
    des: "This Recipe Sharing Community is a full-stack web application designed for cooking enthusiasts to discover, share, and organize recipes. The platform targets home cooks, culinary students, and passionate food lovers, allowing users to share their favorite recipes, interact with ingredient checklists, and manage cooking time estimates. It promotes culinary knowledge-sharing and social interaction through comments, ratings, following users, and upvoting/downvoting recipes. Premium membership unlocks exclusive content, accessible through a subscription-based model, allowing users to access additional features and content.",
    img: "/skill/11new.png",

    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/skill/mongodb_thumbnail.webp",
      "/skill/76870092.png",
    ],
    skills: [
      {
        name: "TypeScript",
        color: "text-[#3178C6] hover:bg-[#3178C6]/10",
        icon: typescript,
      },
      {
        name: "Next.js",
        color: "text-white hover:bg-white/10",
        icon: nextjs,
      },
      {
        name: "Express",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: express,
      },
      {
        name: "Redux",
        color: "text-[#764ABC] hover:bg-[#764ABC]/10",
        icon: redux,
      },
      {
        name: "MongoDB",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: mongodb,
      },

      {
        name: "Tailwind",
        color: "text-[#06B6D4] hover:bg-[#06B6D4]/10",
        icon: tailwind,
      },
      {
        name: "DaisyUI",
        color: "text-[#1AD1A5] hover:bg-[#1AD1A5]/10",
        icon: daisy,
      },
    ],

    link: "https://fandf-client.vercel.app/",
    githubClientLink: "https://github.com/kazirauf/Fork-Flavor-Client-Side",
    githubServerLink: "https://github.com/kazirauf/Fork-Flavor-Server-Side",
    gitImg: "/git.svg",
  },
  {
    id: 2,
    title: "KRE Elite Sport",
    des: "KRE Elite Sport is a fully integrated web application designed to streamline the process of browsing, booking, and managing sports facilities. The platform features a user-friendly interface with a responsive design, enabling users to easily search for facilities, check availability, and make bookings. It includes a comprehensive user dashboard for managing bookings and an admin dashboard for facility and user management. The platform is connected to a robust backend that handles secure payments, user authentication, and data management, ensuring a seamless and intuitive user experience.",
    img: "/skill/12new.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/skill/76870092.png",
      "/skill/102 copy.png",
      "/skill/mongodb_thumbnail.webp",
      "/skill/13142323.png",
    ],
    skills: [
      {
        name: "TypeScript",
        color: "text-[#3178C6] hover:bg-[#3178C6]/10",
        icon: typescript,
      },
      {
        name: "React",
        color: "text-[#61DAFB] hover:bg-[#61DAFB]/10",
        icon: react,
      },

      {
        name: "Express",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: express,
      },
      {
        name: "Redux",
        color: "text-[#764ABC] hover:bg-[#764ABC]/10",
        icon: redux,
      },
      {
        name: "MongoDB",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: mongodb,
      },

      {
        name: "Tailwind",
        color: "text-[#06B6D4] hover:bg-[#06B6D4]/10",
        icon: tailwind,
      },

      {
        name: "DaisyUI",
        color: "text-[#1AD1A5] hover:bg-[#1AD1A5]/10",
        icon: daisy,
      },
    ],

    link: "https://kre-elite-sport-client.vercel.app/",
    githubClientLink: "https://github.com/kazirauf/KRE-EliteSport-Client",
    githubServerLink: "https://github.com/kazirauf/KRE-Elite-Sport-Backend",
    gitImg: "/git.svg",
  },
  {
    id: 3,
    title: "Pure Planet",
    des: "Our online nursery offers a seamless way to purchase trees and plants. Browse, search, filter, and manage your cart easily. Enjoy secure online payments and a simple checkout process.",
    img: "/skill/13nwo.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/skill/76870092.png",
      "/skill/102 copy.png",
      "/skill/mongodb_thumbnail.webp",
      "/skill/13142323.png",
    ],
    skills: [
      {
        name: "TypeScript",
        color: "text-[#3178C6] hover:bg-[#3178C6]/10",
        icon: typescript,
      },
      {
        name: "React",
        color: "text-[#61DAFB] hover:bg-[#61DAFB]/10",
        icon: react,
      },

      {
        name: "Express",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: express,
      },
      {
        name: "Redux",
        color: "text-[#764ABC] hover:bg-[#764ABC]/10",
        icon: redux,
      },
      {
        name: "MongoDB",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: mongodb,
      },

      {
        name: "Tailwind",
        color: "text-[#06B6D4] hover:bg-[#06B6D4]/10",
        icon: tailwind,
      },

      {
        name: "DaisyUI",
        color: "text-[#1AD1A5] hover:bg-[#1AD1A5]/10",
        icon: daisy,
      },
    ],

    link: "https://pure-planet-fdda8.web.app/",
    githubClientLink: "https://github.com/kazirauf/pure-planet-client",
    githubServerLink: "https://github.com/kazirauf/pure-planet-server",
    gitImg: "/git.svg",
  },
  {
    id: 4,
    title: "Kre Survey Sync",
    des: "Kre-Survey-Sync, where you unleash survey prowess, command payments for pro users, and dive into influential insights through comments and reports. Features",
    img: "/skill/14new.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/skill/76870092.png",
      "/skill/102 copy.png",
      "/skill/mongodb_thumbnail.webp",
      "/skill/1_R4c8lHBHuH5qyqOtZb3h-w.png",
    ],
    skills: [
      {
        name: "React",
        color: "text-[#61DAFB] hover:bg-[#61DAFB]/10",
        icon: react,
      },

      {
        name: "Express",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: express,
      },
      {
        name: "MongoDB",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: mongodb,
      },

      {
        name: "Tailwind",
        color: "text-[#06B6D4] hover:bg-[#06B6D4]/10",
        icon: tailwind,
      },

      {
        name: "DaisyUI",
        color: "text-[#1AD1A5] hover:bg-[#1AD1A5]/10",
        icon: daisy,
      },
      {
        name: "Firebase",
        color: "text-[#FFCA28] hover:bg-[#FFCA28]/10",
        icon: firebase,
      },
    ],
    link: "https://kre-survey-sync.web.app/",
    githubClientLink: "https://github.com/kazirauf/kre-survey-sync-client-side",
    githubServerLink: "https://github.com/kazirauf/kre-survey-sync-server-side",
    gitImg: "/git.svg",
  },
  {
    id: 5,
    title: "Luxe Market Pro",
    des: "Experience the allure of Luxe-Market-Pro, where you not only post jobs but wield the power to select the ideal candidate. Navigate effortlessly as new users apply, turning each opportunity into a powerful hiring experience.",
    img: "/skill/15new.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/skill/76870092.png",
      "/skill/102 copy.png",
      "/skill/mongodb_thumbnail.webp",
      "/skill/1_R4c8lHBHuH5qyqOtZb3h-w.png",
    ],
    skills: [
      {
        name: "React",
        color: "text-[#61DAFB] hover:bg-[#61DAFB]/10",
        icon: react,
      },

      {
        name: "Express",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: express,
      },
      {
        name: "MongoDB",
        color: "text-[#47A248] hover:bg-[#47A248]/10",
        icon: mongodb,
      },

      {
        name: "Tailwind",
        color: "text-[#06B6D4] hover:bg-[#06B6D4]/10",
        icon: tailwind,
      },

      {
        name: "DaisyUI",
        color: "text-[#1AD1A5] hover:bg-[#1AD1A5]/10",
        icon: daisy,
      },
      {
        name: "Firebase",
        color: "text-[#FFCA28] hover:bg-[#FFCA28]/10",
        icon: firebase,
      },
    ],
    link: "https://luxe-market-pro.web.app/",
    githubClientLink:
      "https://github.com/kazirauf/luxe-market-pro-cliient-side",
    githubServerLink: "https://github.com/kazirauf/luxe-market-pro-server-side",
    gitImg: "/git.svg",
  },
  {
    id: 6,
    title: "Birthday Enjoy",
    des: "Birthday Enjoy is a robust platform aimed at enhancing the birthday celebration experience. With its event highlights on the homepage, responsive design, informative blog and tips section, and user-centric features like login and registration, it offers a comprehensive solution for users looking to make their birthdays memorable and stress-free.",
    img: "/skill/16new.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/skill/76870092.png",
      "/skill/1_R4c8lHBHuH5qyqOtZb3h-w.png",
    ],
    skills: [
      {
        name: "React",
        color: "text-[#61DAFB] hover:bg-[#61DAFB]/10",
        icon: react,
      },

      {
        name: "Tailwind",
        color: "text-[#06B6D4] hover:bg-[#06B6D4]/10",
        icon: tailwind,
      },

      {
        name: "DaisyUI",
        color: "text-[#1AD1A5] hover:bg-[#1AD1A5]/10",
        icon: daisy,
      },
      {
        name: "Firebase",
        color: "text-[#FFCA28] hover:bg-[#FFCA28]/10",
        icon: firebase,
      },
    ],
    link: "https://birthday-parties-events.web.app/",
    githubClientLink: "https://birthday-parties-events.web.app/",
    gitImg: "/git.svg",
  },
];

export const testimonials = [
  {
    quote:
      "I am pleased to recommend Kazi Rauf Elahi for his outstanding contributions as both a Graphic Designer and Digital Marketer. Kazi is a natural leader who brings creativity and fresh perspectives to every project, tackling challenges with energy and enthusiasm. His ability to communicate effectively with clients, coupled with his talent for organizing and motivating his team, has consistently led to successful project outcomes.Kazi possesses a unique combination of technical skill and people skills that make him a true asset. He approaches tasks with reliability and dedication, making him someone you can confidently entrust with important responsibilities. His passion for excellence and his drive to make a positive impact make him an invaluable member of any team.",
    name: "Tarikul Sk",
    title: "Founder and CEO @ Dr. Tech",
    image: "./st.jpeg",
  },
  {
    quote:
      "I highly recommend Kazi Rauf Elahi for his exceptional work and dedication to excellence. His expertise in React.js is outstanding, and his projects consistently showcase creativity and innovation. Elahi is a hardworking professional who exceeds expectations in everything he does. He is passionate about learning and always brings fresh ideas to his work.In addition to his technical skills, he is a humble and kind individual. Despite his young age, his intelligence and maturity are impressive. Elahi’s work speaks for itself, and I am truly inspired by his commitment and growth.",
    name: "Lucas Colalillo ",
    title: "Co-Founder @ Frelo.dev",
    image: "./1714598775265.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Development",
    desc: "With two years of experience, I craft dynamic, visually stunning websites and deliver advanced, functional web solutions using my Full Stack expertise, ensuring your project excels in the digital space.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Content Creation",
    desc: "I am a Junior Content Creator with a YouTube channel and Facebook, where I share web development tutorials, tips, and tricks to help new developers learn and grow their skills, empowering them to stay updated with the latest trends.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Graphic Design",
    desc: "With solid experience in graphic design, I craft visually appealing, brand-aligned designs. My time at Dr.tech enhanced my skills with tools like Canva and Photoshop, focusing on delivering high-quality design.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Video Editing",
    desc: "I am a video editor for my YouTube & content. While I’m not a professional video editor, I do it to improve my skills and create content for myself. I edit videos because people love and enjoy watching my content.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/kazirauf",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/RaufElahi",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/kazi-rauf-elahi9876/",
  },
  {
    id: 4,
    img: "/facebook.svg",
    url: "https://www.facebook.com/webdevrauf",
  },
  {
    id: 5,
    img: "/youtube.svg",
    url: "https://www.youtube.com/@kazirauf7726",
  },
  {
    id: 6,
    img: "/instra.svg",
    url: "https://www.instagram.com/kazirauf897/",
  },
];
export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
export const collabContent = [
  {
    id: "0",
    title: "Visual Studio Code – Code smarter, debug faster.",
  },
  {
    id: "1",
    title: "ClickUp – Manage tasks and projects effortlessly.",
  },
  {
    id: "2",
    title: "Figma – Design, prototype, and collaborate visually.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];
