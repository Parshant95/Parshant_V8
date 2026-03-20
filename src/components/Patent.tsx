"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Cpu, HardHat, Shield, ScanSearch } from "lucide-react";

const patents = [
  {
    id: 1,
    status: "Published Patent",
    title: "Dual Piezoelectric Energy Harvesting Key",
    appNo: "202411070768",
    field: "Electronics",
    description:
      "A dual energy harvesting keyboard that converts key presses into electrical energy with 99% accuracy.",
    icon: Cpu,
  },
  {
    id: 2,
    status: "Published Patent",
    title: "Smart Automated Helmet with Advanced Features",
    appNo: "202511016177",
    field: "Textile",
    filedDate: "25/02/2025",
    publishedDate: "14/03/2025",
    description:
      "A next-gen safety helmet featuring IMU sensors, actuators, and an automatic interlocking system that deploys protective mechanisms upon fall detection — designed for motorcyclists, construction workers, and athletes.",
    icon: HardHat,
  },
  {
    id: 3,
    status: "Published Patent",
    title: "Smart Helmet with Advanced Safety Mechanisms",
    appNo: "202511008694",
    field: "Textile",
    filedDate: "03/02/2025",
    publishedDate: "21/02/2025",
    description:
      "Introduces IMU sensors, actuators, and an automatic interlocking system to enhance safety by deploying protective mechanisms upon fall detection — setting new standards in accident prevention with advanced automation.",
    icon: Shield,
  },
  {
    id: 4,
    status: "Published Patent",
    title:
      "Object Detection and Adaptive Colour Correction in Digital Images and Method Thereof",
    appNo: "202411095300",
    field: "Computer Science",
    filedDate: "04/12/2024",
    publishedDate: "20/12/2024",
    description:
      "An innovative method for object detection combined with adaptive colour correction in digital images, pushing boundaries in the field of digital image processing.",
    icon: ScanSearch,
  },
];

export function Patent() {
  return (
    <section className="py-24 px-6 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-accent mb-4 opacity-70">
            Intellectual Property
          </h3>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Patents
          </h2>
        </motion.div>

        {/* Patents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patents.map((patent, index) => {
            const Icon = patent.icon;
            return (
              <motion.div
                key={patent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-10 border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-[2.5rem] overflow-hidden group glow-border animate-float-subtle"
              >
                {/* Decorative Background Icon */}
                <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Award size={200} />
                </div>

                <div className="relative z-10 flex flex-col gap-6">
                  {/* Icon + Status */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.25em] text-accent opacity-70">
                      {patent.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-snug">
                    {patent.title}
                  </h2>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                    <div>
                      <span className="font-bold text-white mr-1">App No:</span>
                      <span className="font-mono">{patent.appNo}</span>
                    </div>
                    <div>
                      <span className="font-bold text-white mr-1">Field:</span>
                      <span>{patent.field}</span>
                    </div>
                    {patent.filedDate && (
                      <div>
                        <span className="font-bold text-white mr-1">
                          Filed:
                        </span>
                        <span>{patent.filedDate}</span>
                      </div>
                    )}
                    {patent.publishedDate && (
                      <div>
                        <span className="font-bold text-white mr-1">
                          Published:
                        </span>
                        <span>{patent.publishedDate}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted leading-relaxed text-sm md:text-base">
                    {patent.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
