import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Work from '@/components/work';
import Link from 'next/link';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineMail,
} from 'react-icons/ai';

const socialLinks = () => [
  {
    href: 'https://github.com/sensitiky',
    icon: <AiFillGithub className="size-14 text-white" />,
    alt: 'Github Logo',
  },
  {
    href: 'https://www.linkedin.com/in/mario-correa-45324b237/',
    icon: <AiFillLinkedin className="size-14 text-white" />,
    alt: 'Linkedin Logo',
  },
  {
    href: 'mailto:mariomcorrea3@gmail.com',
    icon: <AiOutlineMail className="size-14 text-white" />,
    ariaLabel: 'Email',
  },
  {
    href: 'CV-Correa Mario.pdf',
    icon: <AiOutlineFilePdf className="size-14 text-white" />,
    ariaLabel: 'Download PDF',
  },
];

export default function Home() {
  return (
    <div>
      <section className="flex m-2 gap-2 justify-end">
        {socialLinks().map(({ href, icon, alt, ariaLabel }, index) => (
          <nav key={index}>
            <Link href={href} aria-label={ariaLabel || alt}>
              {icon}
            </Link>
          </nav>
        ))}
      </section>
      <section id="Hero" className="h-screen">
        <Hero />
      </section>
      <section id="Work" className="text-white text-center text-4xl font-bold">
        Work
        <Work />
      </section>
      <section id="Skills" className="">
        <h2 className="text-white text-center text-4xl font-bold">Skills</h2>
        <Skills />
      </section>
      <footer className="mt-10">
        <p className="text-white text-center">&copy;Mario Correa</p>
      </footer>
    </div>
  );
}
