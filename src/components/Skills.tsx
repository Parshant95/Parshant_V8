"use client";

import React from "react";
import { motion } from "framer-motion";

type Tier = "Expert" | "Familiar" | "Learning";

interface Skill {
  name: string;
  usedInProject?: boolean;
}

interface SkillTierGroup {
  tier: Tier;
  label: string;
  description: string;
  color: string;
  dotColor: string;
  skills: Skill[];
}

const skillTiers: SkillTierGroup[] = [
  {
    tier: "Expert",
    label: "Expert",
    description: "Daily drivers in production work",
    color: "text-white",
    dotColor: "bg-white",
    skills: [
      { name: "Next.js", usedInProject: true },
      { name: "React", usedInProject: true },
      { name: "TypeScript", usedInProject: true },
      { name: "Tailwind CSS", usedInProject: true },
      { name: "MongoDB", usedInProject: true },
      { name: "Firebase", usedInProject: true },
      { name: "Cloudinary", usedInProject: true },
      { name: "Node.js", usedInProject: true },
      { name: "JavaScript" },
      { name: "C++" },
    ],
  },
  {
    tier: "Familiar",
    label: "Familiar",
    description: "Comfortable, used in real projects",
    color: "text-white/70",
    dotColor: "bg-white/60",
    skills: [
      { name: "Express", usedInProject: true },
      { name: "Python", usedInProject: true },
      { name: "REST API Design", usedInProject: true },
      { name: "Vercel", usedInProject: true },
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "SQL" },
      { name: "Azure" },
      { name: "Supabase" },
    ],
  },
  {
    tier: "Learning",
    label: "Learning",
    description: "Actively exploring & experimenting",
    color: "text-emerald-400",
    dotColor: "bg-emerald-400",
    skills: [
      { name: "AI/ML Pipelines" },
      { name: "Docker" },
      { name: "GraphQL" },
      { name: "Prisma" },
      { name: "Three.js" },
    ],
  },
];

const tierBadgeStyle: Record<Tier, string> = {
  Expert:
    "border-white/20 bg-white/10 text-white",
  Familiar:
    "border-white/10 bg-white/5 text-white/60",
  Learning:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-white/50 text-lg max-w-lg">
            Grouped by proficiency — dots indicate skills used in shipped projects.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillTiers.map((group, gi) => (
            <motion.div
              key={group.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-3xl"
            >
              {/* Tier header */}
              <div className="flex items-start gap-4 mb-6">
                <span
                  className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest ${tierBadgeStyle[group.tier]}`}
                >
                  {group.label}
                </span>
                <p className="text-white/40 text-sm mt-0.5">{group.description}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] text-sm font-semibold border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.08] transition-all cursor-default ${group.color}`}
                  >
                    {skill.usedInProject && (
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${group.dotColor}`}
                        title="Used in a real project"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 flex items-center gap-2 text-white/30 text-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
          <span>Dot = used in a shipped project</span>
        </motion.div>
      </div>
    </section>
  );
}
