// Contenu des pages locales /cours-maths-paris et /cours-maths-lille, rendues par
// src/components/city/CityPage.tsx. Les profs viennent de src/lib/profs.ts.
//
// ⚠️ Les prix ci-dessous doivent rester synchronisés avec la grille de
// src/app/tarifs/page.tsx (même liste que dans src/app/tarifs/layout.tsx).

import type { Faq } from "@/lib/faqs";

export interface PriceTier {
  level: string;
  price: number;
}

export interface CityPageData {
  path: string;
  city: string;
  /** Doit correspondre à `label` dans `cities` de src/lib/profs.ts. */
  profsKey: string;
  profsAdjective: string;
  title: string;
  metaDescription: string;
  ogDescription: string;
  heroTitle: string;
  heroHighlight: string;
  heroText: string;
  datePublished: string;
  dateModified: string;
  dateModifiedDisplay: string;
  sections: { title: string; paragraphs: string[] }[];
  levelsIntro: string;
  levels: { label: string; text: string }[];
  onsiteTiers: PriceTier[];
  onlineTiers: PriceTier[];
  faqHeading: string;
  faqs: Faq[];
}

const onlineTiers: PriceTier[] = [
  { level: "Collège", price: 20 },
  { level: "Lycée", price: 20 },
  { level: "CPGE / Post-bac", price: 25 },
];

export const parisPage: CityPageData = {
  path: "/cours-maths-paris",
  city: "Paris",
  profsKey: "Paris",
  profsAdjective: "parisiens",
  title: "Cours de maths à Paris dès 25€/h",
  metaDescription:
    "Cours particuliers de maths à Paris : profs de l'ESCP, du collège à la prépa, à domicile ou en visio. Dès 25€/h en présentiel, 20€/h en visio. 1ère heure offerte.",
  ogDescription:
    "Profs de grandes écoles, du collège à la prépa, à domicile à Paris ou en visio. Dès 25€/h en présentiel. 1ère heure offerte.",
  heroTitle: "Cours de maths",
  heroHighlight: "à Paris",
  heroText:
    "Des profs de grandes écoles pour progresser en maths, chez vous à Paris ou en visio. Du collège à la prépa, dès 25€/h en présentiel et 20€/h en visio.",
  datePublished: "2026-10-02",
  dateModified: "2026-10-02",
  dateModifiedDisplay: "2 octobre 2026",
  sections: [
    {
      title: "Des cours de maths à Paris, là où vous en avez besoin",
      paragraphs: [
        "À Paris, le niveau d'exigence est élevé dès le collège, et la pression monte vite au lycée puis en classe préparatoire. Un élève qui décroche en maths à la rentrée peut se retrouver dépassé en quelques semaines, et le rythme des établissements parisiens laisse peu de temps pour rattraper seul.",
        "MathSquads propose des cours particuliers de maths à Paris en présentiel, à votre domicile ou dans un lieu adapté, et en visio pour les créneaux serrés. Le prof se déplace dans les arrondissements du centre comme dans les 15e, 16e ou 17e, et dans les communes limitrophes comme Neuilly-sur-Seine, Boulogne-Billancourt ou Levallois-Perret.",
      ],
    },
    {
      title: "Des profs de l'ESCP, passés par les concours",
      paragraphs: [
        "Nos profs parisiens étudient à l'ESCP business school, dont l'histoire est liée à Paris. Ils sont passés par la classe préparatoire et par la pression des concours : ils savent précisément ce qu'on attend d'un élève, et comment le dire simplement.",
        "Le premier échange sert à cerner le niveau, le programme suivi et l'objectif (remise à niveau, mention au Bac, concours). Nous proposons ensuite le prof le plus adapté. Si le courant ne passe pas, nous en proposons un autre sans discussion.",
      ],
    },
    {
      title: "Un accompagnement pour les lycées et prépas parisiens",
      paragraphs: [
        "Nos profs s'adaptent au programme et au rythme de l'établissement de l'élève, qu'il soit scolarisé dans un grand lycée du Quartier latin, à Janson-de-Sailly, à Condorcet ou dans un établissement de quartier. Pour les étudiants en classe préparatoire, le travail porte sur la méthode, les exercices type concours et la préparation aux colles.",
      ],
    },
    {
      title: "Combien coûte un cours de maths à Paris ?",
      paragraphs: [
        "Pas d'abonnement, pas de frais cachés : vous payez à la séance et vous annulez quand vous le souhaitez. Les tarifs à Paris vont de 25€/h au collège à 35€/h en CPGE et post-bac, et de 20€/h à 25€/h en visio. La première heure est offerte, sans engagement.",
      ],
    },
  ],
  levelsIntro: "Quel que soit le niveau, le cours est construit autour de l'élève :",
  levels: [
    {
      label: "Collège (6ème à 3ème)",
      text: "reprise des bases, calcul, géométrie, préparation au Brevet.",
    },
    {
      label: "Lycée (Seconde à Terminale)",
      text: "spécialité maths, maths expertes et complémentaires, Bac et Grand Oral.",
    },
    {
      label: "Prépa CPGE & post-bac",
      text: "MPSI, PCSI, ECG, entraînement aux colles et aux concours.",
    },
  ],
  onsiteTiers: [
    { level: "Collège", price: 25 },
    { level: "Lycée", price: 30 },
    { level: "CPGE / Post-bac", price: 35 },
  ],
  onlineTiers,
  faqHeading: "Questions fréquentes : cours de maths à Paris",
  faqs: [
    {
      q: "Combien coûtent les cours de maths à Paris ?",
      a: "En présentiel à Paris, les cours coûtent 25€/h au collège, 30€/h au lycée et 35€/h en CPGE et post-bac. En visio, comptez 20€/h au collège et au lycée, 25€/h en prépa. Pas d'abonnement ni de frais cachés, et la première heure est offerte.",
    },
    {
      q: "Les profs se déplacent-ils à domicile à Paris ?",
      a: "Oui. Les cours en présentiel ont lieu à votre domicile ou dans un lieu adapté, dans Paris et les communes limitrophes. Si votre emploi du temps est serré, vous pouvez passer en visio d'une séance à l'autre.",
    },
    {
      q: "Qui sont les profs de maths à Paris ?",
      a: "Ce sont des étudiants de l'ESCP business school, passés par la classe préparatoire et les concours. Leurs profils, leur école et leur spécialité sont détaillés sur la page de l'équipe.",
    },
    {
      q: "Pour quels niveaux donnez-vous des cours à Paris ?",
      a: "Du collège (6ème à 3ème) au lycée (Seconde à Terminale, spécialité maths, maths expertes), jusqu'aux classes préparatoires (MPSI, PCSI, ECG…) et au post-bac.",
    },
    {
      q: "La première heure est-elle vraiment gratuite ?",
      a: "Oui. La première séance est 100% offerte et sans engagement. Si elle ne vous convient pas, vous ne payez rien et vous êtes libre d'arrêter.",
    },
    {
      q: "Puis-je changer de prof si le courant ne passe pas ?",
      a: "Oui, sans difficulté. Dites-nous ce qui ne convient pas et nous vous proposons un autre prof rapidement.",
    },
    {
      q: "Comment réserver un cours de maths à Paris ?",
      a: "Remplissez le formulaire de réservation sur la page tarifs, ou écrivez-nous à lamathsquad@gmail.com. Nous vous répondons sous 24h pour organiser la première heure.",
    },
  ],
};

