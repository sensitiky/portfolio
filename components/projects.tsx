import React from 'react';
import { Button } from './ui/button';
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';

const projects = [
  {
    title: 'Habit/Task management',
    gifUrl: '/taskHand.gif',
    githubUrl: 'https://github.com/sensitiky/mobile-task.habit-management',
  },
  {
    title: 'Blockchain social media',
    gifUrl: '/blogchain.gif',
    githubUrl: 'https://github.com/sensitiky/pwa-blockchain-articles',
  },
  {
    title: 'Educational portal',
    gifUrl: '/iesa.gif',
    githubUrl: 'https://github.com/sensitiky/SPA-university',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 animated-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-300">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block animated-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={project.gifUrl}
                alt={project.title}
                className="w-full h-3/4 object-fit"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {project.title}
                </h3>
                <Button className="gap-2 text-gray-300 rounded-full text-lg transition duration-300 mb-8 animated-background items-center">
                  <SiGithub /> GitHub
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
