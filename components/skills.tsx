import {
  languages,
  frameworks,
  databases,
  cloudTools,
} from '@/constants/utils';

export default function Skills() {
  return (
    <section id="skills">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 items-center text-center max-w-3xl mx-auto">
        {[...languages, ...frameworks, ...databases, ...cloudTools].map(
          (skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-1 rounded-lg bg-white/10"
            >
              <span className="text-xs text-neutral-300 flex-row flex items-center gap-1 pl-[0.1rem] pr-[0.3rem]">
                {skill.icon}
                {skill.name}
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
