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
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, color: "bg-green-500" },
    { name: "Express.js", icon: <SiExpress className="text-gray-200" />, color: "bg-gray-200" },
    { name: "React", icon: <SiReact className="text-blue-400" />, color: "bg-blue-400" },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, color: "bg-green-600" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, color: "bg-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, color: "bg-blue-600" },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, color: "bg-white" },
    { name: "Git", icon: <SiGit className="text-orange-500" />, color: "bg-orange-500" },
    { name: "GitHub", icon: <SiGithub className="text-gray-300" />, color: "bg-gray-300" },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" />, color: "bg-blue-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements matching other sections */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-gray-900 to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: 'linear-gradient(to right, #1e40af 1px, transparent 1px), linear-gradient(to bottom, #1e40af 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xl">
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-200">{skill.name}</span>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`${skill.color} h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional decorative element */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 italic">Continuously learning and expanding my skill set</p>
        </div>
      </div>
    </section>
  );
}