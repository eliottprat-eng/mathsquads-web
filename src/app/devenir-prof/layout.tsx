import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Devenir prof de maths",
  description:
    "Rejoignez MathSquads pour donner des cours particuliers de maths en visio ou à Lyon. Rémunération attractive, flexibilité totale. Envoyez votre candidature.",
  alternates: { canonical: "/devenir-prof" },
  openGraph: {
    title: "Devenir prof de maths chez MathSquads",
    description:
      "Donnez des cours particuliers de maths en visio ou à Lyon. Rémunération attractive, flexibilité totale. Envoyez votre candidature.",
    url: "/devenir-prof",
  },
};

export default function DevenirProfLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Devenir prof", url: "/devenir-prof" },
        ])}
      />
      {children}
    </>
  );
}
