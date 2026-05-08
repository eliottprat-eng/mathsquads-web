"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Brain, Heart, Compass, Zap, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Méthode",
    description:
      "Une pédagogie structurée et progressive, adaptée à chaque élève. Pas de cours générique : on construit ensemble une approche sur mesure.",
    color: "#5B8DEF",
    glow: "rgba(91,141,239,0.15)",
  },
  {
    icon: Heart,
    title: "Humain",
    description:
      "Nos profs ne sont pas que des sachants — ils s'investissent vraiment dans ta progression et restent disponibles entre les séances.",
    color: "#FFBB0A",
    glow: "rgba(255,187,10,0.15)",
  },
  {
    icon: Compass,
    title: "Accompagnement",
    description:
      "Suivi personnalisé sur la durée : objectifs clairs, bilan régulier, ajustement de la stratégie selon tes résultats.",
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    icon: Zap,
    title: "Transmission",
    description:
      "Des profs qui adorent expliquer. L'art de rendre simple ce qui paraît complexe, avec des exemples concrets et des supports clairs.",
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.15)",
  },
  {
    icon: Trophy,
    title: "Succès",
    description:
      "Résultats concrets : admissions en prépa, ESCP, notes en progression, confiance retrouvée. Nos élèves transforment leur rapport aux maths.",
    color: "#FFBB0A",
    glow: "rgba(255,187,10,0.15)",
  },
];

export default function WhySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(91,141,239,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="section-tag mb-4 inline-flex">Pourquoi MathSquads ?</div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight">
            Pas juste des cours.
            <br />
            <span className="text-gradient">Une vraie transformation.</span>
          </h2>
          <p className="mt-5 text-slate-400 text-xl max-w-xl mx-auto">
            5 piliers qui font la différence entre un cours ordinaire et une progression durable.
          </p>
        </ScrollReveal>

        {/* Ligne 1 — 3 blocs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {reasons.slice(0, 3).map((reason, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              className=""
            >
              <motion.div
                className="relative glass-card rounded-2xl p-7 border border-white/5 h-full group overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${reason.glow} 0%, transparent 60%)`,
                  }}
                />

                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${reason.color}18`, border: `1px solid ${reason.color}30` }}
                >
                  <reason.icon size={24} style={{ color: reason.color }} />
                </div>

                <div
                  className="absolute top-6 right-6 font-display font-black text-6xl leading-none select-none pointer-events-none"
                  style={{ color: `${reason.color}10` }}
                >
                  0{i + 1}
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3 relative z-10">
                  {reason.title}
                </h3>
                <p className="text-base text-slate-400 leading-relaxed relative z-10">
                  {reason.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Ligne 2 — blocs 4 et 5 centrés */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {reasons.slice(3).map((reason, i) => (
            <ScrollReveal
              key={i + 3}
              delay={(i + 3) * 0.1}
              className="w-full md:w-[calc(33.333%-12px)]"
            >
              <motion.div
                className="relative glass-card rounded-2xl p-7 border border-white/5 h-full group overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${reason.glow} 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${reason.color}18`, border: `1px solid ${reason.color}30` }}
                >
                  <reason.icon size={24} style={{ color: reason.color }} />
                </div>
                <div
                  className="absolute top-6 right-6 font-display font-black text-6xl leading-none select-none pointer-events-none"
                  style={{ color: `${reason.color}10` }}
                >
                  0{i + 4}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 relative z-10">
                  {reason.title}
                </h3>
                <p className="text-base text-slate-400 leading-relaxed relative z-10">
                  {reason.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
