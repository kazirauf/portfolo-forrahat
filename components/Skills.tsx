import Image from "next/image";
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
import Tools from "./Tools";
const Skills = () => {
  const technologies = [
    {
      name: "HTML",
      color: "text-[#E34F26] hover:bg-[#E34F26]/10",
      icon: html,
    },
    {
      name: "CSS",
      color: "text-[#1572B6] hover:bg-[#1572B6]/10",
      icon: css,
    },
    {
      name: "JavaScript",
      color: "text-[#F7DF1E] hover:bg-[#F7DF1E]/10",
      icon: javascript,
    },
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
      name: "Bootstrap",
      color: "text-[#7952B3] hover:bg-[#7952B3]/10",
      icon: bootstrap,
    },
    {
      name: "DaisyUI",
      color: "text-[#1AD1A5] hover:bg-[#1AD1A5]/10",
      icon: daisy,
    },
    {
      name: "Material ui",
      color: "text-[#61DAFB] hover:bg-[#61DAFB]/10",
      icon: metarialui,
    },
    {
      name: "Flowbite",
      color: "text-[#3B82F6] hover:bg-[#3B82F6]/10",
      icon: flobite,
    },
    {
      name: "Firebase",
      color: "text-[#FFCA28] hover:bg-[#FFCA28]/10",
      icon: firebase,
    },
    {
      name: "Shadcn ui",
      color: "text-white hover:bg-white/10",
      icon: shadcnui,
    },
  ];

  return (
    <div id="skills" className="my-10">
      <h1 className="heading my-10">
        MY <span className="text-purple">SKILLS</span>
      </h1>
      <div className=" p-6 rounded-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {technologies.map((tech) => (
            <button
              key={tech.name}
              className={`flex items-center justify-center gap-2 lg:px-7 md:px-7 px-5 lg:py-4 md:py-4 py-3 rounded-lg transition-colors duration-200 border border-white/[0.1] group/bento hover:shadow-xl ${tech.color}`}
            >
              <Image
                src={tech.icon}
                alt=""
                width={32}
                height={32}
                className="w-6 h-6"
              />
              <span className="lg:text-lg md:text-lg text-xs font-medium">{tech.name}</span>
            </button>
          ))}
        </div>
      </div>
      <Tools />
    </div>
  );
};

export default Skills;
