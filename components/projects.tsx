import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { projects } from "@/constants/utils";
import { SiGithub } from "react-icons/si";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t-[1px] border-neutral-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12 text-neutral-200">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-none bg-white/5 rounded-xl overflow-hidden transition-shadow duration-300"
            >
              <CardContent className="p-6 group relative overflow-hidden">
                <div className="overflow-hidden rounded-md mb-6">
                  <Image
                    src={project.gifUrl}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className="group-hover:scale-125 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <CardTitle className="text-2xl font-semibold text-neutral-300 mb-4">
                  {project.title}
                </CardTitle>
                <CardDescription className="flex flex-wrap gap-1">
                  {project.stack.map((tech, techIndex) => (
                    <Button
                      key={techIndex}
                      className="flex gap-1 items-center text-sm text-neutral-300 bg-gray-800 hover:bg-gray-800 rounded-full"
                    >
                      {tech.icon}
                      {tech.name}
                    </Button>
                  ))}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="flex items-center gap-2 bg-transparent border text-white hover:bg-gray-700 rounded-full text-base px-6 py-2">
                    <SiGithub /> GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* SVG Gradients */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="kotlin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#A97BFF" offset="0%" />
            <stop stopColor="#6C4AB6" offset="100%" />
          </linearGradient>
          <linearGradient id="jetpack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#348bbc" offset="0%" />
            <stop stopColor="#34ba61" offset="100%" />
          </linearGradient>
          <linearGradient id="nextjs" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#000000" offset="0%" />
            <stop stopColor="#333333" offset="100%" />
          </linearGradient>
          <linearGradient id="nestjs" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#E0234E" offset="0%" />
            <stop stopColor="#A61B2B" offset="100%" />
          </linearGradient>
          <linearGradient id="typescript" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#007ACC" offset="0%" />
            <stop stopColor="#004A8D" offset="100%" />
          </linearGradient>
          <linearGradient id="tailwind" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#38B2AC" offset="0%" />
            <stop stopColor="#319795" offset="100%" />
          </linearGradient>
          <linearGradient id="postgresql" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#336791" offset="0%" />
            <stop stopColor="#4F7DBE" offset="100%" />
          </linearGradient>
          <linearGradient id="aws" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#FF9900" offset="0%" />
            <stop stopColor="#FFB84D" offset="100%" />
          </linearGradient>
          <linearGradient id="flutter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#02569B" offset="0%" />
            <stop stopColor="#0A84FF" offset="100%" />
          </linearGradient>
          <linearGradient id="firebase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#FFCA28" offset="0%" />
            <stop stopColor="#FFA000" offset="100%" />
          </linearGradient>
          <linearGradient id="dart" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#0175C2" offset="0%" />
            <stop stopColor="#13B9FD" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Projects;
