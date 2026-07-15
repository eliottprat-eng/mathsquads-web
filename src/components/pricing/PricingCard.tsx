"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, MapPin, Globe, ArrowRight, Star } from "lucide-react";

interface PricingTier {
  level: string;
  price: number;
  details?: string;
}

interface PricingCardProps {
  title: string;
  icon: "map" | "globe";
  description: string;
  tiers: PricingTier[];
  highlight?: boolean;
  delay?: number;
}

export default function PricingCard({
  title,
  icon,
  description,
  tiers,
  highlight = false,
  delay = 0,
}: PricingCardProps) {
  const Icon = icon === "map" ? MapPin : Globe;
  const color = highlight ? "#E1613E" : "#1B2A44";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`relative rounded-3xl overflow-hidden bg-white shadow-soft ${
        highlight ? "ring-2 ring-coral/30" : "border border-ink/8"
      }`}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: color }} />

      {highlight && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-coral">
          <Star size={11} className="fill-white" />
          Populaire
        </div>
      )}

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: `${color}14`, border: `1px solid ${color}25` }}
          >
            <Icon size={20} style={{ color }} />
          </div>
          <h3 className="font-display font-semibold text-2xl text-ink">{title}</h3>
        </div>
        <p className="text-base text-ink/55 mb-8">{description}</p>

        {/* Tiers */}
        <div className="flex flex-col gap-4 mb-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-2xl bg-ink/[0.03]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}14` }}
                >
                  <Check size={14} style={{ color }} />
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{tier.level}</div>
                  {tier.details && (
                    <div className="text-xs text-ink/40 mt-0.5">{tier.details}</div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="font-display font-bold text-2xl" style={{ color }}>
                  {tier.price}€
                </span>
                <span className="text-xs text-ink/40">/h</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/tarifs#booking"
          className={`w-full text-sm group ${highlight ? "btn-primary" : "btn-secondary"}`}
        >
          Réserver un cours
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
