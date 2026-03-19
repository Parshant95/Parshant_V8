"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
            Let's Build <br /> Something
          </h2>
          <p className="text-xl text-muted max-w-md mb-12">
            Open to internships, freelance projects, and collaborations. Feel
            free to reach out if you have a question or just want to say hi.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:parshantvardhan63@gmail.com"
              className="flex items-center gap-6 group text-xl font-medium hover:text-white transition-colors text-muted"
            >
              <div className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <span>parshantvardhan63@gmail.com</span>
            </a>

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/Parshant95"
                target="_blank"
                className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all text-muted"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/parshant-vardhan-a75293259/?skipRedirect=true"
                target="_blank"
                className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all text-muted"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 border border-white/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <MessageSquare className="text-accent" />
            Send a Message
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all min-h-[150px]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-accent transition-all flex items-center justify-center gap-3 group active:scale-95"
          >
            Send Message{" "}
            <Send
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
