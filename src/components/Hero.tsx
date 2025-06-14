"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import profileImage from '../images/my.jpg';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  // Fixed particle positions to prevent hydration mismatch
  const particlePositions = [
    { top: '10%', left: '20%' },
    { top: '25%', left: '80%' },
    { top: '40%', left: '15%' },
    { top: '55%', left: '70%' },
    { top: '70%', left: '30%' },
    { top: '85%', left: '60%' },
    { top: '30%', left: '45%' },
    { top: '50%', left: '90%' },
    { top: '75%', left: '10%' },
    { top: '15%', left: '65%' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const techStack = [
    { icon: <SiMongodb className="w-5 h-5 text-green-400" />, name: "MongoDB" },
    { icon: <SiExpress className="w-5 h-5 text-blue-300" />, name: "Express" },
    { icon: <SiReact className="w-5 h-5 text-cyan-300" />, name: "React" },
    { icon: <SiNodedotjs className="w-5 h-5 text-green-500" />, name: "Node.js" },
    { icon: <SiNextdotjs className="w-5 h-5 text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="w-5 h-5 text-blue-500" />, name: "TypeScript" }
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white p-6 overflow-hidden font-sans"
    >
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>

        {/* Fixed position particles with deterministic animation */}
        {particlePositions.map((pos, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            initial={{ y: 0 }}
            animate={inView ? {
              y: [0, -40, 0],
              transition: {
                duration: 10 + (i % 3), // Deterministic based on index
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3 // Deterministic delay
              }
            } : {}}
            style={{
              top: pos.top,
              left: pos.left
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left space-y-8"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
            variants={itemVariants}
          >
            Haris Shabbir
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-cyan-400"
            variants={itemVariants}
          >
            MERN Stack Developer <motion.span 
              animate={inView ? { 
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              } : {}}
            >🚀</motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            I craft full-stack web apps using modern technologies, building scalable, clean, and performant solutions that solve real-world problems.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Link 
              href="/path-to-cv.pdf" 
              download 
              className="px-6 py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 transition shadow-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              <span className="relative z-10">Download CV</span>
            </Link>
            <Link 
              href="#projects" 
              className="px-6 py-3 rounded-lg font-semibold text-lg bg-black/40 border border-white/20 hover:bg-black/60 transition shadow-lg"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start mt-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5
                }
              }
            }}
          >
            {techStack.map((tech, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-2 px-5 py-3 bg-white/5 rounded-full border border-white/20 shadow-md hover:shadow-cyan-400/30 transition"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150
                    }
                  }
                }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {tech.icon}
                <span className="text-white font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Avatar */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-xl opacity-30"></div>
            <motion.div 
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-xl transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={profileImage}
                alt="Haris Shabbir"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}