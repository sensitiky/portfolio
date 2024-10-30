import React from "react";
import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 text-neutral-300 border-t-[1px] border-neutral-300"
    >
      <div className="container mx-auto px-4 text-start">
        <h2 className="text-4xl font-semibold mb-8">Want to work together?</h2>
        <p className="text-xl italic mb-8">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <Link
          href="mailto:mariomcorrea3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full px-6 py-2 mb-4">
            Contact Me
          </Button>
        </Link>
        <div className="flex justify-start space-x-6">
          <Link
            href="https://github.com/sensitiky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-500"
          >
            <Github className="h-10 w-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mario-correa-45324b237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-500"
          >
            <Linkedin className="h-10 w-10" />
          </Link>
          <Link
            href="CV-Correa Mario.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-500"
          >
            <FileText className="h-10 w-10" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
