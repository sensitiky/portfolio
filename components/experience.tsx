import React from "react";

const experiences = [
  {
    company: "Freelancer.",
    position: "Fullstack Developer",
    period: "July 2022 - Present",
    description:
      "Working on various projects using TypeScript, Kotlin, Dart and Java.",
  },
  {
    company: "IESA Instituto de Estudios Superiores Argentino",
    position: "FullStack Developer",
    period: "Mar 2024 - Present",
    description:
      "Developing various platforms to provide educational services on different devices, including web, virtual classroom, and mobile applications.",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 border-t-[1px] border-neutral-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-start mb-12 text-neutral-100">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex">
              <div className="w-1/4 pr-4 text-right">
                <p className="text-sm text-neutral-300">{exp.period}</p>
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-xl font-semibold text-neutral-300">
                  {exp.position}
                </h3>
                <p className="text-neutral-400 mb-2">{exp.company}</p>
                <p className="text-neutral-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
