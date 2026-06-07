"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const testimonials = [
  {
    name: "Emma L.",
    grade: "Collégienne, 3ème",
    result: "20/20 au Brevet de maths",
    resultEmoji: "🏆",
    avatar: "E",
    color: "#5B8DEF",
    stars: 5,
    quote:
      "Une méthode claire, des supports complets, et un prof toujours à l'écoute. Je ne comprenais rien aux équations avant, maintenant j'adore résoudre des problèmes. J'ai eu 20/20 au Brevet et je n'aurais jamais cru ça possible il y a 6 mois.",
  },
  {
    name: "Yanis M.",
    grade: "Prépa HEC → Admis ESCP",
    result: "Admis à l'ESCP",
    resultEmoji: "🎓",
    avatar: "Y",
    color: "#FFBB0A",
    stars: 5,
    quote:
      "Grâce à MathSquads j'ai pu combler mes lacunes en maths avant les écrits. Mon prof comprenait exactement où je bloquais et repartait toujours de la base sans me faire sentir nul. Résultat : admis à l'ESCP.",
  },
  {
    name: "Lucas D.",
    grade: "Terminale Spécialité Maths",
    result: "De 8 à 16 en maths",
    resultEmoji: "📈",
    avatar: "L",
    color: "#10B981",
    stars: 5,
    quote:
      "En septembre j'avais 8 de moyenne. En mars j'étais à 16. Marin a tout simplement changé ma façon de voir les maths : au lieu de réciter des formules, je comprends maintenant pourquoi elles marchent.",
  },
  {
    name: "Sophie L.",
    grade: "Mère d'élève, Lycée (Lyon)",
    result: "Confiance retrouvée",
    resultEmoji: "✅",
    avatar: "S",
    color: "#A78BFA",
    stars: 5,
    quote:
      "Ma fille détestait les maths. Après 4 séances avec MathSquads, elle nous demande d'elle-même à faire ses exercices. La qualité des profs est vraiment différente — on sent qu'ils adorent enseigner.",
  },
];

function TestimonialCard({ t, delay }: { t: typeof testimonials[number]; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        className="glass-card rounded-2xl border border-white/6 p-6 h-full flex flex-col gap-4 relative overflow-hidden group cursor-default"
        whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01, y: -4 }}
        style={{ transformPerspective: 900 }}
        transition={{ duration: 0.25 }}
      >
        {/* Glow bg on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${t.color}12 0%, transparent 60%)`,
          }}
        />

        {/* Decorative quote */}
        <div className="absolute top-4 right-4 opacity-8">
          <Quote size={48} style={{ color: t.color }} className="opacity-10" />
        </div>

        {/* Top row: stars + badge */}
        <div className="relative flex items-start justify-between gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={13} className="text-gold fill-gold" />
            ))}
          </div>
          <div
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0"
            style={{
              background: `${t.color}18`,
              border: `1px solid ${t.color}30`,
              color: t.color,
            }}
          >
            {t.resultEmoji} {t.result}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="relative text-sm text-slate-300 leading-relaxed flex-1 italic">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="relative flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-base text-white flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
          >
            {t.avatar}
          </div>
          <div>
            <div className="font-display font-bold text-white text-sm">{t.name}</div>
            <div className="text-xs text-slate-500">{t.grade}</div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(91,141,239,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel number="04" label="Témoignages" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Ils ont{" "}
            <span className="text-gradient">transformé leurs résultats</span>
          </h2>
        </ScrollReveal>

        {/* Desktop: 2x2 grid / Mobile: horizontal scroll carousel */}
        <div className="hidden md:grid grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} delay={i * 0.1} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] snap-center">
              <TestimonialCard t={t} delay={0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
