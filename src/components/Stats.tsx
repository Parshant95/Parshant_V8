"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Code2, GraduationCap, ScrollText } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  descriptor: string;
  icon: React.ReactNode;
  accent?: boolean;
}

const stats: Stat[] = [
  {
    value: "10+",
    label: "Projects",
    descriptor: "Shipped to production",
    icon: <Layers size={20} />,
  },
  {
    value: "300+",
    label: "LeetCode",
    descriptor: "Problems solved",
    icon: <Code2 size={20} />,
  },
  {
    value: "8.36",
    label: "CGPA",
    descriptor: "Out of 10 · Chandigarh University",
    icon: <GraduationCap size={20} />,
  },
  {
    value: "1",
    label: "Patent",
    descriptor: "App No: 202411070768 · Rare for a student",
    icon: <ScrollText size={20} />,
    accent: true,
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl border flex flex-col gap-3 overflow-hidden group transition-all duration-300 ${
                stat.accent
                  ? "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50 hover:bg-amber-500/10"
                  : "border-white/5 bg-white/[0.03] hover:border-white/10 hover:bg-white/[0.05]"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  stat.accent
                    ? "bg-amber-500/15 text-amber-400"
                    : "bg-white/5 text-white/50"
                }`}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div>
                <span
                  className={`text-4xl md:text-5xl font-black tracking-tighter leading-none block ${
                    stat.accent ? "text-amber-400" : "text-white"
                  }`}
                >
                  {stat.value}
                </span>
                <span
                  className={`text-sm font-bold uppercase tracking-widest mt-1 block ${
                    stat.accent ? "text-amber-400/70" : "text-white/60"
                  }`}
                >
                  {stat.label}
                </span>
              </div>

              {/* Descriptor */}
              <p
                className={`text-xs leading-snug ${
                  stat.accent ? "text-amber-400/50" : "text-white/35"
                }`}
              >
                {stat.descriptor}
              </p>

              {/* Accent glow on Patent */}
              {stat.accent && (
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-amber-500/20 group-hover:ring-amber-500/40 transition-all" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
