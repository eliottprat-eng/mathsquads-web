import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Nos profs de maths issus des grandes écoles",
  description:
    "Rencontrez nos profs de maths issus des grandes écoles d'ingénieurs et de commerce (Mines Saint-Étienne, emlyon, ESCP, EDHEC…). Cours en visio ou à Lyon. Réservez votre 1ère heure offerte.",
  alternates: { canonical: "/profs" },
  openGraph: {
    title: "Nos profs de maths issus des grandes écoles",
    description:
      "Nos profs de maths sont issus des grandes écoles d'ingénieurs et de commerce. Cours en visio ou à Lyon. 1ère heure offerte.",
    url: "/profs",
  },
  twitter: {
    title: "Nos profs de maths issus des grandes écoles",
    description:
      "Nos profs de maths sont issus des grandes écoles d'ingénieurs et de commerce. Cours en visio ou à Lyon. 1ère heure offerte.",
  },
};

export default function ProfsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Nos profs", url: "/profs" },
        ])}
      />
      {children}
    </>
  );
}
