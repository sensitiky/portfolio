import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Projects from './projects';
import { experiences } from '@/constants/helpers';

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
                <div className="text-gray-300">
                  {exp.description?.map((element, idx) => (
                    <div key={idx} className="mb-4">
                      <p className="font-bold mb-2">{element.title}</p>
                      <ul className="list-disc list-inside space-y-1">
                        {element.subtitles.map((subtitle, sIdx) => (
                          <li key={sIdx} className="ml-4">
                            {subtitle.replace(/^- /, '')}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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
