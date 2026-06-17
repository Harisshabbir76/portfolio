"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="relative py-24 px-6 bg-surface2 border-t border-white/[0.03]">
      <div className="relative z-10 max-w-[1140px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono-jb text-[11px] text-violet tracking-[0.2em] uppercase mb-2">
            about me
          </div>
          <h2 className="font-bold text-[28px] sm:text-[40px] tracking-[-0.04em] mb-3">
            Background
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon to-violet rounded mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[15px] text-ink-muted leading-[1.9] mb-5">
              I&apos;m a <b className="text-ink/80 font-medium">Full-Stack MERN Developer</b> based
              in Karachi, currently completing my Bachelor&apos;s in Computer Science at Iqra
              University (expected 2026). I specialize in building secure, scalable web
              applications — from the frontend down to deployment.
            </p>
            <p className="text-[15px] text-ink-muted leading-[1.9] mb-5">
              My work spans <b className="text-ink/80 font-medium">e-commerce platforms</b>,{" "}
              <b className="text-ink/80 font-medium">admin dashboards</b>,{" "}
              <b className="text-ink/80 font-medium">LMS systems</b>, and{" "}
              <b className="text-ink/80 font-medium">AI-integrated apps</b>, shipped to
              production with Git version control on Vercel, Render, and Railway. I&apos;ve
              delivered live sites for clients in both Pakistan and the UAE.
            </p>
            <p className="text-[15px] text-ink-muted leading-[1.9]">
              Long-term, I&apos;m working toward running my own software and digital marketing
              company — every project is a step in that direction.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {education.map((e, i) => (
              <motion.div
                key={e.school}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="bg-surface border border-white/5 rounded-lg p-6 hover:border-neon/15 transition-colors"
              >
                <div className="text-[14px] text-ink font-medium mb-1">{e.school}</div>
                <div className="text-[13px] text-ink-dim">{e.degree}</div>
                <div className="font-mono-jb text-xs text-neon mt-2">{e.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
