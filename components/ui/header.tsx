import Link from 'next/link';
import { HeaderProps } from '@/constants/interface';
import { AiFillCode, AiFillFolder, AiFillHome } from 'react-icons/ai';

export default function Header({ onSelectSection }: HeaderProps) {
  const handleLinkClick = (section: string) => {
    onSelectSection(section);
  };

  return (
    <header className="flex p-[2px] justify-between z-50 items-center rounded-full border-transparent bg-clip-border bg-gradient-to-b from-neutral-50 to-neutral-400 transition-transform duration-300">
      <div className="flex bg-black rounded-full p-2 items-center gap-6">
        <Link href="#home" title="Home" onClick={() => handleLinkClick('Home')}>
          <span className="items-center flex-row flex bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-xl font-bold">
            <AiFillHome style={{ fill: 'url(#gradient)' }} className="mb-1" />{' '}
            Home
          </span>
        </Link>
        <Link href="#Work" title="Work" onClick={() => handleLinkClick('Work')}>
          <span className="items-center flex-row flex bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-xl font-bold">
            <AiFillFolder style={{ fill: 'url(#gradient)' }} /> Projects
          </span>
        </Link>
        <Link
          href="#Skills"
          title="Skills"
          onClick={() => handleLinkClick('Skills')}
        >
          <span className="items-center flex-row flex bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-xl font-bold">
            <AiFillCode style={{ fill: 'url(#gradient)' }} /> Skills
          </span>
        </Link>
      </div>
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#fafafa" offset="0%" />
          <stop stopColor="#737373" offset="100%" />
        </linearGradient>
      </svg>
    </header>
  );
}
