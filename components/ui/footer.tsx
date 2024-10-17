import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineMail,
} from 'react-icons/ai';
import Link from 'next/link';

const socialLinks = () => [
  {
    href: 'https://github.com/sensitiky',
    icon: (
      <AiFillGithub className="size-6" style={{ fill: 'url(#gradient)' }} />
    ),
    alt: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/mario-correa-45324b237/',
    icon: (
      <AiFillLinkedin className="size-6" style={{ fill: 'url(#gradient)' }} />
    ),
    alt: 'Linkedin',
  },
  {
    href: 'mailto:mariomcorrea3@gmail.com',
    icon: (
      <AiOutlineMail className="size-6" style={{ fill: 'url(#gradient)' }} />
    ),
    ariaLabel: 'Email',
  },
  {
    href: 'CV-Correa Mario.pdf',
    icon: (
      <AiOutlineFilePdf
        className="size-6 "
        style={{ fill: 'url(#gradient)' }}
      />
    ),
    ariaLabel: 'Resume',
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <div className="text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 w-1/3 h-[1px]">
        -
      </div>
      <div className="flex flew-row gap-2 mt-2">
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
      <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold">
        &copy;Mario Correa
      </p>
    </footer>
  );
}
