"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { BookOpen, Target, TrendingUp, CheckCircle, ArrowRight, Trophy } from "lucide-react";

const levels = [
  {
    name: "Collège",
    grades: "6ème → 3ème",
    price: "dès 20€/h",
    color: "#1B2A44",
    topics: [
      "Fractions et calcul algébrique",
      "Géométrie plane et dans l'espace",
      "Statistiques et probabilités",
      "Fonctions et équations",
      "Préparation au Brevet",
    ],
    goal: "Consolider les bases, regagner confiance, préparer le Brevet",
  },
  {
    name: "Lycée",
    grades: "2nde → Terminale",
    price: "dès 25€/h",
    color: "#E1613E",
    topics: [
      "Analyse : dérivées, intégrales, limites",
      "Algèbre linéaire et matricielle",
      "Probabilités et statistiques avancées",
      "Suites numériques",
      "Préparation au Baccalauréat",
    ],
    goal: "Maîtriser le programme, viser une excellente note au Bac",
  },
];

const testimonials = [
  {
    name: "Emma L.",
    level: "3ème",
    result: "20/20 au Brevet",
    quote: "Une méthode claire et un prof toujours à l'écoute. J'ai eu 20/20 au Brevet !",
    color: "#1B2A44",
  },
  {
    name: "Thomas D.",
    level: "Terminale",
    result: "+6 points de moyenne",
    quote: "De 7 à 13 de moyenne en quelques mois. La méthode fait vraiment la différence.",
    color: "#E1613E",
  },
];

const method = [
  {
    icon: BookOpen,
    title: "Diagnostic initial",
    desc: "On identifie précisément tes lacunes et on construit un plan de travail personnalisé.",
    color: "#1B2A44",
  },
  {
    icon: TrendingUp,
    title: "Progression structurée",
    desc: "Chaque concept est vu, revu et maîtrisé avant de passer au suivant. Pas de survol.",
    color: "#C99A3E",
  },
  {
    icon: Target,
    title: "Entraînement ciblé",
    desc: "Des exercices calibrés sur le format des examens (Brevet, Bac) pour que tu sois prêt le jour J.",
    color: "#4F7A5E",
  },
];

export default function CollegeLyceePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-cream">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="section-tag mb-6">Collège & Lycée</div>
              <h1 className="font-display font-semibold text-5xl sm:text-6xl text-ink leading-tight mb-6">
                Du Brevet au Bac,
                <br />
                <span className="italic text-coral">on t&apos;accompagne.</span>
              </h1>
              <p className="text-xl text-ink/60 max-w-xl mb-10">
                Des cours particuliers adaptés à chaque niveau, avec une méthode éprouvée et des profs qui s&apos;investissent vraiment.
              </p>
              <Link href="/tarifs#booking" className="btn-primary text-base group">
                1ère heure gratuite
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              className="hidden lg:block relative rounded-3xl overflow-hidden shadow-card"
              style={{ height: 420 }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/coursdemaths.webp"
                alt="Cours particuliers de maths au collège et au lycée"
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {levels.map((level, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  className="card p-8 relative overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ background: level.color }} />

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="font-display font-semibold text-3xl text-ink">{level.name}</h2>
                      <div className="text-sm text-ink/50 mt-1">{level.grades}</div>
                    </div>
                    <div
                      className="px-3 py-1.5 rounded-xl text-sm font-bold"
                      style={{ background: `${level.color}14`, color: level.color, border: `1px solid ${level.color}25` }}
                    >
                      {level.price}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 mb-6">
                    {level.topics.map((topic, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle size={15} style={{ color: level.color }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-ink/70">{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: `${level.color}0A`, border: `1px solid ${level.color}18` }}
                  >
                    <Target size={15} style={{ color: level.color }} className="mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-ink/70 leading-relaxed">{level.goal}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method section */}
      <section className="py-20 bg-cream-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-4">
              Notre méthode pour le scolaire
            </h2>
            <p className="text-ink/60">Testée et approuvée par des dizaines d&apos;élèves</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {method.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${item.color}14`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mini testimonials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="card p-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
                    style={{ background: `${t.color}14`, color: t.color, border: `1px solid ${t.color}25` }}
                  >
                    <Trophy size={12} />
                    {t.result}
                  </div>
                  <p className="text-sm text-ink/70 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="font-semibold text-ink text-sm">{t.name}</div>
                  <div className="text-xs text-ink/40">{t.level}</div>
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
