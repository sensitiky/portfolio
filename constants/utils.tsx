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
            style={{ fill: "white" }}
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
            style={{ fill: "white" }}
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
  {
    name: "Kotlin",
    icon: <SiKotlin className="h-8 w-8" style={{ fill: "url(#kotlin)" }} />,
  },
  {
    name: "Dart",
    icon: <SiDart className="h-8 w-8" style={{ fill: "url(#dart)" }} />,
  },
  {
    name: "Javascript",
    icon: (
      <SiJavascript className="h-8 w-8" style={{ fill: "url(#javascript)" }} />
    ),
  },
  {
    name: "Typescript",
    icon: (
      <SiTypescript className="h-8 w-8" style={{ fill: "url(#typescript)" }} />
    ),
  },
];

export const frameworks = [
  {
    name: "JetPack",
    icon: (
      <SiJetpackcompose className="size-8" style={{ fill: "url(#jetpack)" }} />
    ),
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="size-8" style={{ fill: "url(#flutter)" }} />,
  },
  {
    name: "React Native",
    icon: <SiReact className="size-8" style={{ fill: "url(#reactnative)" }} />,
  },
  {
    name: "Spring Boot",
    icon: (
      <SiSpringboot className="size-8" style={{ fill: "url(#springboot)" }} />
    ),
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs className="size-8" style={{ fill: "white" }} />,
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="size-8" style={{ fill: "url(#nestjs)" }} />,
  },
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
    icon: <SiSqlite className="size-8" style={{ fill: "url(#sqlite)" }} />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="size-8" style={{ fill: "url(#supabase)" }} />,
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
  <linearGradient id="mysql" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#00758f" offset="0%" />
    <stop stopColor="#00a6d6" offset="100%" />
  </linearGradient>
  <linearGradient id="reactnative" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#61dafb" offset="0%" />
    <stop stopColor="#21a1f1" offset="100%" />
  </linearGradient>
  <linearGradient id="kotlin" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#A97BFF" offset="0%" />
    <stop stopColor="#6C4AB6" offset="100%" />
  </linearGradient>
  <linearGradient id="dart" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#00B4AB" offset="0%" />
    <stop stopColor="#009688" offset="100%" />
  </linearGradient>
  <linearGradient id="javascript" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#F7DF1E" offset="10%" />
    <stop stopColor="#FFD700" offset="100%" />
  </linearGradient>
  <linearGradient id="typescript" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#3178C6" offset="0%" />
    <stop stopColor="#007ACC" offset="100%" />
  </linearGradient>
  <linearGradient id="flutter" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#02569B" offset="0%" />
    <stop stopColor="#0175C2" offset="100%" />
  </linearGradient>
  <linearGradient id="springboot" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#6DB33F" offset="0%" />
    <stop stopColor="#87C540" offset="100%" />
  </linearGradient>
  <linearGradient id="sqlite" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#003B57" offset="0%" />
    <stop stopColor="#0078D4" offset="100%" />
  </linearGradient>
  <linearGradient id="supabase" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#3ECF8E" offset="0%" />
    <stop stopColor="#2BC48A" offset="100%" />
  </linearGradient>
</svg>;
