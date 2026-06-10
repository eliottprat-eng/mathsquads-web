import type { Metadata } from "next";
import CityLanding from "@/components/city/CityLanding";

export const metadata: Metadata = {
  title: "Cours particuliers de maths à Lyon — dès 20€/h, 1ère heure gratuite",
  description:
    "Cours particuliers de maths à Lyon avec des profs issus d'emlyon business school. Présentiel dès 20€/h, du collège à la prépa. 1ère heure gratuite.",
  alternates: { canonical: "/cours-maths-lyon" },
};

const faqs = [
  {
    q: "Où ont lieu les cours de maths à Lyon ?",
    a: "Chez toi, dans un espace de travail adapté (bibliothèque, espace dédié) ou en visio si tu préfères. On s'adapte à ton organisation, partout dans Lyon et sa proche banlieue.",
  },
  {
    q: "Combien coûte un cours de maths à Lyon ?",
    a: "20€/h au collège, 25€/h au lycée et 30€/h en CPGE et post-bac, en présentiel. En visio, les tarifs descendent à 20€/h jusqu'à la Terminale. Et la première heure est gratuite.",
  },
  {
    q: "Qui sont les profs MathSquads à Lyon ?",
    a: "Des étudiants d'emlyon business school, sélectionnés pour leur excellence académique et leur pédagogie — dont les deux co-fondateurs de MathSquads.",
  },
  {
    q: "Et si j'habite en dehors de Lyon ?",
    a: "Nos cours en visio (tableau blanc interactif partagé) sont disponibles partout en France, dès 20€/h, avec la même qualité de suivi.",
  },
];

export default function CoursMathsLyonPage() {
  return (
    <CityLanding
      city="Lyon"
      intro="Des profs issus d'emlyon business school, chez toi ou en visio, du collège à la prépa. Dès 20€/h, première heure gratuite."
      tiers={[
        { level: "Collège", price: 20, details: "6ème → 3ème" },
        { level: "Lycée", price: 25, details: "2nde → Terminale" },
        { level: "CPGE / Post-bac", price: 30, details: "Prépa, Licence, BTS..." },
      ]}
      faqs={faqs}
    />
  );
}
