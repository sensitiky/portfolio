'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiGithub,
} from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const works = [
  {
    title: 'Project Blogchain',
    image: '/blogchain.png',
    liveUrl: 'https://blogchain.tech',
    githubUrl: 'https://github.com/sensitiky/Blogchain',
    description:
      'A PWA dedicated to creating articles related to blockchain.\nCredentials: User: usuario, Password: tester123',
    technologies: [
      { icon: SiNextdotjs, name: 'NextJS' },
      { icon: SiNestjs, name: 'NestJS' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
    ],
  },
  {
    title: 'Project IESA',
    image: '/iesa.png?height=300&width=400',
    liveUrl: 'https://www.iesaeducativo.com/',
    githubUrl: 'https://github.com/sensitiky/IESA-WEB',
    description:
      'SPA dedicated to the academic information of the IESA institute located in Posadas,Misiones. Argentina.',
    technologies: [
      { icon: SiNextdotjs, name: 'NextJS' },
      { icon: SiTypescript, name: 'TypeScript' },
    ],
  },
];

export default function Scroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {works.map((work) => (
          <motion.div key={work.title} className="mb-24 last:mb-0">
            <Card className="bg-transparent border-none">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={work.image}
                      alt={work.title}
                      width={1920}
                      height={1920}
                      className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-white">
                        {work.title}
                      </h2>
                      <p className="text-gray-300 mb-4">{work.description}</p>
                      <div className="flex flex-wrap gap-3 mb-6">
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
                          Live Demo
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto rounded-full border border-black"
                      >
                        <Link
                          href={work.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="text-black mr-2 size-6" />
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
