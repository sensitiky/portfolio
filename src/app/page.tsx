import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
