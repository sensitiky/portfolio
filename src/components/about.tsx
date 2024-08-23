import Skills from "./icons";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <h1 className="text-[2rem] text-white font-bold text-center">
        Skills
        <br /> &<br /> Experience
      </h1>
      <p className="text-white text-[1rem]">
        Developer, designer, and creator.
      </p>
      <Skills />
    </div>
  );
}
