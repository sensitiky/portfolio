import React from 'react';
import {
  SiDart,
  SiFlutter,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiNestjs,
  SiNextdotjs,
  SiSpringboot,
  SiTypescript,
  SiCloudflare,
  SiAmazon,
  SiGit,
  SiGooglecloud,
  SiPostgresql,
} from 'react-icons/si';

const languages = [
  { name: 'Kotlin', icon: <SiKotlin className="h-8 w-8 text-purple-600" /> },
  { name: 'Dart', icon: <SiDart className="h-8 w-8 text-blue-600" /> },
  {
    name: 'Javascript',
    icon: <SiJavascript className="h-8 w-8 text-yellow-400" />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript className="h-8 w-8 text-blue-600" />,
  },
];

const frameworks = [
  {
    name: 'JetPack Compose',
    icon: (
      <SiJetpackcompose className="size-8" style={{ fill: 'url(#jetpack)' }} />
    ),
  },
  { name: 'Flutter', icon: <SiFlutter className="size-8 text-blue-500" /> },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="size-8 text-green-500" />,
  },
  { name: 'NextJS', icon: <SiNextdotjs className="size-8 text-black" /> },
  { name: 'NestJS', icon: <SiNestjs className="size-8 text-red-500" /> },
];

const tools = [
  {
    name: 'Cloudflare',
    icon: (
      <SiCloudflare className="size-8" style={{ fill: 'url(#cloudflare)' }} />
    ),
  },
  {
    name: 'AWS',
    icon: <SiAmazon className="size-8" style={{ fill: 'url(#aws)' }} />,
  },
  {
    name: 'Git',
    icon: <SiGit className="size-8" style={{ fill: 'url(#git)' }} />,
  },
  {
    name: 'Google Cloud',
    icon: (
      <SiGooglecloud className="size-8" style={{ fill: 'url(#googlecloud)' }} />
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <SiPostgresql className="size-8" style={{ fill: 'url(#postgresql)' }} />
    ),
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Programming Languages
          </h3>
          <div className="flex justify-center space-x-8">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col items-center">
                {lang.icon}
                <span className="mt-2">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map((framework, index) => (
              <div key={index} className="flex flex-col items-center">
                {framework.icon}
                <span className="mt-2">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                {tool.icon}
                <span className="mt-2">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <svg width="0" height="0">
        <linearGradient id="jetpack" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#348bbc" offset="0%" />
          <stop stopColor="#34ba61" offset="100%" />
          <stop stopColor="#34bc61" offset="100%" />
        </linearGradient>
        <linearGradient id="cloudflare" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#f38020" offset="0%" />
          <stop stopColor="#f9a825" offset="100%" />
        </linearGradient>
        <linearGradient id="aws" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#ff9900" offset="0%" />
          <stop stopColor="#ffb84d" offset="100%" />
        </linearGradient>
        <linearGradient id="git" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#f34f29" offset="0%" />
          <stop stopColor="#f66d3a" offset="100%" />
        </linearGradient>
        <linearGradient id="googlecloud" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#4285f4" offset="0%" />
          <stop stopColor="#34a853" offset="50%" />
          <stop stopColor="#fbbc05" offset="75%" />
          <stop stopColor="#ea4335" offset="100%" />
        </linearGradient>
        <linearGradient id="postgresql" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#336791" offset="0%" />
          <stop stopColor="#6699cc" offset="100%" />
        </linearGradient>
      </svg>
    </section>
  );
};

export default Skills;
