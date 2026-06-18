"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, stats, whatsappLink } from "@/lib/data";

const terminalLines = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "haris_shabbir — full-stack developer" },
  { type: "gap" },
  { type: "cmd", text: "cat stack.json" },
  { type: "json", text: '{' },
  { type: "json", text: '  "frontend": ["React","Next.js"],' },
  { type: "json", text: '  "backend": ["Node","Express","Django"],' },
  { type: "json", text: '  "database": ["MongoDB","MySQL","PostgreSQL"],' },
  { type: "json", text: '  "deploy": ["Git","Vercel","Render","Railway"]' },
  { type: "json", text: '}' },
  { type: "gap" },
  { type: "cmd", text: "ls clients/" },
  { type: "out", text: "zedify.store/  https://heirloom-two-lake.vercel.app/  zuhourphilosophy.ae/" },
];

function useTypedLines(lines: typeof terminalLines, active: boolean) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (visibleCount >= lines.length) return;
    const delay = lines[visibleCount]?.type === "gap" ? 120 : 220;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [visibleCount, active, lines]);

  return visibleCount;
}

export default function Hero() {
  const [started, setStarted] = useState(false);
  const visibleCount = useTypedLines(terminalLines, started);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center px-6 pt-12 pb-16"
    >
      <div className="relative z-10 max-w-[1140px] mx-auto w-full grid lg:grid-cols-[1fr_420px] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-neon/5 border border-neon/20 rounded px-4 py-1.5 font-mono-jb text-xs text-neon mb-8 tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse2" />
            available for full-time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans-sg font-bold leading-[1] tracking-[-0.06em] text-[42px] sm:text-[56px] lg:text-[68px] mb-6"
          >
            <span className="block text-ink">{profile.name}</span>
            <span className="block bg-gradient-to-r from-neon to-violet bg-clip-text text-transparent">
              Full-Stack Dev
            </span>
            <span className="block font-mono-jb font-light text-ink-faint text-[0.5em] tracking-normal mt-2">
              MERN · Next.js · Full-Stack
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[16px] text-ink-dim max-w-[460px] mb-10 leading-relaxed"
          >
            {profile.resumeBlurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon text-bg font-bold text-sm px-7 py-3 rounded hover:bg-neon-dim hover:shadow-[0_0_24px_rgba(0,255,136,0.25)] hover:-translate-y-0.5 transition-all tracking-wide"
            >
              View My Work
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-ink-muted border border-white/15 text-sm px-7 py-3 rounded hover:border-neon/40 hover:text-neon transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-3 gap-px bg-neon/[0.06] border border-neon/[0.06] rounded-lg overflow-hidden mt-14"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-bg text-center py-6">
                <span className="block font-mono-jb text-3xl font-bold text-neon tracking-tight">
                  {s.value}
                </span>
                <div className="text-[11px] text-ink-faint mt-1 tracking-widest uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block bg-surface border border-neon/[0.12] rounded-xl overflow-hidden shadow-[0_0_60px_rgba(0,255,136,0.04)]"
        >
          <div className="bg-elevated px-4 py-3 flex items-center gap-2 border-b border-neon/[0.08]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="font-mono-jb text-xs text-ink-faint ml-1.5">
              haris@portfolio ~ $
            </span>
          </div>
          <div className="p-7 font-mono-jb text-[13px] leading-[2.1] min-h-[280px]">
            {terminalLines.slice(0, visibleCount).map((line, i) => {
              if (line.type === "gap") return <div key={i} className="h-2" />;
              if (line.type === "cmd")
                return (
                  <div key={i} className="flex gap-2">
                    <span className="text-violet">~$</span>
                    <span className="text-ink">{line.text}</span>
                  </div>
                );
              if (line.type === "out")
                return (
                  <div key={i} className="text-neon">
                    {line.text}
                  </div>
                );
              return (
                <div key={i} className="text-ink-faint">
                  {line.text}
                </div>
              );
            })}
            {visibleCount >= terminalLines.length && (
              <div className="flex gap-2">
                <span className="text-violet">~$</span>
                <span className="inline-block w-[9px] h-[15px] bg-neon animate-blink -mb-[3px]" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
