// components/About.tsx
import React from 'react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import Image from 'next/image';
import avatarImage from '../images/avatar.png';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white overflow-hidden font-sans">
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          About Me 💻
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Meet the mind behind the code — passionate MERN developer, creative problem solver and tech enthusiast.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">

        {/* Avatar Section */}
        <div className="w-72 h-72 md:w-96 md:h-96 relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-xl opacity-30"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-xl hover:scale-105 transition-all duration-500">
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

        {/* Bio Content */}
        <div className="max-w-2xl text-left space-y-8">
          <p className="text-xl text-gray-300 leading-relaxed">
            Hello! I&apos;m <span className="font-bold text-cyan-400">Haris Shabbir</span>, a passionate MERN Stack Developer constantly pushing boundaries in full-stack development. 💡
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            I specialize in building scalable, modern, and efficient web applications using <span className="font-bold text-cyan-400">MongoDB</span>, <span className="font-bold text-cyan-400">Express.js</span>, <span className="font-bold text-cyan-400">React</span>, and <span className="font-bold text-cyan-400">Node.js</span>. I love clean code, elegant UI, and solving real-world problems with technology.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            My journey is fueled by curiosity, creativity, and continuous learning. 🚀
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-4 mt-8">
            <TechBadge icon={<SiMongodb className="text-green-400 text-2xl" />} label="MongoDB" />
            <TechBadge icon={<SiExpress className="text-blue-300 text-2xl" />} label="Express.js" />
            <TechBadge icon={<SiReact className="text-cyan-300 text-2xl" />} label="React" />
            <TechBadge icon={<SiNodedotjs className="text-green-500 text-2xl" />} label="Node.js" />
          </div>
        </div>

      </div>
    </section>
  );
}

// Tech Badge Reusable Component
const TechBadge = ({ icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-full border border-white/20 shadow-md hover:shadow-cyan-400/30 transition">
    {icon}
    <span className="text-white font-medium">{label}</span>
  </div>
);
