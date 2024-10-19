import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <Link
          href="mailto:johndoe@example.com"
          className="bg-gradient-to-br to-purple-400 via-gray-300 from-blue-700 text-black px-8 py-3 rounded-full font-semibold text-lg transition duration-300 inline-block mb-8 animated-background"
        >
          Contact Me
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
