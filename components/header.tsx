'use client';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { SiCircle } from 'react-icons/si';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="shadow-md animated-background md:relative z-10 sticky">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-300 flex flex-row items-center">
          <SiCircle className="size-6 bg-purple-500 text-purple-500 rounded-full mr-2" />{' '}
          Mario
        </h1>
        <nav className="hidden md:flex space-x-4">
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
        </nav>
        <Button
          onClick={toggleSidebar}
          className="flex md:hidden animated-background rounded-xl z-50 active:animated-background"
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isSidebarOpen && (
        <div className="h-screen inset-0 z-40 bg-[#1d1d1d] absolute border border-white rounded-xl justify-start items-start flex flex-col">
          <nav className="flex md:hidden z-50 flex-col m-10 gap-6 text-2xl">
            <Link
              onClick={toggleSidebar}
              href="#hero"
              className="text-gray-300 hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              href="#experience"
              className="text-gray-300 hover:text-gray-400"
              onClick={toggleSidebar}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-gray-300 hover:text-gray-400"
              onClick={toggleSidebar}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-gray-400"
              onClick={toggleSidebar}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
