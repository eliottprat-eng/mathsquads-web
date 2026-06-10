import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cours de maths CPGE & Post-bac — par des profs passés par la prépa",
  description:
    "Préparation aux concours et soutien en maths pour CPGE et post-bac, par des profs qui ont vécu la prépa. Méthode concours, khôlles, annales. 1ère heure gratuite.",
  alternates: { canonical: "/cpge-postbac" },
};

export default function CpgePostbacLayout({ children }: { children: React.ReactNode }) {
  return children;
}
