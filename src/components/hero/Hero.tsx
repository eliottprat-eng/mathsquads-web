"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, MapPin, Wifi } from "lucide-react";
import MathParticles from "@/components/MathParticles";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const stats = [
  { value: "475+", label: "cours donnés" },
  { value: "100%", label: "satisfaits" },
  { value: "20€",  label: "dès / heure"  },
  { value: "Top 5",label: "écoles FR"    },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Fond */}
      <div className="absolute inset-0 bg-navy-900" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 60%, rgba(91,141,239,0.1) 0%, transparent 45%), radial-gradient(circle at 80% 25%, rgba(255,187,10,0.07) 0%, transparent 40%)",
        }}
      />

      {/* Particules mathématiques */}
      <MathParticles />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── TEXTE GAUCHE ── */}
          <div className="flex-1 max-w-lg">

            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-electric mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Cours particuliers de maths — Lyon &amp; toute la France
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-extrabold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
            >
              Les maths{" "}
              <span className="text-gradient">accessibles</span>
              {" "}à tous.
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="text-lg text-slate-400 leading-relaxed mb-8">
              Des profs issus d&apos;emlyon et des meilleures grandes écoles de France,
              pour progresser vraiment — dès{" "}
              <span className="text-white font-semibold">20€/h</span>.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/tarifs#booking" className="btn-gold text-base group">
                Trouver mon prof
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/profs"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-slate-300 border border-white/10 hover:border-electric/40 hover:text-white transition-all duration-300"
              >
                Voir les profs
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.5)}
              className="grid grid-cols-4 gap-3 pb-8 mb-8 border-b border-white/8"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-extrabold text-xl text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-sm text-slate-300 font-medium">5/5</span>
                <span className="text-sm text-slate-500">· 100% d&apos;élèves satisfaits</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-electric" />
                  Présentiel à Lyon
                </span>
                <span className="flex items-center gap-1.5">
                  <Wifi size={13} className="text-electric" />
                  Visio partout en France
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── PHOTO DROITE — cadre contenu ── */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 -mr-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow derrière */}
              <div
                className="absolute -inset-3 rounded-3xl blur-2xl opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(circle, #5B8DEF 0%, #FFBB0A 80%)" }}
              />

              {/* Cadre photo */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-premium"
                style={{ width: 420, height: 520 }}
              >
                <Image
                  src="https://static.wixstatic.com/media/5bdef8_5142b68eec5d4c70a2ee71d2764e3fde~mv2.avif"
                  alt="Cours particuliers de maths — prof et élève"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Overlay bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />

                {/* Badge témoignage bas */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-3 border border-white/10"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
                >
                  <div className="flex gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-xs text-white font-medium leading-snug mb-1.5">
                    &ldquo;Admis à l&apos;ESCP grâce à MathSquads.&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-xs font-bold text-gold">Y</div>
                    <div className="text-xs text-slate-300">Yanis M. · Prépa HEC → ESCP</div>
                  </div>
                </motion.div>
              </div>

              {/* Badge promo haut-droite */}
              <motion.div
                className="absolute -top-3 -right-3 glass-card rounded-xl px-3 py-2 border border-gold/30 shadow-glow-gold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.45, type: "spring", stiffness: 200 }}
              >
                <div className="text-xs text-gold font-semibold">🎁 1ère heure</div>
                <div className="text-white font-bold text-sm">gratuite</div>
              </motion.div>

              {/* Badge école bas-gauche */}
              <motion.div
                className="absolute -bottom-3 -left-3 glass-card rounded-xl px-3 py-2 border border-electric/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.45, duration: 0.45, type: "spring", stiffness: 200 }}
              >
                <div className="text-xs text-slate-400">emlyon</div>
                <div className="text-white font-bold text-xs">Top 5 🎓</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
