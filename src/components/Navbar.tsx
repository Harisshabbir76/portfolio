// components/Navbar.tsx
"use client"; // Add this directive at the top

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo/Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Haris Portfolio
            </Link>
          </div>

          {/* Right side - Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                href="#home" 
                className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                About Me
              </Link>
              <Link 
                href="#skills" 
                className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Skills
              </Link>
              <Link 
                href="#projects" 
                className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95">
          <Link 
            href="#home" 
            className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link 
            href="#skills" 
            className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link 
            href="#projects" 
            className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}