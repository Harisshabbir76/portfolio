import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haris Shabbir — Full-Stack Developer",
  description:
    "Full-Stack MERN Developer based in Karachi, Pakistan. Building scalable web applications, e-commerce platforms, and AI-integrated tools.",
  keywords: [
    "Haris Shabbir",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Karachi Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans-sg bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
