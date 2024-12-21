import { socialMedia } from "@/data";
import img from "../public/about.jpg";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center gap-20 mt-20 lg:mt-36 md:mt-20">
      <div>
        <Image src={img} alt="rauf image" width={2500} height={1000} />
      </div>
      <div className=" border border-white/[0.1] group/bento hover:shadow-xl px-10 py-10">
        <h1 className="text-start text-xl md:text-2xl text-purple font-bold">
          Driven Full Stack Web Developer
        </h1>
        <p className="text-start text-white-100 mt-3 font-semibold mb-10">
          Driven Full Stack Web Developer with 6 months of internship experience
          and 2 years of coding expertise, specializing in front-end
          technologies like React, JavaScript, and Tailwind CSS. Proficient in
          HTML, CSS, JavaScript, React, Bootstrap, React JS, Firebase, MongoDB,
          Express JS, TypeScript, Redux, and Next.js, with a commitment to
          delivering high-quality, scalable solutions. Seeking opportunities to
          apply my technical skills and continuously enhance my proficiency in
          diverse technologies, contributing to the success of innovative web
          development projects.
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
