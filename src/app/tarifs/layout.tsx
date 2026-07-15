import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

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
};

export default function TarifsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Tarifs", url: "/tarifs" },
        ])}
      />
      {children}
    </>
  );
}
