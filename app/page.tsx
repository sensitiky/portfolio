'use client';

import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgba(147, 51, 234, 0.1)',
      mixBlendMode: 'difference' as const,
      opacity: 0.8,
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Custom cursor */}
      <motion.div
        className="custom-cursor hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/50 pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
        <Header />
        <main className="grid gap-0">
          <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <Hero />
          </div>
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>

      {/* SVG Gradients */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="java" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#007396" offset="0%" />
            <stop stopColor="#005175" offset="100%" />
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
            <stop stopColor="#FFFFFF" offset="0%" />
            <stop stopColor="#000000" offset="100%" />
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
