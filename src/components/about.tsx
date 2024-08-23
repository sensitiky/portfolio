import Skills from "./icons";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center m-4">
      <h1 className="text-[2rem] text-white font-bold text-center m-4">
        Skills
      </h1>
      <p className="text-white text-[1rem] m-4">
        Developer, designer, and creator.
      </p>
      <Skills />
    </div>
  );
}
