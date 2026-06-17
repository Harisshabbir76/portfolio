export const profile = {
  name: "Haris Shabbir",
  role: "Full-Stack Developer",
  tagline: "MERN · Next.js · Full-Stack",
  location: "Karachi, Pakistan",
  email: "05harisshabbir@gmail.com",
  whatsapp: "+923471091917",
  whatsappDisplay: "+92 347 1091917",
  github: "https://github.com/Harisshabbir76",
  linkedin: "https://www.linkedin.com/in/haris-shabbir-dev/",
  resumeBlurb:
    "Computer Science undergraduate building full-stack web applications with secure backend integration, deployed with Git/GitHub version control on Vercel, Render, and Railway. Based in Karachi — shipping production client work for Pakistan and the UAE.",
};

export const whatsappLink = `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi Haris, I came across your portfolio and would like to talk about a project."
)}`;

export const stats = [
  { value: "3", label: "Live Client Sites" },
  { value: "28+", label: "Projects on GitHub" },
  { value: "2026", label: "BSc Expected" },
];

export const education = [
  {
    school: "Iqra University, Karachi",
    degree: "Bachelor's in Computer Science",
    period: "Expected 2026",
  },
  {
    school: "Govt. National College, Karachi",
    degree: "Pre-Engineering",
    period: "2019 – 2021",
  },
  {
    school: "Simplilearn",
    degree: "Introduction to MERN Stack — Certification",
    period: "Issued March 2025 · Code: 8071325",
  },
];

export const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Django",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Git / GitHub",
  "Vercel",
  "Render",
  "Railway",
  "Cloudinary",
  "JWT Auth",
  "Postman",
];

export const skillBars = [
  { name: "React / Next.js", pct: 92 },
  { name: "Node.js / Express", pct: 90 },
  { name: "MongoDB / SQL", pct: 85 },
  { name: "Git / Deployment", pct: 88 },
  { name: "Django", pct: 68 },
];

export type Project = {
  title: string;
  category: string;
  client: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Heirloom by SK",
    category: "E-Commerce",
    client: "Client · Dubai",
    description:
      "Complete e-commerce site with a full admin dashboard for a Dubai-based business — product management, responsive UI, and complete online shopping workflows.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "https://heirloombysk.ae/",
    featured: true,
  },
  {
    title: "Zedify Store",
    category: "E-Commerce",
    client: "Client · Pakistan",
    description:
      "Full-featured online store with secure checkout, Cloudinary-powered image uploads, cart management, product filtering, and a complete admin panel for inventory control.",
    tags: ["React", "Express", "MongoDB", "Cloudinary"],
    link: "https://www.zedify.store/",
    featured: true,
  },
  {
    title: "Zuhour Philosophy",
    category: "Business Site",
    client: "Client · Dubai",
    description:
      "Business portfolio site for a Dubai-based styling and personal shopping brand, with content updates managed from Arabic-language instructions.",
    tags: ["React", "Node.js", "CMS"],
    link: "http://zuhourphilosophy.ae/",
    featured: true,
  },
  {
    title: "AscendLMS",
    category: "LMS",
    client: "Personal",
    description:
      "Multi-role learning management system with dashboards for Admin, Teacher, Student, and Student Affairs — class management, timetables, assignments, quizzes, and attendance tracking.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://ascend-lms-nine.vercel.app/",
  },
  {
    title: "Hair Salon Booking",
    category: "Booking System",
    client: "Personal",
    description:
      "Online booking platform for hair salons with appointment scheduling, stylist selection, service management, and a complete admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://hair-saloon-six.vercel.app/",
  },
  {
    title: "AI Weather App",
    category: "AI App",
    client: "Personal",
    description:
      "AI-powered weather app fetching real-time data for any city worldwide. Integrated Claude AI for natural language summaries, plus a favourites system for quick city access.",
    tags: ["React", "Claude AI", "Weather API"],
    link: "https://weather-app-inky-one-98.vercel.app/",
  },
];
