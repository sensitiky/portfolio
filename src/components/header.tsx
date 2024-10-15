'use client';
import Link from 'next/link';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineMail,
} from 'react-icons/ai';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    title: string;
    subTitle: string;
    work: string;
    skills: string;
  };
}

const translations: Translations = {
  en: {
    title: 'Mario Correa',
    subTitle:
      'Hi! I am a Backend & Mobile Developer deeply passionate about two things: programming and technology.',
    work: 'Work',
    skills: 'Skills',
  },
  es: {
    title: 'Mario Correa',
    subTitle:
      '¡Hola! Soy un Desarrollador Backend y Móvil apasionado por dos cosas: la programación y la tecnología.',
    work: 'Trabajo',
    skills: 'Habilidades',
  },
};

const socialLinks = (language: Language) => [
  {
    href: 'https://github.com/sensitiky',
    icon: <AiFillGithub className="size-10 text-white" />,
    alt: 'Github Logo',
  },
  {
    href: 'https://www.linkedin.com/in/mario-correa-45324b237/',
    icon: <AiFillLinkedin className="size-10 text-white" />,
    alt: 'Linkedin Logo',
  },
  {
    href: 'mailto:mariomcorrea3@gmail.com',
    icon: <AiOutlineMail className="size-10 text-white" />,
    ariaLabel: 'Email',
  },
  {
    href:
      language === 'en'
        ? 'CV-Correa Mario English.pdf'
        : 'CV - Correa Mario.pdf',
    icon: <AiOutlineFilePdf className="size-10 text-white" />,
    ariaLabel: 'Download PDF',
  },
];

interface HeaderProps {
  currentSection: string;
  language: Language;
  setLanguage: (language: Language) => void;
}

export default function Header({
  currentSection,
  language,
  setLanguage,
}: HeaderProps) {
  const t = translations[language];

  const barClass = (section: string) =>
    currentSection === section ? 'bg-[#005c74] w-28' : 'bg-[#005c74]/80 w-20';
  const barName = (section: string) =>
    currentSection === section ? 'text-gray-200 ml-2' : 'text-gray-400';

  return (
    <header className="flex flex-col justify-center p-4 h-full">
      <section className="flex flex-col items-start">
        <h1 className="text-2xl text-white font-bold">{t.title}</h1>
        <h2 className="text-gray-400 flex-wrap">{t.subTitle}</h2>
        <Link href="#Projects">
          <div className={`${barName('Projects')} mt-2`}>{t.work}</div>
          <div className={`${barClass('Projects')} h-[2px] my-2`}></div>
        </Link>
        <Link href="#about">
          <div className={`${barName('About')}`}>{t.skills}</div>
          <div className={`${barClass('About')} h-[2px]`}></div>
        </Link>
      </section>
      <nav className="mt-2">
        <ul className="flex gap-2 justify-start">
          {socialLinks(language).map(({ href, icon, ariaLabel }, index) => (
            <li key={index}>
              <Link
                href={href}
                aria-label={ariaLabel}
                target={href.endsWith('.pdf') ? '_blank' : undefined}
                rel={href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-4 flex items-center">
        <span className="text-white mr-2">EN</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={language === 'es'}
            onChange={() => setLanguage(language === 'en' ? 'es' : 'en')}
          />
          <div className="w-11 h-6 bg-stone-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#005c74]"></div>
        </label>
        <span className="text-white ml-2">ES</span>
      </div>
    </header>
  );
}
