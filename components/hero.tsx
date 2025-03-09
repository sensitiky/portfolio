'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      ref={ref}
      className="min-h-[90vh] flex items-center justify-center py-20"
      id="Home"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4"
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={container}
      >
        {/* Left content */}
        <div className="space-y-8 order-2 md:order-1">
          <motion.div className="space-y-4" variants={item}>
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-sm font-medium">Full-Stack Developer</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold animate-gradient-x"
              variants={item}
            >
              Mario Correa
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-md"
              variants={item}
            >
              I build exceptional digital experiences with modern technologies,
              specializing in mobile & microservices.
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-wrap gap-4" variants={item}>
            <Link href="#contact">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </Link>
            <Link href="CV-Correa Mario.pdf" target="_blank">
              <Button variant="outline" className="rounded-full">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </Link>
          </motion.div>

          <motion.div className="flex gap-6" variants={item}>
            <Link
              href="https://github.com/sensitiky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mario-correa-45324b237/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>

        {/* Right content - Image & Decorative elements */}
        <motion.div
          className="relative order-1 md:order-2 flex justify-center"
          variants={item}
        >
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full border-4 border-primary/20 p-1 overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/Mario.jpg"
                  alt="Mario Correa"
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            animate={{
              y: [0, -15, 0],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              y: [0, 15, 0],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Link href="#skills">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown className="h-5 w-5 text-primary" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
