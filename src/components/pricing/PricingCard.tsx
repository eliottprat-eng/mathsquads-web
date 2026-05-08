"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, MapPin, Globe, ArrowRight } from "lucide-react";

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
  const color = highlight ? "#FFBB0A" : "#5B8DEF";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`relative rounded-3xl overflow-hidden ${
        highlight
          ? "border border-gold/30"
          : "border border-white/6"
      }`}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: highlight
            ? "linear-gradient(135deg, rgba(255,187,10,0.08) 0%, rgba(22,36,68,0.9) 40%)"
            : "rgba(22,36,68,0.6)",
          backdropFilter: "blur(16px)",
        }}
      />

      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: highlight
            ? "linear-gradient(90deg, #FFBB0A, #FFD147, transparent)"
            : "linear-gradient(90deg, #5B8DEF, #82AEFF, transparent)",
        }}
      />

      {highlight && (
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold text-navy-900 bg-gold">
          Populaire
        </div>
      )}

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: `${color}18`, border: `1px solid ${color}30` }}
          >
            <Icon size={20} style={{ color }} />
          </div>
          <h3 className="font-display font-bold text-2xl text-white">{title}</h3>
        </div>
        <p className="text-base text-slate-400 mb-8">{description}</p>

        {/* Tiers */}
        <div className="flex flex-col gap-4 mb-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-between p-4 rounded-2xl border border-white/5"
              style={{ background: "rgba(255,255,255,0.03)" }}
              whileHover={{ x: 4, background: "rgba(255,255,255,0.05)" }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15` }}
                >
                  <Check size={14} style={{ color }} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{tier.level}</div>
                  {tier.details && (
                    <div className="text-xs text-slate-500 mt-0.5">{tier.details}</div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="font-display font-extrabold text-2xl" style={{ color }}>
                  {tier.price}€
                </span>
                <span className="text-xs text-slate-500">/h</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/tarifs#booking"
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 group ${
            highlight
              ? "btn-gold"
              : "btn-primary"
          }`}
        >
          Réserver un cours
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
