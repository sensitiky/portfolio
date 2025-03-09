'use client';
import React from 'react';
import { experiences } from '@/constants/helpers';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseBusiness, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-20 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold inline-block mb-4">
          Professional experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My journey as a developer, building solutions and growing
          professionally.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline connector */}
            {index < experiences.length - 1 && (
              <div className="absolute left-[39px] top-[80px] bottom-0 w-0.5 bg-border h-[calc(100%-80px)]" />
            )}

            <div className="flex gap-6">
              {/* Timeline icon */}
              <div className="relative">
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20"
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : { scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                >
                  <BriefcaseBusiness className="h-8 w-8 text-primary" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.position}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {exp.description.map((element, idx) => (
                      <motion.div
                        key={idx}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + 0.3 + idx * 0.1,
                        }}
                      >
                        <h4 className="font-bold text-foreground">
                          {element.title}
                        </h4>
                        <ul className="space-y-2">
                          {element.subtitles.map((subtitle, sIdx) => (
                            <motion.li
                              key={sIdx}
                              className="flex items-start gap-2 text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              animate={
                                inView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -10 }
                              }
                              transition={{
                                duration: 0.3,
                                delay:
                                  index * 0.2 + 0.4 + idx * 0.1 + sIdx * 0.05,
                              }}
                            >
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>{subtitle}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
