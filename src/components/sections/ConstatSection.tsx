"use client";

import { AlertTriangle, TrendingDown, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  {
    icon: TrendingDown,
    target: 21,
    suffix: " pts",
    label: "perdus par les élèves français en maths entre PISA 2018 et PISA 2022, la plus forte baisse jamais mesurée en France",
    source: "Source : OCDE, enquête PISA 2022",
    color: "#E1613E",
  },
  {
    icon: AlertTriangle,
    target: 41,
    suffix: "%",
    label: "des élèves de terminale générale ne suivaient plus aucun enseignement de maths en 2021, contre moins de 10% avant la réforme du bac",
    source: "Source : DEPP, ministère de l'Éducation nationale",
    color: "#1B2A44",
  },
  {
    icon: BarChart3,
    target: 2,
    suffix: " Md€",
    label: "dépensés chaque année en soutien scolaire en France, premier marché d'Europe, souvent sans garantie sur la qualité des profs",
    source: "Source : Xerfi, marché du soutien scolaire",
    color: "#C99A3E",
  },
];

export default function ConstatSection() {
  return (
    <section id="constat" className="relative py-24 overflow-hidden bg-ink text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel number="01" label="Le constat" dark />
          <h2 className="font-display font-semibold text-4xl sm:text-5xl leading-tight">
            Les maths en France : un vrai problème.
          </h2>
          <p className="mt-5 text-white/60 text-xl max-w-2xl mx-auto">
            Sans méthode et sans le bon prof, la plupart des élèves avancent à l&apos;aveugle.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div
                className="bg-white/5 rounded-2xl p-8 border-l-4 border-t border-r border-b border-white/8 h-full flex flex-col gap-5"
                style={{ borderLeftColor: stat.color, borderLeftWidth: 4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${stat.color}22`, border: `1px solid ${stat.color}40` }}
                >
                  <stat.icon size={22} style={{ color: stat.color === "#1B2A44" ? "#8FA0BE" : stat.color }} />
                </div>

                <div
                  className="font-display font-bold leading-none"
                  style={{ fontSize: "3.5rem", color: stat.color === "#1B2A44" ? "#FFFFFF" : stat.color }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    duration={1.8}
                  />
                </div>

                <p className="text-white/70 text-sm leading-relaxed flex-1">{stat.label}</p>

                <p className="text-xs text-white/35">{stat.source}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
