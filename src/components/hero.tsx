import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-visible">
      <div className="absolute w-full h-full"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold">
          Mario Correa
        </h1>
        <div className="text-white flex items-center flex-col">
          <h1 className="mr-2 flex-row flex text-5xl md:text-7xl lg:text-8xl">
            Software
          </h1>
          <div className="flex items-center ml-0 md:ml-[5rem] lg:ml-[10rem]">
            <span className="m-4 text-5xl md:text-7xl lg:text-8xl">
              Developer
            </span>
            <span className="m-4 text-5xl md:text-7xl lg:text-8xl cursor-blink">
              |
            </span>
          </div>
        </div>
        <Link href="mailto:mariomcorrea3@gmail.com">
          <Button className="rounded-full border border-[#a6a6a6] hover:bg-[#a6a6a6] hover:text-[#121212] font-medium">
            Contact Me
          </Button>
        </Link>
      </div>
      <div className="w-3/4 border border-[#a6a6a6]"></div>
    </div>
  );
}
