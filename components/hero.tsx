import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { MdMarkEmailUnread } from 'react-icons/md';

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-40 mb-2 w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <span className="text-xl">Hello! I am</span>
            <br />
            Mario
            <br /> Correa
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Backend & Mobile Developer.
            <br /> Deeply passionate about three things: <br />
            Programming, technology, and minimalism.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <Link href="mailto:mariomcorrea3@gmail.com">
          <Button className="rounded-full border border-white bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <MdMarkEmailUnread className="size-6" />
            Contact Me
          </Button>
        </Link>
        <Link href="#Work">
          <Button className="rounded-full  border border-white bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <Image
              className="size-6"
              width={1920}
              height={1080}
              src="/work.svg"
              alt="Work Icon"
            />{' '}
            Work
          </Button>
        </Link>
      </div>
    </div>
  );
}
