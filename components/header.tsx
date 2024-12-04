'use client';
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      {/* Desktop Navigation */}
      <div className="relative z-50 justify-between">
        <div className="flex justify-start items-center">
          <nav className="flex space-x-6">
            <Link href="#hero" className="text-gray-300 hover:text-gray-400">
              home
            </Link>
            <Link
              href="#experience"
              className="text-gray-300 hover:text-gray-400"
            >
              experience
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-gray-400">
              contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
