"use client";

import { motion } from "framer-motion";
import PricingCard from "@/components/pricing/PricingCard";
import BookingForm from "@/components/pricing/BookingForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Gift, Shield, Clock, Zap } from "lucide-react";
import FloatingMathSymbols from "@/components/ui/FloatingMathSymbols";

export default function TarifsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <FloatingMathSymbols />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 30%, rgba(255,187,10,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Promo banner */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl mb-6 text-sm font-semibold text-navy-900"
              style={{ background: "linear-gradient(135deg, #FFBB0A, #FFD147)" }}
            >
              <Gift size={16} />
              Promo — La 1ère heure de cours est GRATUITE pour tous les premiers arrivants
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
              Des tarifs <span className="text-gradient">transparents</span>
              <br />
              et accessibles
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mx-auto">
              Pas de frais cachés, pas d&apos;abonnement. Tu paies à l&apos;heure, tu annules quand tu veux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Gift, label: "1ère heure offerte", color: "#FFBB0A" },
              { icon: Shield, label: "100% satisfait ou remboursé", color: "#10B981" },
              { icon: Clock, label: "Annulation flexible", color: "#5B8DEF" },
              { icon: Zap, label: "Réponse sous 24h", color: "#8B5CF6" },
            ].map((g, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-4 border border-white/5 text-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                    style={{ background: `${g.color}18`, border: `1px solid ${g.color}25` }}
                  >
                    <g.icon size={18} style={{ color: g.color }} />
                  </div>
                  <div className="text-xs font-medium text-slate-300">{g.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Choisissez votre formule
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              title="Lyon & Lille"
              icon="map"
              description="Cours en présentiel chez toi ou dans un espace dédié à Lyon et Lille"
              tiers={[
                { level: "Collège", price: 20, details: "6ème → 3ème" },
                { level: "Lycée", price: 25, details: "2nde → Terminale" },
                { level: "CPGE / Post-bac", price: 30, details: "Prépa, Licence, BTS..." },
              ]}
              delay={0}
            />
            <PricingCard
              title="Paris"
              icon="map"
              description="Cours en présentiel dans la capitale — profs issus des meilleures écoles"
              tiers={[
                { level: "Collège", price: 25, details: "6ème → 3ème" },
                { level: "Lycée", price: 30, details: "2nde → Terminale" },
                { level: "CPGE / Post-bac", price: 35, details: "Prépa, Licence, BTS..." },
              ]}
              delay={0.1}
            />
            <PricingCard
              title="Distanciel — Toute la France"
              icon="globe"
              description="Sessions visio haute qualité, tableau blanc partagé, supports numériques"
              tiers={[
                { level: "Collège", price: 20, details: "6ème → 3ème" },
                { level: "Lycée", price: 20, details: "2nde → Terminale" },
                { level: "CPGE / Post-bac", price: 25, details: "Prépa, Licence, BTS..." },
              ]}
              highlight
              delay={0.2}
            />
          </div>

          {/* Comparison note */}
          <ScrollReveal delay={0.3}>
            <div className="mt-6 glass-card rounded-2xl p-5 border border-electric/15 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0">
                <Zap size={14} className="text-electric" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm mb-1">Pourquoi les tarifs visio sont plus bas ?</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  En visio, on économise les frais de déplacement et on peut optimiser les créneaux — on vous répercute ces économies directement. La qualité du cours reste identique : supports partagés, tableau blanc interactif, enregistrement possible.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking form */}
      <section id="booking" className="py-16 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <div className="section-tag mb-4 inline-flex">Réservation</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Réserve ton cours
            </h2>
            <p className="text-slate-400 mt-3">
              1ère heure gratuite — on revient vers toi sous 24h
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <BookingForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
