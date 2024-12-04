import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Projects from './projects';
const experiences = [
  {
    company: 'Freelancer.',
    position: 'Fullstack Developer',
    period: 'July 2022 - Present',
    description:
      'Working on various projects using TypeScript, Kotlin, Dart and Java.',
  },
  {
    company: 'IESA Instituto de Estudios Superiores Argentino',
    position: 'FullStack Developer',
    period: 'Mar 2024 - Present',
    description:
      'Developing various platforms to provide educational services on different devices, including web, virtual classroom, and mobile applications.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t-[1px] border-gray-800">
      <Tabs
        defaultValue="experience"
        className="justify-center flex flex-col items-center"
      >
        <TabsList className="grid grid-cols-2 bg-neutral-800 mb-4">
          <TabsTrigger
            value="experience"
            className="text-gray-300 data-[state=active]:text-neutral-100 data-[state=active]:bg-neutral-700"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="work"
            className="text-gray-300 data-[state=active]:text-neutral-100 data-[state=active]:bg-neutral-700"
          >
            Projects
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex">
              <div className="w-1/4 pr-4 text-right">
                <p className="text-sm text-gray-300">{exp.period}</p>
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-xl font-semibold text-gray-300">
                  {exp.position}
                </h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="work">
          <Projects />
        </TabsContent>
      </Tabs>
    </section>
  );
}
