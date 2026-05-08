"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma L.",
    grade: "Collégienne — 3ème",
    result: "20/20 au Brevet de maths",
    avatar: "E",
    color: "#5B8DEF",
    quote:
      "Une méthode claire, des supports complets, et un prof toujours à l'écoute. Je ne comprenais rien aux équations avant, maintenant j'adore résoudre des problèmes. J'ai eu 20/20 au Brevet et je n'aurais jamais cru ça possible il y a 6 mois.",
    stars: 5,
  },
  {
    name: "Yanis M.",
    grade: "Étudiant — Grande École",
    result: "Admis à l'ESCP",
    avatar: "Y",
    color: "#FFBB0A",
    quote:
      "Je partais de loin en maths, mais les cours bien structurés m'ont permis de gagner en confiance pas à pas. Mon prof a su identifier mes lacunes et m'a donné des techniques pour les concours. Résultat : admis à l'ESCP. C'est la meilleure décision que j'ai prise.",
    stars: 5,
  },
  {
    name: "Thomas D.",
    grade: "Lycéen — 1ère",
    result: "De 7 à 13 de moyenne",
    avatar: "T",
    color: "#10B981",
    quote:
      "La plateforme m'a permis d'organiser mon travail plus efficacement. Mon prof m'a aidé à comprendre les bases que j'avais ratées, et on a progressé ensemble de façon très structurée. Je suis passé de 7 à 13 de moyenne en quelques mois. Ça change tout pour la terminale.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.96,
    }),
  };

  const t = testimonials[current];

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(91,141,239,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="section-tag mb-4 inline-flex">Témoignages</div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Ils ont{" "}
            <span className="text-gradient">transformé leurs résultats</span>
          </h2>
        </ScrollReveal>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="glass-card rounded-3xl border border-white/6 p-8 sm:p-12 relative overflow-hidden">
                  {/* Decorative quote */}
                  <div className="absolute top-6 right-8 opacity-10">
                    <Quote size={80} className="text-electric" />
                  </div>

                  {/* Glow bg */}
                  <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 10% 10%, ${t.color}20 0%, transparent 50%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} size={16} className="text-gold fill-gold" />
                      ))}
                    </div>

                    {/* Result badge */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
                      style={{
                        background: `${t.color}18`,
                        border: `1px solid ${t.color}30`,
                        color: t.color,
                      }}
                    >
                      🏆 {t.result}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 font-medium italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-lg text-white"
                        style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-display font-bold text-white">{t.name}</div>
                        <div className="text-sm text-slate-400">{t.grade}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-electric"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <motion.button
                onClick={prev}
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-electric/30 transition-colors"
                whileTap={{ scale: 0.92 }}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-11 h-11 rounded-xl bg-electric flex items-center justify-center text-white shadow-glow"
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
