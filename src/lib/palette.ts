// Variantes accessibles des couleurs d'accent.
//
// Les teintes de marque (corail, or, sauge) sont conçues pour des aplats, des
// icônes et des grands titres. En petit texte sur fond clair elles tombent sous
// le seuil WCAG AA de 4,5:1 — l'or est à 2,4:1, quasi illisible. Les valeurs
// ci-dessous gardent la même famille chromatique en passant le seuil :
//
//   corail #E1613E → #A63D21   3,2:1 → 5,8:1
//   or     #C99A3E → #8A6415   2,4:1 → 4,8:1
//   sauge  #4F7A5E → #3D6249   4,4:1 → 6,1:1
//
// À utiliser pour tout texte lisible teinté ; garder les couleurs d'origine pour
// les fonds, bordures, icônes et titres de grande taille.

const accentText: Record<string, string> = {
  "#E1613E": "#A63D21",
  "#C99A3E": "#8A6415",
  "#4F7A5E": "#3D6249",
  "#1B2A44": "#1B2A44",
};

export const readableAccent = (color: string) => accentText[color] ?? color;
