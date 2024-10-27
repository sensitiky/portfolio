import React from "react";
import { Button } from "./ui/button";
import {
  SiGithub,
  SiJetpackcompose,
  SiKotlin,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";

const projects = [
  {
    title: "Habit/Task management",
    gifUrl: "/taskHand.gif",
    githubUrl: "https://github.com/sensitiky/mobile-task.habit-management",
    stack: [
      {
        icon: (
          <SiKotlin
            key="kotlin"
            className="size-5"
            style={{ fill: "url(#kotlin)" }}
          />
        ),
        name: "Kotlin",
      },
      {
        icon: (
          <SiJetpackcompose
            key="jetpack"
            className="size-5"
            style={{ fill: "url(#jetpack)" }}
          />
        ),
        name: "Jetpack",
      },
    ],
  },
  {
    title: "Blockchain social media",
    gifUrl: "/blogchain.gif",
    githubUrl: "https://github.com/sensitiky/pwa-blockchain-articles",
    stack: [
      {
        icon: (
          <SiNextdotjs
            key="nextjs"
            className="size-5"
            style={{ fill: "url(#nextjs)" }}
          />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <SiNestjs
            key="nestjs"
            className="size-5"
            style={{ fill: "url(#nestjs)" }}
          />
        ),
        name: "NestJS",
      },
      {
        icon: (
          <SiTypescript
            key="typescript"
            className="size-5"
            style={{ fill: "url(#typescript)" }}
          />
        ),
        name: "TypeScript",
      },
    ],
  },
  {
    title: "Educational portal",
    gifUrl: "/iesa.gif",
    githubUrl: "https://github.com/sensitiky/SPA-university",
    stack: [
      {
        icon: (
          <SiNextdotjs
            key="nextjs"
            className="size-5"
            style={{ fill: "url(#nextjs)" }}
          />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <SiTailwindcss
            key="tailwind"
            className="size-5"
            style={{ fill: "url(#tailwind)" }}
          />
        ),
        name: "Tailwind CSS",
      },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 animated-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card className="animated-background hover:shadow-lg transition-shadow duration-300">
              <CardTitle className="text-xl text-neutral-300 flex justify-center p-4">
                {project.title}
              </CardTitle>
              <CardContent className="p-4">
                <Image
                  src={project.gifUrl}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="rounded-lg"
                />
              </CardContent>
              <CardDescription className="flex-row grid grid-cols-2 p-4">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex w-fit items-center bg-gray-700 text-gray-300 text-sm px-3 p-2 rounded-full mr-2 mb-2"
                  >
                    {tech.icon}
                    <span className="ml-2">{tech.name}</span>
                  </span>
                ))}
              </CardDescription>
              <CardFooter className="flex justify-center p-4">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="items-center gap-2 text-white bg-gray-500 hover:bg-gray-600 rounded-full text-base transition duration-300 px-4 py-2">
                    <SiGithub /> GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <svg width="0" height="0">
        <linearGradient id="kotlin" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#A97BFF" offset="0%" />
          <stop stopColor="#6C4AB6" offset="100%" />
        </linearGradient>
        <linearGradient id="jetpack" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#348bbc" offset="0%" />
          <stop stopColor="#34ba61" offset="100%" />
        </linearGradient>
        <linearGradient id="nextjs" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#000000" offset="0%" />
          <stop stopColor="#333333" offset="100%" />
        </linearGradient>
        <linearGradient id="nestjs" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#E0234E" offset="0%" />
          <stop stopColor="#A61B2B" offset="100%" />
        </linearGradient>
        <linearGradient id="typescript" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#007ACC" offset="0%" />
          <stop stopColor="#004A8D" offset="100%" />
        </linearGradient>
        <linearGradient id="tailwind" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#38B2AC" offset="0%" />
          <stop stopColor="#319795" offset="100%" />
        </linearGradient>
      </svg>
    </section>
  );
};

export default Projects;
