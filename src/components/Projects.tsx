// components/Projects.tsx
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaCut } from 'react-icons/fa'; // Correct import for scissors icon
import { 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiSocketdotio, 
  SiChartdotjs,
  SiShopify,
  SiTrello,
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
      technologies: [<SiNodedotjs />, <SiMongodb />, <SiExpress />],
      demoUrl: "https://mern-e-commerce-brown.vercel.app/",
      codeUrl: "https://github.com/Harisshabbir76/MERN-e-commerce-",
      icon: <SiShopify className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Hair Salon Booking System",
      description: "Online booking platform for hair salons with appointment scheduling, stylist selection, and service management.",
      technologies: [<SiNodedotjs />, <SiMongodb />, <SiExpress />],
      demoUrl: "https://hair-saloon-six.vercel.app/",
      codeUrl: "https://github.com/Harisshabbir76/hair-saloon",
      icon: <FaCut className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Restaurant Order System",
      description: "Online food ordering platform with menu management, order tracking, and payment processing.",
      technologies: [<SiExpress />, <SiMongodb />, <SiChartdotjs />],
      demoUrl: "#",
      codeUrl: "https://github.com/Harisshabbir76/MERN-Restaurant-",
      icon: <SiFoodpanda className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Job Portal",
      description: "Professional job search platform with resume uploads, company profiles, and application tracking.",
      technologies: [<SiNodedotjs />, <SiMongodb />, <SiExpress />],
      demoUrl: "#",
      codeUrl: "https://github.com/Harisshabbir76/MERN-job-portal",
      icon: <SiIndeed className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Movie Review Platform",
      description: "Community for film enthusiasts to rate, review, and discover movies with personalized recommendations.",
      technologies: [<SiNodedotjs />, <SiMongodb />, <SiExpress />],
      demoUrl: "#",
      codeUrl: "https://github.com/Harisshabbir76/Movie-Review-Platform-IMDb-like-",
      icon: <SiThemoviedatabase className="text-5xl text-blue-400 mb-4" />
    },
    {
      title: "Real-time Chat App",
      description: "Instant messaging application with private and group chats, read receipts, and file sharing.",
      technologies: [<SiNodedotjs />, <SiMongodb />, <SiExpress />],
      demoUrl: "#",
      codeUrl: "https://github.com/Harisshabbir76/Mern-Chat-App",
      icon: <SiMessenger className="text-5xl text-blue-400 mb-4" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-gray-900 to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: 'linear-gradient(to right, #1e40af 1px, transparent 1px), linear-gradient(to bottom, #1e40af 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Featured Projects
        </h2>
        <p className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Here are some of the projects I've worked on to showcase my MERN stack development skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-sm text-gray-400">Tech:</span>
                  <div className="flex gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-lg text-gray-300 hover:text-blue-300 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 justify-center">
                  <a 
                    href={project.demoUrl} 
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}