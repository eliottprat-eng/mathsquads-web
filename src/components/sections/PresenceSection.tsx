"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin, Globe, Wifi } from "lucide-react";

export default function PresenceSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <ScrollReveal direction="left">
            <div className="section-tag mb-6 inline-flex">Notre présence</div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-6">
              À Lyon et{" "}
              <span className="text-gradient">partout en France</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Que tu sois à Lyon pour un cours en présentiel, ou n&apos;importe où en France pour une session en visio,
              MathSquads s&apos;adapte à ton emploi du temps et ton lieu de vie.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: MapPin,
                  title: "Lyon",
                  desc: "Cours en présentiel chez toi ou dans un espace dédié",
                  color: "#5B8DEF",
                },
                {
                  icon: Globe,
                  title: "Toute la France",
                  desc: "Sessions visio avec tableau blanc interactif partagé",
                  color: "#FFBB0A",
                },
                {
                  icon: Wifi,
                  title: "Flexible & à la demande",
                  desc: "Réservation simple, sans engagement, selon tes disponibilités",
                  color: "#10B981",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 glass-card rounded-xl p-4 border border-white/5 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm mb-0.5">{item.title}</div>
                    <div className="text-slate-400 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Visual side */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Map-like visualization */}
              <div className="w-full h-full rounded-3xl glass-card border border-white/8 overflow-hidden relative">
                {/* France silhouette approximation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-72">
                    {/* Hexagonal France visualization */}
                    <svg viewBox="0 0 200 240" className="w-full h-full opacity-20">
                      <polygon
                        points="100,10 170,50 170,130 130,200 70,200 30,130 30,50"
                        fill="none"
                        stroke="rgba(91,141,239,0.5)"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="100,30 155,62 155,122 120,185 80,185 45,122 45,62"
                        fill="rgba(91,141,239,0.03)"
                        stroke="rgba(91,141,239,0.3)"
                        strokeWidth="1"
                      />
                    </svg>

                    {/* Paris dot */}
                    <motion.div
                      className="absolute"
                      style={{ top: "38%", left: "55%" }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="w-3 h-3 rounded-full bg-white/60 relative">
                        <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                      </div>
                      <div className="absolute -top-6 left-4 text-xs text-slate-400 whitespace-nowrap">Paris</div>
                    </motion.div>

                    {/* Lyon dot */}
                    <motion.div
                      className="absolute"
                      style={{ top: "58%", left: "62%" }}
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    >
                      <div className="w-4 h-4 rounded-full bg-electric relative">
                        <div className="absolute inset-0 rounded-full bg-electric/40 animate-ping" />
                      </div>
                      <div className="absolute -top-7 left-5 text-xs font-semibold text-electric whitespace-nowrap">Lyon ★</div>
                    </motion.div>

                    {/* Other city dots */}
                    {[
                      { top: "30%", left: "25%", name: "Bordeaux" },
                      { top: "72%", left: "42%", name: "Marseille" },
                      { top: "20%", left: "70%", name: "Strasbourg" },
                    ].map((city, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{ top: city.top, left: city.left }}
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-slate-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Coverage badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric/20 text-sm font-medium text-electric whitespace-nowrap">
                  <Globe size={14} />
                  Couverture nationale — 100% visio
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
