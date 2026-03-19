'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillsByGroup = [
  {
    category: 'Languages',
    skills: ['C++', 'JavaScript', 'HTML', 'CSS', 'SQL', 'TypeScript'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Django', 'Express', 'Node.js'],
  },
  {
    category: 'Databases & Cloud',
    skills: ['MongoDB', 'Firebase', 'Cloudinary', 'Azure', 'Supabase'],
  },
  {
    category: 'AI & Dev Tools',
    skills: ['Claude Code', 'GitHub Copilot', 'Cursor AI', 'Vercel', 'Git', 'Postman'],
  },
  {
    category: 'Other',
    skills: ['SEO Optimization', 'REST API Design', 'CRUD Operations', 'Analytics'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter self-start lg:text-center lg:self-center">Skills & Expertise</h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillsByGroup.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-[0.2em] opacity-80">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/[0.03] text-accent text-sm font-semibold border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
