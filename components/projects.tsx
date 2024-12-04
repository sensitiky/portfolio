import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from './ui/card';
import { projects } from '@/constants/utils';
import { SiGithub } from 'react-icons/si';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="container mx-auto px-4">
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
    </section>
  );
};

export default Projects;
