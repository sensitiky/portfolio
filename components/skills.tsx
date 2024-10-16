import AboutSkills from '@/components/aboutSkills';

export default function Skills() {
  return (
    <div className="flex justify-center flex-col">
      <h2 className="mt-4 md:mt-4 text-white text-center text-4xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Technologies
        </span>
      </h2>
      <AboutSkills />
    </div>
  );
}
