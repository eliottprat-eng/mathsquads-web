"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const testimonials = [
  {
    name: "Emma L.",
    grade: "Collégienne, 3ème",
    result: "20/20 au Brevet de maths",
    avatar: "E",
    stars: 5,
    quote:
      "Une méthode claire, des supports complets, et un prof toujours à l'écoute. Je ne comprenais rien aux équations avant, maintenant j'adore résoudre des problèmes. J'ai eu 20/20 au Brevet et je n'aurais jamais cru ça possible il y a 6 mois.",
  },
  {
    name: "Yanis M.",
    grade: "Prépa HEC",
    result: "Admis à l'ESCP",
    avatar: "Y",
    stars: 5,
    quote:
      "Grâce à MathSquads j'ai pu combler mes lacunes en maths avant les écrits. Mon prof comprenait exactement où je bloquais et repartait toujours de la base sans me faire sentir nul. Résultat : admis à l'ESCP.",
  },
  {
    name: "Lucas D.",
    grade: "Terminale Spécialité Maths",
    result: "De 8 à 16 en maths",
    avatar: "L",
    stars: 5,
    quote:
      "En septembre j'avais 8 de moyenne. En mars j'étais à 16. Marin a tout simplement changé ma façon de voir les maths : au lieu de réciter des formules, je comprends maintenant pourquoi elles marchent.",
  },
  {
    name: "Sophie L.",
    grade: "Mère d'élève, Lycée (Lyon)",
    result: "Confiance retrouvée",
    avatar: "S",
    stars: 5,
    quote:
      "Ma fille détestait les maths. Après 4 séances avec MathSquads, elle nous demande d'elle-même à faire ses exercices. La qualité des profs est vraiment différente — on sent qu'ils adorent enseigner.",
  },
];

function TestimonialCard({ t, delay }: { t: typeof testimonials[number]; delay: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <motion.div
        className="glass-card rounded-2xl p-7 h-full flex flex-col gap-4"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {/* Résultat mis en valeur typographiquement */}
        <div className="flex items-start justify-between gap-3">
          <div className="font-display font-bold text-gold text-sm uppercase tracking-wide">
            {t.result}
          </div>
          <div className="flex gap-0.5 flex-shrink-0" aria-label={`${t.stars} étoiles sur 5`}>
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={13} className="text-gold fill-gold" />
            ))}
          </div>
        </div>

        <blockquote className="text-sm text-slate-300 leading-relaxed flex-1">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <div className="flex items-center gap-3 pt-2 border-t border-white/6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-base text-white bg-white/6 border border-white/10 flex-shrink-0">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel label="Témoignages" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Ils ont{" "}
            <span className="text-gradient">transformé leurs résultats</span>
          </h2>
          {/* TODO: remplacer le href par l'URL de la fiche Google Business */}
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            <span className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="text-gold fill-gold" />
              ))}
            </span>
            Voir nos avis Google
          </a>
        </ScrollReveal>

        {/* Grille statique — une seule occurrence de chaque carte dans le DOM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
