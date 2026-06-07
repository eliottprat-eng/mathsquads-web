"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check, Quote } from "lucide-react";

const beforeItems = [
  "Des profs lambda trouvés sur Superprof, qualité aléatoire",
  "Des tarifs opaques, souvent 40-60€/h sans garantie",
  "Aucun suivi, chaque séance repart de zéro",
  "L'élève perd confiance, ne comprend toujours pas",
];

const afterItems = [
  "Des profs issus du Top 5 des grandes écoles françaises (emlyon)",
  "Dès 20€/h, 1ère heure 100% gratuite, zéro risque",
  "Suivi personnalisé, bilan régulier, objectifs clairs",
  "Résultats concrets : notes en hausse, confiance retrouvée",
];

export default function BeforeAfterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-premium">
          {/* AVANT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-10 flex flex-col gap-6"
            style={{ background: "#1E293B" }}
          >
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-red-400">
              Avant MathSquads
            </div>
            <ul className="flex flex-col gap-3">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={11} className="text-red-400" />
                  </div>
                  <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-2 border-red-500/30 pl-4 mt-auto">
              <div className="flex gap-1 mb-2">
                <Quote size={14} className="text-red-400/40" />
              </div>
              <p className="text-slate-400 italic text-sm leading-relaxed">
                Je passais d&apos;un prof à l&apos;autre, rien ne marchait. J&apos;étais découragé.
              </p>
              <cite className="text-xs text-slate-600 mt-2 block not-italic">
                — Thomas R., Terminale S
              </cite>
            </blockquote>
          </motion.div>

          {/* APRÈS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-10 flex flex-col gap-6"
            style={{ background: "#1E3A5F" }}
          >
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-green-400">
              Après MathSquads
            </div>
            <ul className="flex flex-col gap-3">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-green-400" />
                  </div>
                  <span className="text-slate-200 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-2 border-green-500/30 pl-4 mt-auto">
              <div className="flex gap-1 mb-2">
                <Quote size={14} className="text-green-400/40" />
              </div>
              <p className="text-slate-200 italic text-sm leading-relaxed">
                En 3 séances avec Marin j&apos;avais tout compris. 17/20 au bac.
              </p>
              <cite className="text-xs text-slate-400 mt-2 block not-italic">
                — Emma L., Collégienne
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
