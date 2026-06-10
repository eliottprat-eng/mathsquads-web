"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const stats = [
  { target: 475, suffix: "+", label: "cours donnés", duration: 1.5 },
  { target: 97, suffix: "%", label: "de satisfaction", duration: 1.2 },
  { target: 20, suffix: "€", label: "dès / heure", duration: 1.0 },
];

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const sigmaY = useTransform(scrollY, [0, 600], [0, reducedMotion ? 0 : 90]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#101E36" }} />

      {/* Signature : un ∑ monumental, unique, qui glisse doucement au scroll */}
      <motion.span
        aria-hidden
        style={{ y: sigmaY }}
        className="absolute left-1/2 top-[8%] -translate-x-1/2 select-none pointer-events-none font-display font-black leading-none text-[min(52vh,26rem)] text-[#7E96BF] opacity-[0.05]"
      >
        ∑
      </motion.span>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 pt-28 pb-16 text-center">
        <motion.div {...fadeUp(0)}>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-electric-light mb-8">
            Cours particuliers de maths — Lyon, Lille, Paris &amp; toute la France
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="font-display font-extrabold text-white leading-[1.04] mb-6"
          style={{ fontSize: "clamp(3rem, 6.5vw, 4.5rem)" }}
        >
          Les maths{" "}
          <span className="text-gradient">accessibles</span>
          {" "}à tous.
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Des profs issus d&apos;emlyon et des meilleures Grandes Écoles,
          pour progresser vraiment — dès{" "}
          <span className="text-white font-semibold">20€/h</span>.
        </motion.p>

        <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row justify-center gap-3 mb-14">
          <Link href="/tarifs#booking" className="btn-gold text-base group">
            Réserver ma 1ère heure gratuite
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/profs"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-slate-300 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Voir les profs
          </Link>
        </motion.div>

        {/* Une seule rangée de preuves */}
        <motion.div
          {...fadeUp(0.32)}
          className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-8 border-t border-white/8"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-extrabold text-2xl text-white">
                <AnimatedCounter
                  target={s.target}
                  suffix={s.suffix}
                  duration={s.duration}
                  className="font-display font-extrabold text-2xl text-white"
                />
              </div>
              <div className="text-xs text-slate-500 mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
