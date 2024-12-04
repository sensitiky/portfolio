'use client';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090909] flex justify-center">
      <div className="w-full max-w-4xl p-4 md:p-14 grid gap-8">
        <Header />
        <main className="grid gap-8">
          <Hero />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
      {/* SVG Gradients */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="kotlin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#A97BFF" offset="0%" />
            <stop stopColor="#6C4AB6" offset="100%" />
          </linearGradient>
          <linearGradient id="react-native" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#00d8ff" offset="0%" />
            <stop stopColor="#0080ff" offset="100%" />
          </linearGradient>
          <linearGradient id="jetpack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#348bbc" offset="0%" />
            <stop stopColor="#34ba61" offset="100%" />
          </linearGradient>
          <linearGradient id="nextjs" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#000000" offset="0%" />
            <stop stopColor="#333333" offset="100%" />
          </linearGradient>
          <linearGradient id="nestjs" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#E0234E" offset="0%" />
            <stop stopColor="#A61B2B" offset="100%" />
          </linearGradient>
          <linearGradient id="typescript" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#007ACC" offset="0%" />
            <stop stopColor="#004A8D" offset="100%" />
          </linearGradient>
          <linearGradient id="tailwind" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#38B2AC" offset="0%" />
            <stop stopColor="#319795" offset="100%" />
          </linearGradient>
          <linearGradient id="postgresql" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#336791" offset="0%" />
            <stop stopColor="#4F7DBE" offset="100%" />
          </linearGradient>
          <linearGradient id="mysql" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#00618A" offset="0%" />
            <stop stopColor="#0073B7" offset="100%" />
          </linearGradient>
          <linearGradient id="aws" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#FF9900" offset="0%" />
            <stop stopColor="#FFB84D" offset="100%" />
          </linearGradient>
          <linearGradient id="sqlite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#003B57" offset="0%" />
            <stop stopColor="#005B87" offset="100%" />
          </linearGradient>
          <linearGradient id="flutter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#02569B" offset="0%" />
            <stop stopColor="#0A84FF" offset="100%" />
          </linearGradient>
          <linearGradient id="g-cloud" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#008744" offset="0%" />
            <stop stopColor="#0057e7" offset="25%" />
            <stop stopColor="#ffa700" offset="50%" />
            <stop stopColor="#d62d20" offset="100%" />
          </linearGradient>
          <linearGradient id="cloudflare" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#f48120" offset="0%" />
            <stop stopColor="#faad3f" offset="100%" />
          </linearGradient>
          <linearGradient id="git" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#f13e32" offset="0%" />
            <stop stopColor="#faad3f" offset="100%" />
          </linearGradient>
          <linearGradient id="firebase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#FFCA28" offset="0%" />
            <stop stopColor="#FFA000" offset="100%" />
          </linearGradient>
          <linearGradient id="dart" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#0175C2" offset="0%" />
            <stop stopColor="#13B9FD" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
