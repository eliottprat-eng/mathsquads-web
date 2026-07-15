"use client";

import { motion } from "framer-motion";
import PricingCard from "@/components/pricing/PricingCard";
import BookingForm from "@/components/pricing/BookingForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Gift, Shield, Clock, Zap } from "lucide-react";

const guarantees = [
  { icon: Gift, label: "1ère heure offerte", color: "#C99A3E" },
  { icon: Shield, label: "100% satisfait ou remboursé", color: "#4F7A5E" },
  { icon: Clock, label: "Annulation flexible", color: "#1B2A44" },
  { icon: Zap, label: "Réponse sous 24h", color: "#E1613E" },
];

export default function TarifsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden bg-cream">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Promo banner */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 text-sm font-semibold text-white bg-gold">
              <Gift size={16} />
              Promo : la 1ère heure de cours est gratuite pour tous les premiers arrivants
            </div>

            <h1 className="font-display font-semibold text-5xl sm:text-6xl text-ink leading-tight mb-6">
              Des tarifs <span className="italic text-coral">transparents</span>
              <br />
              et accessibles
            </h1>
            <p className="text-xl text-ink/60 max-w-xl mx-auto">
              Pas de frais cachés, pas d&apos;abonnement. Tu paies à l&apos;heure, tu annules quand tu veux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {guarantees.map((g, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card p-4 text-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                    style={{ background: `${g.color}14`, border: `1px solid ${g.color}25` }}
                  >
                    <g.icon size={18} style={{ color: g.color }} />
                  </div>
                  <div className="text-xs font-medium text-ink/70">{g.label}</div>
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
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
              Choisis ta formule
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
              description="Cours en présentiel dans la capitale, profs issus des meilleures écoles"
              tiers={[
                { level: "Collège", price: 25, details: "6ème → 3ème" },
                { level: "Lycée", price: 30, details: "2nde → Terminale" },
                { level: "CPGE / Post-bac", price: 35, details: "Prépa, Licence, BTS..." },
              ]}
              delay={0.1}
            />
            <PricingCard
              title="Distanciel, toute la France"
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
            <div className="mt-6 card p-5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                <Zap size={14} className="text-coral" />
              </div>
              <div>
                <div className="font-semibold text-ink text-sm mb-1">Pourquoi les tarifs visio sont plus bas ?</div>
                <p className="text-xs text-ink/55 leading-relaxed">
                  En visio, on économise les frais de déplacement et on peut optimiser les créneaux : on te répercute ces économies directement. La qualité du cours reste identique, avec supports partagés, tableau blanc interactif et enregistrement possible.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking form */}
      <section id="booking" className="py-16 scroll-mt-20 bg-cream-soft">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <div className="section-tag mb-4">Réservation</div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
              Réserve ton cours
            </h2>
            <p className="text-ink/60 mt-3">
              1ère heure gratuite : on revient vers toi sous 24h
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
