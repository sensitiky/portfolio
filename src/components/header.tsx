import Link from "next/link";
import { FloatingNav } from "./ui/floating-navbar";
import { HomeIcon, UserIcon, WorkflowIcon } from "lucide-react";
import { AiOutlineFilePdf, AiOutlineMail } from "react-icons/ai";

const Texto = "<MC />";
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4 text-white" />,
  },
  {
    name: "Projects",
    link: "#Projects",
    icon: <WorkflowIcon className="h-4 w-4  text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <UserIcon className="h-4 w-4 text-white" />,
  },
];

const socialLinks = [
  {
    href: "https://github.com/sensitiky",
    src: "/github-142-svgrepo-com.svg",
    alt: "Github Logo",
  },
  {
    href: "https://www.linkedin.com/in/mario-correa-45324b237/",
    src: "/linkedin.svg",
    alt: "Linkedin Logo",
  },
  {
    href: "mailto:mariomcorrea3@gmail.com",
    icon: <AiOutlineMail className="h-12 w-12 mt-1 text-white" />,
    ariaLabel: "Email",
  },
  {
    href: "CV-Correa Mario .pdf",
    icon: <AiOutlineFilePdf className="h-12 w-12 mt-1 text-white" />,
    ariaLabel: "Download PDF",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <h1 className="text-2xl text-white font-bold">{Texto}</h1>
      <nav>
        <ul className="flex space-x-4">
          {socialLinks.map(({ href, src, alt, icon, ariaLabel }, index) => (
            <li key={index}>
              <Link
                href={href}
                aria-label={ariaLabel}
                target={href.endsWith(".pdf") ? "_blank" : undefined}
                rel={href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              >
                {src ? <img src={src} alt={alt} className="h-12 w-12" /> : icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <FloatingNav navItems={navItems} />
    </header>
  );
}
