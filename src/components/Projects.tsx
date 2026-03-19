"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "V8 Designs",
    subtitle: "Free Wallpaper Platform",
    description:
      "Production-ready wallpaper website with AI modern art and digital art. Built with MongoDB, Cloudinary, and a dark modern UI.",
    tags: ["MongoDB", "Cloudinary", "Full Stack", "Dark UI"],
    link: "https://v8designs.onrender.com/",
    repo: "https://github.com/ParshantVardhan/v8-designs", // Assuming repo link
    cta: "Live Site",
    image: "/images/v8.png",
  },
  {
    title: "AI Text-to-Video Generator",
    subtitle: "Multilingual STEM Education Tool",
    description:
      "Converts natural language prompts into fully rendered educational videos using Manim, Groq API, and Murf API for AI voice dubbing.",
    tags: ["Groq API", "Manim", "Python", "Murf API", "AI"],
    link: "",
    repo: "https://github.com/Parshant95/PieScript", // Placeholder repo
    cta: "GitHub",
    image: "/images/piescript.png",
  },
  {
    title: "Project Cars",
    subtitle: "Modern Car Showcase Platform",
    description:
      "Responsive automotive showcase with Firebase real-time DB, Google Sign-In auth, and dynamic car model browsing.",
    tags: ["Firebase", "React", "Google Auth"],
    repo: "https://github.com/Parshant95/Project-Cars",
    link: "https://project-ca-rs-pv-8-igin-git-main-parshant95s-projects.vercel.app/", // Placeholder repo
    cta: "Live Site",
    image: "/images/image.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Selected Projects
            </h2>
            <p className="text-xl text-muted max-w-xl">
              A collection of products built with a focus on user experience,
              scalability, and performance.
            </p>
          </div>
          <a
            href="https://github.com/ParshantVardhan"
            target="_blank"
            className="group flex items-center gap-2 text-white hover:text-accent transition-colors font-medium text-lg border-b border-white/20 pb-1"
          >
            All Work{" "}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-white/5 bg-white/[0.03] backdrop-blur-sm rounded-3xl flex flex-col h-full hover:border-white/10 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden glow-border"
            >
              {/* Background Image if available */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
                </div>
              )}

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-accent font-medium">{project.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-muted font-bold uppercase tracking-widest border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted leading-relaxed mb-auto pb-10">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      className="px-6 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-accent transition-all flex items-center gap-2 rounded-xl"
                    >
                      {project.cta} <ExternalLink size={14} />
                    </a>
                  ) : (
                    <a
                      href={project.repo}
                      target="_blank"
                      className="px-6 py-3 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2 rounded-xl"
                    >
                      {project.cta} <Github size={14} />
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
