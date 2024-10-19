import { Dot } from 'lucide-react';

export default function Experience() {
  return (
    <section
      className="p-4 animated-background md:p-6 m-2 md:m-0 md:mt-8 rounded-xl grid gap-4 min-h-[40dvh] bg-gradient-to-tr from-yellow-300 via-amber-400 to-neutral-50"
      id="Experience"
    >
      <h3 className="text-3xl md:text-5xl font-medium mb-4">Experience</h3>
      <div className="relative pl-8">
        <div className="absolute h-full border-l-2 border-gray-300 left-4 top-0"></div>
        <div className="mb-8">
          <h4 className="text-xl font-semibold flex items-center">
            <Dot className="text-gray-500" />
            Freelancer
          </h4>
          <h5 className="text-lg font-medium underline">
            April 2023 - Present
          </h5>
          <p className="text-base md:text-lg mt-2">
            Working on various projects using TypeScript, Kotlin, Dart and
            JavaScript.
          </p>
          <p className="flex flex-wrap gap-2 mt-2">
            <span className="flex items-center">
              <Dot className="text-gray-500" />
              Web Development
            </span>
            <span className="flex items-center">
              <Dot className="text-gray-500" />
              Mobile Apps
            </span>
            <span className="flex items-center">
              <Dot className="text-gray-500" />
              Chrome Extensions
            </span>
          </p>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-semibold flex items-center">
            <Dot className="text-gray-500" />
            FullStack Developer
          </h4>
          <h5 className="text-lg font-medium italic">
            IESA Instituto de Estudios Superior Argentino
          </h5>
          <h5 className="text-lg font-medium underline">
            March 2023 - Present
          </h5>
          <p className="text-base md:text-lg mt-2">
            Developing various platforms to provide educational services on
            different devices, including web, virtual classroom, and mobile
            applications.
          </p>
          <p className="flex flex-wrap gap-2 mt-2">
            <span className="flex items-center">
              <Dot className="text-gray-500" />
              Java/Spring (Backend)
            </span>
            <span className="flex items-center">
              <Dot className="text-gray-500" />
              Next.js (Frontend)
            </span>
            <span className="flex items-center">
              <Dot className="text-gray-500" />
              Kotlin (Native Mobile)
            </span>
            <span className="flex items-center">
              <Dot className="text-gray-500" />
              Flutter (Cross-platform)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
