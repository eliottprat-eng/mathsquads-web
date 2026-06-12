"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Wifi, ArrowRight, Gift } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pricingCards = [
  {
    badge: "Lyon & Lille",
    title: "Présentiel",
    subtitle: "Lyon & Lille",
    featured: false,
    prices: [
      { level: "Collège", price: "20€/h" },
      { level: "Lycée", price: "25€/h" },
      { level: "CPGE / Post-bac", price: "30€/h" },
    ],
  },
  {
    badge: "Paris",
    title: "Présentiel",
    subtitle: "Paris",
    featured: false,
    prices: [
      { level: "Collège", price: "25€/h" },
      { level: "Lycée", price: "30€/h" },
      { level: "CPGE / Post-bac", price: "35€/h" },
    ],
  },
  {
    badge: "Le + choisi",
    title: "Distanciel",
    subtitle: "Toute la France",
    featured: true,
    prices: [
      { level: "Collège", price: "20€/h" },
      { level: "Lycée", price: "20€/h" },
      { level: "CPGE / Post-bac", price: "25€/h" },
    ],
  },
];

export default function PricingHomepageSection() {
  return (
    <section id="tarifs-apercu" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel label="Nos tarifs" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Des tarifs{" "}
            <span className="text-gradient">clairs et accessibles</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Sans frais cachés. Sans engagement. La première heure est offerte.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {pricingCards.map((card, i) => (
            <ScrollReveal key={card.subtitle} delay={i * 0.08} className="h-full">
              <motion.div
                className={`relative rounded-2xl p-7 flex flex-col gap-5 h-full ${
                  card.featured ? "gradient-border" : "glass-card hover:border-white/15"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      card.featured
                        ? "text-gold bg-gold/10 border border-gold/25"
                        : "text-slate-300 bg-white/5 border border-white/10"
                    }`}
                  >
                    {card.featured ? <Wifi size={11} /> : <MapPin size={11} />}
                    {card.badge}
                  </div>
                  <div className="text-xs text-slate-500">{card.subtitle}</div>
                </div>

                <h3 className="font-display font-bold text-xl text-white">{card.title}</h3>

                <div className="flex flex-col gap-2 flex-1">
                  {card.prices.map((p, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between py-2.5 border-b border-white/6 last:border-0"
                    >
                      <span className="text-slate-400 text-sm">{p.level}</span>
                      <span className="font-display font-bold text-lg text-white tabular-nums">{p.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Banner */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card rounded-2xl px-6 py-5">
            <div className="flex items-center gap-3">
              <Gift size={20} className="text-gold flex-shrink-0" />
              <p className="text-slate-200 text-sm font-medium">
                <span className="text-gold font-bold">1ère heure offerte</span>{" "}
                pour tous les nouveaux élèves — zéro risque, remboursé si insatisfait.
              </p>
            </div>
            <Link href="/tarifs#booking" className="btn-gold flex-shrink-0 text-sm group">
              Réserver ma 1ère heure
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
