"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-float opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-float opacity-30 animation-delay-3s" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[110px] animate-float opacity-40 animation-delay-6s" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm md:text-md font-medium text-accent"
        >
          Full Stack Developer & BE-CSE Student
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] text-white"
        >
          Full Stack <br /> Developer & Builder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
        >
          I build real products from AI platforms to wallpaper websites.
          Currently interning at{" "}
          <a
            href="https://rhythmiqcx.com"
            target="_blank"
            className="text-white hover:underline underline-offset-4"
          >
            RhythmiqCX
          </a>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all active:scale-95"
          >
            View Projects
          </a>
          <a
            href="/resume/Parshant_Vardhan_Resume.pdf"
            target="_blank"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Resume <Download size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/Parshant95"
            target="_blank"
            className="text-muted hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/parshant-vardhan-a75293259/?skipRedirect=true"
            target="_blank"
            className="text-muted hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/parshant63/"
            target="_blank"
            className="text-muted hover:text-white transition-colors"
            aria-label="LeetCode"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.77 11.77a1.347 1.347 0 0 0 0 1.905l1.371 1.328a1.347 1.347 0 0 0 1.905 0l11.77-11.77a1.347 1.347 0 0 0 0-1.905L14.427.414A1.374 1.374 0 0 0 13.483 0zM4.345 13.344l2.508 2.508c.525.525.525 1.38 0 1.905-.525.525-1.38.525-1.905 0l-2.508-2.508c-.525-.525-.525-1.38 0-1.905.525-.525 1.38-.525 1.905 0z" />
              <path d="M22.138 13.344l-2.508-2.508c-.525-.525-1.38-.525-1.905 0-.525.525-.525 1.38 0 1.905l2.508 2.508c.525.525 1.38.525 1.905 0 .525-.525.525-1.38 0-1.905z" />
              <path d="M13.483 24a1.374 1.374 0 0 0 .961-.414l11.77-11.77a1.347 1.347 0 0 0 0-1.905l-1.371-1.328a1.347 1.347 0 0 0-1.905 0l-11.77 11.77a1.347 1.347 0 0 0 0 1.905l1.371 1.328a1.374 1.374 0 0 0 .961.414z" />
              <path d="M10.517 0a1.374 1.374 0 0 1-.961.414L-2.214 12.184a1.347 1.347 0 0 1 0 1.905l1.371 1.328a1.347 1.347 0 0 1 1.905 0l11.77-11.77a1.347 1.347 0 0 1 0-1.905L11.478.414A1.374 1.374 0 0 1 10.517 0z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
