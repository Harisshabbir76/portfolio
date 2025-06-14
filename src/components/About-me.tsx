'use client';

import React from 'react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import avatarImage from '../images/avatar.png';

export default function About() {
  // Animation variants with proper typing
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
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      } as const // Add const assertion
    }
  };

  // Intersection Observer hook
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white overflow-hidden font-sans"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Title Section */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me 💻
          </h2>
          <motion.p 
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Meet the mind behind the code — passionate MERN developer, creative problem solver and tech enthusiast.
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
          {/* Avatar Section */}
          <motion.div 
            className="w-72 h-72 md:w-96 md:h-96 relative flex-shrink-0"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-xl opacity-30"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-xl transition-all duration-500">
              <Image
                src={avatarImage}
                alt="Portrait of Haris Shabbir"
                fill
                className="object-contain"
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div 
            className="max-w-2xl text-left space-y-8"
            variants={itemVariants}
          >
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Hello! I&apos;m <span className="font-bold text-cyan-400">Haris Shabbir</span>, a passionate MERN Stack Developer constantly pushing boundaries in full-stack development. 💡
            </motion.p>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              I specialize in building scalable, modern, and efficient web applications using <span className="font-bold text-cyan-400">MongoDB</span>, <span className="font-bold text-cyan-400">Express.js</span>, <span className="font-bold text-cyan-400">React</span>, and <span className="font-bold text-cyan-400">Node.js</span>. I love clean code, elegant UI, and solving real-world problems with technology.
            </motion.p>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              My journey is fueled by curiosity, creativity, and continuous learning. 🚀
            </motion.p>

            {/* Tech Stack */}
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
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
              <TechBadge icon={<SiMongodb className="text-green-400 text-2xl" />} label="MongoDB" />
              <TechBadge icon={<SiExpress className="text-blue-300 text-2xl" />} label="Express.js" />
              <TechBadge icon={<SiReact className="text-cyan-300 text-2xl" />} label="React" />
              <TechBadge icon={<SiNodedotjs className="text-green-500 text-2xl" />} label="Node.js" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating tech elements */}
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

// Tech Badge Reusable Component with proper types
interface TechBadgeProps {
  icon: React.ReactNode;
  label: string;
}

const TechBadge = ({ icon, label }: TechBadgeProps) => (
  <motion.div 
    className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-full border border-white/20 shadow-md hover:shadow-cyan-400/30 transition"
    variants={{
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 150
        } as const
      }
    }}
    whileHover={{ y: -3, scale: 1.05 }}
  >
    {icon}
    <span className="text-white font-medium">{label}</span>
  </motion.div>
);