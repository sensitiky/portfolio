import {
  languages,
  frameworks,
  databases,
  cloudTools,
} from "@/constants/utils";
import React from "react";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="container py-20 border-t-[1px] border-neutral-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-start mb-12 text-neutral-200">
          Skills
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-medium mb-6 text-start text-neutral-300">
            Languages
          </h3>
          <div className="flex justify-start space-x-8">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col items-center size-16">
                {lang.icon}
                <span className="mt-2 text-neutral-300">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-medium mb-6 text-start text-neutral-200">
            Frameworks
          </h3>
          <div className="flex flex-wrap justify-start gap-4">
            {frameworks.map((framework, index) => (
              <div key={index} className="flex flex-col items-center">
                {framework.icon}
                <span className="mt-2 text-neutral-300">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-medium mb-6 text-start text-neutral-200">
            Databases
          </h3>
          <div className="flex flex-wrap justify-start gap-4">
            {databases.map((db, index) => (
              <div key={index} className="flex flex-col items-center size-16">
                {db.icon}
                <span className="mt-2 text-neutral-300">{db.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-6 text-start text-neutral-200">
            Cloud Tools
          </h3>
          <div className="flex flex-wrap justify-start gap-4">
            {cloudTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                {tool.icon}
                <span className="mt-2 text-neutral-300">{tool.name}</span>
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
        <linearGradient id="java" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#5382a1" offset="0%" />
          <stop stopColor="#007396" offset="100%" />
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
      </svg>
    </section>
  );
};

export default Skills;
