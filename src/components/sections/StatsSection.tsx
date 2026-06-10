"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Video, Star, Trophy } from "lucide-react";

const stats: { icon: typeof Video; value: string; detail?: string; label: string }[] = [
  {
    icon: Video,
    value: "Visio &",
    detail: "Présentiel",
    label: "Cours à Lyon, Lille, Paris ou partout en France via visio",
  },
  {
    icon: Star,
    value: "97%",
    label: "d'élèves satisfaits — et 1er cours remboursé si insatisfait",
  },
  {
    icon: Trophy,
    value: "Grandes",
    detail: "Écoles",
    label: "Nos profs issus des meilleures Grandes Écoles de commerce",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="h-full">
              <motion.div
                className="glass-card rounded-2xl p-8 h-full"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center mb-4">
                  <stat.icon size={22} className="text-electric" />
                </div>

                <div className="font-display font-extrabold text-4xl leading-tight mb-1 text-white">
                  {stat.value}
                  {stat.detail && (
                    <div className="font-display font-extrabold text-4xl leading-tight text-white">
                      {stat.detail}
                    </div>
                  )}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mt-2">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
