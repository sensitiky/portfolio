import { BiLogoPostgresql } from 'react-icons/bi';
import { FaJava, FaNodeJs } from 'react-icons/fa';
import {
  SiNestjs,
  SiTypescript,
  SiCloudflare,
  SiAmazon,
  SiGit,
  SiGooglecloud,
  SiMysql,
  SiSqlite,
  SiReact,
  SiFirebase,
  SiQuarkus,
  SiSpringboot,
  SiGo,
  SiNextdotjs,
} from 'react-icons/si';

export const languages = [
  {
    name: 'Typescript',
    icon: (
      <SiTypescript
        style={{ height: 20, width: 20, fill: 'url(#typescript)' }}
      />
    ),
  },
  {
    name: 'Java',
    icon: <FaJava style={{ height: 20, width: 20, fill: 'url(#java)' }} />,
  },
  {
    name: 'Go',
    icon: (
      <SiGo style={{ height: 20, width: 20, fill: 'url(#react-native)' }} />
    ),
  },
];

export const frameworks = [
  {
    name: 'React/React Native',
    icon: (
      <SiReact style={{ height: 20, width: 20, fill: 'url(#react-native)' }} />
    ),
  },
  {
    name: 'NextJS',
    icon: (
      <SiNextdotjs style={{ height: 20, width: 20, fill: 'url(#nextjs)' }} />
    ),
  },
  {
    name: 'NestJS',
    icon: <SiNestjs style={{ height: 20, width: 20, fill: 'url(#nestjs)' }} />,
  },
  {
    name: 'NodeJS',
    icon: <FaNodeJs style={{ height: 20, width: 20, fill: 'green' }} />,
  },
  {
    name: 'Spring',
    icon: <SiSpringboot style={{ height: 20, width: 20, fill: 'green' }} />,
  },
];

export const databases = [
  {
    name: 'PostgreSQL',
    icon: (
      <BiLogoPostgresql
        style={{ height: 20, width: 20, fill: 'url(#postgresql)' }}
      />
    ),
  },
  {
    name: 'MySQL',
    icon: <SiMysql style={{ height: 20, width: 20, fill: 'url(#mysql)' }} />,
  },
  {
    name: 'SQLite',
    icon: <SiSqlite style={{ height: 20, width: 20, fill: 'url(#sqlite)' }} />,
  },
  {
    name: 'Firebase',
    icon: (
      <SiFirebase style={{ height: 20, width: 20, fill: 'url(#firebase)' }} />
    ),
  },
];

export const cloudTools = [
  {
    name: 'Cloudflare',
    icon: (
      <SiCloudflare
        style={{ height: 20, width: 20, fill: 'url(#cloudflare)' }}
      />
    ),
  },
  {
    name: 'AWS',
    icon: <SiAmazon style={{ height: 20, width: 20, fill: 'url(#aws)' }} />,
  },
  {
    name: 'Git',
    icon: <SiGit style={{ height: 20, width: 20, fill: 'url(#git)' }} />,
  },
  {
    name: 'G-Cloud',
    icon: (
      <SiGooglecloud style={{ height: 20, width: 20, fill: 'url(#g-cloud)' }} />
    ),
  },
];
