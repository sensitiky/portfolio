"use client";
import React from "react";

const ICONS = [
  { src: "kotlin.svg", name: "Kotlin" },
  { src: "javascript.svg", name: "JavaScript" },
  { src: "typescript.svg", name: "TypeScript" },
];

const Frameworks = [
  { src: "spring.svg", name: "Spring" },
  { src: "nextdotjs.svg", name: "NextJS" },
  {
    src: "nestjs.svg",
    name: "NestJS",
  },
  { src: "astro.svg", name: "Astro" },
];
const Tools = [
  { src: "git.svg", name: "Git" },
  { src: "cloudflare.svg", name: "Cloudflare" },
  { src: "postgresql.svg", name: "PostgreSQL" },
  { src: "mysql.svg", name: "MySQL" },
  { src: "google-cloud.svg", name: "Google Cloud" },
  { src: "aws.svg", name: "AWS" },
];
const h2 = "Language";
const fm = "Frameworks";
const tools = "Tools";
export default function Skills() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-white flex-col flex-wrap">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 flex-wrap">
        <h2 className="text-[1.5rem] text-white font-medium text-">
          {h2}
          <div className="flex flex-row">
            <div className="rounded-full bg-[#a6a6a6] size-2 m-1"></div>{" "}
            <div className="rounded-full border border-[#a6a6a6] size-2 m-1"></div>
            <div className="rounded-full bg-[#a6a6a6] size-2 m-1"></div>
          </div>
        </h2>
        {ICONS.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={icon.src} alt={icon.name} className="w-16 h-16" />
            <span className="mt-2">{icon.name}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4 flex-wrap">
        <h2 className="text-[1.5rem] text-white font-medium text-">
          {fm}
          <div className="flex flex-row">
            <div className="rounded-full bg-[#a6a6a6] size-2 m-1"></div>{" "}
            <div className="rounded-full border border-[#a6a6a6] size-2 m-1"></div>
            <div className="rounded-full bg-[#a6a6a6] size-2 m-1"></div>
          </div>
        </h2>
        {Frameworks.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={icon.src} alt={icon.name} className="w-16 h-16" />
            <span className="mt-2">{icon.name}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 m-4 flex-wrap">
        <h2 className="text-[1.5rem] text-white font-medium text-">
          {tools}
          <div className="flex flex-row">
            <div className="rounded-full bg-[#a6a6a6] size-2 m-1"></div>{" "}
            <div className="rounded-full border border-[#a6a6a6] size-2 m-1"></div>
            <div className="rounded-full bg-[#a6a6a6] size-2 m-1"></div>
          </div>
        </h2>
        {Tools.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={icon.src} alt={icon.name} className="w-16 h-16" />
            <span className="mt-2">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
