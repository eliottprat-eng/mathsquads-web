import type { Metadata } from "next";
import { cities } from "@/data/profs";

export const metadata: Metadata = {
  title: "Nos profs de maths — emlyon, EDHEC, ESCP",
  description:
    "Découvrez les profs de maths MathSquads : des étudiants d'emlyon, EDHEC et ESCP sélectionnés pour leur excellence et leur pédagogie. Lyon, Lille, Paris & visio.",
  alternates: { canonical: "/profs" },
};

const profsJsonLd = {
  "@context": "https://schema.org",
  "@graph": cities.flatMap((city) =>
    city.profs.map((prof) => ({
      "@type": "Person",
      name: prof.name,
      jobTitle: "Professeur particulier de mathématiques",
      alumniOf: prof.school,
      workLocation: { "@type": "City", name: prof.city },
      worksFor: { "@type": "EducationalOrganization", name: "MathSquads", url: "https://mathsquads.com" },
    }))
  ),
};

export default function ProfsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profsJsonLd) }}
      />
      {children}
    </>
  );
}
