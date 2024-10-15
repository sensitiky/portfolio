import Work from './work';

const translations = {
  en: {
    work: 'Work',
  },
  es: {
    work: 'Trabajo',
  },
};

interface ProjectsProps {
  language: 'en' | 'es';
}

export default function Projects({ language }: ProjectsProps) {
  const t = translations[language];

  return (
    <section
      id="Projects"
      className="flex flex-col items-center justify-center py-4 px-4"
    >
      <h1 className="text-white text-[2rem] font-bold">{t.work}</h1>
      <Work language={language} />
      <div className="w-3/4 border-t border-[#005c74] mt-8"></div>
    </section>
  );
}
