import Skills from "./icons";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-8 px-4"
    >
      <div className="text-center">
        <h1 className="text-[2rem] text-white font-bold mb-4">Skills</h1>
        <p className="text-white text-[1rem] mb-8">
          Developer, designer, and creator.
        </p>
      </div>
      <Skills />
    </section>
  );
}
