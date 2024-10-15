'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiGithub,
} from 'react-icons/si';
import { Button } from '@/components/ui/button';

const translations = {
  en: {
    liveDemo: 'Live Demo',
    github: 'GitHub',
    works: [
      {
        title: 'Project Blogchain',
        description:
          'A PWA dedicated to creating articles related to blockchain.\nCredentials: User: usuario, Password: tester123',
      },
      {
        title: 'Project IESA',
        description:
          'SPA dedicated to the academic information of the IESA institute located in Posadas, Misiones, Argentina.',
      },
    ],
  },
  es: {
    liveDemo: 'Demo en Vivo',
    github: 'GitHub',
    works: [
      {
        title: 'Proyecto Blogchain',
        description:
          'Una PWA dedicada a la creación de artículos relacionados con blockchain.\nCredenciales: Usuario: usuario, Contraseña: tester123',
      },
      {
        title: 'Proyecto IESA',
        description:
          'SPA dedicada a la información académica del instituto IESA ubicado en Posadas, Misiones, Argentina.',
      },
    ],
  },
};

const works = [
  {
    image: '/blogchain.png',
    liveUrl: 'https://blogchain.tech',
    githubUrl: 'https://github.com/sensitiky/Blogchain',
    technologies: [
      { icon: SiNextdotjs, name: 'NextJS' },
      { icon: SiNestjs, name: 'NestJS' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
    ],
  },
  {
    image: '/iesa.png',
    liveUrl: 'https://www.iesaeducativo.com/',
    githubUrl: 'https://github.com/sensitiky/IESA-WEB',
    technologies: [
      { icon: SiNextdotjs, name: 'NextJS' },
      { icon: SiTypescript, name: 'TypeScript' },
    ],
  },
];

interface WorkProps {
  language: 'en' | 'es';
}

export default function Work({ language }: WorkProps) {
  const t = translations[language];

  return (
    <div className="text-white py-8 px-4 sm:px-6 lg:px-8 flex justify-end">
      <div className="mx-auto grid grid-cols-1 gap-8 max-w-4xl">
        {works.map((work, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              src={work.image}
              alt={t.works[index].title}
              width={1920}
              height={1080}
              className="rounded-lg object-cover w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-4 text-center rounded-lg items-center justify-center">
              <div className="flex flex-col items-center">
                <h2
                  className="text-white mb-1"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
                >
                  {t.works[index].title}
                </h2>
                <p
                  className="text-gray-300 mb-2 leading-tight"
                  style={{ fontSize: 'clamp(0.8rem, 2vw, 1.2rem)' }}
                >
                  {t.works[index].description}
                </p>
                <div className="flex flex-wrap gap-1 mb-2 justify-center">
                  {work.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center bg-gray-700 text-gray-300 rounded-full px-1.5 py-0.5"
                    >
                      <tech.icon className="w-4 h-4 mr-1" />
                      <span className="text-xs">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center space-x-2 ">
                <Button
                  asChild
                  variant="default"
                  className="rounded-full border border-white"
                  style={{
                    padding:
                      'clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 1rem)',
                  }}
                >
                  <Link
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 'clamp(0.6rem, 1vw, 1rem)' }}
                  >
                    {t.liveDemo}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border border-black text-black hover:bg-inherit/80"
                  style={{
                    padding:
                      'clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 3rem)',
                  }}
                >
                  <Link
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                    style={{ fontSize: 'clamp(0.6rem, 1vw, 1rem)' }}
                  >
                    <SiGithub className="mr-1" />
                    {t.github}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
