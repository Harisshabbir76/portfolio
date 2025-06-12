// components/Hero.js
import Link from 'next/link';
import Image from 'next/image';
import profileImage from '../images/my.jpg';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function Hero() {
  // Tech stack data with custom background colors
  const techStack = [
    { icon: <SiMongodb className="w-5 h-5" />, name: "MongoDB", bg: "bg-green-500/20" },
    { icon: <SiExpress className="w-5 h-5" />, name: "Express", bg: "bg-gray-200/20" },
    { icon: <SiReact className="w-5 h-5" />, name: "React", bg: "bg-blue-400/20" },
    { icon: <SiNodedotjs className="w-5 h-5" />, name: "Node.js", bg: "bg-green-600/20" },
    { icon: <SiNextdotjs className="w-5 h-5" />, name: "Next.js", bg: "bg-white/20" },
    { icon: <SiTypescript className="w-5 h-5" />, name: "TypeScript", bg: "bg-blue-600/20" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-gray-900 to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: 'linear-gradient(to right, #1e40af 1px, transparent 1px), linear-gradient(to bottom, #1e40af 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 transform transition-all duration-1000 ease-out animate-slide-in-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Haris Shabbir
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300">
            MERN Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Passionate about creating full-stack web applications using MongoDB, Express.js, React, and Node.js. Ready to bring innovative ideas to life through clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/path-to-cv.pdf" 
              download
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Download CV
            </Link>
            
            <Link 
              href="#projects" 
              className="bg-transparent border-2 border-blue-400 hover:bg-blue-900/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Link>
          </div>
          
          {/* Tech stack with colored circular backgrounds */}
          <div className="tech-stack flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-icon group relative">
                <div className={`w-10 h-10 rounded-full ${tech.bg} flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-gray-700/50`}>
                  {tech.icon}
                </div>
                <span className="tooltip group-hover:opacity-100">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image section */}
        <div className="md:w-1/2 flex justify-center transform transition-all duration-1000 ease-out animate-slide-in-right">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-xl opacity-30 animate-pulse"></div>
            <Image
              src={profileImage}
              alt="Haris Shabbir"
              fill
              className="rounded-full object-cover border-4 border-blue-400/30 shadow-2xl relative z-10 hover:border-blue-400 transition-all duration-500 hover:scale-105"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}