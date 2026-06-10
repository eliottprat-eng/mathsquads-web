import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import ProfCard from "@/components/profs/ProfCard";
import PricingCard from "@/components/pricing/PricingCard";
import CTASection from "@/components/sections/CTASection";
import { cities } from "@/data/profs";

interface CityFaq {
  q: string;
  a: string;
}

interface CityLandingProps {
  city: "Lyon" | "Lille" | "Paris";
  intro: string;
  tiers: { level: string; price: number; details?: string }[];
  faqs: CityFaq[];
}

export default function CityLanding({ city, intro, tiers, faqs }: CityLandingProps) {
  const cityProfs = cities.find((c) => c.label === city)?.profs ?? [];

  return (
    <>
      {/* Hero local */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 40%, rgba(91,141,239,0.12) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-electric mb-6">
            <MapPin size={14} />
            Cours particuliers de maths à {city}
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white leading-tight mb-6">
            Cours de maths à{" "}
            <span className="text-gradient">{city}</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8">{intro}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/tarifs#booking" className="btn-gold text-base group">
              Réserver ma 1ère heure gratuite
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/profs"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-slate-300 border border-white/10 hover:border-electric/40 hover:text-white transition-all duration-300"
            >
              Voir tous les profs
            </Link>
          </div>
        </div>
      </section>

      {/* Profs de la ville */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-10">
            Nos profs à {city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityProfs.map((prof, i) => (
              <ProfCard key={prof.name} {...prof} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs locaux */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-10">
            Nos tarifs à {city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PricingCard
              title={`Présentiel — ${city}`}
              icon="map"
              description={`Cours en présentiel chez toi ou dans un espace dédié à ${city}`}
              tiers={tiers}
              delay={0}
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
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* FAQ locale */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-10">
            Questions fréquentes — {city}
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-white/6 bg-white/2 open:border-electric/40 open:bg-electric/5 transition-colors"
              >
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-slate-300 group-open:text-white list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-slate-500 group-open:text-electric transition-transform group-open:rotate-45 text-lg leading-none" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
