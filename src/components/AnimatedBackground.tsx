"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <motion.div
        className="glow-orb"
        style={{
          width: 560,
          height: 560,
          background:
            "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
          top: "-120px",
          right: "-160px",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="glow-orb"
        style={{
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
          bottom: "-140px",
          left: "-120px",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="glow-orb"
        style={{
          width: 360,
          height: 360,
          background:
            "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)",
          top: "40%",
          left: "55%",
        }}
        animate={{
          x: [0, 25, -25, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
    </>
  );
}
