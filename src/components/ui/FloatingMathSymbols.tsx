"use client";

import { motion } from "framer-motion";

const SYMBOLS = [
  { char: "∑", top: "12%",  left: "4%",   size: "6rem",  delay: 0,   y: [-40, 0, -40], x: [0, 12, 0],  rotate: [-8, 8, -8]  },
  { char: "π", top: "18%",  left: "88%",  size: "5.5rem",delay: 1.4, y: [0, -50, 0],   x: [-10, 0, -10], rotate: [6, -6, 6]  },
  { char: "√", top: "65%",  left: "6%",   size: "5rem",  delay: 2.7, y: [-30, 20, -30], x: [0, 15, 0],  rotate: [0, 12, 0]  },
  { char: "∫", top: "72%",  left: "90%",  size: "6rem",  delay: 0.8, y: [0, -45, 0],   x: [8, -8, 8],   rotate: [-5, 5, -5] },
  { char: "Δ", top: "38%",  left: "93%",  size: "4.5rem",delay: 3.2, y: [-20, 30, -20], x: [0, -12, 0], rotate: [10, -10, 10]},
  { char: "θ", top: "80%",  left: "48%",  size: "4.5rem",delay: 1.9, y: [0, -35, 0],   x: [-15, 0, -15],rotate: [-6, 6, -6] },
  { char: "∞", top: "8%",   left: "52%",  size: "4rem",  delay: 2.1, y: [-25, 15, -25], x: [10, -10, 10],rotate: [0, -8, 0]  },
  { char: "≈", top: "55%",  left: "2%",   size: "3.5rem",delay: 0.4, y: [0, -40, 0],   x: [0, 18, 0],   rotate: [8, -4, 8]  },
];

interface Props {
  opacity?: number;
}

export default function FloatingMathSymbols({ opacity = 0.05 }: Props) {
  return (
    <>
      {SYMBOLS.map((s, i) => (
        <motion.span
          key={i}
          className="absolute select-none pointer-events-none font-display font-black leading-none"
          style={{
            top: s.top,
            left: s.left,
            fontSize: s.size,
            color: "#1B2A44",
            opacity,
          }}
          animate={{ y: s.y, x: s.x, rotate: s.rotate }}
          transition={{
            duration: 5 + i * 0.7,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.char}
        </motion.span>
      ))}
    </>
  );
}
