'use client';
import {
  languages,
  frameworks,
  databases,
  cloudTools,
} from '@/constants/utils';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Server, Database, Cloud } from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const categories = [
    {
      id: 'languages',
      label: 'Languages',
      icon: <Code className="h-4 w-4" />,
      data: languages,
    },
    {
      id: 'frameworks',
      label: 'Frameworks',
      icon: <Server className="h-4 w-4" />,
      data: frameworks,
    },
    {
      id: 'databases',
      label: 'Databases',
      icon: <Database className="h-4 w-4" />,
      data: databases,
    },
    {
      id: 'cloud',
      label: 'Cloud & Tools',
      icon: <Cloud className="h-4 w-4" />,
      data: cloudTools,
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold inline-block mb-4">
          Technical skills
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My expertise spans across various technologies, allowing me to build
          complete, scalable solutions.
        </p>
      </motion.div>

      <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2 data-[state=active]:bg-primary/10"
            >
              {category.icon}
              <span className="hidden sm:inline">{category.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {category.data.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
