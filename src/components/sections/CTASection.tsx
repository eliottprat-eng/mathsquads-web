"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Users } from "lucide-react";

const socialProofItems = ["475+ élèves", "100% satisfaits", "Profs issus du Top 5"];

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-dark via-electric to-blue-400 opacity-90" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              }}
            />
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Floating symbols */}
            {["∑", "π", "√", "∫"].map((s, i) => (
              <motion.div
                key={i}
                className="absolute text-white/10 font-display font-black select-none pointer-events-none"
                style={{
                  fontSize: 60,
                  top: `${[10, 60, 20, 70][i]}%`,
                  left: `${[5, 15, 80, 88][i]}%`,
                }}
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.8 }}
              >
                {s}
              </motion.div>
            ))}

            <div className="relative z-10 text-center py-16 px-8">
              {/* Section label */}
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/60 mb-4">
                07 — Rejoins-nous
              </div>

              {/* Social proof band */}
              <motion.div
                className="inline-flex flex-wrap items-center justify-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Users size={14} className="text-white/70" />
                {socialProofItems.map((item, i) => (
                  <span key={i} className="flex items-center gap-3 text-white text-xs font-semibold">
                    {item}
                    {i < socialProofItems.length - 1 && (
                      <span className="text-white/40">·</span>
                    )}
                  </span>
                ))}
              </motion.div>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
                Commence maintenant.
                <br />
                <span className="text-white/90">La 1ère heure est gratuite.</span>
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
                Zéro risque. Si ton premier cours ne te satisfait pas à 100%, on te rembourse sans poser de questions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
                {/* Primary CTA with pulse */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Link
                    href="/tarifs#booking"
                    className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-electric bg-white hover:bg-white/95 transition-all duration-300 shadow-xl"
                  >
                    Réserver ma 1ère heure gratuite
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <Link
                  href="/profs"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/25 hover:bg-white/10 transition-all duration-300"
                >
                  Découvrir nos profs
                </Link>
              </div>

              <p className="text-white/50 text-xs font-medium tracking-wide">
                Gratuit · Sans engagement · Réponse sous 24h
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
