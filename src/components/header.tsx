import Link from "next/link";

const Texto = "<MC />";
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
        </ul>
      </nav>
    </header>
  );
}
