'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AiFillGithub } from 'react-icons/ai';
import { SiGooglechrome } from 'react-icons/si';
import { Button } from './button';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

type Card = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  techIcons: JSX.Element[];
  githubLink: string;
  liveDemoLink: string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, '')}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              'relative overflow-hidden',
              selected?.id === card.id
                ? 'rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col'
                : lastSelected?.id === card.id
                ? 'z-40 bg-white rounded-xl h-full w-full'
                : 'bg-white rounded-xl h-full w-full'
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute h-full w-full left-0 top-0 opacity-0 z-10',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        'object-cover object-top absolute inset-0 h-full w-full transition duration-200'
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60] items-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        <p className="font-bold md:text-4xl text-xl text-white">
          {selected?.title}
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {selected?.description}
        </p>
        <p className="font-medium text-white text-xl">Technologies</p>
        <p className="flex gap-2 text-base font-normal">
          {selected?.technologies.map((tech, index) => (
            <span key={index} className="flex flex-row items-center gap-2 m-1">
              {selected.techIcons[index]}
              {tech}
            </span>
          ))}
        </p>
        <Link href={selected?.githubLink as Url}>
          <Button className="rounded-full border-white border mr-2">
            <AiFillGithub size={20} className="mr-2" />
            Github
          </Button>
        </Link>
        <Link href={selected?.liveDemoLink as Url}>
          <Button className="rounded-full text-primary bg-primary-foreground border-primary border hover:bg-primary-foreground/80">
            <SiGooglechrome className="mr-2 text-primary" size={20} />
            Live Demo
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};
