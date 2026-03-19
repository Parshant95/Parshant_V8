'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function Patent() {
  return (
    <section className="py-24 px-6 md:py-32 bg-[#0a0a0a]">
       <div className="max-w-7xl mx-auto flex justify-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="w-full max-w-4xl p-10 md:p-16 border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-[3rem] relative overflow-hidden group glow-border animate-float-subtle"
         >
           {/* Decorative Background Icon */}
           <div className="absolute -top-16 -right-16 opacity-5 group-hover:opacity-10 transition-opacity">
             <Award size={300} />
           </div>

           <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white text-black rounded-full flex items-center justify-center shadow-2xl">
                <Award size={48} />
              </div>

              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-accent mb-4 opacity-70">Published Patent</h3>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
                  Dual Piezoelectric <br /> Energy Harvesting Key
                </h2>
                
                <div className="flex flex-wrap gap-6 items-center text-lg text-muted">
                  <div>
                    <span className="font-bold text-white mr-2">App No:</span>
                    <span className="font-mono">202411070768</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 hidden md:block" />
                  <p className="max-w-md">
                     A dual energy harvesting keyboard that converts key presses into electrical energy with 99% accuracy.
                  </p>
                </div>
              </div>
           </div>
         </motion.div>
       </div>
    </section>
  );
}
