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
    color: "#1B2A44",
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
    color: "#4F7A5E",
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
    color: "#E1613E",
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
    <section id="tarifs-apercu" className="relative py-24 overflow-hidden bg-cream-soft">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel number="05" label="Nos tarifs" />
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-ink">
            Des tarifs <span className="italic text-coral">clairs et accessibles</span>
          </h2>
          <p className="mt-4 text-ink/60 text-lg">
            Sans frais cachés. Sans engagement. La première heure est offerte.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {pricingCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <motion.div
                className={`relative card p-7 flex flex-col gap-5 h-full ${
                  card.featured ? "ring-2 ring-coral/30" : ""
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: `${card.color}14`,
                      border: `1px solid ${card.color}28`,
                      color: card.color,
                    }}
                  >
                    <card.badgeIcon size={11} />
                    {card.badge}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-ink/40">
                    {card.featured ? (
                      <Wifi size={12} className="text-coral" />
                    ) : (
                      <MapPin size={12} className="text-coral" />
                    )}
                    {card.subtitle}
                  </div>
                </div>

                <h3 className="font-display font-semibold text-xl text-ink">{card.title}</h3>

                <div className="flex flex-col gap-2 flex-1">
                  {card.prices.map((p, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between py-2.5 border-b border-ink/8 last:border-0"
                    >
                      <span className="text-ink/60 text-sm">{p.level}</span>
                      <span className="font-display font-semibold text-lg text-ink">{p.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Banner */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 card px-6 py-5">
            <div className="flex items-center gap-3">
              <Gift size={20} className="text-gold flex-shrink-0" />
              <p className="text-ink/70 text-sm font-medium">
                <span className="text-ink font-bold">1ère heure offerte</span>{" "}
                pour tous les nouveaux élèves. Zéro risque, 100% remboursé si insatisfait.
              </p>
            </div>
            <Link href="/tarifs#booking" className="btn-primary flex-shrink-0 text-sm group">
              Réserver ma 1ère heure
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
