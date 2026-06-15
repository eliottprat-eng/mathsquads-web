import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, courseSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Cours de maths prépa CPGE & post-bac",
  description:
    "Cours particuliers de maths en prépa CPGE et post-bac (MPSI, PCSI, ECG…). Profs passés par les concours, en visio ou à Lyon. Réservez votre 1ère heure offerte.",
  alternates: { canonical: "/cpge-postbac" },
  openGraph: {
    title: "Cours de maths prépa CPGE & post-bac",
    description:
      "Cours particuliers de maths en prépa CPGE et post-bac. Profs passés par les concours, en visio ou à Lyon. 1ère heure offerte.",
    url: "/cpge-postbac",
  },
};

export default function CpgePostbacLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          courseSchema({
            name: "Cours particuliers de maths — CPGE & Post-Bac",
            description:
              "Préparation et cours particuliers de mathématiques pour les classes préparatoires (MPSI, MP, PCSI, PSI, ECG…) et les études post-bac, orientés concours.",
            url: "/cpge-postbac",
          }),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "CPGE & Post-Bac", url: "/cpge-postbac" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
