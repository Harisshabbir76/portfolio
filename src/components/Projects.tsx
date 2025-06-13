// components/Projects.tsx
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
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
  SiMessenger
} from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce application with payment integration, user authentication, and admin dashboard.",
      technologies: [
        <SiNodedotjs key="node-ecom" />,
        <SiMongodb key="mongo-ecom" />,
        <SiExpress key="express-ecom" />
      ],
      demoUrl: "https://mern-e-commerce-brown.vercel.app/",
      codeUrl: "https://github.com/Harisshabbir76/MERN-e-commerce-",
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
      demoUrl: "https://hair-saloon-six.vercel.app/",
      codeUrl: "https://github.com/Harisshabbir76/hair-saloon",
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
      demoUrl: "#",
      codeUrl: "https://github.com/Harisshabbir76/MERN-Restaurant-",
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
      demoUrl: "#",
      codeUrl: "https://github.com/Harisshabbir76/MERN-job-portal",
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
      demoUrl: "#",
      codeUrl: "https://github.com/Harisshabbir76/Movie-Review-Platform-IMDb-like-",
      icon: <SiThemoviedatabase className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Real-time Chat App",
      description: "Instant messaging application with private and group chats, read receipts, and file sharing.",
      technologies: [
        <SiNodedotjs key="node-chat" />,
        <SiMongodb key="mongo-chat" />,
        <SiExpress key="express-chat" />
      ],
      demoUrl: "#",
      codeUrl: "https://github.com/Harisshabbir76/Mern-Chat-App",
      icon: <SiMessenger className="text-5xl text-blue-400 mb-4" />
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white overflow-hidden font-sans">
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Featured Projects 🚀
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Explore my recent MERN stack projects — crafted with clean code, scalable architecture, and modern design principles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {projects.map((project, index) => (
          <div key={index} className="backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex flex-col justify-between">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap justify-center items-center gap-3">
                {project.technologies.map((tech, i) => (
                  <span key={`tech-${index}-${i}`} className="text-2xl text-white hover:text-cyan-300 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <a 
                href={project.demoUrl} 
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 rounded-lg text-sm font-semibold shadow-lg transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink /> Live Demo
              </a>
              <a 
                href={project.codeUrl} 
                className="flex items-center gap-2 px-5 py-3 bg-black/40 border border-white/20 hover:bg-black/60 rounded-lg text-sm font-semibold transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
