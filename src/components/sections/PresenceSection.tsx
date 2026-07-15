"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin, Globe, Wifi } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Lyon & Lille",
    desc: "Cours en présentiel chez toi ou dans un espace dédié, dès 20€/h",
    color: "#1B2A44",
  },
  {
    icon: MapPin,
    title: "Paris",
    desc: "Présentiel dans la capitale, dès 25€/h (Collège), 30€/h (Lycée)",
    color: "#E1613E",
  },
  {
    icon: Globe,
    title: "Toute la France",
    desc: "Sessions visio avec tableau blanc interactif partagé, dès 20€/h",
    color: "#4F7A5E",
  },
  {
    icon: Wifi,
    title: "Flexible & à la demande",
    desc: "Réservation simple, sans engagement, selon tes disponibilités",
    color: "#C99A3E",
  },
];

const cityDots = [
  { top: "15%", left: "52%", name: "Lille", color: "#1B2A44" },
  { top: "36%", left: "54%", name: "Paris", color: "#C99A3E" },
  { top: "60%", left: "60%", name: "Lyon", color: "#E1613E" },
];

export default function PresenceSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <ScrollReveal direction="left">
            <div className="section-tag mb-6">Notre présence</div>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-ink leading-tight mb-6">
              Lyon, Lille, Paris et <span className="italic text-coral">partout en France</span>
            </h2>
            <p className="text-ink/60 text-lg mb-8 leading-relaxed">
              Cours en présentiel dans 3 grandes villes, ou en visio depuis n&apos;importe où en France.
              MathSquads s&apos;adapte à ton emploi du temps et ton lieu de vie.
            </p>

            <div className="flex flex-col gap-4">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 card p-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${item.color}14`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm mb-0.5">{item.title}</div>
                    <div className="text-ink/60 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Visual side — France map */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="w-full h-full rounded-3xl card overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-72">
                    {/* Hexagonal France outline */}
                    <svg viewBox="0 0 200 240" className="w-full h-full opacity-60">
                      <polygon
                        points="100,10 170,50 170,130 130,200 70,200 30,130 30,50"
                        fill="none"
                        stroke="rgba(27,42,68,0.15)"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="100,30 155,62 155,122 120,185 80,185 45,122 45,62"
                        fill="rgba(27,42,68,0.02)"
                        stroke="rgba(27,42,68,0.12)"
                        strokeWidth="1"
                      />
                    </svg>

                    {cityDots.map((city, i) => (
                      <motion.div
                        key={city.name}
                        className="absolute"
                        style={{ top: city.top, left: city.left }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.5 }}
                      >
                        <div className="w-4 h-4 rounded-full" style={{ background: city.color }} />
                        <div
                          className="absolute -top-7 left-5 text-xs font-semibold whitespace-nowrap"
                          style={{ color: city.color }}
                        >
                          {city.name}
                        </div>
                      </motion.div>
                    ))}

                    {/* Other city dots (visio coverage) */}
                    {[
                      { top: "30%", left: "22%" },
                      { top: "75%", left: "40%" },
                      { top: "20%", left: "72%" },
                    ].map((city, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{ top: city.top, left: city.left }}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-ink/25" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Coverage badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft text-sm font-medium text-ink/70 whitespace-nowrap">
                  <Globe size={14} className="text-coral" />
                  Présentiel + visio partout en France
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
