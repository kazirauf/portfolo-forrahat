"use client"; // Add this at the very top

import { useParams } from "next/navigation"; // Use next/navigation for App Router
import { PinContainer } from "@/components/ui/Pin";
import { projects } from "@/data";
import { FaGit, FaGithub, FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "@/components/MagicButton";

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get the dynamic route parameter

  // Ensure projectId is a string (handles cases where it's an array)
  const id = Array.isArray(projectId) ? projectId[0] : projectId;

  // Find the project by id
  const project = projects.find((item) => item.id === parseInt(id, 10));

  if (!project) {
    return <div>Project not found or loading...</div>; // Show a fallback state
  }

  return (
    <div
      className=" h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center flex-col"
    >
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      ></div>
      <div className="   container flex justify-around items-center">
        <div className="">
          <Image src={project.img} width={600} height={4} alt="project image" />
        </div>
        <div className="text-start w-[600px]">
          <h1 className="text-4xl font-bold mb-5">
            <span className="text-purple">{project.title}</span>
          </h1>
          <p className="w-[500px] text-sm text-gray-500 ">{project.des}</p>
          <div className="flex items-center flex-wrap mt-5 gap-2">
            {project.skills.map((icon, index) => (
              <button
                key={index}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 border border-white/[0.1] group/bento hover:shadow-xl ${icon.color}`}
              >
                <Image
                  src={icon.icon}
                  alt=""
                  width={34}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-sm font-medium">{icon.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <a href={project.link} target="_blank">
          <MagicButton
            title="Watch Live Site"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <a href={project.githubClientLink} target="_blank">
          <MagicButton
            title="Client Side Repository"
            icon={<FaGithub />}
            position="right"
          />
        </a>
        <a href={project.githubServerLink} target="_blank">
          <MagicButton
            title="Server Side Repository"
            icon={<FaGithub />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
