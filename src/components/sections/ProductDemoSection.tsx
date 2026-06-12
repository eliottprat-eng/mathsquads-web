"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pen, Eraser, Square, Type, Mic, MicOff } from "lucide-react";

const lines = [
  { kind: "muted", content: "Énoncé — étudier les variations de f(x) = x² − 4x + 3" },
  { kind: "ink", content: "f ′(x) = 2x − 4" },
  { kind: "ink", content: "f ′(x) = 0  ⟺  x = 2" },
  { kind: "gold", content: "minimum atteint en x = 2" },
] as const;

export default function ProductDemoSection() {
  const reducedMotion = useReducedMotion();

  const appear = (i: number) => ({
    initial: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.4, delay: 0.3 + i * 0.35, ease: "easeOut" as const },
  });

  return (
    <section className="relative pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <SectionLabel label="La séance" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Un vrai cours.
            <br />
            <span className="text-gradient">Pas une visio bricolée.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            Tableau blanc partagé, supports annotés en direct, prof disponible
            entre les séances — en visio comme en présentiel.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card rounded-2xl overflow-hidden shadow-premium">
            {/* Chrome de fenêtre */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </div>
              <div className="text-xs text-slate-400 font-medium hidden sm:block">
                Tableau blanc partagé — séance avec Marin
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                En direct
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Tableau blanc */}
              <div className="md:col-span-2 relative p-6 sm:p-8 min-h-[340px]" style={{ background: "#15233E" }}>
                {/* Grille pointillée de tableau */}
                <div
                  className="absolute inset-0 opacity-[0.35] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(rgba(237,244,255,0.07) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                <div className="relative flex flex-col gap-4 font-display">
                  {lines.map((line, i) => (
                    <motion.div key={i} {...appear(i)}>
                      {line.kind === "muted" && (
                        <p className="text-sm text-slate-400 font-sans">{line.content}</p>
                      )}
                      {line.kind === "ink" && (
                        <p className="text-xl sm:text-2xl text-white font-semibold tracking-tight">
                          {line.content}
                        </p>
                      )}
                      {line.kind === "gold" && (
                        <p className="inline-flex items-center gap-2 text-base sm:text-lg text-gold font-semibold">
                          <span className="inline-block w-8 h-px bg-gold/60" aria-hidden />
                          {line.content}
                        </p>
                      )}
                    </motion.div>
                  ))}

                  {/* Parabole tracée */}
                  <motion.svg
                    viewBox="0 0 260 120"
                    className="w-56 sm:w-64 mt-2"
                    aria-hidden
                    {...appear(3.4)}
                  >
                    {/* axes */}
                    <line x1="16" y1="104" x2="250" y2="104" stroke="rgba(237,244,255,0.18)" strokeWidth="1" />
                    <line x1="16" y1="104" x2="16" y2="8" stroke="rgba(237,244,255,0.18)" strokeWidth="1" />
                    {/* courbe f */}
                    <motion.path
                      d="M 30 16 Q 130 200 232 16"
                      fill="none"
                      stroke="#EDF4FF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.4, delay: 1.7, ease: "easeInOut" }}
                    />
                    {/* minimum */}
                    <motion.circle
                      cx="131"
                      cy="106"
                      r="4.5"
                      fill="#FFBB0A"
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.3, delay: 3 }}
                    />
                    <text x="142" y="98" fill="#FFBB0A" fontSize="11" fontFamily="var(--font-inter)">
                      x = 2
                    </text>
                  </motion.svg>
                </div>

                {/* Barre d'outils */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1.5 rounded-xl bg-navy-900/80 border border-white/8 backdrop-blur-sm">
                  <span className="p-1.5 rounded-lg bg-white/8 text-white" aria-hidden><Pen size={13} /></span>
                  <span className="p-1.5 text-slate-500" aria-hidden><Eraser size={13} /></span>
                  <span className="p-1.5 text-slate-500" aria-hidden><Square size={13} /></span>
                  <span className="p-1.5 text-slate-500" aria-hidden><Type size={13} /></span>
                </div>
              </div>

              {/* Colonne visio */}
              <div className="border-t md:border-t-0 md:border-l border-white/8 p-5 flex flex-col gap-4">
                {/* Tuiles vidéo */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  <div className="relative rounded-xl bg-white/4 border border-white/8 aspect-video flex items-center justify-center">
                    <span className="font-display font-bold text-2xl text-white/80">MD</span>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                      <span className="text-[11px] text-slate-300 font-medium">Marin — prof</span>
                      <Mic size={11} className="text-gold" aria-hidden />
                    </div>
                  </div>
                  <div className="relative rounded-xl bg-white/4 border border-white/8 aspect-video flex items-center justify-center">
                    <span className="font-display font-bold text-2xl text-white/80">E</span>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                      <span className="text-[11px] text-slate-300 font-medium">Emma — élève</span>
                      <MicOff size={11} className="text-slate-500" aria-hidden />
                    </div>
                  </div>
                </div>

                {/* Fil de messages */}
                <div className="flex-1 flex flex-col justify-end gap-2.5">
                  <div className="self-start max-w-[90%] rounded-xl rounded-bl-sm bg-white/6 border border-white/8 px-3 py-2">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Je bloque sur le signe de la dérivée…
                    </p>
                  </div>
                  <div className="self-end max-w-[90%] rounded-xl rounded-br-sm bg-gold/10 border border-gold/25 px-3 py-2">
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Regarde le tableau — on la construit ensemble.
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-600 text-center mt-1">
                    Ton prof reste disponible entre les séances
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
