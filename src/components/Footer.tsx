// components/Footer.tsx
import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiMapPin } from 'react-icons/fi'; // Added FiMapPin here
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Haris Portfolio
            </h3>
            <p className="text-gray-400">
              Full-stack MERN developer creating modern web applications with clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Harisshabbir76" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/haris-shabbir-6600a9282/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/realharri5?t=-2hgMruFsg8EFZi3jjISKQ&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="mailto:05harisshabbir@gmail.com" className="text-gray-400 hover:text-blue-300 transition-colors">
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-300 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <FiMail className="mt-1 flex-shrink-0" />
                <a href="mailto:05harisshabbir@gmail.com" className="hover:text-blue-300 transition-colors">
                  05harisshabbir@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>Available for remote work</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Stay Updated</h4>
            <p className="text-gray-400">Subscribe to my newsletter for updates:</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Haris Shabbir. All rights reserved.</p>
          <p className="mt-1">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}