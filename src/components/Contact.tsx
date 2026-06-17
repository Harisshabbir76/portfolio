"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { profile, whatsappLink } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-surface border-t border-neon/[0.06]"
    >
      <div className="relative z-10 max-w-[680px] mx-auto text-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono-jb text-[11px] text-violet tracking-[0.2em] uppercase mb-4">
            get in touch
          </div>
          <h2 className="font-bold text-[36px] sm:text-[54px] tracking-[-0.05em] leading-[1] mb-4">
            Let&apos;s Build
            <br />
            <span className="bg-gradient-to-r from-neon to-violet bg-clip-text text-transparent">
              Something.
            </span>
          </h2>
          <p className="text-ink-dim text-[16px] mb-10 leading-relaxed">
            Open to full-time roles, freelance projects, and startup opportunities.
            Currently based in {profile.location}.
          </p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-gradient-to-r from-neon to-neon-dim text-bg font-bold text-base px-12 py-4 rounded-md tracking-wide hover:shadow-[0_16px_48px_rgba(0,255,136,0.18)] transition-shadow"
          >
            Chat on WhatsApp →
          </motion.a>

          <div className="flex justify-center gap-10 mt-8 font-mono-jb text-[13px] text-white flex-wrap">
            <span>{profile.email}</span>
            <span>{profile.whatsappDisplay}</span>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neon transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neon transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
