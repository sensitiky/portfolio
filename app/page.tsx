'use client';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
