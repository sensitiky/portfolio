import { BiLogoPostgresql } from "react-icons/bi";
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
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiReact,
  SiAwsamplify,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
export const projects = [
  {
    title: "Habit/Task Management",
    gifUrl: "/taskHand.gif",
    githubUrl: "https://github.com/sensitiky/mobile-task.habit-management",
    stack: [
      {
        icon: (
          <SiKotlin
            key="kotlin"
            className="h-5 w-5"
            style={{ fill: "url(#kotlin)" }}
          />
        ),
        name: "Kotlin",
      },
      {
        icon: (
          <SiJetpackcompose
            key="jetpack"
            className="h-5 w-5"
            style={{ fill: "url(#jetpack)" }}
          />
        ),
        name: "Jetpack",
      },
      {
        icon: (
          <SiFirebase
            key="Firebase"
            className="h-5 w-5"
            style={{ fill: "url(#firebase)" }}
          />
        ),
        name: "Firebase",
      },
    ],
  },
  {
    title: "Blockchain Social Media",
    gifUrl: "/blogchain.gif",
    githubUrl: "https://github.com/sensitiky/pwa-blockchain-articles",
    stack: [
      {
        icon: (
          <SiNextdotjs
            key="nextjs"
            className="h-5 w-5"
            style={{ fill: "url(#nextjs)" }}
          />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <SiNestjs
            key="nestjs"
            className="h-5 w-5"
            style={{ fill: "url(#nestjs)" }}
          />
        ),
        name: "NestJS",
      },
      {
        icon: (
          <SiTypescript
            key="typescript"
            className="h-5 w-5"
            style={{ fill: "url(#typescript)" }}
          />
        ),
        name: "TypeScript",
      },
      {
        icon: (
          <SiPostgresql
            key="postgresql"
            className="h-5 w-5"
            style={{ fill: "url(#postgresql)" }}
          />
        ),
        name: "PostgreSQL",
      },
      {
        icon: (
          <SiAwsamplify
            key="aws"
            className="h-5 w-5"
            style={{ fill: "url(#aws)" }}
          />
        ),
        name: "AWS",
      },
    ],
  },
  {
    title: "Educational Portal",
    gifUrl: "/iesa.gif",
    githubUrl: "https://github.com/sensitiky/SPA-university",
    stack: [
      {
        icon: (
          <SiNextdotjs
            key="nextjs"
            className="h-5 w-5"
            style={{ fill: "url(#nextjs)" }}
          />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <SiTailwindcss
            key="tailwind"
            className="h-5 w-5"
            style={{ fill: "url(#tailwind)" }}
          />
        ),
        name: "Tailwind CSS",
      },
      {
        icon: (
          <SiTypescript
            key="typescript"
            className="h-5 w-5"
            style={{ fill: "url(#typescript)" }}
          />
        ),
        name: "TypeScript",
      },
    ],
  },
  {
    title: "Finance Tracker",
    gifUrl: "/fundora.gif",
    githubUrl: "https://github.com/sensitiky/flutter-finance-tracker",
    stack: [
      {
        icon: (
          <SiFlutter
            key="Flutter"
            className="h-5 w-5"
            style={{ fill: "url(#flutter)" }}
          />
        ),
        name: "Flutter",
      },
      {
        icon: (
          <SiFirebase
            key="Firebase"
            className="h-5 w-5"
            style={{ fill: "url(#firebase)" }}
          />
        ),
        name: "Firebase",
      },
      {
        icon: (
          <SiDart
            key="dart"
            className="h-5 w-5"
            style={{ fill: "url(#dart)" }}
          />
        ),
        name: "Dart",
      },
    ],
  },
];

export const languages = [
  { name: "Kotlin", icon: <SiKotlin className="h-8 w-8 text-purple-600" /> },
  { name: "Dart", icon: <SiDart className="h-8 w-8 text-blue-600" /> },
  {
    name: "Javascript",
    icon: <SiJavascript className="h-8 w-8 text-yellow-400" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="h-8 w-8 text-blue-600" />,
  },
];

export const frameworks = [
  {
    name: "JetPack",
    icon: (
      <SiJetpackcompose className="size-8" style={{ fill: "url(#jetpack)" }} />
    ),
  },
  { name: "Flutter", icon: <SiFlutter className="size-8 text-blue-500" /> },
  {
    name: "React Native",
    icon: <SiReact className="size-8" style={{ fill: "url(#reactnative)" }} />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="size-8 text-green-500" />,
  },
  { name: "NextJS", icon: <SiNextdotjs className="size-8 text-white" /> },
  { name: "NestJS", icon: <SiNestjs className="size-8 text-red-500" /> },
];

export const databases = [
  {
    name: "PostgreSQL",
    icon: (
      <BiLogoPostgresql
        className="size-8"
        style={{ fill: "url(#postgresql)" }}
      />
    ),
  },
  {
    name: "MySQL",
    icon: <SiMysql className="size-8" style={{ fill: "url(#mysql)" }} />,
  },
  {
    name: "SQLite",
    icon: <SiSqlite className="size-8 text-blue-400" />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="size-8 text-green-500" />,
  },
];

export const cloudTools = [
  {
    name: "Cloudflare",
    icon: (
      <SiCloudflare className="size-8" style={{ fill: "url(#cloudflare)" }} />
    ),
  },
  {
    name: "AWS",
    icon: <SiAmazon className="size-8" style={{ fill: "url(#aws)" }} />,
  },
  {
    name: "Git",
    icon: <SiGit className="size-8" style={{ fill: "url(#git)" }} />,
  },
  {
    name: "Google Cloud",
    icon: (
      <SiGooglecloud className="size-8" style={{ fill: "url(#googlecloud)" }} />
    ),
  },
];
