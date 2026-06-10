"use client";

import { AlertTriangle, TrendingDown, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  {
    icon: AlertTriangle,
    target: 65,
    suffix: "%",
    label: "des lycéens en difficulté en maths ne trouvent pas d'aide adaptée",
    source: "Selon les études sur le soutien scolaire en France",
  },
  {
    icon: TrendingDown,
    target: 33,
    suffix: "%",
    label: "des élèves perdent confiance en eux à cause des maths avant la Terminale — soit 1 élève sur 3",
    source: "Selon les études sur le soutien scolaire en France",
  },
  {
    icon: BarChart3,
    target: 90,
    suffix: "%",
    label: "du marché du soutien scolaire est dominé par des plateformes généralistes où la qualité est aléatoire et les prix opaques",
    source: "Notre estimation du marché du soutien scolaire",
  },
];

export default function ConstatSection() {
  return (
    <section id="constat" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#0D1B2E" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel label="Le constat" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight">
            Les maths en France :{" "}
            <span className="text-gradient">un vrai problème.</span>
          </h2>
          <p className="mt-5 text-slate-400 text-xl max-w-2xl mx-auto">
            Sans méthode et sans le bon prof, la plupart des élèves avancent à l&apos;aveugle.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="h-full">
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/4 border border-white/8">
                  <stat.icon size={22} className="text-electric" />
                </div>

                <div
                  className="font-display font-black leading-none text-white"
                  style={{ fontSize: "3.5rem" }}
                >
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={1.8} />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed flex-1">{stat.label}</p>

                <p className="text-xs text-slate-600">{stat.source}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
