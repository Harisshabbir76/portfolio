// components/Skills.tsx
import React from 'react';
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
  SiMysql
} from 'react-icons/si';

export default function Skills() {
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
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-3xl" /> }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white overflow-hidden font-sans">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          My Technical Skills 💻
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Here’s my ever-growing stack of tools & technologies I build with.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 h-3 rounded-full w-full transition-all duration-1000 ease-out group-hover:animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center relative z-10">
        <p className="text-gray-400 italic">Always learning, always evolving 🚀</p>
      </div>
    </section>
  );
}
