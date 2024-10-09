import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-visible">
      <div className="absolute inset-0 w-full h-full"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold">
          Mario Correa
        </h1>
        <div className="text-white flex flex-col items-center mt-4 md:mt-6 lg:mt-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl">Software</h2>
          <div className="flex items-center justify-center">
            <span className="m-4 text-5xl md:text-7xl lg:text-8xl">
              Developer
            </span>
            <span className="m-4 text-5xl md:text-7xl lg:text-8xl cursor-blink">
              |
            </span>
          </div>
        </div>
        <Link href="mailto:mariomcorrea3@gmail.com">
          <Button className="mt-8 rounded-full border border-[#a6a6a6] hover:bg-[#a6a6a6] hover:text-[#121212] font-medium">
            Contact Me
          </Button>
        </Link>
      </div>
      <div className="w-3/4 border-t border-[#a6a6a6] mt-8"></div>
    </section>
  );
}
