import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-4 border-t-[1px] border-gray-800">
      <div className="container mx-auto px-4 text-start">
        <h2 className="text-4xl font-semibold mb-8 text-gray-300">
          Want to work together?
        </h2>
        <p className="text-xl italic text-gray-300">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <Link href="mailto:mariomcorrea3@gmail.com" target="_blank">
          <p className="text-gray-300 mb-4 underline">Contact me</p>
        </Link>
        <div className="flex justify-start space-x-6">
          <Link
            href="https://github.com/sensitiky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mario-correa-45324b237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="CV-Correa Mario.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-400 transition-colors"
          >
            <FileText className="size-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
