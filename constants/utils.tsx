import { BiLogoPostgresql } from 'react-icons/bi';
import {
  SiDart,
  SiFlutter,
  SiJetpackcompose,
  SiKotlin,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiCloudflare,
  SiAmazon,
  SiGit,
  SiGooglecloud,
  SiMysql,
  SiSqlite,
  SiReact,
  SiAwsamplify,
  SiFirebase,
  SiTailwindcss,
} from 'react-icons/si';

export const projects = [
  {
    title: 'Habit/Task Management',
    gifUrl: '/taskHand.gif',
    githubUrl: 'https://github.com/sensitiky/mobile-task.habit-management',
    stack: [
      {
        icon: (
          <SiKotlin
            key="kotlin"
            className="h-5 w-5"
            style={{ fill: 'url(#kotlin)' }}
          />
        ),
        name: 'Kotlin',
      },
      {
        icon: (
          <SiJetpackcompose
            key="jetpack"
            className="h-5 w-5"
            style={{ fill: 'url(#jetpack)' }}
          />
        ),
        name: 'Jetpack',
      },
      {
        icon: (
          <SiFirebase
            key="Firebase"
            className="h-5 w-5"
            style={{ fill: 'url(#firebase)' }}
          />
        ),
        name: 'Firebase',
      },
    ],
  },
  {
    title: 'Blockchain Social Media',
    gifUrl: '/blogchain.gif',
    githubUrl: 'https://github.com/sensitiky/pwa-blockchain-articles',
    stack: [
      {
        icon: (
          <SiNextdotjs
            key="nextjs"
            className="h-5 w-5"
            style={{ fill: 'white' }}
          />
        ),
        name: 'Next.js',
      },
      {
        icon: (
          <SiNestjs
            key="nestjs"
            className="h-5 w-5"
            style={{ fill: 'url(#nestjs)' }}
          />
        ),
        name: 'NestJS',
      },
      {
        icon: (
          <SiTypescript
            key="typescript"
            className="h-5 w-5"
            style={{ fill: 'url(#typescript)' }}
          />
        ),
        name: 'TypeScript',
      },
      {
        icon: (
          <BiLogoPostgresql
            key="postgresql"
            className="h-5 w-5"
            style={{ fill: 'url(#postgresql)' }}
          />
        ),
        name: 'PostgreSQL',
      },
      {
        icon: (
          <SiAwsamplify
            key="aws"
            className="h-5 w-5"
            style={{ fill: 'url(#aws)' }}
          />
        ),
        name: 'AWS',
      },
    ],
  },
  {
    title: 'Educational Portal',
    gifUrl: '/iesa.gif',
    githubUrl: 'https://github.com/sensitiky/SPA-university',
    stack: [
      {
        icon: (
          <SiNextdotjs
            key="nextjs"
            className="h-5 w-5"
            style={{ fill: 'white' }}
          />
        ),
        name: 'Next.js',
      },
      {
        icon: (
          <SiTailwindcss
            key="tailwind"
            className="h-5 w-5"
            style={{ fill: 'url(#tailwind)' }}
          />
        ),
        name: 'Tailwind CSS',
      },
      {
        icon: (
          <SiTypescript
            key="typescript"
            className="h-5 w-5"
            style={{ fill: 'url(#typescript)' }}
          />
        ),
        name: 'TypeScript',
      },
    ],
  },
  {
    title: 'Finance Tracker',
    gifUrl: '/fundora.gif',
    githubUrl: 'https://github.com/sensitiky/flutter-finance-tracker',
    stack: [
      {
        icon: (
          <SiFlutter
            key="Flutter"
            className="h-5 w-5"
            style={{ fill: 'url(#flutter)' }}
          />
        ),
        name: 'Flutter',
      },
      {
        icon: (
          <SiFirebase
            key="Firebase"
            className="h-5 w-5"
            style={{ fill: 'url(#firebase)' }}
          />
        ),
        name: 'Firebase',
      },
      {
        icon: (
          <SiDart
            key="dart"
            className="h-5 w-5"
            style={{ fill: 'url(#dart)' }}
          />
        ),
        name: 'Dart',
      },
    ],
  },
];

export const languages = [
  {
    name: 'Kotlin',
    icon: <SiKotlin style={{ height: 20, width: 20, fill: 'url(#kotlin)' }} />,
  },
  {
    name: 'Dart',
    icon: <SiDart style={{ height: 20, width: 20, fill: 'url(#dart)' }} />,
  },
  {
    name: 'Typescript',
    icon: (
      <SiTypescript
        style={{ height: 20, width: 20, fill: 'url(#typescript)' }}
      />
    ),
  },
];

export const frameworks = [
  {
    name: 'JetPack',
    icon: (
      <SiJetpackcompose
        style={{ height: 20, width: 20, fill: 'url(#jetpack)' }}
      />
    ),
  },
  {
    name: 'Flutter',
    icon: (
      <SiFlutter style={{ height: 20, width: 20, fill: 'url(#flutter)' }} />
    ),
  },
  {
    name: 'R-Native',
    icon: (
      <SiReact style={{ height: 20, width: 20, fill: 'url(#react-native)' }} />
    ),
  },
  {
    name: 'NextJS',
    icon: <SiNextdotjs style={{ height: 20, width: 20 }} />,
  },
  {
    name: 'NestJS',
    icon: <SiNestjs style={{ height: 20, width: 20, fill: 'url(#nestjs)' }} />,
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
