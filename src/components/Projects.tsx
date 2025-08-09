"use client";

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub } from 'react-icons/fi';
import { FaCut } from 'react-icons/fa';
import { 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiChartdotjs,
  SiShopify,
  SiFoodpanda,
  SiIndeed,
  SiThemoviedatabase,
  SiOpenai
} from 'react-icons/si';

export default function Projects() {
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

  const projects = [
    {
      title: "AI Weather Forecast",
      description: "Intelligent weather application using AI to provide hyper-local forecasts and predictive insights.",
      technologies: [
        <SiNodedotjs key="node-weather" />,
        <SiExpress key="express-weather" />,
        <SiOpenai key="ai-weather" />
      ],
      codeUrl: "https://github.com/Harisshabbir76/weather-app",
      liveUrl: "https://weather-app-inky-one-98.vercel.app/",
      icon: <SiOpenai className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce application with payment integration, user authentication, and admin dashboard.",
      technologies: [
        <SiNodedotjs key="node-ecom" />,
        <SiMongodb key="mongo-ecom" />,
        <SiExpress key="express-ecom" />
      ],
      codeUrl: "https://github.com/Harisshabbir76/MERN-e-commerce-",
      liveUrl: "https://mern-e-commerce-brown.vercel.app/",
      icon: <SiShopify className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Hair Salon Booking System",
      description: "Online booking platform for hair salons with appointment scheduling, stylist selection, and service management.",
      technologies: [
        <SiNodedotjs key="node-hair" />,
        <SiMongodb key="mongo-hair" />,
        <SiExpress key="express-hair" />
      ],
      codeUrl: "https://github.com/Harisshabbir76/hair-saloon",
      liveUrl: "https://portfolio-j34u.vercel.app/#projects",
      icon: <FaCut className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Restaurant Order System",
      description: "Online food ordering platform with menu management, order tracking, and payment processing.",
      technologies: [
        <SiExpress key="express-rest" />,
        <SiMongodb key="mongo-rest" />,
        <SiChartdotjs key="chart-rest" />
      ],
      codeUrl: "https://github.com/Harisshabbir76/MERN-Restaurant-",
      liveUrl: "https://portfolio-j34u.vercel.app/#projects",
      icon: <SiFoodpanda className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Job Portal",
      description: "Professional job search platform with resume uploads, company profiles, and application tracking.",
      technologies: [
        <SiNodedotjs key="node-job" />,
        <SiMongodb key="mongo-job" />,
        <SiExpress key="express-job" />
      ],
      codeUrl: "https://github.com/Harisshabbir76/MERN-job-portal",
      liveUrl: "https://mern-job-portal-three.vercel.app/",
      icon: <SiIndeed className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Movie Review Platform",
      description: "Community for film enthusiasts to rate, review, and discover movies with personalized recommendations.",
      technologies: [
        <SiNodedotjs key="node-movie" />,
        <SiMongodb key="mongo-movie" />,
        <SiExpress key="express-movie" />
      ],
      codeUrl: "https://github.com/Harisshabbir76/Movie-Review-Platform-IMDb-like-",
      liveUrl: "https://portfolio-j34u.vercel.app/#projects",
      icon: <SiThemoviedatabase className="text-5xl text-blue-400 mb-4" />
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white overflow-hidden font-sans"
    >
      {/* Animated Background Particles */}
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
            Featured Projects <motion.span 
              animate={inView ? { 
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              } : {}}
            >🚀</motion.span>
          </h2>
          <motion.p 
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Explore my recent MERN stack projects — crafted with clean code, scalable architecture, and modern design principles.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.a 
              key={index}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
              </div>

              <div className="mb-6">
                <motion.div 
                  className="flex flex-wrap justify-center items-center gap-3"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.2 * index
                      }
                    }
                  }}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={`tech-${index}-${i}`}
                      className="text-2xl text-white hover:text-cyan-300 transition"
                      variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: { 
                          scale: 1, 
                          opacity: 1,
                          transition: {
                            type: "spring",
                            stiffness: 200
                          }
                        }
                      }}
                      whileHover={{ y: -3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <a 
                  href={project.codeUrl} 
                  className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 rounded-lg text-sm font-semibold shadow-lg transition relative overflow-hidden group"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <FiGithub /> View Code
                  </span>
                </a>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}