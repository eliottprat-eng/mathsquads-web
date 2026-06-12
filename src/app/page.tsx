import type { Metadata } from "next";
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
import ProductDemoSection from "@/components/sections/ProductDemoSection";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "MathSquads",
  url: "https://mathsquads.com",
  email: "contact@mathsquads.com",
  telephone: "+33664195752",
  description:
    "Cours particuliers de mathématiques avec des profs issus des meilleures Grandes Écoles françaises (emlyon, EDHEC, ESCP). Présentiel à Lyon, Lille et Paris, visio partout en France.",
  areaServed: [
    { "@type": "City", name: "Lyon" },
    { "@type": "City", name: "Lille" },
    { "@type": "City", name: "Paris" },
    { "@type": "Country", name: "France" },
  ],
  priceRange: "20€ - 35€ / heure",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <Hero />

      {/* Moment produit — la séance */}
      <ProductDemoSection />

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
