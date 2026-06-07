"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Wifi, ArrowRight, Gift, Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pricingCards = [
  {
    badge: "Lyon & Lille",
    badgeIcon: MapPin,
    title: "Présentiel",
    subtitle: "Lyon & Lille",
    color: "#5B8DEF",
    featured: false,
    prices: [
      { level: "Collège", price: "20€/h" },
      { level: "Lycée", price: "25€/h" },
      { level: "CPGE / Post-bac", price: "30€/h" },
    ],
  },
  {
    badge: "Paris",
    badgeIcon: MapPin,
    title: "Présentiel",
    subtitle: "Paris",
    color: "#A78BFA",
    featured: false,
    prices: [
      { level: "Collège", price: "25€/h" },
      { level: "Lycée", price: "30€/h" },
      { level: "CPGE / Post-bac", price: "35€/h" },
    ],
  },
  {
    badge: "Le + choisi",
    badgeIcon: Star,
    title: "Distanciel",
    subtitle: "Toute la France",
    color: "#FFBB0A",
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 60%, rgba(255,187,10,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel number="05" label="Nos tarifs" />
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
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <motion.div
                className={`relative rounded-2xl p-7 flex flex-col gap-5 h-full ${
                  card.featured ? "gradient-border" : "glass-card border border-white/8"
                }`}
                whileHover={{
                  y: -4,
                  boxShadow: card.featured
                    ? "0 20px 60px rgba(255,187,10,0.25)"
                    : "0 20px 60px rgba(91,141,239,0.2)",
                }}
                transition={{ duration: 0.25 }}
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: `${card.color}18`,
                      border: `1px solid ${card.color}35`,
                      color: card.color,
                    }}
                  >
                    <card.badgeIcon size={11} />
                    {card.badge}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    {card.featured ? (
                      <Wifi size={12} className="text-electric" />
                    ) : (
                      <MapPin size={12} className="text-electric" />
                    )}
                    {card.subtitle}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white">{card.title}</h3>

                <div className="flex flex-col gap-2 flex-1">
                  {card.prices.map((p, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between py-2.5 border-b border-white/6 last:border-0"
                    >
                      <span className="text-slate-400 text-sm">{p.level}</span>
                      <span className="font-display font-bold text-lg text-white">{p.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Banner */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card rounded-2xl px-6 py-5 border border-gold/20">
            <div className="flex items-center gap-3">
              <Gift size={20} className="text-gold flex-shrink-0" />
              <p className="text-slate-200 text-sm font-medium">
                <span className="text-gold font-bold">1ère heure offerte</span>{" "}
                pour tous les nouveaux élèves — Zéro risque, 100% remboursé si insatisfait.
              </p>
            </div>
            <Link
              href="/tarifs#booking"
              className="btn-gold flex-shrink-0 text-sm group"
            >
              Réserver ma 1ère heure
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
