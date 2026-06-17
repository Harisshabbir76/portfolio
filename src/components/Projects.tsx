"use client";

import { motion } from "framer-motion";
import { profile, projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="work"
      className="relative py-24 px-6 bg-surface2 border-t border-white/[0.03]"
    >
      <div className="relative z-10 max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono-jb text-[11px] text-violet tracking-[0.2em] uppercase mb-2">
            selected work
          </div>
          <h2 className="font-bold text-[28px] sm:text-[40px] tracking-[-0.04em] mb-3">
            Projects
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon to-violet rounded mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-surface border border-white/5 rounded-xl p-7 flex flex-col overflow-hidden hover:border-neon/15 transition-colors hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon to-violet scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <div className="flex justify-between items-start mb-3">
                <span className="font-mono-jb text-[11px] text-ink-ghost tracking-wide">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-violet bg-violet/[0.08] border border-violet/[0.18] px-2.5 py-1 rounded tracking-wide uppercase">
                  {p.client}
                </span>
              </div>

              <h3 className="text-[19px] font-semibold text-ink mb-2 tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="text-[14px] text-ink-dim leading-relaxed mb-5 flex-grow">
                {p.description}
              </p>

              <div className="flex gap-2 flex-wrap mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] text-violet bg-violet/[0.06] border border-violet/[0.15] px-2.5 py-1 rounded tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="font-mono-jb text-[13px] text-neon border-t border-white/5 pt-4 mt-auto inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                view project <span aria-hidden="true">→</span>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-ink-dim text-[14px] mb-5">
            28+ more projects, experiments, and contributions live on GitHub.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono-jb text-sm text-neon border border-neon/30 rounded px-7 py-3 hover:bg-neon/5 hover:border-neon transition-colors tracking-wide"
          >
            See all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
