import { socialMedia } from "@/data";
import img from "../public/main-image.jpg";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Button } from "./ui/MovingBorders";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="lg:flex md:flex justify-center items-center gap-20 mt-20 lg:mt-36 md:mt-20 mb-36 "
    >
      <Button
        //   random duration will be fun , I think , may be not
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          // add this border radius to make it more rounded so that the moving border is more realistic
        }}
        // remove bg-white dark:bg-slate-900
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-5"
      >
        <div className="">
          <Image src={img} alt="rauf image" width={3700} height={2000} />
        </div>
      </Button>

      <div className=" border border-white/[0.1] group/bento hover:shadow-xl px-10 py-10 lg:mt-0 md:mt-0 mt-10">
        <h1 className="text-start text-lg md:text-2xl text-purple font-bold">
          Driven Full Stack Web Developer
        </h1>
        <p className="text-start text-white-100 lg:text-sm md:text-sm text-xs mt-3 font-semibold lg:mb-10 md:mb-10 mb-5">
        I’m a dedicated Full Stack Web Developer with two years of experience crafting high-level, modern, and fully responsive websites. Skilled in HTML, CSS (including Tailwind and Bootstrap), JavaScript, React.js, Next.js, and TypeScript on the frontend, and Node.js, Express.js, MongoDB, Firebase, and JWT on the backend, I thrive on transforming complex requirements into clean, efficient solutions. Passionate about keeping up with the latest web‑development trends, I focus on writing maintainable code, optimizing performance, and delivering exceptional user experiences in every project.
        </p>
        <div className="flex flex-wrap items-center lg:gap-3 md:gap-3 gap-1 lg:mb-0 md:mb-0 mb-5">
          {socialMedia.map((info) => (
            <a target="_blank" key={info.id} href={info.url}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
        <a href="mailto:kazirahat9876@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple underline">
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
