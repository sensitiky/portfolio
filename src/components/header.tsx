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
export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <h1 className="text-2xl text-white font-bold">{Texto}</h1>
      <nav>
        <ul className="flex space-x-4">
          <Link href="https://github.com/sensitiky">
            <img
              src="/github-142-svgrepo-com.svg"
              alt="Github Logo"
              className="size-[3rem]"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/mario-correa-45324b237/">
            <img
              src="/linkedin.svg"
              alt="Linkedin Logo"
              className="size-[3rem]"
            />
          </Link>
          <Link href="mailto:mariomcorrea3@gmail.com" aria-label="Email">
            <AiOutlineMail className="size-[3rem] mt-1 text-white" />
          </Link>
          <Link
            href="CV-Correa Mario .pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download PDF"
          >
            <AiOutlineFilePdf className="size-[3rem] mt-1  text-white" />
          </Link>
        </ul>
      </nav>
      <FloatingNav navItems={navItems} />
    </header>
  );
}
