'use client';
import { Button } from '@/components/ui/button';
import { Dot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  AiFillChrome,
  AiFillCiCircle,
  AiFillCloseCircle,
  AiFillFilePdf,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMenu,
} from 'react-icons/ai';

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

export default function Home() {
  const [visible, setVisible] = useState(false);
  const toggleSideBar = () => {
    setVisible(!visible);
  };
  return (
    <div className="flex justify-center flex-col mx-auto max-w-[1100px]">
      <header className="justify-end gap-6 p-4 font-medium flex w-full">
        <div className="hidden md:block w-full">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <AiFillCiCircle className="size-6 text-purple-600 bg-purple-600 rounded-full" />
              <span className="text-lg font-semibold">Mario</span>
            </div>
            <div className="flex gap-14">
              <Link href="#Home">Home</Link>
              <Link href="#Projects">Projects</Link>
              <Link href="#Skills">Skills</Link>
              <Link href="#Contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="md:hidden flex cursor-pointer">
          <AiOutlineMenu onClick={toggleSideBar} aria-label="Menu Toggler" />
        </div>
      </header>
      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 w-full h-full bg-white shadow-lg z-50 p-4 flex flex-col">
            <div className="flex justify-between items-center w-full mb-4">
              <div className="flex flex-row items-center gap-2">
                <AiFillCiCircle className="size-6 text-purple-600 bg-purple-600 rounded-full" />
                <span className="text-lg font-semibold">Mario</span>
              </div>
              <AiFillCloseCircle
                onClick={toggleSideBar}
                className="cursor-pointer size-9"
              />
            </div>
            <nav className="flex-col grid items-center gap-4 justify-start font-semibold text-2xl">
              <Link href="#Home" onClick={toggleSideBar}>
                Home
              </Link>
              <Link href="#Projects" onClick={toggleSideBar}>
                Projects
              </Link>
              <Link href="#Skills" onClick={toggleSideBar}>
                Skills
              </Link>
              <Link href="#Contact" onClick={toggleSideBar}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
      <section
        className="p-4 md:p-0 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[40dvh]"
        id="Home"
      >
        <article className="col-span-full md:col-span-2 bg-gradient-to-tr from-[#5a5a5e] to-[#ece6e6] rounded-xl flex flex-col justify-evenly p-4">
          <div>
            <h1 className="font-bold text-2xl md:text-4xl mb-4">
              Hello, I&apos;m Mario, a backend & mobile Developer
            </h1>
            <h3 className="text-lg md:text-xl font-semibold">
              Deeply passionate about three things: technology, development and
              minimalism.
            </h3>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4">
            <Link href="mailto:mariomcorrea3@gmail.com">
              <Button className="bg-[#1D1D1D] rounded-full p-4 md:p-6 text-base md:text-lg">
                Contact Me
              </Button>
            </Link>
            <Link href="https://github.com/sensitiky">
              <AiFillGithub className="size-10 md:size-12 bg-white p-2 rounded-full hover:text-white hover:bg-gradient-to-tr from-black to-gray-700" />
            </Link>
            <Link href="https://www.linkedin.com/in/mario-correa-45324b237/">
              <AiFillLinkedin className="size-10 md:size-12 bg-white p-2 rounded-full hover:text-white hover:bg-gradient-to-tr from-blue-800 to-blue-500" />
            </Link>
            <Link href="CV-Correa Mario.pdf">
              <AiFillFilePdf className="size-10 md:size-12 bg-white p-2 rounded-full hover:text-white hover:bg-gradient-to-tr from-red-700 to-red-400" />
            </Link>
          </div>
        </article>
        <article className="col-span-full md:col-span-1">
          <Image
            src="/Mario.jpg"
            width={1920}
            height={1080}
            className="w-full rounded-xl min-h-[40dvh] object-cover"
            alt="Mario Picture"
          />
        </article>
      </section>
      <section
        className="p-4 md:p-6 m-2 md:m-0 md:mt-4 rounded-xl grid gap-4 min-h-[40dvh] bg-gradient-to-tr from-yellow-300 to-neutral-50"
        id="Experience"
      >
        <h3 className="text-3xl md:text-5xl font-semibold mb-4">Experience</h3>
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
      <section
        className="p-4 md:p-0 grid-cols-1 md:grid-cols-2 row-span-2 col-span-2 grid gap-4 min-h-[40dvh]"
        id="Projects"
      >
        <article className="col-span-1 row-span-2 relative group">
          <Image
            src="/taskHand.gif"
            width={1920}
            height={1080}
            className="rounded-2xl mt-2 group-hover:blur-sm transition duration-300"
            alt="Task Hand App"
            title="Task Hand App"
          />
          <div className="flex-col absolute inset-0 flex justify-center items-center opacity-0 hover:bg-black/30 rounded-2xl mt-2 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl text-white font-semibold [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)]">
              Task Hand
            </h3>
            <p className="text-center text-white text-lg [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)]">
              Habit and task management using Kotlin Jetpack Compose
            </p>
            <Link
              href="https://github.com/sensitiky/mobile-task.habit-management"
              target="_blank"
            >
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2">
                <AiFillGithub className="size-4" /> GitHub
              </Button>
            </Link>
          </div>
        </article>
        <article className="col-span-1 row-span-2 relative group">
          <Image
            src="/blogchain.gif"
            width={1920}
            className="rounded-2xl mt-2 group-hover:blur-sm transition duration-300"
            height={1080}
            alt="Blogchain Multi-page application"
            title="Blogchain Multi-page application"
          />
          <div className="hover:bg-black/30 rounded-2xl mt-2 absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 gap-4">
            <h3 className="text-2xl text-white font-semibold [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)]">
              Blogchain
            </h3>
            <p className="text-center text-white text-lg [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)]">
              Platform oriented to create articles about blockchain <br />
              using Next.js, NestJS, and TypeScript
              <br />
              Credentials for test: <br />
              User: usuario
              <br />
              Password: tester123
            </p>
            <Link
              href="https://github.com/sensitiky/pwa-blockchain-articles"
              target="_blank"
            >
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2">
                <AiFillGithub className="size-4" /> GitHub
              </Button>
            </Link>
            <Link href="https://www.blogchain.tech/" target="_blank">
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2">
                <AiFillChrome className="size-4" /> Live Demo
              </Button>
            </Link>
          </div>
        </article>
      </section>
      <section className="p-4 md:p-0 grid-cols-1 md:grid-cols-2 row-span-2 col-span-2 grid gap-4 min-h-[40dvh] bg-white z-50">
        <article className="col-span-1 row-span-2 relative group">
          <Image
            src="/iesa.gif"
            className="rounded-xl mt-2 group-hover:blur-sm transition duration-300"
            width={1920}
            height={1080}
            alt="Iesa Single-page application"
            title="Iesa Single-page application"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 gap-4 hover:bg-black/30 rounded-2xl mt-2">
            <h3 className="text-2xl text-white font-semibold [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)]">
              IESA
            </h3>
            <p className="text-center text-white text-lg [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)]">
              Educational portal using Next.js and TypeScript
            </p>
            <Link
              href="https://github.com/sensitiky/SPA-university"
              target="_blank"
              className="items-center"
            >
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2">
                <AiFillGithub className="size-4" /> GitHub
              </Button>
            </Link>
            <Link href="https://iesaeducativo.com/" target="_blank">
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2">
                <AiFillChrome className="size-4" />
                Live Demo
              </Button>
            </Link>
          </div>
        </article>
        <article className="col-span-1 row-span-2 flex items-center justify-center bg-gradient-to-l from-purple-500 to-neutral-300 rounded-xl mt-2">
          <span className="text-black text-4xl font-bold">
            Your Project
            <br /> Can Be Here
          </span>
        </article>
      </section>
      <section
        className="p-4 md:mt-2 md:p-0 grid-cols-1 md:grid-cols-2 row-span-2 col-span-2 grid gap-4 min-h-[40dvh]"
        id="Skills"
      >
        <article className="col-span-1 row-span-2 bg-gradient-to-bl from-purple-400 to-neutral-50 rounded-xl justify-evenly flex flex-col p-4">
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
          <div className="flex flex-wrap gap-4">
            {Frameworks.map((framework) => (
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
        <article className="col-span-1 row-span-2 bg-gradient-to-tr from-gray-500 to-neutral-50 rounded-xl justify-evenly flex flex-col p-4">
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
      <section
        className="p-4 m-4 md:m-0 md:mt-4 rounded-xl grid gap-4 min-h-[40dvh] bg-gradient-to-tr from-yellow-300 to-neutral-50"
        id="Contact"
      >
        <article className="flex flex-col justify-evenly mt-2 mb-2 relative">
          <div className="flex flex-col justify-start gap-2 pl-4 md:pl-8 relative z-10">
            <h3 className="text-3xl md:text-5xl font-semibold">
              Want to work together?
            </h3>
            <h4 className="text-lg md:text-xl font-medium">
              Feel free to reach out for collaborations or just to say hello
            </h4>
            <Link
              href="mailto:mariomcorrea3@gmail.com"
              className="text-lg md:text-xl font-medium"
            >
              mariomcorrea3@gmail.com
            </Link>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 p-2 relative z-10 mt-4">
            <Link href="mailto:mariomcorrea3@gmail.com">
              <Button className="bg-[#1D1D1D] rounded-full p-4 md:p-6 text-base md:text-lg">
                Contact Me
              </Button>
            </Link>
            <Link href="https://github.com/sensitiky">
              <AiFillGithub className="size-10 md:size-12 bg-white p-2 rounded-full hover:text-white hover:bg-gradient-to-tr from-black to-gray-700" />
            </Link>
            <Link href="https://www.linkedin.com/in/mario-correa-45324b237/">
              <AiFillLinkedin className="size-10 md:size-12 bg-white p-2 rounded-full hover:text-white hover:bg-gradient-to-tr from-blue-800 to-blue-500" />
            </Link>
            <Link href="CV-Correa Mario.pdf">
              <AiFillFilePdf className="size-10 md:size-12 bg-white p-2 rounded-full hover:text-white hover:bg-gradient-to-tr from-red-700 to-red-400" />
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
