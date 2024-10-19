import Image from 'next/image';

const ICONS = [
  { src: 'kotlin.svg', name: 'Kotlin' },
  { src: 'javascript.svg', name: 'JavaScript' },
  { src: 'typescript.svg', name: 'TypeScript' },
];

const Frameworks = [
  { src: '/jetpack.png', name: 'JetPack Compose' },
  { src: 'spring.svg', name: 'Spring' },
  { src: 'nextdotjs.svg', name: 'NextJS' },
  { src: 'nestjs.svg', name: 'NestJS' },
  { src: 'astro.svg', name: 'Astro' },
];

const Tools = [
  { src: 'git.svg', name: 'Git' },
  { src: 'cloudflare.svg', name: 'Cloudflare' },
  { src: 'postgresql.svg', name: 'PostgreSQL' },
  { src: 'mysql.svg', name: 'MySQL' },
  { src: 'google-cloud.svg', name: 'Google Cloud' },
  { src: 'aws.svg', name: 'AWS' },
];

export default function Skills() {
  return (
    <section
      className="p-4 md:mt-2 md:p-0 grid-cols-1 md:grid-cols-2 row-span-2 col-span-2 grid gap-4 min-h-[40dvh]"
      id="Skills"
    >
      <article className="animated-background col-span-1 row-span-2 bg-gradient-to-tl from-blue-300 via-purple-400 to-neutral-50 rounded-xl justify-evenly flex flex-col p-4">
        <h3 className="text-3xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-4">
          {ICONS.map((icon) => (
            <div
              key={icon.name}
              className="flex flex-col items-center font-medium"
            >
              <Image src={icon.src} alt={icon.name} width={48} height={48} />
              <span className="text-base mt-1">{icon.name}</span>
            </div>
          ))}
        </div>
        <h3 className="text-3xl font-semibold mb-4 mt-8">Frameworks</h3>
        <div className="grid grid-cols-2 gap-4">
          {Frameworks.slice(0, 2).map((framework) => (
            <div
              key={framework.name}
              className="flex flex-col items-center font-medium"
            >
              <Image
                src={framework.src}
                alt={framework.name}
                width={48}
                height={48}
              />
              <span className="text-base mt-1">{framework.name}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {Frameworks.slice(2, 4).map((framework) => (
            <div
              key={framework.name}
              className="flex flex-col items-center font-medium"
            >
              <Image
                src={framework.src}
                alt={framework.name}
                width={48}
                height={48}
              />
              <span className="text-base mt-1">{framework.name}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Frameworks.slice(4).map((framework) => (
            <div
              key={framework.name}
              className="flex flex-col items-center font-medium"
            >
              <Image
                src={framework.src}
                alt={framework.name}
                width={48}
                height={48}
              />
              <span className="text-base mt-1">{framework.name}</span>
            </div>
          ))}
        </div>
      </article>
      <article className="animated-background col-span-1 row-span-2 bg-gradient-to-tr from-gray-700 via-gray-500 to-neutral-50 rounded-xl justify-evenly flex flex-col p-4">
        <h3 className="text-3xl font-semibold mb-4">Tools</h3>
        <div className="flex flex-wrap gap-4">
          {Tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center font-medium"
            >
              <Image src={tool.src} alt={tool.name} width={48} height={48} />
              <span className="text-base mt-1">{tool.name}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
