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
    image: '/iesa.png?height=300&width=400',
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
      <div className="mx-auto grid grid-cols-1 gap-8">
        {works.map((work, index) => (
          <div key={index} className="relative group">
            <Image
              src={work.image}
              alt={t.works[index].title}
              width={1920}
              height={1080}
              className="rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {t.works[index].title}
              </h2>
              <p className="text-gray-300 mb-4">{t.works[index].description}</p>
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {work.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center bg-gray-700 text-gray-300 rounded-full px-3 py-1"
                  >
                    <tech.icon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4">
                <Button
                  asChild
                  variant="default"
                  className="w-full sm:w-auto rounded-full border border-white"
                >
                  <Link
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.liveDemo}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full text-black hover:bg-inherit/80 sm:w-auto rounded-full border border-black"
                >
                  <Link
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="text-black mr-2 size-6" />
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