export const lillePage: CityPageData = {
  path: "/cours-maths-lille",
  city: "Lille",
  profsKey: "Lille",
  profsAdjective: "lillois",
  title: "Cours de maths à Lille dès 20€/h",
  metaDescription:
    "Cours particuliers de maths à Lille : profs de l'EDHEC, du collège à la prépa, à domicile ou en visio. Dès 20€/h, 1ère heure offerte, sans abonnement.",
  ogDescription:
    "Profs de grandes écoles, du collège à la prépa, à domicile à Lille ou en visio. Dès 20€/h. 1ère heure offerte.",
  heroTitle: "Cours de maths",
  heroHighlight: "à Lille",
  heroText:
    "Des profs de l'EDHEC pour progresser en maths, chez vous à Lille ou en visio. Du collège à la prépa, dès 20€/h, première heure offerte.",
  datePublished: "2026-10-02",
  dateModified: "2026-10-02",
  dateModifiedDisplay: "2 octobre 2026",
  sections: [
    {
      title: "Des cours de maths à Lille et dans la métropole",
      paragraphs: [
        "Les maths sont la matière qui pèse le plus sur l'orientation, et beaucoup d'élèves lillois décrochent sans que personne ne s'en aperçoive avant le premier trimestre. Un cours particulier régulier remet de l'ordre : on reprend ce qui n'a pas été compris, on avance au rythme de l'élève et on prépare les contrôles.",
        "MathSquads propose des cours de maths à Lille en présentiel, à domicile ou dans un lieu adapté, et en visio. Nos profs interviennent à Lille (Vieux-Lille, Vauban, Wazemmes, Lille-Centre) comme dans la métropole : Villeneuve-d'Ascq, Marcq-en-Barœul, La Madeleine, Roubaix ou Tourcoing.",
      ],
    },
    {
      title: "Des profs de l'EDHEC, passés par les concours",
      paragraphs: [
        "Nos profs lillois étudient à l'EDHEC business school, qui compte un campus à Lille. Ils ont eux-mêmes préparé les concours et connaissent la méthode qui fonctionne : comprendre avant de mémoriser, s'entraîner sur des exercices progressifs, corriger ses erreurs.",
        "Avant le premier cours, nous échangeons pour comprendre le niveau et l'objectif de l'élève, puis nous choisissons le prof le plus adapté. Vous pouvez en changer à tout moment si le courant ne passe pas.",
      ],
    },
    {
      title: "Lycées et prépas lillois",
      paragraphs: [
        "Nos profs suivent le programme de l'établissement de l'élève, qu'il soit scolarisé à Faidherbe, à Baggio, à Gaston Berger, à Montebello ou ailleurs dans la métropole. Pour les étudiants en classe préparatoire, l'accent est mis sur la méthode, l'entraînement type concours et les colles.",
      ],
    },
    {
      title: "Combien coûte un cours de maths à Lille ?",
      paragraphs: [
        "Vous payez à la séance, sans abonnement ni frais cachés, et vous annulez quand vous le souhaitez. À Lille, les cours en présentiel coûtent 20€/h au collège, 25€/h au lycée et 30€/h en CPGE et post-bac. En visio, comptez 20€/h au collège et au lycée, 25€/h en prépa. La première heure est offerte.",
      ],
    },
  ],
  levelsIntro: "Quel que soit le niveau, le cours est construit autour de l'élève :",
  levels: [
    {
      label: "Collège (6ème à 3ème)",
      text: "reprise des bases, calcul, géométrie, préparation au Brevet.",
    },
    {
      label: "Lycée (Seconde à Terminale)",
      text: "spécialité maths, maths expertes et complémentaires, Bac et Grand Oral.",
    },
    {
      label: "Prépa CPGE & post-bac",
      text: "MPSI, PCSI, ECG, entraînement aux colles et aux concours.",
    },
  ],
  onsiteTiers: [
    { level: "Collège", price: 20 },
    { level: "Lycée", price: 25 },
    { level: "CPGE / Post-bac", price: 30 },
  ],
  onlineTiers,
  faqHeading: "Questions fréquentes : cours de maths à Lille",
  faqs: [
    {
      q: "Combien coûtent les cours de maths à Lille ?",
      a: "En présentiel à Lille, les cours coûtent 20€/h au collège, 25€/h au lycée et 30€/h en CPGE et post-bac. En visio, comptez 20€/h au collège et au lycée, 25€/h en prépa. Pas d'abonnement ni de frais cachés, et la première heure est offerte.",
    },
    {
      q: "Les profs se déplacent-ils à domicile à Lille ?",
      a: "Oui. Les cours en présentiel ont lieu à votre domicile ou dans un lieu adapté, à Lille et dans la métropole. Vous pouvez aussi alterner avec des séances en visio.",
    },
    {
      q: "Qui sont les profs de maths à Lille ?",
      a: "Ce sont des étudiants de l'EDHEC business school, passés par la classe préparatoire et les concours. Leurs profils, leur école et leur spécialité sont détaillés sur la page de l'équipe.",
    },
    {
      q: "Pour quels niveaux donnez-vous des cours à Lille ?",
      a: "Du collège (6ème à 3ème) au lycée (Seconde à Terminale, spécialité maths, maths expertes), jusqu'aux classes préparatoires (MPSI, PCSI, ECG…) et au post-bac.",
    },
    {
      q: "La première heure est-elle vraiment gratuite ?",
      a: "Oui. La première séance est 100% offerte et sans engagement. Si elle ne vous convient pas, vous ne payez rien et vous êtes libre d'arrêter.",
    },
    {
      q: "Puis-je changer de prof si le courant ne passe pas ?",
      a: "Oui, sans difficulté. Dites-nous ce qui ne convient pas et nous vous proposons un autre prof rapidement.",
    },
    {
      q: "Comment réserver un cours de maths à Lille ?",
      a: "Remplissez le formulaire de réservation sur la page tarifs, ou écrivez-nous à lamathsquad@gmail.com. Nous vous répondons sous 24h pour organiser la première heure.",
    },
  ],
};
