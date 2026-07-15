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
    color: "#1B2A44",
    levels: "6ème → 3ème",
  },
  {
    icon: Target,
    title: "Lycée",
    subtitle: "Progresser vite, réussir le Bac",
    details: "Dès 20€/h · Lyon, Lille, Paris & visio",
    href: "/college-lycee",
    color: "#E1613E",
    levels: "2nde → Terminale",
  },
  {
    icon: Trophy,
    title: "CPGE & Post-bac",
    subtitle: "Intégrer les meilleures écoles",
    details: "Dès 25€/h · Lyon, Lille, Paris & visio",
    href: "/cpge-postbac",
    color: "#4F7A5E",
    levels: "Prépa & au-delà",
  },
];

export default function ForWhoSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-cream-soft">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <div className="section-tag mb-4">Pour qui ?</div>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-ink">
            Un accompagnement <span className="italic text-coral">adapté à chaque niveau</span>
          </h2>
        </ScrollReveal>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {profiles.map((profile, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex-shrink-0 w-72 snap-center lg:w-auto">
              <motion.div
                className="card p-7 h-full flex flex-col gap-5 group cursor-pointer relative overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                style={{ borderTop: `3px solid ${profile.color}` }}
              >
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${profile.color}14`, border: `1px solid ${profile.color}25` }}
                >
                  <profile.icon size={26} style={{ color: profile.color }} />
                </div>

                <div className="relative flex-1">
                  <div className="text-xs text-ink/40 mb-1">{profile.levels}</div>
                  <h3 className="font-display font-semibold text-xl text-ink mb-2">{profile.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed mb-3">{profile.subtitle}</p>
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
