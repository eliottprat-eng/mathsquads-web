"use client";

import { motion } from "framer-motion";
import ProfCard from "@/components/profs/ProfCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { GraduationCap, MapPin, Star } from "lucide-react";

const profs = [
  {
    name: "Marin Delzoppo",
    school: "emlyon business school",
    role: "CEO & Fondateur",
    coursesCount: 317,
    rating: 5,
    bio: "J'adore expliquer simplement des choses compliquées. Mon truc, c'est de te faire comprendre vite, progresser vraiment et pourquoi pas commencer à aimer les maths.",
    avatar: "MD",
    photo: "https://static.wixstatic.com/media/dbf384_0c3e74a1dd3d4849bdb2a510026b6f01~mv2.jpg",
    color: "#5B8DEF",
    city: "Lyon",
  },
  {
    name: "Eliott Prat",
    school: "emlyon business school",
    role: "CEO & Fondateur",
    coursesCount: 158,
    rating: 5,
    bio: "Avec moi, chaque concept est abordé avec précision, chaque raisonnement s'appuie sur des démonstrations solides. Mon objectif : t'armer pour exceller dans les concours les plus exigeants.",
    avatar: "EP",
    photo: "https://static.wixstatic.com/media/5bdef8_a2a97cdd2fb64b35b3e2ab028f520e5f~mv2.jpg",
    color: "#FFBB0A",
    city: "Lyon",
  },
];

export default function ProfsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(91,141,239,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,187,10,0.08) 0%, transparent 50%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mb-6 inline-flex">Notre équipe</div>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
              Des profs issus du{" "}
              <span className="text-gradient">Top 5 des meilleures écoles</span>
              <br />
              de France
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
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
              { icon: GraduationCap, label: "emlyon", sub: "Top 5 Business School" },
              { icon: MapPin, label: "Lyon", sub: "Présentiel & Visio" },
              { icon: Star, label: "5/5", sub: "Note moyenne" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 glass px-5 py-3 rounded-full border border-white/10"
              >
                <item.icon size={16} className="text-electric" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">{item.label}</div>
                  <div className="text-slate-500 text-xs">{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Profs Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center">
              <MapPin size={16} className="text-electric" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">Lyon</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profs.map((prof, i) => (
              <ProfCard key={i} {...prof} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-slate-400">De ta demande au premier cours en 24h</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Tu nous contactes",
                desc: "Remplis le formulaire de réservation avec ton niveau, tes objectifs et tes disponibilités.",
                color: "#5B8DEF",
              },
              {
                step: "02",
                title: "On te rappelle sous 24h",
                desc: "Un prof adapté à ton niveau te contacte pour convenir d'un premier cours.",
                color: "#FFBB0A",
              },
              {
                step: "03",
                title: "1er cours gratuit",
                desc: "Ta première heure est offerte. Si tu n'es pas satisfait, on te rembourse sans condition.",
                color: "#10B981",
              },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-6 border border-white/5 text-center relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 font-display font-black text-8xl leading-none select-none pointer-events-none"
                    style={{ color: `${s.color}08` }}
                  >
                    {s.step}
                  </div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-lg mx-auto mb-4 relative z-10"
                    style={{
                      background: `${s.color}18`,
                      border: `1px solid ${s.color}30`,
                      color: s.color,
                    }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 relative z-10">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed relative z-10">{s.desc}</p>
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
