export const WA =
  'https://wa.me/923471091917?text=Hi%20Haris%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project.';
export const EMAIL = '05harisshabbir@gmail.com';
export const GITHUB = 'https://github.com/Harisshabbir76';
export const LINKEDIN = 'https://www.linkedin.com/in/haris-shabbir-dev/';

export const si = (slug) => `https://cdn.simpleicons.org/${slug}`;
export const lu = (name) => `https://unpkg.com/lucide-static@0.400.0/icons/${name}.svg`;

export const TYPED_WORDS = [
  'Full-Stack Developer',
  'MERN Stack Developer',
  'Next.js Developer',
  'E-commerce Builder',
  'Problem Solver',
];

export const NAV = ['about', 'skills', 'work', 'contact'];

export const TIMELINE = [
  { date: 'Graduated 2026', title: 'Iqra University, Karachi', sub: "Bachelor's in Computer Science" },
  { date: '2019 – 2021', title: 'Govt. National College, Karachi', sub: 'Pre-Engineering' },
  { date: 'Issued March 2025', title: 'Simplilearn', sub: 'Introduction to MERN Stack Certification · Code: 8071325' },
];

export const STACK = [
  { name: 'frontend', items: [['React.js', 'react'], ['Next.js', 'nextdotjs'], ['Tailwind CSS', 'tailwindcss']] },
  { name: 'backend', items: [['Node.js', 'nodedotjs'], ['Express.js', 'express'], ['Django', 'django']] },
  { name: 'databases', items: [['MongoDB', 'mongodb'], ['MySQL', 'mysql'], ['PostgreSQL', 'postgresql']] },
  {
    name: 'tools & deployment',
    items: [['Git / GitHub', 'github'], ['Vercel', 'vercel'], ['Render', 'render'], ['Railway', 'railway'],
      ['Hostinger', 'hostinger'],
      ['AWS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'],
      ['Cloudinary', 'cloudinary'], ['JWT Auth', 'jsonwebtokens'], ['Postman', 'postman']],
  },
];

export const PROJECTS = [
  { n: '01', client: true, place: 'Dubai', title: 'Heirloom by SK', image: '/projects/heirloom.png',
    desc: 'Complete e-commerce site for a Dubai-based business with a dynamic admin dashboard — product management, CMS control to edit the text and images of every page, responsive UI, and complete online shopping workflows.',
    tech: ['Next.js', 'Node.js', 'MongoDB'], url: 'https://heirloombysk.ae/' },
  { n: '02', client: true, place: 'Pakistan', title: 'Zedify Store', image: '/projects/zedify.png',
    desc: 'Full-featured online store with secure checkout, Cloudinary-powered image uploads, cart management, product filtering, and a complete admin panel for inventory control.',
    tech: ['React', 'Express', 'MongoDB', 'Cloudinary'], url: 'https://www.zedify.store/' },
  { n: '03', client: true, place: 'Dubai', title: 'Zuhour Philosophy', image: '/projects/zuhour.png',
    desc: 'Business portfolio site for a Dubai-based styling and personal shopping brand, built working directly with an Arabic-speaking client. Includes a dynamic admin dashboard where the client can change the text and images of every page.',
    tech: ['React', 'Node.js', 'CMS'], url: 'https://zuhourphilosophy.ae/' },
  { n: '04', client: true, place: 'UAE', title: 'Al Tjwal', image: '/projects/altjwal.png',
    desc: 'Event management business website with a full admin dashboard — booking management, customer messages, and CMS pages that let the admin change the text and images of every page.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'CMS'], url: 'http://altjwal.ae/' },
  { n: '05', client: true, place: 'UAE', title: 'Meram Events', image: '/projects/meramevents.png',
    desc: 'Event management platform with a complete admin dashboard — booking management, customer messages, and CMS pages so the admin can update the text and images of every page.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'CMS'], url: 'https://meramevents.ae/' },
  { n: '06', client: true, place: 'UAE', title: 'Arco Dinnerware', image: '/projects/arco.png',
    desc: 'E-commerce store for a dinnerware brand with a dynamic admin dashboard — product management, order management, customer messages, and editable page content.',
    tech: ['Next.js', 'Node.js', 'MongoDB'], url: 'https://arcodinnerware.com/' },
];

export const CONTACTS = [
  { label: 'email', value: EMAIL, href: `mailto:${EMAIL}`, icon: lu('mail'), external: false },
  { label: 'phone / whatsapp', value: '+92 347 1091917', href: WA, icon: lu('phone'), external: true },
  { label: 'github', value: 'Harisshabbir76', href: GITHUB, icon: lu('github'), external: true },
  { label: 'linkedin', value: 'haris-shabbir-dev', href: LINKEDIN, icon: lu('linkedin'), external: true },
];

export const SOCIALS = [
  { label: 'GitHub', href: GITHUB, icon: lu('github') },
  { label: 'LinkedIn', href: LINKEDIN, icon: lu('linkedin') },
  { label: 'WhatsApp', href: WA, icon: si('whatsapp') },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: lu('mail') },
];
