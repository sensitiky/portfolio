'use client';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import WorkSection from '@/components/work';
import { useState } from 'react';

const renderSection = (selectedSection: string) => {
  switch (selectedSection) {
    case 'Home':
      return (
        <section id="Home">
          <Hero />
        </section>
      );
    case 'Work':
      return (
        <section id="Work">
          <WorkSection />
        </section>
      );
    case 'Skills':
      return (
        <section id="Skills">
          <Skills />
        </section>
      );
  }
};

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('Home');

  return (
    <div>
      <header className="flex mt-2 mb-6 justify-center items-center">
        <Header onSelectSection={setSelectedSection} />
      </header>
      {renderSection(selectedSection)}
    </div>
  );
}
