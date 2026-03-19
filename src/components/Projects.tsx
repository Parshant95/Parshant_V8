"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight, Zap } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  impact: string;
  impactStyle: string;
  link: string;
  repo: string;
  cta: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "V8 Designs",
    subtitle: "Free Wallpaper Platform",
    description:
      "Production-ready wallpaper website with AI modern art and digital art. Built with MongoDB, Cloudinary, and a dark modern UI.",
    tags: ["MongoDB", "Cloudinary", "Full Stack", "Dark UI"],
    impact: "Production live",
    impactStyle: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    link: "https://v8designs.onrender.com/",
    repo: "https://github.com/ParshantVardhan/v8-designs",
    cta: "Live Site",
    image: "/images/v8.png",
  },
  {
    title: "AI Text-to-Video Generator",
    subtitle: "Multilingual STEM Education Tool",
    description:
      "Converts natural language prompts into fully rendered educational videos using Manim, Groq API, and Murf API for AI voice dubbing.",
    tags: ["Groq API", "Manim", "Python", "Murf API", "AI"],
    impact: "AI-powered",
    impactStyle: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    link: "",
    repo: "https://github.com/Parshant95/PieScript",
    cta: "GitHub",
    image: "/images/piescript.png",
  },
  {
    title: "Project Cars",
    subtitle: "Modern Car Showcase Platform",
    description:
      "Responsive automotive showcase with Firebase real-time DB, Google Sign-In auth, and dynamic car model browsing.",
    tags: ["Firebase", "React", "Google Auth"],
    impact: "Open source",
    impactStyle: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    repo: "https://github.com/Parshant95/Project-Cars",
    link: "https://project-ca-rs-pv-8-igin-git-main-parshant95s-projects.vercel.app/",
    cta: "Live Site",
    image: "/images/image.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Selected Projects
            </h2>
            <p className="text-xl text-white/50 max-w-xl">
              A collection of products built with a focus on user experience,
              scalability, and performance.
            </p>
          </div>
          <a
            href="https://github.com/Parshant95"
            target="_blank"
            className="group flex items-center gap-2 text-white hover:text-white/70 transition-colors font-medium text-lg border-b border-white/20 pb-1"
          >
            All Work{" "}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group p-8 border border-white/5 bg-white/[0.03] backdrop-blur-sm rounded-3xl flex flex-col h-full hover:border-white/15 hover:bg-white/[0.05] transition-all duration-400 relative overflow-hidden glow-border"
            >
              {/* Background Image */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-15 group-hover:opacity-35 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/85 to-[#0d0d0d]/60" />
                </div>
              )}

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Impact tag + title row */}
                <div className="mb-6">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-3 ${project.impactStyle}`}
                  >
                    <Zap size={9} />
                    {project.impact}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/50 font-medium text-sm">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-white/50 font-bold uppercase tracking-widest border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-white/50 leading-relaxed mb-auto pb-8 text-sm">
                  {project.description}
                </p>

                {/* CTA Buttons */}
                <div className="mt-auto flex items-center gap-3">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex-1 px-5 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-white/90 active:scale-95 transition-all flex items-center justify-center gap-2 rounded-xl"
                    >
                      {project.cta} <ExternalLink size={13} />
                    </a>
                  ) : (
                    <a
                      href={project.repo}
                      target="_blank"
                      className="flex-1 px-5 py-3 border border-white/15 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 active:scale-95 transition-all flex items-center justify-center gap-2 rounded-xl"
                    >
                      {project.cta} <Github size={13} />
                    </a>
                  )}
                  {/* Secondary repo link if there's also a live link */}
                  {project.link && project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      aria-label="Source code"
                      className="p-3 border border-white/10 rounded-xl text-white/50 hover:text-white hover:border-white/25 transition-all"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
