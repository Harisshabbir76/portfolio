import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white py-20 overflow-hidden font-sans border-t border-white/10">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Haris Portfolio
          </h3>
          <p className="text-gray-400 text-lg">
            Full-stack MERN developer crafting modern, scalable and efficient web applications.
          </p>
          <div className="flex space-x-4">
            <SocialIcon href="https://github.com/Harisshabbir76"><FiGithub /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/haris-shabbir-6600a9282/"><FiLinkedin /></SocialIcon>
            <SocialIcon href="https://x.com/realharri5?t=-2hgMruFsg8EFZi3jjISKQ&s=09"><FiTwitter /></SocialIcon>
            <SocialIcon href="mailto:05harisshabbir@gmail.com"><FiMail /></SocialIcon>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-lg">
            <FooterLink href="#home" label="Home" />
            <FooterLink href="#about" label="About Me" />
            <FooterLink href="#skills" label="Skills" />
            <FooterLink href="#projects" label="Projects" />
            <FooterLink href="#contact" label="Contact" />
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white">Contact Info</h4>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li className="flex gap-3 items-start">
              <FiMail className="mt-1 text-xl" />
              <a href="mailto:05harisshabbir@gmail.com" className="hover:text-cyan-300 transition">
                05harisshabbir@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <FiMapPin className="mt-1 text-xl" />
              <span>Available for remote work</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
          <p className="text-gray-400 text-lg">Subscribe for latest updates:</p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 text-white"
              required
            />
            <button
              type="submit"
              className="px-4 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="relative z-10 text-center text-gray-500 text-sm mt-16 border-t border-white/10 pt-8">
        <p>© {new Date().getFullYear()} Haris Shabbir. All rights reserved.</p>
        <p className="mt-1">Built with Next.js & Tailwind CSS 🚀</p>
      </div>
    </footer>
  );
}

// Footer Link Component
const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link href={href} className="hover:text-cyan-300 transition">{label}</Link>
  </li>
);

// Social Icon Component
const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition text-2xl">
    {children}
  </a>
);
