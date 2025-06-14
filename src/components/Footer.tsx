'use client'; // Add this at the top to make it a Client Component

import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white py-20 overflow-hidden font-sans border-t border-white/10">

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_rgba(0,255,255,0.2),_transparent_70%)] opacity-20 pulse-slow-animation"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_rgba(0,255,255,0.1),_transparent_70%)] opacity-10 spin-slow-animation"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Haris Shabbir
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Full-stack MERN developer crafting modern, scalable and efficient web applications with clean code and elegant UI.
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
          <h4 className="text-xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-400 text-lg">
            <FooterLink href="#home" label="Home" />
            <FooterLink href="#about" label="About" />
            <FooterLink href="#skills" label="Skills" />
            <FooterLink href="#projects" label="Projects" />
            <FooterLink href="#contact" label="Contact" />
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
            Contact Info
          </h4>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li className="flex gap-3 items-start">
              <div className="p-2 bg-cyan-500/10 rounded-full text-cyan-300">
                <FiMail className="text-xl" />
              </div>
              <a href="mailto:05harisshabbir@gmail.com" className="hover:text-cyan-300 transition">
                05harisshabbir@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <div className="p-2 bg-cyan-500/10 rounded-full text-cyan-300">
                <FiMapPin className="text-xl" />
              </div>
              <span>Available for remote work</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Stay Updated
          </h4>
          <p className="text-gray-400 text-lg leading-relaxed">
            Subscribe to get notified about my latest projects and updates.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-5 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="px-5 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="relative z-10 text-center text-gray-500 text-sm mt-16 border-t border-white/10 pt-8 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Haris Shabbir. All rights reserved.</p>
        <p className="mt-2">Built with <span className="text-cyan-400">Next.js</span> & <span className="text-cyan-400">Tailwind CSS</span> 🚀</p>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <Link href={href} className="hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
      <span className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
      {label}
    </Link>
  </li>
);

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

const SocialIcon = ({ href, children }: SocialIconProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-2xl p-2 hover:bg-cyan-500/10 rounded-full"
  >
    {children}
  </a>
);