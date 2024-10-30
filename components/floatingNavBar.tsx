import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingNavBar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header className="flex justify-center">
      {/* Mobile Navigation */}
      <div
        className={`fixed bottom-0 w-3/4 z-50 bg-[#1d1d1d] justify-center flex rounded-full shadow-md md:hidden transition-transform duration-300 ${
          isScrolling
            ? "translate-y-[-20px] justify-center"
            : "translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-around items-center">
          <Link href="#hero" className="text-gray-300 hover:text-gray-400">
            Home
          </Link>
          <Link
            href="#experience"
            className="text-gray-300 hover:text-gray-400"
          >
            Experience
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-gray-400">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
