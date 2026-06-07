import Hero from "@/components/hero/Hero";
import WhySection from "@/components/sections/WhySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PresenceSection from "@/components/sections/PresenceSection";
import CTASection from "@/components/sections/CTASection";
import ConstatSection from "@/components/sections/ConstatSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import SchoolLogosSection from "@/components/sections/SchoolLogosSection";
import ForWhoSection from "@/components/sections/ForWhoSection";
import PricingHomepageSection from "@/components/sections/PricingHomepageSection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* 01 — Le constat */}
      <ConstatSection />

      {/* Avant / Après (complément du constat) */}
      <BeforeAfterSection />

      {/* 02 — Notre méthode */}
      <WhySection />

      {/* Pour qui ? */}
      <ForWhoSection />

      {/* 03 — Nos profs */}
      <SchoolLogosSection />

      {/* 04 — Témoignages */}
      <TestimonialsSection />

      {/* 05 — Nos tarifs */}
      <PricingHomepageSection />

      {/* 06 — FAQ */}
      <FAQSection />

      {/* Présence géographique */}
      <PresenceSection />

      {/* 07 — Rejoins-nous */}
      <CTASection />
    </>
  );
}
