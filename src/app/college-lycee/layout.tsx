import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, courseSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Cours de maths collège et lycée",
  description:
    "Cours particuliers de maths au collège et au lycée, du Brevet au Bac. Profs de grandes écoles, en visio ou à Lyon. Réservez votre 1ère heure offerte.",
  alternates: { canonical: "/college-lycee" },
  openGraph: {
    title: "Cours de maths collège & lycée — du Brevet au Bac",
    description:
      "Cours particuliers de maths au collège et au lycée, du Brevet au Bac. Profs de grandes écoles, en visio ou à Lyon. 1ère heure offerte.",
    url: "/college-lycee",
  },
};

export default function CollegeLyceeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          courseSchema({
            name: "Cours particuliers de maths — Collège & Lycée",
            description:
              "Soutien et cours particuliers de mathématiques pour les élèves de collège (6ème à 3ème) et de lycée (Seconde à Terminale), du Brevet au Bac.",
            url: "/college-lycee",
          }),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Collège & Lycée", url: "/college-lycee" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
