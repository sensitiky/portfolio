import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 animated-background text-gray-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Want to work together?</h2>
        <h3 className="text-xl italic mb-8">
          Feel free to reach out for collaborations or just a friendly hello
        </h3>
        <Link
          href="mailto:mariomcorrea3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-gray-300 rounded-full font-semibold text-lg transition duration-300 mb-8 animated-background items-center">
            Contact Me
          </Button>
        </Link>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/sensitiky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <Github className="h-10 w-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mario-correa-45324b237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <Linkedin className="h-10 w-10" />
          </Link>
          <Link
            href="CV-Correa Mario.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <FileText className="h-10 w-10" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
