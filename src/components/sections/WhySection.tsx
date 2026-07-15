"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Brain, Heart, Compass, Zap, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Méthode",
    description:
      "Une pédagogie structurée et progressive, adaptée à chaque élève. Pas de cours générique : on construit ensemble une approche sur mesure.",
    color: "#1B2A44",
  },
  {
    icon: Heart,
    title: "Humain",
    description:
      "Nos profs ne sont pas que des sachants, ils s'investissent vraiment dans ta progression et restent disponibles entre les séances.",
    color: "#E1613E",
  },
  {
    icon: Compass,
    title: "Accompagnement",
    description:
      "Suivi personnalisé sur la durée : objectifs clairs, bilan régulier, ajustement de la stratégie selon tes résultats.",
    color: "#4F7A5E",
  },
  {
    icon: Zap,
    title: "Transmission",
    description:
      "Des profs qui adorent expliquer. L'art de rendre simple ce qui paraît complexe, avec des exemples concrets et des supports clairs.",
    color: "#C99A3E",
  },
  {
    icon: Trophy,
    title: "Succès",
    description:
      "Résultats concrets : admissions en prépa, ESCP, notes en progression, confiance retrouvée. Nos élèves transforment leur rapport aux maths.",
    color: "#E1613E",
  },
];

function ReasonCard({ reason, index }: { reason: (typeof reasons)[number]; index: number }) {
  return (
    <motion.div
      className="relative card p-7 h-full overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: `${reason.color}14`, border: `1px solid ${reason.color}25` }}
      >
        <reason.icon size={24} style={{ color: reason.color }} />
      </div>

      <div
        className="absolute top-6 right-6 font-display font-bold text-6xl leading-none select-none pointer-events-none text-ink/[0.04]"
      >
        0{index + 1}
      </div>

      <h3 className="font-display font-semibold text-xl text-ink mb-3 relative z-10">
        {reason.title}
      </h3>
      <p className="text-base text-ink/60 leading-relaxed relative z-10">
        {reason.description}
      </p>
    </motion.div>
  );
}

export default function WhySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <SectionLabel number="02" label="Notre méthode" />
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-ink leading-tight">
            Pas juste des cours.
            <br />
            <span className="italic text-coral">Une vraie transformation.</span>
          </h2>
          <p className="mt-5 text-ink/60 text-xl max-w-xl mx-auto">
            5 piliers qui font la différence entre un cours ordinaire et une progression durable.
          </p>
        </ScrollReveal>

        {/* Ligne 1 — 3 blocs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {reasons.slice(0, 3).map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <ReasonCard reason={reason} index={i} />
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
              <ReasonCard reason={reason} index={i + 3} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
