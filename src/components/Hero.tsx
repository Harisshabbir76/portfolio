'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import Link from 'next/link';

export default function Hero() {
  // Properly typed animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const, // Explicitly typed as const
        stiffness: 100,
        damping: 10
      }
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white overflow-hidden font-sans"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-lg md:text-xl text-cyan-400 mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Hello, I&apos;m
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
            variants={itemVariants}
          >
            Haris Shabbir
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-300 mt-4 mb-8"
            variants={itemVariants}
          >
            MERN Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            I build modern, scalable web applications with clean code and exceptional user experiences.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-6"
          variants={itemVariants}
        >
          <SocialLink href="https://github.com/Harisshabbir76">
            <FiGithub className="text-2xl" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/haris-shabbir-6600a9282/">
            <FiLinkedin className="text-2xl" />
          </SocialLink>
          <SocialLink href="https://x.com/realharri5?t=-2hgMruFsg8EFZi3jjISKQ&s=09">
            <FiTwitter className="text-2xl" />
          </SocialLink>
          <SocialLink href="mailto:05harisshabbir@gmail.com">
            <FiMail className="text-2xl" />
          </SocialLink>
        </motion.div>

        <motion.div 
          className="mt-16"
          variants={itemVariants}
        >
          <Link 
            href="#about" 
            className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 inline-block"
          >
            Explore My Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-cyan-400/30 opacity-70"
        animate={inView ? {
          y: [0, -20, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        } : {}}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-purple-400/30 opacity-70"
        animate={inView ? {
          y: [0, -15, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }
        } : {}}
      />
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, children }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-2xl p-3 hover:bg-cyan-500/10 rounded-full"
    whileHover={{ y: -3, scale: 1.1 }}
  >
    {children}
  </motion.a>
);