import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="flex items-center justify-start" id="Home">
      <div className="grid gap-6 items-center">
        {/* Left content */}
        <div className="space-y-6 text-start order-2">
          <div className="space-y-2">
            <h2 className="text-sm text-purple-400 font-medium tracking-wider uppercase">
              Full-Stack Developer
            </h2>
            <h1 className="font-bold text-2xl text-neutral-100 leading-tight">
              Mario Correa
            </h1>
            <p className="text-lg text-gray-300">
              I'm a full-stack developer specializing in microservices.
            </p>
            <p className="text-lg text-gray-300">
              Deeply passionate about technology, development, and minimalism.
            </p>
            <div></div>
          </div>
          <div className="flex gap-6 justify-start">
            <Link
              href="https://github.com/sensitiky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mario-correa-45324b237/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
          <div></div>
          <Link href="mailto:mariomcorrea3@gmail.com" target="_blank">
            <Button className="bg-transparent text-lg hover:bg-transparent mr-6 text-gray-300 font-medium underline">
              Contact me
            </Button>
          </Link>
          <Link href="CV-Correa Mario.pdf" target="_blank">
            <Button className="bg-transparent text-lg hover:bg-transparent text-gray-300 font-medium underline">
              View Resume
            </Button>
          </Link>
        </div>

        {/* Right content - Image */}
        <div className="order-1 flex justify-start">
          <div className="relative">
            <div className="size-[100px] rounded-full overflow-hidden">
              <Image
                src="/Mario.jpg"
                width={1920}
                height={1080}
                alt="Mario Picture"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-500/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
