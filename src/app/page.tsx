import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { homeFaqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/structured-data";
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

export const metadata: Metadata = {
  title: {
    absolute: "MathSquads — Cours de maths à Lyon, Paris & en ligne",
  },
  description:
    "Cours particuliers de maths dès 20€/h avec des profs des meilleures grandes écoles. Visio partout en France, présentiel à Lyon. Réservez votre 1ère heure offerte.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MathSquads — Cours de maths à Lyon, Paris & en ligne",
    description:
      "Cours particuliers de maths dès 20€/h avec des profs des meilleures grandes écoles. Visio partout en France, présentiel à Lyon. 1ère heure offerte.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

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
