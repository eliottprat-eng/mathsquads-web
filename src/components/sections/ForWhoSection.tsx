"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Target, Trophy, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const profiles = [
  {
    icon: BookOpen,
    title: "Collège",
    subtitle: "Rattraper son retard, préparer le Brevet",
    details: "Dès 20€/h · Lyon, Lille, Paris & visio",
    href: "/college-lycee",
    color: "#5B8DEF",
    glow: "rgba(91,141,239,0.15)",
    levels: "6ème → 3ème",
  },
  {
    icon: Target,
    title: "Lycée",
    subtitle: "Progresser vite, réussir le Bac",
    details: "Dès 20€/h · Lyon, Lille, Paris & visio",
    href: "/college-lycee",
    color: "#FFBB0A",
    glow: "rgba(255,187,10,0.15)",
    levels: "2nde → Terminale",
  },
  {
    icon: Trophy,
    title: "CPGE & Post-bac",
    subtitle: "Intégrer les meilleures écoles",
    details: "Dès 25€/h · Lyon, Lille, Paris & visio",
    href: "/cpge-postbac",
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
    levels: "Prépa & au-delà",
  },
];

export default function ForWhoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(91,141,239,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-electric mb-3">
            Pour qui ?
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Un accompagnement{" "}
            <span className="text-gradient">adapté à chaque niveau</span>
          </h2>
        </ScrollReveal>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {profiles.map((profile, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex-shrink-0 w-72 snap-center lg:w-auto">
              <motion.div
                className="glass-card rounded-2xl p-7 border border-white/6 h-full flex flex-col gap-5 group cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.25 }}
                style={{ borderTop: `3px solid ${profile.color}` }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${profile.glow} 0%, transparent 60%)`,
                  }}
                />

                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${profile.color}18`, border: `1px solid ${profile.color}30` }}
                >
                  <profile.icon size={26} style={{ color: profile.color }} />
                </div>

                <div className="relative flex-1">
                  <div className="text-xs font-mono text-slate-500 mb-1">{profile.levels}</div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{profile.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{profile.subtitle}</p>
                  <p className="text-xs font-semibold" style={{ color: profile.color }}>{profile.details}</p>
                </div>

                <Link
                  href={profile.href}
                  className="relative inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group-hover:gap-3"
                  style={{ color: profile.color }}
                >
                  En savoir plus
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
