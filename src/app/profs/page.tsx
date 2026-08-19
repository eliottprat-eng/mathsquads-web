"use client";

import { motion } from "framer-motion";
import ProfCard from "@/components/profs/ProfCard";
import { cities } from "@/lib/profs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { GraduationCap, MapPin, Star, Users } from "lucide-react";
import { stats } from "@/lib/stats";
import { readableAccent } from "@/lib/palette";

const processSteps = [
  {
    step: "01",
    title: "Tu nous contactes",
    desc: "Remplis le formulaire de réservation avec ton niveau, tes objectifs et tes disponibilités.",
    color: "#1B2A44",
  },
  {
    step: "02",
    title: "On te rappelle sous 24h",
    desc: "Un prof adapté à ton niveau te contacte pour convenir d'un premier cours.",
    color: "#C99A3E",
  },
  {
    step: "03",
    title: "1er cours gratuit",
    desc: "Ta première heure est offerte. Si tu n'es pas satisfait, on te rembourse sans condition.",
    color: "#4F7A5E",
  },
];

export default function ProfsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center pt-32 pb-20 overflow-hidden bg-cream">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mb-6">Notre équipe</div>
            <h1 className="font-display font-semibold text-5xl sm:text-6xl text-ink leading-tight mb-6">
              Des profs issus des <span className="italic text-coral">meilleures Grandes Écoles</span> de France
            </h1>
            <p className="text-xl text-ink/70 max-w-2xl mx-auto">
              Chaque prof MathSquads est sélectionné pour son excellence académique et sa passion pour la transmission.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              { icon: Users, label: `${stats.profsCount} profs`, sub: "Sélectionnés un par un" },
              { icon: GraduationCap, label: "Top 5", sub: "Grandes écoles de France" },
              { icon: MapPin, label: "3 villes", sub: "Lyon · Lille · Paris" },
              { icon: Star, label: "5/5", sub: "Note moyenne" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-soft"
              >
                <item.icon size={16} className="text-coral" />
                <div className="text-left">
                  <div className="text-ink font-bold text-sm">{item.label}</div>
                  <div className="text-ink/70 text-xs">{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Profs Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cities.map(({ label, profs }) => (
            <div key={label}>
              <ScrollReveal className="flex items-center gap-3 mb-10">
                <div className="w-9 h-9 rounded-xl bg-coral/10 flex items-center justify-center">
                  <MapPin size={16} className="text-coral" />
                </div>
                <h2 className="font-display font-semibold text-2xl text-ink">{label}</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profs.map((prof, i) => (
                  <div
                    key={i}
                    className={
                      profs.length % 2 !== 0 && i === profs.length - 1
                        ? "md:col-span-2 md:flex md:justify-center"
                        : ""
                    }
                  >
                    <div className={profs.length % 2 !== 0 && i === profs.length - 1 ? "md:w-1/2" : ""}>
                      <ProfCard {...prof} delay={i * 0.15} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-cream-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-ink/70">De ta demande au premier cours en 24h</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {processSteps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="card p-6 text-center relative overflow-hidden">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-lg mx-auto mb-4"
                    style={{
                      background: `${s.color}14`,
                      border: `1px solid ${s.color}25`,
                      color: readableAccent(s.color),
                    }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
