'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  AiFillGithub,
  AiFillHome,
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineMail,
  AiOutlineProject,
  AiOutlineTool,
} from 'react-icons/ai';

const socialLinks = () => [
  {
    href: 'https://github.com/sensitiky',
    icon: (
      <AiFillGithub className="size-10" style={{ fill: 'url(#gradient)' }} />
    ),
    alt: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/mario-correa-45324b237/',
    icon: (
      <AiFillLinkedin className="size-10" style={{ fill: 'url(#gradient)' }} />
    ),
    alt: 'Linkedin',
  },
  {
    href: 'mailto:mariomcorrea3@gmail.com',
    icon: (
      <AiOutlineMail className="size-10" style={{ fill: 'url(#gradient)' }} />
    ),
    ariaLabel: 'Email',
  },
  {
    href: 'CV-Correa Mario.pdf',
    icon: (
      <AiOutlineFilePdf
        className="size-10 "
        style={{ fill: 'url(#gradient)' }}
      />
    ),
    ariaLabel: 'Resume',
  },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the header
        setIsVisible(false);
      } else {
        // if scroll up show the header
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setIsVisible(false);
  };

  return (
    <header
      className={`flex m-2 p-[2px] gap-2 justify-between fixed z-50 items-center rounded-full border-transparent bg-clip-border bg-gradient-to-b from-neutral-50 to-neutral-400 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex bg-black rounded-full p-2">
        <Link href="#home" title="Home" onClick={handleLinkClick}>
          <AiFillHome className="size-10 " style={{ fill: 'url(#gradient)' }} />
        </Link>
        <Link href="#Work" title="Work" onClick={handleLinkClick}>
          <AiOutlineProject
            className="size-10"
            style={{ fill: 'url(#gradient)' }}
          />
        </Link>
        <Link href="#Skills" title="Skills" onClick={handleLinkClick}>
          <AiOutlineTool
            className="size-10"
            style={{ fill: 'url(#gradient)' }}
          />
        </Link>
        {socialLinks().map(({ href, icon, alt, ariaLabel }, index) => (
          <nav key={index}>
            <Link
              href={href}
              aria-label={ariaLabel || alt}
              title={ariaLabel || alt}
              onClick={handleLinkClick}
            >
              {icon}
            </Link>
          </nav>
        ))}
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#fafafa" offset="0%" />
            <stop stopColor="#737373" offset="100%" />
          </linearGradient>
        </svg>
      </div>
    </header>
  );
}
