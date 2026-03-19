"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";

const HEADLINE = "I build AI-powered products that actually ship.";

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(HEADLINE.slice(0, i + 1));
      i++;
      if (i >= HEADLINE.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-float opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-float opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[110px] animate-float opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-24 h-24 rounded-full border border-white/20 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            <Image
              src="/images/portfolio.jpeg"
              alt="Parshant Vardhan"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Available badge */}
          <span className="absolute  -right-1 flex items-center gap-4 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            Available
          </span>
        </motion.div>

        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70"
        >
          Full Stack Dev @ RhythmiqCX · Patented Inventor · CSE @ Chandigarh
          University
        </motion.div>

        {/* Typing headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.05] text-white max-w-4xl"
        >
          {displayed}
          {!done && (
            <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-pulse" />
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10"
        >
          From AI-powered educational tools to production wallpaper platforms I
          ship code that matters.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          {/* Primary — Resume */}
          <a
            href="/resume/Parshant_Vardhan_Resume.pdf"
            target="_blank"
            className="group w-full sm:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all active:scale-95 flex items-center justify-center gap-2 rounded-xl"
          >
            Download Resume <Download size={16} />
          </a>
          {/* Secondary — Projects */}
          <a
            href="#projects"
            className="group w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center gap-2 rounded-xl"
          >
            View Projects{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/Parshant95"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/parshant-vardhan-a75293259/?skipRedirect=true"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://leetcode.com/u/parshant63/"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
            aria-label="LeetCode"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.414L.752 12.184a1.347 1.347 0 0 0 0 1.905l1.371 1.328a1.347 1.347 0 0 0 1.905 0L15.798 3.647a1.347 1.347 0 0 0 0-1.905L14.427.414A1.374 1.374 0 0 0 13.483 0z" />
              <path d="M4.345 13.344l2.508 2.508c.525.525.525 1.38 0 1.905-.525.525-1.38.525-1.905 0l-2.508-2.508c-.525-.525-.525-1.38 0-1.905.525-.525 1.38-.525 1.905 0z" />
              <path d="M22.138 13.344l-2.508-2.508c-.525-.525-1.38-.525-1.905 0-.525.525-.525 1.38 0 1.905l2.508 2.508c.525.525 1.38.525 1.905 0 .525-.525.525-1.38 0-1.905z" />
              <path d="M13.483 24a1.374 1.374 0 0 0 .961-.414l11.77-11.77a1.347 1.347 0 0 0 0-1.905l-1.371-1.328a1.347 1.347 0 0 0-1.905 0l-11.77 11.77a1.347 1.347 0 0 0 0 1.905l1.371 1.328A1.374 1.374 0 0 0 13.483 24z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
