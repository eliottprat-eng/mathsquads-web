"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { BookOpen, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const levels = [
  {
    name: "Collège",
    grades: "6ème → 3ème",
    price: "dès 20€/h",
    color: "#7E96BF",
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
    color: "#7E96BF",
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
    color: "#7E96BF",
  },
  {
    name: "Thomas D.",
    level: "Terminale",
    result: "+6 points de moyenne",
    quote: "De 7 à 13 de moyenne en quelques mois. La méthode fait vraiment la différence.",
    color: "#7E96BF",
  },
];

export default function CollegeLyceePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        {/* Photo de cours en fond droit */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
          <Image
            src="/images/coursdemaths.webp"
            alt=""
            fill
            sizes="(max-width: 1024px) 0px, 50vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/70 to-transparent" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(126,150,191,0.12) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mb-6 inline-flex">Collège & Lycée</div>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
              Du Brevet au Bac,
              <br />
              <span className="text-gradient">on t&apos;accompagne.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mb-10">
              Des cours particuliers adaptés à chaque niveau, avec une méthode éprouvée et des profs qui s&apos;investissent vraiment.
            </p>
            <Link href="/tarifs#booking" className="btn-gold text-base inline-flex items-center gap-2 group">
              1ère heure gratuite
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {levels.map((level, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  className="glass-card rounded-3xl border border-white/6 p-8 overflow-hidden relative"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${level.color}, ${level.color}40, transparent)` }}
                  />

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="font-display font-extrabold text-3xl text-white">{level.name}</h2>
                      <div className="text-sm text-slate-400 mt-1">{level.grades}</div>
                    </div>
                    <div
                      className="px-3 py-1.5 rounded-xl text-sm font-bold"
                      style={{ background: `${level.color}18`, color: level.color, border: `1px solid ${level.color}25` }}
                    >
                      {level.price}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 mb-6">
                    {level.topics.map((topic, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle size={15} style={{ color: level.color }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: `${level.color}08`, border: `1px solid ${level.color}15` }}
                  >
                    <Target size={15} style={{ color: level.color }} className="mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-300 leading-relaxed">{level.goal}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Notre méthode pour le scolaire
            </h2>
            <p className="text-slate-400">Testée et approuvée par des dizaines d&apos;élèves</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Diagnostic initial",
                desc: "On identifie précisément tes lacunes et on construit un plan de travail personnalisé.",
                color: "#7E96BF",
              },
              {
                icon: TrendingUp,
                title: "Progression structurée",
                desc: "Chaque concept est vu, revu et maîtrisé avant de passer au suivant. Pas de survol.",
                color: "#7E96BF",
              },
              {
                icon: Target,
                title: "Entraînement ciblé",
                desc: "Des exercices calibrés sur le format des examens (Brevet, Bac) pour que tu sois prêt le jour J.",
                color: "#7E96BF",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 border border-white/5 text-center">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
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
                <div className="glass-card rounded-2xl p-6 border border-white/5">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
                    style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}25` }}
                  >
                    🏆 {t.result}
                  </div>
                  <p className="text-sm text-slate-300 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.level}</div>
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
