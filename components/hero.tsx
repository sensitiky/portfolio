import Link from "next/link";
import { Button } from "./ui/button";
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex gap-2 items-center justify-between" id="Home">
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="h-32"></div>
        <h1 className="font-semibold text-3xl md:text-5xl text-neutral-200 mb-2">
          Mario Correa
        </h1>
        <h2 className="text-xl md:text-3xl font-medium text-neutral-300 mb-4">
          Mobile Developer
        </h2>
        <p className="mb-6 text-base md:text-xl text-neutral-400">
          Deeply passionate about technology, development, and minimalism.
        </p>
        <div className="flex flex-col justify-center md:justify-start items-center gap-4">
          <Link href="#projects">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full px-5 py-2 text-sm md:text-base">
              Check out my work
            </Button>
          </Link>
          <div className="flex flex-row gap-2">
            {" "}
            <Link
              href="https://github.com/sensitiky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="size-6 md:size-10 text-neutral-300 hover:text-neutral-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mario-correa-45324b237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="size-6 md:size-10 text-neutral-300 hover:text-neutral-500" />
            </Link>
            <Link
              href="CV-Correa Mario.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFilePdf className="size-6 md:size-10 text-neutral-300 hover:text-neutral-500" />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/Mario.jpg"
        width={1920}
        height={1080}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
        alt="Mario Picture"
      />
    </section>
  );
}
