import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AiFillChrome, AiFillGithub } from 'react-icons/ai';
import {
  SiJetpackcompose,
  SiKotlin,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si';

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Blockchain Article Platform
      </p>
      <p className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"></p>
      <p className="font-bold text-base my-4 max-w-lg text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
        A multi-page application designed for creating and sharing articles
        related to blockchain technology. <br />
        Credentials: User: usuario, Password: tester123
      </p>
      <div className="flex flex-row gap-2 items-center">
        <SiNextdotjs
          style={{ fill: 'url(#gradient)' }}
          className="size-6 m-2"
        />
        <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
          NextJS
        </span>
        <SiNestjs style={{ fill: 'url(#gradient)' }} className="size-6 m-2" />
        <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
          NestJS
        </span>
        <SiTypescript
          style={{ fill: 'url(#gradient)' }}
          className="size-6 m-2"
        />
        <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
          TypeScript
        </span>
        <SiPostgresql
          style={{ fill: 'url(#gradient)' }}
          className="size-6 m-2"
        />
        <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
          PostgreSQL{' '}
        </span>{' '}
      </div>
      <Link href="https://github.com/sensitiky/pwa-blockchain-articles">
        <Button className="rounded-full mr-2" variant="gradientBorder">
          <AiFillGithub
            className="size-6 mr-2"
            style={{ fill: 'url(#gradient)' }}
          />{' '}
          <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
            GitHub
          </span>
        </Button>
      </Link>
      <Link href="https://www.blogchain.tech/">
        <Button className="rounded-full" variant="gradientBorder">
          <AiFillChrome
            className="size-6 mr-2"
            style={{ fill: 'url(#gradient)' }}
          />
          <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
            Live Demo
          </span>
        </Button>
      </Link>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Educational Portal
      </p>
      <p className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"></p>
      <p className="font-bold text-base my-4 max-w-lg text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
        A single-page application providing academic information for the IESA
        institute located in Posadas, Misiones, Argentina.
      </p>
      <div className="flex flex-row gap-2 items-center">
        <SiNextdotjs
          style={{ fill: 'url(#gradient)' }}
          className="size-6 m-2"
        />
        <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
          NextJS
        </span>
        <SiTypescript
          style={{ fill: 'url(#gradient)' }}
          className="size-6 m-2"
        />
        <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
          TypeScript
        </span>
      </div>
      <Link href="https://github.com/sensitiky/SPA-university">
        <Button className="rounded-full mr-2" variant="gradientBorder">
          <AiFillGithub
            className="size-6 mr-2"
            style={{ fill: 'url(#gradient)' }}
          />{' '}
          <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
            GitHub
          </span>
        </Button>
      </Link>
      <Link href="https://iesaeducativo.com/">
        <Button className="rounded-full" variant="gradientBorder">
          <AiFillChrome
            className="size-6 mr-2"
            style={{ fill: 'url(#gradient)' }}
          />
          <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
            Live Demo
          </span>
        </Button>
      </Link>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Task Management App
      </p>
      <p className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"></p>
      <p className="font-bold text-base my-4 max-w-lg text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
        A Kotlin-based application for managing tasks and habits, featuring user
        authentication, ads, and statistics.
      </p>
      <div className="flex flex-row gap-2 items-center">
        <SiKotlin style={{ fill: 'url(#gradient)' }} className="size-6 m-2" />
        <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
          Kotlin{' '}
        </span>{' '}
        <SiJetpackcompose
          style={{ fill: 'url(#gradient)' }}
          className="size-6 m-2"
        />
        <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
          Jetpack Compose{' '}
        </span>{' '}
      </div>
      <Link href="https://github.com/sensitiky/mobile-task.habit-management">
        <Button className="rounded-full mr-2" variant="gradientBorder">
          <AiFillGithub
            className="size-6 mr-2"
            style={{ fill: 'url(#gradient)' }}
          />{' '}
          <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
            GitHub
          </span>
        </Button>
      </Link>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="font-bold md:text-4xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Your Project Can Be Here!
      </p>
      <p className="font-bold text-base my-4 max-w-lg text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
        Yes, you! Showcase your amazing project in this place. Dont be shy, the
        world is waiting for our collaboration!
      </p>
      <Link href="mailto:mariomcorrea3@gmail.com">
        <Button className="rounded-full mt-4" variant="gradientBorder">
          <span className="font-bold text-base text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text">
            Contact Me
          </span>
        </Button>
      </Link>
    </div>
  );
};

export const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/blogchain.gif',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/iesa.gif',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'row-span-1 md:row-span-2',
    thumbnail: '/taskHand.gif',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'col-span-1 md:col-span-2',
    thumbnail: '/thumbnail.png',
  },
];
<svg width="0" height="0">
  <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#fafafa" offset="0%" />
    <stop stopColor="#737373" offset="100%" />
  </linearGradient>
</svg>;
