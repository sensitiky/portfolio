import Parallax from "./scroll";

export default function Projects() {
  return (
    <div
      id="Projects"
      className="flex flex-col items-center justify-center h-full"
    >
      <h2 className="text-[2rem] text-white justify-center">Projects</h2>
      <Parallax />
      <div className="w-3/4 border border-[#a6a6a6]"></div>
    </div>
  );
}
