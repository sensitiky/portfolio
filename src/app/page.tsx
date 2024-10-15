'use client';

import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Projects from '@/components/projects';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('Projects');
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on a mobile device based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint at 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`flex flex-col ${
        isMobile ? 'min-h-screen' : 'md:flex-row min-h-screen'
      }`}
    >
      <section
        id="home"
        className={`w-full ${
          isMobile
            ? 'backdrop-blur-lg text-white'
            : 'md:backdrop-blur-0 lg:backdrop-blur-0 md:bg-transparent md:w-1/4 fixed top-0 left-0 h-auto md:h-full overflow-y-auto z-20'
        }`}
      >
        <Header
          currentSection={currentSection}
          language={language}
          setLanguage={setLanguage}
        />
      </section>

      <main
        className={`w-full ${
          isMobile ? '' : 'md:w-3/4 md:ml-[25%] overflow-y-auto md:mt-0'
        }`}
      >
        <section
          id="Projects"
          className={`flex items-center justify-center ${
            isMobile ? 'flex-col px-4 py-8' : ''
          }`}
          onMouseEnter={() => setCurrentSection('Projects')}
        >
          <Projects language={language} />
        </section>

        <section
          id="about"
          className={`min-h-screen flex items-center justify-center ${
            isMobile ? 'flex-col px-4 py-8' : ''
          }`}
          onMouseEnter={() => setCurrentSection('About')}
        >
          <About language={language} />
        </section>

        <Footer />
      </main>
    </div>
  );
}
