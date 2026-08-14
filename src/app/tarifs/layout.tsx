import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, pricingCatalogSchema, type PricingGroup } from "@/lib/structured-data";

// ⚠️ Ces prix doivent rester synchronisés avec les deux endroits où ils sont
// affichés : les <PricingCard> de src/app/tarifs/page.tsx et le tableau
// `pricingCards` de src/components/sections/PricingHomepageSection.tsx.
const pricing: PricingGroup[] = [
  {
    area: "Lyon & Lille",
    areaServed: ["Lyon", "Lille"],
    courseMode: "onsite",
    tiers: [
      { level: "Collège", price: 20 },
      { level: "Lycée", price: 25 },
      { level: "CPGE / Post-bac", price: 30 },
    ],
  },
  {
    area: "Paris",
    areaServed: ["Paris"],
    courseMode: "onsite",
    tiers: [
      { level: "Collège", price: 25 },
      { level: "Lycée", price: 30 },
      { level: "CPGE / Post-bac", price: 35 },
    ],
  },
  {
    area: "Distanciel, toute la France",
    areaServed: ["France"],
    courseMode: "online",
    tiers: [
      { level: "Collège", price: 20 },
      { level: "Lycée", price: 20 },
      { level: "CPGE / Post-bac", price: 25 },
    ],
  },
];

export const metadata: Metadata = {
  title: "Tarifs cours particuliers de maths dès 20€/h",
  description:
    "Nos tarifs de cours particuliers de maths : dès 20€/h, sans abonnement ni frais cachés. Visio ou présentiel à Lyon. Réservez votre 1ère heure offerte.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs cours particuliers de maths dès 20€/h",
    description:
      "Dès 20€/h, sans abonnement ni frais cachés. Visio ou présentiel à Lyon. Réservez votre 1ère heure offerte.",
    url: "/tarifs",
  },
  twitter: {
    title: "Tarifs cours particuliers de maths dès 20€/h",
    description:
      "Dès 20€/h, sans abonnement ni frais cachés. Visio ou présentiel à Lyon. Réservez votre 1ère heure offerte.",
  },
};

export default function TarifsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          pricingCatalogSchema(pricing),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Tarifs", url: "/tarifs" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
