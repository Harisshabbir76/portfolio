"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="relative z-10 max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono-jb text-[11px] text-violet tracking-[0.2em] uppercase mb-2">
            expertise
          </div>
          <h2 className="font-bold text-[28px] sm:text-[40px] tracking-[-0.04em] mb-3">
            Tech Stack
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon to-violet rounded mb-12" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 font-mono-jb"
        >
          {skills.map((s) => (
            <motion.div
              key={s}
              variants={item}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -3, borderColor: "rgba(0,255,136,0.3)" }}
              className="bg-surface border border-white/5 rounded px-4 py-3 text-[13px] text-ink-muted flex items-center gap-2.5 cursor-default hover:text-ink/80 hover:bg-neon/[0.02] transition-colors"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-neon flex-shrink-0" />
              {s}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
