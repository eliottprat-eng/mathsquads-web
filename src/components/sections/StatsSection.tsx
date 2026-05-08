"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Video, Star, Trophy } from "lucide-react";

const stats = [
  {
    icon: Video,
    value: "Visio &",
    detail: "Présentiel",
    valueLine2: "Présentiel",
    label: "Cours à Lyon ou partout en France via visio",
    color: "text-electric",
    bg: "bg-electric/10",
    border: "border-electric/20",
    isText: true,
  },
  {
    icon: Star,
    value: "100%",
    label: "Élèves satisfaits ou remboursés — zéro risque",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
    isText: false,
    suffix: " satisfaits",
  },
  {
    icon: Trophy,
    value: "Top 5",
    label: "Nos profs issus des meilleures grandes écoles",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    isText: true,
    detail: "écoles de France",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/30 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                className={`relative glass-card rounded-2xl p-8 border ${stat.border} overflow-hidden group`}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                {/* Glow bg */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${
                      stat.color === "text-electric"
                        ? "rgba(91,141,239,0.08)"
                        : stat.color === "text-gold"
                        ? "rgba(255,187,10,0.08)"
                        : "rgba(74,222,128,0.08)"
                    } 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.border} border flex items-center justify-center mb-4`}>
                    <stat.icon size={22} className={stat.color} />
                  </div>

                  {stat.isText ? (
                    <div className={`font-display font-extrabold text-4xl leading-tight mb-1 ${stat.color}`}>
                      {stat.value}
                      {stat.detail && (
                        <div className={`font-display font-extrabold text-4xl leading-tight ${stat.color}`}>{stat.detail}</div>
                      )}
                    </div>
                  ) : (
                    <div className={`font-display font-extrabold text-4xl leading-tight mb-1 ${stat.color}`}>
                      {stat.value}
                    </div>
                  )}

                  <p className="text-sm text-slate-400 leading-relaxed mt-2">{stat.label}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
