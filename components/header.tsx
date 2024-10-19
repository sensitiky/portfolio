'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { SiCircle } from 'react-icons/si';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 flex flex-row items-center">
          <SiCircle className="size-6 bg-purple-500 text-purple-500 rounded-full mr-2" />{' '}
          Mario
        </h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="#hero" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link
            href="#experience"
            className="text-gray-600 hover:text-gray-800"
          >
            Experience
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleSidebar}>
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-1000 ease-in-out">
          <div
            className={`fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 p-4 ${
              isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <button
              onClick={toggleSidebar}
              className="text-right w-full flex justify-end"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <nav className="flex flex-col gap-4 mt-4">
              <Link
                href="#hero"
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-gray-800"
              >
                Home
              </Link>
              <Link
                href="#experience"
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-gray-800"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-gray-800"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-gray-800"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
