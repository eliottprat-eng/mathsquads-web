"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const profiles = [
  {
    title: "Collège",
    levels: "6ème → 3ème",
    subtitle: "Rattraper son retard, reprendre confiance, préparer le Brevet.",
    price: "dès 20€/h",
    href: "/college-lycee",
  },
  {
    title: "Lycée",
    levels: "2nde → Terminale",
    subtitle: "Progresser vite en spécialité maths, viser la mention au Bac.",
    price: "dès 20€/h",
    href: "/college-lycee",
  },
  {
    title: "CPGE & Post-bac",
    levels: "Prépa, Licence, BTS",
    subtitle: "Méthode concours par des profs passés par la prépa.",
    price: "dès 25€/h",
    href: "/cpge-postbac",
  },
];

export default function ForWhoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel label="Pour qui ?" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Un accompagnement{" "}
            <span className="text-gradient">à chaque niveau</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border-t border-white/8">
            {profiles.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group grid grid-cols-[1fr_auto] sm:grid-cols-[200px_1fr_auto_auto] items-center gap-x-6 gap-y-1 py-7 border-b border-white/8 transition-colors duration-150 hover:bg-white/[0.025] px-2 sm:px-4 -mx-2 sm:-mx-4"
              >
                <div>
                  <div className="font-display font-bold text-2xl text-white leading-tight">
                    {p.title}
                  </div>
                  <div className="text-xs font-mono text-slate-500 mt-1">{p.levels}</div>
                </div>
                <p className="col-span-2 sm:col-span-1 order-3 sm:order-none text-sm text-slate-400 leading-relaxed max-w-sm">
                  {p.subtitle}
                </p>
                <span className="hidden sm:block text-sm font-semibold text-slate-300 tabular-nums whitespace-nowrap">
                  {p.price}
                </span>
                <ArrowRight
                  size={18}
                  className="text-slate-500 group-hover:text-gold transition-all duration-150 group-hover:translate-x-1 justify-self-end"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
