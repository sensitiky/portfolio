"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ImagesMockup from "@/constant/ImagesMockup";

const Mockups = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % ImagesMockup.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getImagesByDevice = (device: string) => {
    return ImagesMockup.filter((image) => image.device === device);
  };

  const macbookImages = getImagesByDevice("macbook");
  const iphoneImages = getImagesByDevice("iphone");

  const currentMacbookImage =
    macbookImages[currentImageIndex % macbookImages.length];

  const currentIphoneImage =
    iphoneImages[currentImageIndex % iphoneImages.length];

  const buttons = (projectLink: string, codeLink: string) => (
    <>
      <Link href={projectLink}>
        <button className="bg-[#cb99c9] hover:bg-[#cb99c9]/80 text-white px-4 py-2 m-2 rounded-full border-[#cb99c9] border font-bold">
          View Project
        </button>
      </Link>
      <Link href={codeLink}>
        <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 m-2 rounded-full border-[#cb99c9] border">
          View Code
        </button>
      </Link>
    </>
  );

  return (
    <div className="flex flex-col items-center justify-center p-5 text-white">
      <h1 className="text-[2rem] text-white font-medium text-center">
        Web & Mobile <br />
        Mockups
      </h1>
      <div className="flex flex-wrap justify-center items-center my-5">
        <h2 className="text-[1.5rem] text-white font-medium text-center">
          MacBook
        </h2>
        <div
          className="relative bg-contain bg-no-repeat mr-4 mb-5 md:w-[37.5rem] md:h-[23.4rem] sm:w-full sm:mr-0 group"
          style={{ backgroundImage: 'url("/macbook-mockup.png")' }}
        >
          <div className="rounded-sm absolute top-[3%] left-[10%] w-[80%] h-[80%] flex justify-center items-center overflow-hidden">
            <img src={currentMacbookImage.src} alt={currentMacbookImage.alt} />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[0.3s]">
            {buttons(
              currentMacbookImage.projectLink,
              currentMacbookImage.codeLink
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center my-5">
        <h2 className="text-[1.5rem] text-white font-medium text-center">
          Iphone
        </h2>
        <div
          className="relative z-20 w-[19rem] h-[32rem] m-4 bg-contain bg-no-repeat md:w-[15.625rem] md:h-[34.375rem] sm:w-[6.25rem] sm:h-[12.5rem] group"
          style={{ backgroundImage: 'url("/iphone-mockup.png")', zIndex: 20 }}
        >
          <div className="z-10 absolute bottom-[10.3%] left-[6.5%] size-[88%] flex justify-center items-center overflow-hidden rounded-md">
            <img
              src={currentIphoneImage.src}
              alt={currentIphoneImage.alt}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "2rem",
              }}
            />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[0.3s]">
            {buttons(
              currentIphoneImage.projectLink,
              currentIphoneImage.codeLink
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockups;
