import Link from 'next/link';
import { Button } from './ui/button';
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="p-4 md:p-0 grid grid-cols-1 md:grid-cols-3 min-h-[70dvh]"
      id="Home"
    >
      <article className="animated-background col-span-full md:col-span-2 rounded-xl flex flex-col justify-evenly items-center p-4 transition-colors duration-500 bg-gradient-to-br to-purple-400 via-gray-300 from-blue-700">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-medium text-2xl md:text-5xl mb-4">
            Hello, I&apos;m Mario, a backend
            <br /> & mobile Developer
          </h1>
          <h3 className="text-lg md:text-lg">
            Deeply passionate about three things: technology, development and
            minimalism.
          </h3>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          <Link
            href="mailto:mariomcorrea3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#1D1D1D] rounded-full p-4 md:p-6 text-base md:text-lg">
              Contact Me
            </Button>
          </Link>
          <Link
            href="https://github.com/sensitiky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="size-10 md:size-12 bg-white p-2 rounded-full hover:text-white hover:bg-gradient-to-tr from-black to-gray-700" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mario-correa-45324b237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="size-10 md:size-12 bg-white p-2 rounded-full hover:text-white hover:bg-gradient-to-tr from-blue-800 to-blue-500" />
          </Link>
          <Link
            href="CV-Correa Mario.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFilePdf className="size-10 md:size-12 bg-white p-2 rounded-full hover:text-white hover:bg-gradient-to-tr from-red-800 to-red-500" />
          </Link>
        </div>
      </article>
      <article className="col-span-full md:col-span-1 mt-4 md:mt-0">
        <Image
          src="/Mario.jpg"
          width={1920}
          height={1080}
          className="w-full rounded-xl md:min-h-[70dvh] object-cover"
          alt="Mario Picture"
        />
      </article>
    </section>
  );
}