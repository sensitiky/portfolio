'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { Circle } from 'lucide-react';

export default function Header() {
  const navItems = [
    { name: 'home', href: '#Home' },
    { name: 'skills', href: '#skills' },
    { name: 'experience', href: '#experience' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <motion.header
      className="py-4 sticky top-0 z-50 backdrop-blur-md bg-background/80 dark:bg-background/80 border-b border-border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="#Home" className="text-xl font-bold text-foreground">
            <Circle className="w-8 h-8 text-primary bg-primary rounded-full" />
          </Link>
        </motion.div>

        <nav className="flex items-center space-x-1">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <ThemeToggle />
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
