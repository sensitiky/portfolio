import Link from 'next/link';
import Image from 'next/image';
import { AiFillGithub, AiFillChrome } from 'react-icons/ai';
import { Button } from './ui/button';

export default function Projects() {
  return (
    <div>
      <section className="p-4 md:p-0 grid-cols-1 md:grid-cols-2 row-span-2 col-span-2 grid gap-4 min-h-[40dvh]">
        <article className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl">
          <Image
            src="/taskHand.gif"
            width={1920}
            height={1080}
            className="rounded-2xl mt-2 group-hover:scale-110 duration-500 transition-transform"
            alt="Task Hand App"
            title="Task Hand App"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 overflow-hidden bg-black/40 h-full">
            <div className="absolute inset-0 bg-black opacity-50 -m-4 group-hover:scale-110 transition-transform"></div>
            <h3 className="text-xl font-semibold text-neutral-200 [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)] relative z-10">
              Task Hand
            </h3>
            <p className="text-center text-lg text-neutral-200 [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)] relative z-10">
              Habit and task management using Kotlin Jetpack Compose
            </p>
            <Link
              href="https://github.com/sensitiky/mobile-task.habit-management"
              target="_blank"
            >
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2 relative z-10">
                <AiFillGithub className="size-4" /> GitHub
              </Button>
            </Link>
          </div>
        </article>
        <article className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl">
          <Image
            src="/blogchain.gif"
            width={1920}
            className="rounded-2xl mt-2 group-hover:scale-110 transition duration-300"
            height={1080}
            alt="Blogchain Multi-page application"
            title="Blogchain Multi-page application"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 gap-4">
            <div className="absolute inset-0 bg-black opacity-50 -m-4 group-hover:scale-110 transition-transform"></div>
            <h3 className="text-2xl text-white font-semibold [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)] relative z-10">
              Blogchain
            </h3>
            <p className="text-center text-white text-lg [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)] relative z-10">
              Platform oriented to create articles about blockchain <br />
              using Next.js, NestJS, and TypeScript
              <br />
              Credentials for test: <br />
              User: usuario
              <br />
              Password: tester123
            </p>
            <Link
              href="https://github.com/sensitiky/pwa-blockchain-articles"
              target="_blank"
            >
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2 relative z-10">
                <AiFillGithub className="size-4" /> GitHub
              </Button>
            </Link>
            <Link href="https://www.blogchain.tech/" target="_blank">
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2 relative z-10">
                <AiFillChrome className="size-4" /> Live Demo
              </Button>
            </Link>
          </div>
        </article>
      </section>
      <section className="p-4 md:p-0 grid-cols-1 md:grid-cols-2 row-span-2 col-span-2 grid gap-4 min-h-[40dvh] z-50">
        <article className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl">
          <Image
            src="/iesa.gif"
            className="rounded-xl mt-2 group-hover:scale-110 transition duration-300"
            width={1920}
            height={1080}
            alt="Iesa Single-page application"
            title="Iesa Single-page application"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 gap-4 hover:bg-black/30 rounded-2xl mt-2">
            <div className="absolute inset-0 bg-black opacity-50 -m-4 group-hover:scale-110 transition-transform"></div>
            <h3 className="text-2xl text-white font-semibold [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)] relative z-10">
              IESA
            </h3>
            <p className="text-center text-white text-lg [text-shadow:_0_2px_0_rgb(0_0_0_/_70%)] relative z-10">
              Educational portal using Next.js and TypeScript
            </p>
            <Link
              href="https://github.com/sensitiky/SPA-university"
              target="_blank"
              className="items-center"
            >
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2 relative z-10">
                <AiFillGithub className="size-4" /> GitHub
              </Button>
            </Link>
            <Link href="https://iesaeducativo.com/" target="_blank">
              <Button className="rounded-full bg-[#1D1D1D] font-medium flex items-center gap-2 relative z-10">
                <AiFillChrome className="size-4" />
                Live Demo
              </Button>
            </Link>
          </div>
        </article>
        <article className="col-span-1 row-span-2 flex items-center justify-center bg-gradient-to-l from-purple-500 to-neutral-300 rounded-xl mt-2">
          <span className="text-black text-4xl font-bold">
            Your Project
            <br /> Can Be Here
          </span>
        </article>
      </section>
    </div>
  );
}
