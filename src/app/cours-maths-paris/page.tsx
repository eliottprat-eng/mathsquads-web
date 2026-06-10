import type { Metadata } from "next";
import CityLanding from "@/components/city/CityLanding";

export const metadata: Metadata = {
  title: "Cours particuliers de maths à Paris — dès 25€/h, 1ère heure gratuite",
  description:
    "Cours particuliers de maths à Paris avec des profs issus de l'ESCP. Présentiel dès 25€/h, du collège à la prépa. 1ère heure gratuite.",
  alternates: { canonical: "/cours-maths-paris" },
};

const faqs = [
  {
    q: "Où ont lieu les cours de maths à Paris ?",
    a: "Chez toi, dans un espace de travail adapté (bibliothèque, espace dédié) ou en visio si tu préfères. On s'adapte à ton organisation, partout dans Paris intra-muros.",
  },
  {
    q: "Combien coûte un cours de maths à Paris ?",
    a: "25€/h au collège, 30€/h au lycée et 35€/h en CPGE et post-bac, en présentiel. En visio, les tarifs descendent à 20€/h jusqu'à la Terminale. Et la première heure est gratuite.",
  },
  {
    q: "Qui sont les profs MathSquads à Paris ?",
    a: "Des étudiants de l'ESCP business school, sélectionnés pour leur excellence académique et leur pédagogie.",
  },
  {
    q: "Et si j'habite en dehors de Paris ?",
    a: "Nos cours en visio (tableau blanc interactif partagé) sont disponibles partout en France, dès 20€/h, avec la même qualité de suivi.",
  },
];

export default function CoursMathsParisPage() {
  return (
    <CityLanding
      city="Paris"
      intro="Des profs issus de l'ESCP business school, chez toi ou en visio, du collège à la prépa. Dès 25€/h, première heure gratuite."
      tiers={[
        { level: "Collège", price: 25, details: "6ème → 3ème" },
        { level: "Lycée", price: 30, details: "2nde → Terminale" },
        { level: "CPGE / Post-bac", price: 35, details: "Prépa, Licence, BTS..." },
      ]}
      faqs={faqs}
    />
  );
}
