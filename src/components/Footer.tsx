"use client";

import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start transition-all group">
          <span className="text-2xl font-black mb-2 flex items-center gap-2 group-hover:scale-105 transition-transform cursor-pointer">
            PV <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </span>
          <p className="text-muted text-sm tracking-widest uppercase font-medium">
            Built by Parshant Vardhan &copy; 2025
          </p>
        </div>

        <div className="flex gap-10">
          <a
            href="https://github.com/Parshant95"
            target="_blank"
            className="text-muted hover:text-white transition-all text-sm font-bold uppercase tracking-widest relative group"
          >
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/parshant-vardhan-a75293259/?skipRedirect=true"
            target="_blank"
            className="text-muted hover:text-white transition-all text-sm font-bold uppercase tracking-widest relative group"
          >
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </a>
          <a
            href="https://leetcode.com/u/parshant63/"
            target="_blank"
            className="text-muted hover:text-white transition-all text-sm font-bold uppercase tracking-widest relative group"
          >
            LeetCode
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
