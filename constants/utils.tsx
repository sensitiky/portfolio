import { BiLogoPostgresql } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { GrJava } from "react-icons/gr";
import { RiJavaFill } from "react-icons/ri";
import {
  SiDart,
  SiFlutter,
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
  SiBlockbench,
  SiBotblecms,
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
    icon: (
      <SiKotlin
        className="size-20 text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
  {
    name: "Dart",
    icon: (
      <SiDart className="text-neutral-300" style={{ height: 50, width: 30 }} />
    ),
  },
  {
    name: "Typescript",
    icon: (
      <SiTypescript
        className="size-20 text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
];

export const frameworks = [
  {
    name: "JetPack",
    icon: (
      <SiJetpackcompose
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
  {
    name: "Flutter",
    icon: (
      <SiFlutter
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
  {
    name: "React Native",
    icon: (
      <SiReact className="text-neutral-300" style={{ height: 50, width: 30 }} />
    ),
  },
  {
    name: "NextJS",
    icon: (
      <SiNextdotjs
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
  {
    name: "NestJS",
    icon: (
      <SiNestjs
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
];

export const databases = [
  {
    name: "PostgreSQL",
    icon: (
      <BiLogoPostgresql
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
  {
    name: "MySQL",
    icon: (
      <SiMysql className="text-neutral-300" style={{ height: 50, width: 30 }} />
    ),
  },
  {
    name: "SQLite",
    icon: (
      <SiSqlite
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <SiFirebase
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
];

export const cloudTools = [
  {
    name: "Cloudflare",
    icon: (
      <SiCloudflare
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
  {
    name: "AWS",
    icon: (
      <SiAmazon
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <SiGit className="text-neutral-300" style={{ height: 50, width: 30 }} />
    ),
  },
  {
    name: "Google Cloud",
    icon: (
      <SiGooglecloud
        className="text-neutral-300"
        style={{ height: 50, width: 30 }}
      />
    ),
  },
];
