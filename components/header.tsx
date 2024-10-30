"use client";
import React from "react";
import Link from "next/link";
import { SiCircle } from "react-icons/si";

const Header: React.FC = () => {
  return (
    <header>
      {/* Desktop Navigation */}
      <div className="hidden md:block relative z-50 shadow-md justify-between">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-300 flex items-center">
            <SiCircle className="w-6 h-6 text-purple-500 bg-purple-500 rounded-full mr-2" />
            Mario
          </h1>
          <nav className="flex space-x-6">
            <Link href="#hero" className="text-gray-300 hover:text-gray-400">
              Home
            </Link>
            <Link
              href="#experience"
              className="text-gray-300 hover:text-gray-400"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-gray-300 hover:text-gray-400"
            >
              Projects
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-gray-400">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
