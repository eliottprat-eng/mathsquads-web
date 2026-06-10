"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-2xl glass-card overflow-hidden">
            <div className="relative z-10 text-center py-16 px-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-electric mb-6">
                Rejoins-nous
              </p>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
                Commence maintenant.
                <br />
                <span className="text-gradient">La 1ère heure est gratuite.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                Zéro risque : si le premier cours ne te convient pas, on te rembourse
                sans poser de questions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Link href="/tarifs#booking" className="btn-gold text-lg group">
                  Réserver ma 1ère heure gratuite
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/profs"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
                >
                  Découvrir nos profs
                </Link>
              </div>

              <p className="text-slate-500 text-xs font-medium tracking-wide">
                475+ cours donnés · 97% de satisfaction · Sans engagement · Réponse sous 24h
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
