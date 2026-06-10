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
  },
  {
    icon: Heart,
    title: "Humain",
    description:
      "Nos profs ne sont pas que des sachants — ils s'investissent vraiment dans ta progression et restent disponibles entre les séances.",
  },
  {
    icon: Compass,
    title: "Accompagnement",
    description:
      "Suivi personnalisé sur la durée : objectifs clairs, bilan régulier, ajustement de la stratégie selon tes résultats.",
  },
  {
    icon: Zap,
    title: "Transmission",
    description:
      "Des profs qui adorent expliquer. L'art de rendre simple ce qui paraît complexe, avec des exemples concrets et des supports clairs.",
  },
  {
    icon: Trophy,
    title: "Succès",
    description:
      "Résultats concrets : admissions en prépa, ESCP, notes en progression, confiance retrouvée. Nos élèves transforment leur rapport aux maths.",
  },
];

function ReasonCard({ reason, delay }: { reason: typeof reasons[number]; delay: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <motion.div
        className="glass-card rounded-2xl p-7 h-full"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white/4 border border-white/8">
          <reason.icon size={24} className="text-electric" />
        </div>
        <h3 className="font-display font-bold text-xl text-white mb-3">
          {reason.title}
        </h3>
        <p className="text-base text-slate-400 leading-relaxed">
          {reason.description}
        </p>
      </motion.div>
    </ScrollReveal>
  );
}

export default function WhySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel label="Notre méthode" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight">
            Pas juste des cours.
            <br />
            <span className="text-gradient">Une vraie transformation.</span>
          </h2>
          <p className="mt-5 text-slate-400 text-xl max-w-xl mx-auto">
            5 piliers qui font la différence entre un cours ordinaire et une progression durable.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {reasons.slice(0, 3).map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} delay={i * 0.08} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {reasons.slice(3).map((reason, i) => (
            <div key={reason.title} className="w-full md:w-[calc(33.333%-12px)]">
              <ReasonCard reason={reason} delay={(i + 3) * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
