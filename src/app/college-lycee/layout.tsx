import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cours de maths Collège & Lycée — de la 6ème à la Terminale",
  description:
    "Soutien en maths pour collégiens et lycéens : méthode claire, suivi personnalisé et profs issus des meilleures Grandes Écoles. Dès 20€/h, 1ère heure gratuite.",
  alternates: { canonical: "/college-lycee" },
};

export default function CollegeLyceeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
