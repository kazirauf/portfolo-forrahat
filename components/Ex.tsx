/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useRef } from "react";
import { Leaf } from "lucide-react";
const Ex = () => {
  const timelineRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll("li");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className=" p-8">
        <h1 className="heading mb-20">
          WORK<span className="text-purple"> EXPERIENCE</span>
        </h1>
        <div className="max-w-5xl mx-auto relative">
          <ul className="timeline" ref={timelineRef}>
            <li className="opacity-0">
              <div className="timeline-badge primary">
                <span className="text-white">1</span>
              </div>
              <div className="timeline-panel bg-[#12141F] rounded-[20px] p-6">
                <div className="mb-4"></div>
                <div className="flex gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-blue-950  rounded-lg p-2 h-fit">
                    <span className="text-2xl font-bold text-white">GD</span>
                  </div>
                  <div>
                    <h2 className="timeline-title text-[22px] font-semibold text-white mb-4">
                      Graphic Designer and Digital Marketer (Full-Time)
                    </h2>
                    <div className="timeline-body">
                      <ul className="space-y-1 text-white text-base font-bold  mb-10">
                        <li className="text-purple">Dr. Tech</li>
                        <li>Kolkata, West Bengal, India (Remote)</li>
                        <li>October 2024 - October 2024</li>
                      </ul>
                      <p className="text-[#8A8F98] text-sm mt-3">
                        I am having a fantastic experience working at Dr.tech,
                        where I have been learning so much about Graphic Design
                        and Digital Marketing. The company is support has been
                        incredible, and I am thrilled to be a part of such a
                        dynamic and growth-oriented team. Excited to continue
                        growing and contributing at Dr.tech
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-inverted opacity-0">
              <div className="timeline-badge success">
                <span className="text-white">2</span>
              </div>
              <div className="timeline-panel bg-[#12141F] rounded-[20px] p-6">
                <div className="mb-4"></div>
                <div className="flex gap-4">
                <div className="bg-gradient-to-r from-violet-500 to-blue-950 rounded-lg p-2 h-fit">
                    <span className="text-2xl font-bold text-white">WD</span>
                  </div>
                  <div>
                    <h2 className="timeline-title text-[22px] font-semibold text-white mb-4">
                      Full-stack Developer (Internship)
                    </h2>
                    <div className="timeline-body">
                      <ul className="space-y-1 text-white text-base font-bold  mb-10">
                        <li className="text-purple">IPO Money</li>
                        <li>Jabalpur Cantonment, Madhya Pradesh, India</li>
                        <li>December 2023 - May 2024</li>
                      </ul>
                      <p className="text-[#8A8F98] text-sm mt-3">
                        I learned a lot from this internship about acquiring new
                        skills on the job and communicating effectively with
                        colleagues. It was a challenging three months, as
                        everything was new and I had to implement tasks I had
                        never done before. Despite the difficulties, I managed
                        to keep everything together and learned many new
                        technologies, including Next.js. Overall, these three
                        months were a valuable and enriching experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <style jsx>{`
          .timeline {
            list-style: none;
            padding: 20px 0 20px;
            position: relative;
          }
          .timeline:before {
            top: 0;
            bottom: 0;
            position: absolute;
            content: " ";
            width: 3px;
            background-color: #2a2b32;
            left: 50%;
            margin-left: -1.5px;
          }
          .timeline > li {
            margin-bottom: 20px;
            position: relative;
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          }
          .timeline > li:before,
          .timeline > li:after {
            content: " ";
            display: table;
          }
          .timeline > li:after {
            clear: both;
          }
          .timeline > li > .timeline-panel {
            width: 46%;
            float: left;
            border: 1px solid #2a2b32;
            border-radius: 20px;
            padding: 20px;
            position: relative;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
          }
          .timeline > li > .timeline-panel:before {
            position: absolute;
            top: 26px;
            right: -15px;
            display: inline-block;
            border-top: 15px solid transparent;
            border-left: 15px solid #2a2b32;
            border-right: 0 solid #2a2b32;
            border-bottom: 15px solid transparent;
            content: " ";
          }
          .timeline > li > .timeline-panel:after {
            position: absolute;
            top: 27px;
            right: -14px;
            display: inline-block;
            border-top: 14px solid transparent;
            border-left: 14px solid #12141f;
            border-right: 0 solid #12141f;
            border-bottom: 14px solid transparent;
            content: " ";
          }
          .timeline > li > .timeline-badge {
            color: #fff;
            width: 50px;
            height: 50px;
            line-height: 50px;
            font-size: 1.4em;
            text-align: center;
            position: absolute;
            top: 16px;
            left: 50%;
            margin-left: -25px;
            z-index: 100;
            border-top-right-radius: 50%;
            border-top-left-radius: 50%;
            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
          }
          .timeline > li.timeline-inverted > .timeline-panel {
            float: right;
          }
          .timeline > li.timeline-inverted > .timeline-panel:before {
            border-left-width: 0;
            border-right-width: 15px;
            left: -15px;
            right: auto;
          }
          .timeline > li.timeline-inverted > .timeline-panel:after {
            border-left-width: 0;
            border-right-width: 14px;
            left: -14px;
            right: auto;
          }
          .timeline-badge.primary {
            background-color: #0078d4 !important;
          }
          .timeline-badge.success {
            background-color: #16a34a !important;
          }
          .timeline-badge.danger {
            background-color: #dc2626 !important;
          }
          .timeline-title {
            margin-top: 0;
            color: inherit;
          }
          .timeline-body > p,
          .timeline-body > ul {
            margin-bottom: 0;
          }
          .timeline-body > p + p {
            margin-top: 5px;
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Ex;
