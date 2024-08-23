"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { Button } from "@/components/ui/button";

const works = [
  {
    title: "Project Blogchain",
    image: "blogchain.png?height=300&width=400",
    liveUrl: "https://blogchain.tech",
    githubUrl: "https://github.com/sensitiky/Blogchain",
    description: (
      <>
        PWA dedicated to the creation of articles related to blockchain.
        <br />
        Technologies used:
        <div className="flex space-x-2 mt-2">
          <div className="flex items-center space-x-1">
            <SiNextdotjs title="NextJS" className="text-white m-2" />
            <span>NextJS</span>
          </div>
          <div className="flex items-center space-x-1">
            <SiNestjs title="NestJS" className="text-white" />
            <span>NestJS</span>
          </div>
          <div className="flex items-center space-x-1">
            <SiTypescript title="TypeScript" className="text-white" />
            <span>TypeScript</span>
          </div>
          <div className="flex items-center space-x-1">
            <SiPostgresql title="PostgreSQL" className="text-white" />
            <span>PostgreSQL</span>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Project IESA",
    image: "iesa.png?height=300&width=400",
    liveUrl: "https://www.iesaeducativo.com/",
    githubUrl: "https://github.com/sensitiky/IESA-WEB",
    description: (
      <>
        SPA dedicated to the academic information of the IESA institute located
        in Argentina.
        <br />
        Technologies used:
        <div className="flex space-x-2 mt-2">
          <div className="flex items-center space-x-1">
            <SiNextdotjs title="NextJS" className="text-white m-2" />
            <span>NextJS</span>
          </div>
          <div className="flex items-center space-x-1">
            <SiTypescript title="TypeScript" className="text-white" />
            <span>TypeScript</span>
          </div>
        </div>
      </>
    ),
  },
];

export default function Parallax() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const refs = useRef(works.map(() => useRef(null)));
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          scrollContainerRef.current;
        const newScrollPercentage =
          (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollPercentage(newScrollPercentage);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden m-4">
      <div className="w-full md:w-1/2 relative scroll-container mb-8 md:mb-0">
        <div
          ref={scrollContainerRef}
          className="h-[50vh] md:h-full overflow-y-scroll snap-y snap-mandatory custom-scrollbar"
        >
          {works.map((work, index) => (
            <div
              key={work.title}
              ref={refs.current[index]}
              className="h-[50vh] md:h-screen snap-start flex items-center justify-center p-4 md:p-8 group relative"
            >
              <img
                src={work.image}
                alt={work.title}
                className="max-w-full max-h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="hover:backdrop-blur-sm bg-opacity-50 p-4 rounded-lg">
                  <Link
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 md:px-4 md:py-2 rounded transition-colors"
                  >
                    <Button className="bg-primary text-white hover:bg-primary/80 rounded-full text-sm md:text-base">
                      Live Demo
                    </Button>
                  </Link>
                  <Link
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 md:px-4 md:py-2 rounded transition-colors"
                  >
                    <Button className="bg-primary text-white hover:bg-primary/80 rounded-full text-sm md:text-base">
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="scroll-track">
          <div
            className="scroll-thumb"
            style={{ height: "20px", top: `${scrollPercentage}%` }}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="max-w-md">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            {works[activeIndex].title}
          </h2>
          <p className="text-base md:text-lg text-gray-100">
            {works[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}
