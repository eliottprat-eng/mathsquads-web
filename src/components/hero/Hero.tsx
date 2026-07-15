"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, MapPin, Wifi } from "lucide-react";
import MathParticles from "@/components/MathParticles";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

type StatItem =
  | { kind: "counter"; target: number; suffix: string; label: string; duration: number }
  | { kind: "text"; value: string; label: string };

const stats: StatItem[] = [
  { kind: "counter", target: 475, suffix: "+", label: "cours donnés",  duration: 1.5 },
  { kind: "counter", target: 100, suffix: "%", label: "satisfaits",    duration: 1.2 },
  { kind: "counter", target: 20,  suffix: "€", label: "dès / heure",   duration: 1.0 },
  { kind: "text",    value: "Top 5",            label: "écoles FR" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      <MathParticles />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

          {/* ── TEXTE ── */}
          <div className="flex-1 max-w-lg flex flex-col items-center text-center">

            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-coral-dark mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                Cours particuliers de maths · Lyon, Lille, Paris &amp; toute la France
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-semibold text-ink leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
            >
              Les maths <span className="italic text-coral">accessibles</span> à tous.
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="text-lg text-ink/60 leading-relaxed mb-8">
              Des profs issus d&apos;emlyon et des meilleures grandes écoles de France,
              pour progresser vraiment, dès{" "}
              <span className="text-ink font-semibold">20€/h</span>.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
              <Link href="/tarifs#booking" className="btn-primary text-base group">
                Réserver ma 1ère heure gratuite
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/profs" className="btn-secondary text-base">
                Voir les profs
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.5)}
              className="grid grid-cols-4 gap-3 pb-8 mb-8 border-b border-ink/10 w-full"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-bold text-xl text-ink">
                    {s.kind === "counter" ? (
                      <AnimatedCounter
                        target={s.target}
                        suffix={s.suffix}
                        duration={s.duration}
                        className="font-display font-bold text-xl text-ink"
                      />
                    ) : (
                      s.value
                    )}
                  </div>
                  <div className="text-xs text-ink/45 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-sm text-ink/70 font-medium">5/5</span>
                <span className="text-sm text-ink/45">· 100% d&apos;élèves satisfaits</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-ink/45">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-coral" />
                  Lyon · Lille · Paris
                </span>
                <span className="flex items-center gap-1.5">
                  <Wifi size={13} className="text-coral" />
                  Visio partout en France
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── PHOTO ── */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-center flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card" style={{ width: 420, height: 520 }}>
              <Image
                src="/images/coursdemaths.webp"
                alt="Cours particuliers de maths — prof et élève"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
