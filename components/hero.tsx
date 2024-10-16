import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { MdMarkEmailUnread } from 'react-icons/md';

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:mt-40 mb-2 w-full rounded-md flex flex-col md:flex-row md:items-start md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="p-4 max-w-7xl mx-auto relative z-10 pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Mario
            <br /> Correa
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 text-start mx-auto">
            <span className="text-xl italic">Backend & Mobile Developer.</span>
            <br /> Deeply passionate about three things: <br />
            Programming, technology, and minimalism.
          </p>
          <Link href="mailto:mariomcorrea3@gmail.com">
            <Button className="mr-2 mt-2 rounded-full border border-neutral-50 bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <MdMarkEmailUnread className="size-6" />
              Contact Me
            </Button>
          </Link>
          <Link href="#Work">
            <Button className="rounded-full border border-neutral-50 bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <Image
                className="size-6"
                width={1920}
                height={1080}
                src="/work.svg"
                alt="Work Icon"
                priority
              />{' '}
              Work
            </Button>
          </Link>
        </div>
        <div className="flex items-center mr-0 md:mr-20">
          <Image
            src="/macbook.svg"
            width={1920}
            height={1080}
            alt="Logo"
            className="size-96"
          />
        </div>
      </div>
    </div>
  );
}
