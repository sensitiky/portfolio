import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Header from '@/components/ui/header';
import Work from '@/components/work';

export default function Home() {
  return (
    <div>
      <header className="flex mt-10 justify-center items-center">
        <Header />
      </header>
      <section className="h-screen md:h-screen" id="Home">
        <Hero />
      </section>
      <section id="Work">
        <Work />
      </section>
      <section id="Skills" className="mt-4">
        <Skills />
      </section>
      <footer className="mt-10">
        <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          &copy;Mario Correa
        </p>
      </footer>
    </div>
  );
}
