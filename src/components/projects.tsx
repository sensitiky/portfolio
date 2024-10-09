import Scroll from './scroll';

export default function Projects() {
  return (
    <section
      id="Projects"
      className="flex flex-col items-center justify-center h-full py-8 px-4"
    >
      <h2 className="text-2xl md:text-4xl text-white text-center mb-8">
        Projects
      </h2>
      <Scroll />
      <div className="w-3/4 border-t border-[#a6a6a6] mt-8"></div>
    </section>
  );
}
