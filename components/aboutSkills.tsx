import React from 'react';

const ICONS = [
  { src: 'kotlin.svg', name: 'Kotlin' },
  { src: 'javascript.svg', name: 'JavaScript' },
  { src: 'typescript.svg', name: 'TypeScript' },
];

const Frameworks = [
  { src: 'jetpack.png', name: 'JetPack Compose' },
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

const languages = 'Languages';
const t = { frameworks: 'Frameworks', tools: 'Tools' };

export default function AboutSkills() {
  return (
    <div className="flex flex-col items-center justify-center  overflow-x-hidden sm:overflow-x-visible">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center m-4 w-full sm:w-auto">
          <h2 className="text-[1.5rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-medium flex flex-col items-center">
            {languages}
            <div className="flex flex-row">
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full border border-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
            </div>
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 items-center">
            {ICONS.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={icon.src} alt={icon.name} className="w-16 h-16" />
                <span className="mt-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center m-4 w-full sm:w-auto">
          <h2 className="text-[1.5rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-medium flex flex-col items-center">
            {t.frameworks}
            <div className="flex flex-row">
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full border border-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
            </div>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 items-center">
            {Frameworks.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={icon.src} alt={icon.name} className="w-16 h-16" />
                <span className="mt-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center m-4 w-full sm:w-auto">
          <h2 className="text-[1.5rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-medium flex flex-col items-center">
            {t.tools}
            <div className="flex flex-row">
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full border border-[#a6a6a6] w-2 h-2 m-1"></div>
              <div className="rounded-full bg-[#a6a6a6] w-2 h-2 m-1"></div>
            </div>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 items-center">
            {Tools.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={icon.src} alt={icon.name} className="w-16 h-16" />
                <span className="mt-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
