"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const schools = [
  { src: "/images/logo-emlyon.svg",  alt: "emlyon business school",   width: 260 },
  { src: "/images/logo-escp.png",    alt: "ESCP Business School",      width: 230 },
  { src: "/images/logo-edhec.avif",  alt: "EDHEC Business School",     width: 240 },
  { src: "/images/logo-hec.png",     alt: "HEC Paris",                 width: 190 },
  { src: "/images/logo-essec.jpg",   alt: "ESSEC Business School",     width: 230 },
];

export default function SchoolLogosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel number="03" label="Nos profs" />
          <p className="text-ink/40 text-sm font-medium">
            Nos profs sont issus des meilleures grandes écoles
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
          {schools.map((school, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center cursor-default"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 0.55, y: 0 } : {}}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={school.src}
                alt={school.alt}
                width={school.width}
                height={40}
                style={{
                  filter: "grayscale(1) contrast(0.85)",
                  maxHeight: "72px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
