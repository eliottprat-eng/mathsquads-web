// Source unique des chiffres affichés sur le site.
//
// Avant ce fichier, trois valeurs différentes circulaient pour la même réalité :
// « 475+ cours donnés » dans le hero, « 475+ élèves » dans le bloc CTA (ce n'est
// pas la même unité) et 1 016 cours si l'on additionnait les compteurs des fiches
// profs. Tout est désormais dérivé du roster : un prof ajouté met à jour la home,
// le bloc définition et le CTA d'un coup.

import { cities } from "./profs";

const profsCount = cities.reduce((n, c) => n + c.profs.length, 0);
const coursTotal = cities.reduce(
  (n, c) => n + c.profs.reduce((m, p) => m + p.coursesCount, 0),
  0
);

// Arrondi à la centaine inférieure pour l'affichage : un « 1000+ » reste vrai
// entre deux mises à jour des fiches, alors qu'un total exact est périmé dès le
// cours suivant.
const coursArrondi = Math.floor(coursTotal / 100) * 100;

export const stats = {
  /** Nombre de profs listés sur /profs. */
  profsCount,
  /** Total exact des cours donnés (somme des compteurs des fiches). */
  coursTotal,
  /** Valeur numérique affichée, arrondie : 1000 pour 1016 cours. */
  coursDonnes: coursArrondi,
  /** Même valeur en texte, séparateur d'espace fine insécable : « 1 000 ». */
  coursDonnesTexte: coursArrondi.toLocaleString("fr-FR"),
  /** Villes couvertes en présentiel. */
  villesCount: cities.length,
  /** Tarif d'entrée, en euros par heure. */
  prixDepart: 20,
} as const;
