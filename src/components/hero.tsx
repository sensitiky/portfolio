import React from "react";
import Spline from "@splinetool/react-spline/next";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen mb-[10rem] overflow-visible">
      <div className="absolute w-full h-full">
        <Spline scene="https://prod.spline.design/Jc0YqdXPPm1Bpx0Y/scene.splinecode" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold">
          Mario Correa
        </h1>
        <div className="text-white flex items-center flex-col">
          <h1 className="mr-2 flex-row flex text-5xl md:text-7xl lg:text-8xl">
            Full Stack
          </h1>
          <div className="flex items-center ml-0 md:ml-[5rem] lg:ml-[10rem]">
            <span className="m-4 text-5xl md:text-7xl lg:text-8xl">
              Developer
            </span>
          </div>
        </div>
      </div>
      <div className="w-3/4 border border-[#a6a6a6]"></div>
    </div>
  );
}
