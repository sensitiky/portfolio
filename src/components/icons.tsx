import React from 'react';

const ICONS = [
  { src: 'kotlin.svg', name: 'Kotlin' },
  { src: 'javascript.svg', name: 'JavaScript' },
  { src: 'typescript.svg', name: 'TypeScript' },
];

const Frameworks = [
  { src: 'spring.svg', name: 'Spring' },
  { src: 'nextdotjs.svg', name: 'NextJS' },
  { src: 'nestjs.svg', name: 'NestJS' },
  { src: 'astro.svg', name: 'Astro' },
];

const Tools = [
  { src: 'git.svg', name: 'Git' },
  { src: 'cloudflare.svg', name: 'Cloudflare' },
  { src: 'postgresql.svg', name: 'PostgreSQL' },
  { src: 'mysql.svg', name: 'MySQL' },
  { src: 'google-cloud.svg', name: 'Google Cloud' },
  { src: 'aws.svg', name: 'AWS' },
];

const translations = {
  en: {
    languages: 'Languages',
    frameworks: 'Frameworks',
    tools: 'Tools',
  },
  es: {
    languages: 'Lenguajes',
    frameworks: 'Frameworks',
    tools: 'Herramientas',
  },
};

interface SkillsProps {
  language: 'en' | 'es';
}

export default function Skills({ language }: SkillsProps) {
  const t = translations[language];

  return (
    <div className="flex flex-col items-center justify-center text-white overflow-x-hidden sm:overflow-x-visible">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:w-full items-center justify-center">
        <div className="flex-shrink-0 sm:flex-shrink m-4 w-full sm:w-auto">
          <h2 className="text-[1.5rem] text-white font-medium flex flex-col items-center">
            {t.languages}
            <div className="flex flex-row">
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full border border-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
            </div>
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 justify-items-center">
            {ICONS.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={icon.src} alt={icon.name} className="w-16 h-16" />
                <span className="mt-2">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 sm:flex-shrink m-4 w-full sm:w-auto">
          <h2 className="text-[1.5rem] text-white font-medium flex flex-col items-center">
            {t.frameworks}
            <div className="flex flex-row">
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full border border-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
            </div>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 justify-items-center">
            {Frameworks.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={icon.src} alt={icon.name} className="w-16 h-16" />
                <span className="mt-2">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 sm:flex-shrink m-4 w-full sm:w-auto">
          <h2 className="text-[1.5rem] text-white font-medium flex flex-col items-center">
            {t.tools}
            <div className="flex flex-row">
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full border border-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
            </div>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 justify-items-center">
            {Tools.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={icon.src} alt={icon.name} className="w-16 h-16" />
                <span className="mt-2">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
