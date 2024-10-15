import Skills from './icons';

interface AboutProps {
  language: 'en' | 'es';
}

export default function About({ language }: AboutProps) {
  const translations = {
    en: 'Skills',
    es: 'Habilidades',
  };

  return (
    <section id="about" className="flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-[2rem] text-white font-bold mb-4">
          {translations[language]}
        </h1>
      </div>
      <Skills language={language} />
    </section>
  );
}
