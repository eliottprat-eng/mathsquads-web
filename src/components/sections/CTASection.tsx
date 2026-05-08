"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Gift } from "lucide-react";

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
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
                <Gift size={14} />
                Offre de bienvenue
              </div>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
                Commence maintenant.
                <br />
                La 1ère heure est gratuite.
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
                Zéro risque. Si ton premier cours ne te satisfait pas à 100%, on te rembourse sans poser de questions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/tarifs#booking"
                  className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-electric bg-white hover:bg-white/95 transition-all duration-300 shadow-xl"
                >
                  Réserver mon cours gratuit
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/profs"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/25 hover:bg-white/10 transition-all duration-300"
                >
                  Découvrir les profs
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
