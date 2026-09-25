import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono' });
const grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });

const description =
  'Full-Stack MERN Developer based in Karachi, Pakistan. Building scalable web applications, e-commerce platforms, and AI-integrated tools.';

export const metadata = {
  title: 'Haris Shabbir — Full-Stack Developer',
  description,
  keywords: ['Haris Shabbir', 'Full Stack Developer', 'MERN Stack', 'Next.js Developer', 'Karachi Developer'],
  openGraph: { title: 'Haris Shabbir — Full-Stack Developer', description, type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Haris Shabbir — Full-Stack Developer', description },
};

export const viewport = { themeColor: '#0B1120' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
