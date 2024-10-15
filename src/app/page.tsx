'use client';

import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Projects from '@/components/projects';
import { useState } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('Projects');
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  return (
    <div className="flex min-h-screen">
      <aside className="w-full md:w-1/4 fixed top-0 left-0 h-full overflow-y-auto">
        <Header
          currentSection={currentSection}
          language={language}
          setLanguage={setLanguage}
        />
      </aside>
      <main className="w-full md:w-3/4 md:ml-[25%] overflow-y-auto">
        <section
          id="Projects"
          className="min-h-screen flex items-center justify-center"
          onMouseEnter={() => setCurrentSection('Projects')}
        >
          <Projects language={language} />
        </section>
        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
          onMouseEnter={() => setCurrentSection('About')}
        >
          <About language={language} />
        </section>
        <Footer />
      </main>
    </div>
  );
}
