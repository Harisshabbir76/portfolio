// components/About.tsx
import React from 'react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import Image from 'next/image';
import avatarImage from '../images/avatar.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements matching Hero section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-gray-900 to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: 'linear-gradient(to right, #1e40af 1px, transparent 1px), linear-gradient(to bottom, #1e40af 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar section */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-xl opacity-40"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl hover:border-blue-400 transition-all duration-500 hover:scale-105">
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
            </div>
          </div>

          {/* Text content */}
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              Hello! I&apos;m <span className="font-bold text-blue-300">Haris Shabbir</span>, a passionate and dedicated MERN stack developer who recently embarked on the exciting journey of full-stack web development.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              As a fresh developer, I bring enthusiasm, modern coding practices, and a strong foundation in <span className="font-bold text-blue-300">MongoDB</span>, <span className="font-bold text-blue-300">Express.js</span>, <span className="font-bold text-blue-300">React</span>, and <span className="font-bold text-blue-300">Node.js</span>. I&apos;m constantly learning and staying updated with the latest technologies and best practices in web development.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              My goal is to create efficient, scalable, and user-friendly web applications that solve real world problems. I believe in writing clean, maintainable code and following industry standards.
            </p>

            {/* Tech stack indicators */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 hover:bg-gray-800/70 transition-colors">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <SiMongodb className="text-green-500 text-lg" />
                <span>MongoDB</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 hover:bg-gray-800/70 transition-colors">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <SiExpress className="text-blue-300 text-lg" />
                <span>Express</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 hover:bg-gray-800/70 transition-colors">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <SiReact className="text-blue-400 text-lg" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 hover:bg-gray-800/70 transition-colors">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <SiNodedotjs className="text-green-600 text-lg" />
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}