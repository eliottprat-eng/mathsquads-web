"use client";

import { motion } from "framer-motion";

const particles = [
  { symbol: "∑", x: "8%",  y: "20%", size: 72,  delay: 0,   duration: 9  },
  { symbol: "π", x: "88%", y: "15%", size: 64,  delay: 1.5, duration: 7  },
  { symbol: "√", x: "15%", y: "70%", size: 56,  delay: 0.8, duration: 11 },
  { symbol: "∫", x: "82%", y: "62%", size: 80,  delay: 2.5, duration: 8  },
  { symbol: "Δ", x: "50%", y: "8%",  size: 52,  delay: 1,   duration: 10 },
  { symbol: "θ", x: "72%", y: "40%", size: 60,  delay: 3,   duration: 9  },
  { symbol: "∞", x: "25%", y: "42%", size: 50,  delay: 0.5, duration: 12 },
  { symbol: "α", x: "60%", y: "80%", size: 48,  delay: 2,   duration: 8  },
  { symbol: "β", x: "4%",  y: "52%", size: 44,  delay: 3.5, duration: 7  },
  { symbol: "φ", x: "93%", y: "83%", size: 56,  delay: 1.2, duration: 10 },
];

export default function MathParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute select-none"
          style={{
            left: p.x,
            top: p.y,
            fontSize: p.size,
            color: i % 3 === 0 ? "rgba(27, 42, 68, 0.1)" : i % 3 === 1 ? "rgba(225, 97, 62, 0.14)" : "rgba(27, 42, 68, 0.06)",
            fontFamily: "var(--font-fraunces)",
            fontWeight: 700,
          }}
          animate={{
            y: [0, -20, -8, -20, 0],
            rotate: [0, 5, -3, 5, 0],
            opacity: [0.3, 0.7, 0.5, 0.7, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
}
