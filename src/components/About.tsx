'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const stats = [
    { label: 'Projects Built', value: '10+' },
    { label: 'LeetCode Solved', value: '300+' },
    { label: 'Academic CGPA', value: '8.36' },
    { label: 'Published Patents', value: '04' },
  ];

  return (
    <section id="about" className="py-24 px-6 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">About Me</h2>
          <p className="text-xl text-muted leading-relaxed mb-6">
            I'm <span className="text-white font-medium">Parshant Vardhan</span>, a CSE student at Chandigarh University and <span className="text-white font-medium">Full Stack Developer Intern at RhythmiqCX</span>. I build AI-powered tools, full-stack web apps, and ship production products.
          </p>
          <p className="text-xl text-muted leading-relaxed">
            I hold 4 published patents and have solved 300+ DSA problems on LeetCode. My passion lies in creating efficient, scalable, and user-friendly applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col justify-center items-center text-center group hover:border-white/20 transition-all duration-500"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:scale-110 transition-transform">
                {stat.value}
              </h3>
              <p className="text-muted text-sm uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
