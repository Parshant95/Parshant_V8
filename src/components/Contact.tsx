"use client";

import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate async submission (replace with your actual endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1600));

    setStatus("success");
    setForm({ name: "", email: "", message: "" });

    // Reset after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-all disabled:opacity-50";

  return (
    <section id="contact" className="py-24 px-6 md:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
            Let&apos;s Build <br /> Something
          </h2>
          <p className="text-xl text-white/50 max-w-md mb-12">
            Open to internships, freelance projects, and collaborations. Feel
            free to reach out if you have a question or just want to say hi.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:parshantvardhan63@gmail.com"
              className="flex items-center gap-6 group text-xl font-medium hover:text-white transition-colors text-white/50"
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
                className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white/50"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/parshant-vardhan-a75293259/?skipRedirect=true"
                target="_blank"
                className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white/50"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="p-8 md:p-12 border border-white/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <MessageSquare className="text-white/60" />
            Send a Message
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                required
                disabled={status === "loading" || status === "success"}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                required
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} min-h-[150px] resize-none`}
              required
              disabled={status === "loading" || status === "success"}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="relative w-full bg-white text-black font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-white/90 transition-all flex items-center justify-center gap-3 group active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </motion.span>
              )}
              {status === "loading" && (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <Loader2 size={18} className="animate-spin" />
                  Sending…
                </motion.span>
              )}
              {status === "success" && (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 text-emerald-700"
                >
                  <CheckCircle size={18} />
                  Message Sent!
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Success confirmation */}
          <AnimatePresence>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center text-emerald-400 text-sm font-medium"
              >
                Thanks! I&apos;ll get back to you within 24 hours. 🚀
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
