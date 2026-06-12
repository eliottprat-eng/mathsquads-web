"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Check } from "lucide-react";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full bg-white/6 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check size={11} className="text-electric" aria-hidden />
      </span>
      <span className="text-sm text-slate-300 leading-relaxed">{children}</span>
    </li>
  );
}

/* Visuel 1 — courbe de progression 8 → 16 */
function ProgressVisual() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <div className="flex items-baseline justify-between mb-6">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
          Moyenne en maths
        </span>
        <span className="font-display font-bold text-gold text-sm tabular-nums">8 → 16</span>
      </div>
      <svg viewBox="0 0 320 150" className="w-full" aria-hidden>
        {/* repères */}
        {[26, 62, 98].map((y) => (
          <line key={y} x1="34" y1={y} x2="312" y2={y} stroke="rgba(237,244,255,0.06)" strokeWidth="1" />
        ))}
        <text x="8" y="30" fill="#7E96BF" fontSize="11" fontFamily="var(--font-inter)">16</text>
        <text x="8" y="66" fill="#5d7090" fontSize="11" fontFamily="var(--font-inter)">12</text>
        <text x="8" y="102" fill="#5d7090" fontSize="11" fontFamily="var(--font-inter)">8</text>
        {/* courbe */}
        <motion.path
          d="M 40 98 C 100 96, 130 78, 180 58 S 280 30, 306 26"
          fill="none"
          stroke="#FFBB0A"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.circle
          cx="306"
          cy="26"
          r="4.5"
          fill="#FFBB0A"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, delay: 1.5 }}
        />
        <text x="40" y="138" fill="#5d7090" fontSize="11" fontFamily="var(--font-inter)">sept.</text>
        <text x="288" y="138" fill="#5d7090" fontSize="11" fontFamily="var(--font-inter)">mars</text>
      </svg>
      <p className="text-xs text-slate-500 mt-4">Lucas D. — Terminale, spécialité maths</p>
    </div>
  );
}

/* Visuel 2 — fil de messages entre les séances */
function MessagesVisual() {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
          Entre deux séances
        </span>
        <span className="text-xs text-slate-600 tabular-nums">mar. 21:47</span>
      </div>
      <div className="self-start max-w-[85%] rounded-2xl rounded-bl-md bg-white/6 border border-white/8 px-4 py-2.5">
        <p className="text-sm text-slate-300 leading-relaxed">
          Je n&apos;arrive pas à factoriser la question 3, je suis bloquée…
        </p>
      </div>
      <div className="self-end max-w-[85%] rounded-2xl rounded-br-md bg-gold/10 border border-gold/25 px-4 py-2.5">
        <p className="text-sm text-slate-200 leading-relaxed">
          Indice : commence par mettre x en facteur. Tu me redis si ça débloque ?
        </p>
      </div>
      <div className="self-start max-w-[85%] rounded-2xl rounded-bl-md bg-white/6 border border-white/8 px-4 py-2.5">
        <p className="text-sm text-slate-300 leading-relaxed">Ça marche, merci !</p>
      </div>
      <p className="text-xs text-slate-500 mt-2">
        Ton prof répond entre les séances — sans supplément.
      </p>
    </div>
  );
}

/* Visuel 3 — résultats */
const results = [
  { figure: "20/20", label: "au Brevet de maths", who: "Emma L. — 3ème" },
  { figure: "Admis", label: "à l'ESCP", who: "Yanis M. — Prépa HEC" },
  { figure: "8 → 16", label: "de moyenne en 6 mois", who: "Lucas D. — Terminale" },
];

function ResultsVisual() {
  return (
    <div className="flex flex-col gap-3">
      {results.map((r) => (
        <div
          key={r.who}
          className="glass-card rounded-2xl px-6 py-5 flex items-center justify-between gap-4"
        >
          <div>
            <span className="font-display font-extrabold text-2xl text-gold tabular-nums">{r.figure}</span>
            <span className="text-sm text-slate-300 ml-2">{r.label}</span>
          </div>
          <span className="text-xs text-slate-500 text-right flex-shrink-0">{r.who}</span>
        </div>
      ))}
    </div>
  );
}

const rows = [
  {
    title: "Une méthode structurée, pas des recettes.",
    body:
      "Pas de cours générique : on part de ton niveau réel, on fixe des objectifs clairs et on construit une progression sur mesure. Chaque séance s'appuie sur la précédente.",
    bullets: [
      "Diagnostic au premier cours, objectifs définis ensemble",
      "Bilan régulier partagé avec les parents si souhaité",
      "Supports et exercices fournis entre les séances",
    ],
    visual: <ProgressVisual />,
    reversed: false,
  },
  {
    title: "Un prof qui s'investit, même entre les séances.",
    body:
      "Nos profs ne sont pas que des sachants : ils adorent expliquer, et ils restent disponibles par message quand tu bloques sur un exercice. C'est ça, la différence avec un cours ordinaire.",
    bullets: [
      "Réponse à tes questions entre les séances",
      "L'art de rendre simple ce qui paraît complexe",
      "Changement de prof immédiat si le courant ne passe pas",
    ],
    visual: <MessagesVisual />,
    reversed: true,
  },
  {
    title: "Des résultats qui se mesurent.",
    body:
      "Admissions en prépa et en Grande École, notes en progression, confiance retrouvée : nos élèves transforment leur rapport aux maths — et ça se voit sur les bulletins.",
    bullets: [
      "97% de satisfaction sur 475+ cours donnés",
      "1er cours gratuit, remboursé si insatisfait",
    ],
    visual: <ResultsVisual />,
    reversed: false,
  },
];

export default function WhySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <SectionLabel label="Notre méthode" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight">
            Pas juste des cours.
            <br />
            <span className="text-gradient">Une vraie transformation.</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-20 sm:gap-28">
          {rows.map((row) => (
            <div
              key={row.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <ScrollReveal className={row.reversed ? "lg:order-2" : ""}>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug mb-4 max-w-md">
                  {row.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6 max-w-md">{row.body}</p>
                <ul className="flex flex-col gap-3">
                  {row.bullets.map((b) => (
                    <Bullet key={b}>{b}</Bullet>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className={row.reversed ? "lg:order-1" : ""}>
                {row.visual}
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
