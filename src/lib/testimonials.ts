// Source unique des témoignages, partagée entre la section Témoignages et le bloc
// Avant/Après de la home.
//
// Les deux blocs vivaient auparavant chacun de leur côté, et se contredisaient :
// « Emma L., collégienne » témoignait d'un 20/20 au Brevet dans l'un et d'un 17/20
// au bac dans l'autre. Le bloc Avant/Après cite désormais un élève de cette liste,
// avec le résultat que sa fiche annonce.

export type ResultIcon = "trophy" | "graduation" | "trending" | "shield";

export interface Testimonial {
  /** Identifiant stable, utilisé pour référencer un élève depuis un autre bloc. */
  id: string;
  name: string;
  grade: string;
  result: string;
  resultIcon: ResultIcon;
  avatar: string;
  color: string;
  stars: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "emma",
    name: "Emma L.",
    grade: "Collégienne, 3ème",
    result: "20/20 au Brevet",
    resultIcon: "trophy",
    avatar: "E",
    color: "#1B2A44",
    stars: 5,
    quote:
      "Une méthode claire, des supports complets, et un prof toujours à l'écoute. Je ne comprenais rien aux équations avant, maintenant j'adore résoudre des problèmes. J'ai eu 20/20 au Brevet et je n'aurais jamais cru ça possible il y a 6 mois.",
  },
  {
    id: "yanis",
    name: "Yanis M.",
    grade: "Prépa HEC → Admis ESCP",
    result: "Admis à l'ESCP",
    resultIcon: "graduation",
    avatar: "Y",
    color: "#C99A3E",
    stars: 5,
    quote:
      "Grâce à MathSquads j'ai pu combler mes lacunes en maths avant les écrits. Mon prof comprenait exactement où je bloquais et repartait toujours de la base sans me faire sentir nul. Résultat : admis à l'ESCP.",
  },
  {
    id: "lucas",
    name: "Lucas D.",
    grade: "Terminale, spé maths",
    result: "De 8 à 16 en maths",
    resultIcon: "trending",
    avatar: "L",
    color: "#4F7A5E",
    stars: 5,
    quote:
      "En septembre j'avais 8 de moyenne. En mars j'étais à 16. Marin a tout simplement changé ma façon de voir les maths : au lieu de réciter des formules, je comprends maintenant pourquoi elles marchent.",
  },
  {
    id: "sophie",
    name: "Sophie L.",
    grade: "Mère d'élève, Lycée (Lyon)",
    result: "Confiance retrouvée",
    resultIcon: "shield",
    avatar: "S",
    color: "#E1613E",
    stars: 5,
    quote:
      "Ma fille détestait les maths. Après 4 séances avec MathSquads, elle nous demande d'elle-même à faire ses exercices. La qualité des profs est vraiment différente, on sent qu'ils adorent enseigner.",
  },
];

/** L'élève dont le bloc Avant/Après raconte le parcours, des deux côtés. */
const beforeAfterStudent = testimonials.find((t) => t.id === "lucas")!;

export const beforeAfter = {
  author: `${beforeAfterStudent.name}, ${beforeAfterStudent.grade}`,
  before:
    "Je passais d'un prof à l'autre, rien ne marchait. J'apprenais les formules par cœur sans jamais comprendre à quoi elles servaient.",
  after:
    "En quelques séances, j'ai enfin compris pourquoi les formules marchent. Je suis passé de 8 à 16 de moyenne.",
};
