 import Link from 'next/link';
import Image from 'next/image';
import profileImage from '../images/my.jpg';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function Hero() {
  const techStack = [
    { icon: <SiMongodb className="w-5 h-5 text-green-400" />, name: "MongoDB" },
    { icon: <SiExpress className="w-5 h-5 text-blue-300" />, name: "Express" },
    { icon: <SiReact className="w-5 h-5 text-cyan-300" />, name: "React" },
    { icon: <SiNodedotjs className="w-5 h-5 text-green-500" />, name: "Node.js" },
    { icon: <SiNextdotjs className="w-5 h-5 text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="w-5 h-5 text-blue-500" />, name: "TypeScript" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white p-6 overflow-hidden font-sans">
      
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>

        {/* Custom floating elements */}
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Haris Shabbir
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400">
            MERN Stack Developer 🚀
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I craft full-stack web apps using modern technologies, building scalable, clean, and performant solutions that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/path-to-cv.pdf" download className="px-6 py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 transition shadow-lg">
              Download CV
            </Link>
            <Link href="#projects" className="px-6 py-3 rounded-lg font-semibold text-lg bg-black/40 border border-white/20 hover:bg-black/60 transition shadow-lg">
              View Projects
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
            {techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white/5 rounded-full border border-white/20 shadow-md hover:shadow-cyan-400/30 transition">
                {tech.icon}
                <span className="text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Avatar */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-xl opacity-30"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-xl hover:scale-105 transition-all duration-500">
              <Image
                src={profileImage}
                alt="Haris Shabbir"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
