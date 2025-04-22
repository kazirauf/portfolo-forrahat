import Image from "next/image";
import { collabApps, collabContent, collabText } from "@/data";
import { Button } from "./ui/MovingBorders";
import curve1 from "../public/curve-1.svg";
import curve2 from "../public/curve-2.svg";
import me from "../public/skill/logo.jpeg";
import check from "../public/check.svg";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <Image src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <Image src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};

const Tools = () => {
  return (
    <section>
      <div className="container lg:flex my-20">
        <div className="max-w-[25rem]">
          <h1 className="text-start text-xl md:text-2xl mb-5 text-purple font-bold">
            Tools I Love to Use
          </h1>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Image src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <div className="relative left-1/2 flex lg:w-[22rem] md:w-[22rem] w-[18rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 ">
                  <Image
                    className="rounded-full"
                    src={me}
                    width={80}
                    height={36}
                    alt="kazi rahat tasnim"
                  />
                </div>
              </div>
            </div>

            <ul >
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-6 origin-bottom`}
                  style={{ transform: `rotate(${index * 45}deg)` }}
                >
                  <div
                    className={`relative -top-6 flex w-8 h-8 bg-gray-700 border border-gray-300 rounded-xl`}
                    style={{ transform: `rotate(-${index * 45}deg)` }}
                  >
                    <Image
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
