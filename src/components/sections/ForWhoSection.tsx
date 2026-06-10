"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Target, Trophy, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const profiles = [
  {
    icon: BookOpen,
    title: "Collège",
    subtitle: "Rattraper son retard, préparer le Brevet",
    details: "Dès 20€/h · Lyon, Lille, Paris & visio",
    href: "/college-lycee",
    levels: "6ème → 3ème",
  },
  {
    icon: Target,
    title: "Lycée",
    subtitle: "Progresser vite, réussir le Bac",
    details: "Dès 20€/h · Lyon, Lille, Paris & visio",
    href: "/college-lycee",
    levels: "2nde → Terminale",
  },
  {
    icon: Trophy,
    title: "CPGE & Post-bac",
    subtitle: "Intégrer les meilleures écoles",
    details: "Dès 25€/h · Lyon, Lille, Paris & visio",
    href: "/cpge-postbac",
    levels: "Prépa & au-delà",
  },
];

export default function ForWhoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel label="Pour qui ?" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Un accompagnement{" "}
            <span className="text-gradient">adapté à chaque niveau</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {profiles.map((profile, i) => (
            <ScrollReveal key={profile.title} delay={i * 0.08} className="h-full">
              <Link href={profile.href} className="block h-full group">
                <motion.div
                  className="glass-card rounded-2xl p-7 h-full flex flex-col gap-5"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/4 border border-white/8">
                    <profile.icon size={26} className="text-electric" />
                  </div>

                  <div className="flex-1">
                    <div className="text-xs font-mono text-slate-500 mb-1">{profile.levels}</div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">{profile.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{profile.subtitle}</p>
                    <p className="text-xs font-semibold text-slate-300">{profile.details}</p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-200 group-hover:gap-3">
                    En savoir plus
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
