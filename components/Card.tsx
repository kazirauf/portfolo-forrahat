"use client";
import l1 from "../public/skill/achiv/8c.png";
import l2 from "../public/skill/achiv/bfgghj.png";
import c from "../public/skill/achiv/c-winer.jpg";
import w from "../public/skill/achiv/winner.jpg";
import b from "../public/skill/achiv/1706763281215.jpeg";
import React, { useState } from "react";
import Image from "next/image";
import { link } from "fs";
const Card = () => {
  // Explicitly type state as `number | null`
  const [openCardId, setOpenCardId] = useState<number | null>(1);

  const worlds = [
    {
      id: 1,
      title: "Complete Web Development Course Certificate",
      bgClass: "from-purple-600 to-pink-500",
      weight: 5,
      image: l1,
      link: "https://drive.google.com/file/d/1blaKlqDB_OOvPINJnJtujcs7k5-AnX_L/view",
    },
    {
      id: 2,
      title: "Stellar Award Certificate",
      subtitle: "ENTER THE METAVERSE",
      bgClass: "from-purple-600 to-pink-500",
      weight: 4,
      image: l2,
      link: "https://drive.google.com/file/d/17U08LHbMX8sYCG-CIlXar0ZJRhLnURZh/view?usp=sharing",
    },
    {
      id: 3,
      title: "Winners of CodeforCareer season 2 Certificate",
      bgClass: "from-purple-800 to-indigo-900",
      weight: 3,
      image: c,
      link: "https://drive.google.com/file/d/1cTzjTpsfZVkbB0JMy6G5bBqREpGY91ri/view",
    },
    {
      id: 4,
      title: "Winners of CodeforCareer season 2 post",
      bgClass: "from-purple-600 to-pink-500",
      weight: 2,
      image: w,
      link: "https://www.facebook.com/photo/?fbid=848244270683501&set=a.557327649775166",
    },
    {
      id: 5,
      title: "Black Belt",
      bgClass: "from-purple-600 to-pink-500",
      weight: 1,
      image: b,
      link: "https://drive.google.com/file/d/1m5K1PXQaaiDA5s5W35sU8A2CqJadMXoM/view",
    },
  ].sort((a, b) => b.weight - a.weight);

  const handleCardClick = (id: number) => {
    setOpenCardId(id === openCardId ? null : id);
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="heading mb-20">
          MY <span className="text-purple"> ACHIEVEMENTS</span>
        </h1>

        <div className="flex justify-center gap-2 flex-wrap">
          {worlds.map((world) => (
            <div
              key={world.id}
              className={`relative h-[500px] rounded-2xl overflow-hidden cursor-pointer 
              transition-all duration-500 ease-out
              ${openCardId === world.id ? "w-[500px]" : "w-[100px]"}`}
              onClick={() => handleCardClick(world.id)}
            >
              {/* Background Image */}
              <Image
                src={world.image}
                alt={world.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 z-10 bg-gradient-to-b ${world.bgClass} opacity-70`}
              ></div>

              {/* Star particles effect */}
              <div className="absolute inset-0 z-20 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  />
                ))}
              </div>

              {/* Vertical Title (shown when not open) */}
              <div
                className={`absolute inset-0 z-30 flex items-center justify-center ${
                  openCardId === world.id ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
              >
                <div className="rotate-90 whitespace-nowrap text-white font-medium text-lg">
                  {world.title}
                </div>
              </div>

              {/* Expanded Content (shown when open) */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-black/100 to-transparent
                ${
                  openCardId === world.id ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {world.title}
                </h3>
                {world.subtitle && (
                  <div className="text-sm text-white/80 mb-4">
                    {world.subtitle}
                  </div>
                )}
                <p className="text-white/90 text-sm">
                  <a
                    href={world.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-red-400 font-bold"
                  >
                    Click to explore more about
                  </a>{" "}
                  {world.title} By (Programming Hero)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
