'use client';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
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

export default function Home() {
  const [visible, setVisible] = useState(false);

  const toggleSideBar = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex justify-center flex-col mx-auto max-w-[900px]">
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
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <section
        className="p-4 m-4 md:m-0 md:mt-4 md:mb-4 rounded-xl grid gap-4 min-h-[40dvh] bg-gradient-to-tr from-yellow-300 via-green-300 to-neutral-50 animated-background"
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
