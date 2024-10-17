import Link from 'next/link';
import Image from 'next/image';
import { MdMarkEmailUnread } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineMail,
} from 'react-icons/ai';
import Footer from './ui/footer';

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
export default function Hero() {
  return (
    <div className="flex flex-col justify-between h-[90vh]">
      <div className="md:mt-40 mb-2 w-full rounded-md flex flex-col md:flex-row md:items-start md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="p-4 max-w-7xl relative z-10 pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Mario
            <br /> Correa
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 text-start mx-auto">
            <span className="text-xl italic">Backend & Mobile Developer.</span>
            <br /> Deeply passionate about three things: <br />
            Programming, technology, and minimalism.
          </p>
          <div className="flex items-center m-2 flex-row">
            <Link href="mailto:mariomcorrea3@gmail.com">
              <div className='header className="flex p-[2px] gap-2 justify-between z-50 items-center rounded-full border-transparent bg-clip-border bg-gradient-to-b from-neutral-50 to-neutral-400 transition-transform duration-300">'>
                <div className="flex bg-black rounded-full p-2 items-center gap-2 flex-row">
                  <MdMarkEmailUnread
                    className="size-6"
                    style={{ fill: 'url(#gradient)' }}
                  />
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold">
                    Contact Me
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            {socialLinks().map(({ href, icon, alt, ariaLabel }, index) => (
              <nav key={index}>
                <Link
                  href={href}
                  aria-label={ariaLabel || alt}
                  title={ariaLabel || alt}
                >
                  {icon}
                </Link>
              </nav>
            ))}
          </div>
          <svg width="0" height="0">
            <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#fafafa" offset="0%" />
              <stop stopColor="#737373" offset="100%" />
            </linearGradient>
          </svg>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}
