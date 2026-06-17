"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/data";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#work", label: "work" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 px-6 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-neon/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1140px] mx-auto h-16 flex items-center justify-between">
        <a href="#" className="font-mono-jb text-[15px] tracking-widest text-neon">
          &lt;<span className="text-violet">HS</span> /&gt;
        </a>
        <ul className="hidden md:flex gap-10 font-mono-jb text-[13px] tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink-muted hover:text-neon transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block font-mono-jb text-[13px] tracking-wide text-neon border border-neon/30 rounded px-5 py-2 hover:bg-neon/5 hover:border-neon transition-colors"
        >
          hire-me
        </a>
      </div>
    </motion.nav>
  );
}
