'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiTypescript,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiMysql,
  SiDocker
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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
        damping: 10
      }
    }
  };

  const skills = [
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-blue-300 text-3xl" /> },
    { name: "React", icon: <SiReact className="text-cyan-300 text-3xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500 text-3xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
    { name: "Git", icon: <SiGit className="text-orange-400 text-3xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-300 text-3xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-3xl" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500 text-3xl" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400 text-3xl" /> }
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white overflow-hidden font-sans"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>
        
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
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            My Technical Skills <motion.span 
              animate={inView ? { 
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              } : {}}
            >💻</motion.span>
          </h2>
          <motion.p 
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Here&apos;s my ever-growing stack of tools & technologies I build with.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 relative z-10"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex flex-col items-center text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 h-3 rounded-full w-full"
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.1 * index, duration: 1, type: "spring" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center relative z-10"
          variants={itemVariants}
        >
          <p className="text-gray-400 italic">Always learning, always evolving <motion.span
            animate={inView ? { 
              y: [0, -5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            } : {}}
          >🚀</motion.span></p>
        </motion.div>
      </motion.div>
    </section>
  );
}