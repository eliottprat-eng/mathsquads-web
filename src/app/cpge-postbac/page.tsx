"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { GraduationCap, Zap, CheckCircle, ArrowRight, Trophy } from "lucide-react";

const programs = [
  {
    name: "CPGE",
    sub: "Classes Préparatoires",
    color: "#7E96BF",
    topics: [
      "Analyse (séries, intégrales, équations diff.)",
      "Algèbre linéaire et réduction d'endomorphismes",
      "Probabilités et variables aléatoires",
      "Géométrie dans l'espace",
      "Préparation aux colles et concours",
    ],
  },
  {
    name: "Licence & BUT",
    sub: "Bac+1 → Bac+3",
    color: "#7E96BF",
    topics: [
      "Analyse réelle et complexe",
      "Topologie et espaces métriques",
      "Algèbre abstraite (groupes, anneaux)",
      "Statistiques et probabilités avancées",
      "Mathématiques financières",
    ],
  },
  {
    name: "BTS & IUT",
    sub: "Voie technologique",
    color: "#7E96BF",
    topics: [
      "Mathématiques appliquées",
      "Statistiques descriptives et inférentielles",
      "Analyse numérique",
      "Suites et fonctions",
      "Préparation aux examens BTS",
    ],
  },
];

export default function CPGEPostBacPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        {/* Formules maths en fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/formules-maths.webp"
            alt=""
            fill
            className="object-cover object-center opacity-[0.07]"
            priority
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(126,150,191,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(126,150,191,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mb-6 inline-flex">CPGE & Post-Bac</div>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
              Viser les
              <br />
              <span className="text-gradient">concours d&apos;excellence.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Des profs eux-mêmes passés par les classes prépas et les grandes écoles, qui connaissent l&apos;exigence des concours de l&apos;intérieur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tarifs#booking" className="btn-gold text-base inline-flex items-center gap-2 group">
                Réserver dès maintenant
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/profs" className="flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-slate-300 glass border border-white/10 hover:text-white transition-colors">
                Voir nos profs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Programmes couverts
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <motion.div
                  className="glass-card rounded-2xl border border-white/5 p-7 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${prog.color}, transparent)` }}
                  />
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${prog.color}15`, border: `1px solid ${prog.color}25` }}
                  >
                    <GraduationCap size={20} style={{ color: prog.color }} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-1">{prog.name}</h3>
                  <div className="text-xs text-slate-500 mb-5">{prog.sub}</div>
                  <div className="flex flex-col gap-2.5">
                    {prog.topics.map((topic, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle size={13} style={{ color: prog.color }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us for CPGE */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="section-tag mb-6 inline-flex">Notre avantage</div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-6">
                Des profs qui ont vécu <span className="text-gradient">la prépa de l&apos;intérieur</span>
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Nos fondateurs sont issus d&apos;emlyon, l&apos;une des meilleures Grandes Écoles françaises. Ils ont traversé les mêmes khôlles,
                les mêmes concours, les mêmes nuits à réviser. Ils savent ce qui fonctionne vraiment.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Méthode concours : rigueur de raisonnement, gestion du temps",
                  "Démonstrations solides, pas de raccourcis",
                  "Disponibles par message entre les séances",
                  "Suivi des progrès et ajustement de la stratégie",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-electric/15 border border-electric/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={11} className="text-electric" />
                    </div>
                    <span className="text-sm text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass-card rounded-3xl p-8 border border-white/6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric via-electric-light to-transparent" />
                <div className="text-center mb-8">
                  <Trophy size={40} className="text-gold mx-auto mb-3" />
                  <h3 className="font-display font-bold text-2xl text-white">Résultats concours</h3>
                  <p className="text-slate-400 text-sm mt-2">Nos élèves CPGE</p>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { name: "Yanis M.", result: "Admis ESCP", color: "#FFBB0A" },
                    { name: "Prépas HEC", result: "Accompagnés", color: "#7E96BF" },
                    { name: "Oraux concours", result: "Préparation intensive", color: "#7E96BF" },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl border border-white/5"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      <span className="text-sm text-slate-300">{r.name}</span>
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ background: `${r.color}15`, color: r.color }}
                      >
                        {r.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass-card rounded-2xl border border-electric/15 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center">
                  <Zap size={18} className="text-electric" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Post-bac à Lyon</div>
                  <div className="text-slate-400 text-xs">Prépa, Licence, BTS</div>
                </div>
              </div>
              <div className="font-display font-extrabold text-3xl text-electric">30€/h</div>
              <Link href="/tarifs#booking" className="btn-primary text-sm whitespace-nowrap">
                Réserver
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
