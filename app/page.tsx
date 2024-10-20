'use client';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[1100px] p-4 grid gap-8">
        <Header />
        <main className="grid gap-8">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
