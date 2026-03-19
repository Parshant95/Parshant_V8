'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'RhythmiqCX',
    duration: 'October 2025 – Present',
    tags: ['Next.js', 'REST APIs', 'MongoDB', 'Analytics Dashboard'],
    points: [
      'Built RESTful APIs with full CRUD operations connecting Next.js frontend to backend',
      'Developed a User Analytics Dashboard for real-time business metric tracking',
      'Worked with backend databases managing customer interaction data at scale',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter self-start lg:text-center lg:self-center">Professional Experience</h2>

        <div className="w-full max-w-4xl space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl group hover:border-white/10 transition-all duration-500 relative overflow-hidden glow-border"
            >
              {/* Background Glow */}
              <div className="absolute -top-1/2 -right-1/4 w-[400px] h-[400px] bg-white/2 opacity-0 group-hover:opacity-10 blur-[80px] rounded-full transition-opacity duration-700" />

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-xl font-medium text-muted">{exp.company}</p>
                </div>
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold tracking-wide text-accent">
                   {exp.duration}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {exp.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-muted font-medium border border-white/5 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-4">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-lg text-muted">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
