# MathSquads — Design System (refonte « Apple-grade »)

## Philosophie

Retenue, précision, hiérarchie. Le contenu est la star : typographie magistrale,
une seule idée par écran, espace généreux. L'accent est rare donc précieux.
Chaque animation a une raison d'être ; tout le reste est immobile.

## Tokens couleur (palette fermée — toute couleur hors liste est bannie)

| Token        | Hex / valeur              | Usage |
|--------------|---------------------------|-------|
| `navy-900`   | `#101E36`                 | Fond unique du site |
| `surface`    | `rgba(22, 36, 68, 0.72)`  | Cartes et surfaces élevées |
| `ink`        | `#EDF4FF`                 | Texte principal, titres |
| `muted`      | `#94A8C8`                 | Texte secondaire, légendes |
| `steel`      | `#7E96BF`                 | Icônes, eyebrows, éléments structurels discrets |
| `gold`       | `#FFBB0A` (`#FFD147` clair, `#E09F00` foncé) | **Accent unique** : CTA, signature visuelle, étoiles de notation |
| `hairline`   | `rgba(237, 244, 255, 0.08)` | Bordures de cartes |

Exceptions sémantiques tolérées (jamais décoratives) : rouge/vert désaturés
dans le bloc Avant/Après (sémantique négatif/positif) et les états de
validation du formulaire.

Disparaissent : le bleu électrique comme accent (`#5B8DEF` → rétrogradé en
`steel` neutre), les arcs-en-ciel par carte (#10B981, #A78BFA, #EC4899,
#F97316, #8B5CF6, #06B6D4), les glows colorés au hover, les gradients
multicolores.

## Typographie

- **Display : Syne** (déjà la voix de la marque — graisse 700/800,
  `letter-spacing: -0.02em`). Les titres se lisent comme des affirmations de
  keynote : courts, énormes, centrés.
- **Lecture : Inter** — corps 16–18px, interlignage 1.7.
- **Échelle stricte (ratio 1.25)** : 12 / 15 / 19 / 24 / 30 / 37 / 46 / 58 /
  72px. Hero : `clamp(3rem, 6vw, 4.5rem)`. Sections : 37–46px. Eyebrow : 12px
  uppercase, tracking 0.25em, couleur `steel`.

## Signature visuelle

**UN ∑ monumental** en arrière-plan du hero — contour très subtil
(`steel` à ~6% d'opacité), occupant ~80% de la hauteur, qui glisse
légèrement au scroll (parallaxe douce, désactivée si `prefers-reduced-motion`).

En contrepartie, **tout le reste disparaît** : `MathParticles`,
`FloatingMathSymbols`, les symboles flottants du CTA, les gros chiffres
décoratifs dans les cartes. Une signature, pas dix.

Le gradient de titre (`.text-gradient`) devient un dégradé
blanc → or champagne, réservé au mot-clé d'un titre par section maximum —
c'est l'extension typographique de la signature.

## Motion

- **Révélation au scroll** : fade-up 16px, 500ms, `ease-out`, une seule fois.
- **Hover** : translation -2px, 150–200ms ease-out. Pas de tilt 3D, pas de
  glow, pas de scale.
- **Hero** : une seule séquence orchestrée au chargement (badge → titre →
  sous-titre → CTA → preuves, décalage 80ms).
- **Bannis** : boucles infinies (pulse, float, shimmer), carrousels
  auto-défilants, animations répétées au scroll.
- `prefers-reduced-motion` respecté globalement (CSS + framer-motion).

## Surfaces

- Radius unique : `rounded-2xl` pour les cartes, `rounded-xl` pour les
  boutons et champs.
- Bordures hairline (`rgba(237,244,255,0.08)`), ombres très douces ou aucune.
- Padding généreux : ≥ 28px dans les cartes, ≥ 96px entre sections.

## Structure

- Numérotation 01–07 des sections : **supprimée**. Eyebrows textuels sobres
  (« Le constat », « Notre méthode »…).
- Émojis : **supprimés** (témoignages, badges). Le résultat d'un témoignage
  devient une ligne en `gold` au-dessus de la citation.
- Hero : titre, sous-titre court, 2 CTA, une rangée de 3 preuves. La photo
  banque d'images disparaît au profit de la signature ∑.
- Témoignages : grille statique responsive (1 → 2 colonnes), une seule
  occurrence de chaque carte dans le DOM.
- /tarifs : tableau comparatif unique des 4 formules (Lyon, Lille, Paris,
  Distanciel mis en avant).

## Autocritique

*« Est-ce que ce plan ressemblerait à n'importe quel autre site ? »*

Première version critiquée : fond sombre + glassmorphism + accent doré, c'est
une recette vue partout. Ce qui rend celle-ci propre à MathSquads :

1. **Syne** — display rare et géométrique, déjà associée à la marque ;
   personne d'autre dans le soutien scolaire ne l'utilise.
2. **Le ∑ monumental** — un seul symbole, traité comme une sculpture, au lieu
   de la pluie de symboles génériques « site de maths ».
3. **L'or sur navy** — discipline d'usage stricte (CTA + signature seulement),
   là où les concurrents sont bleus/verts et saturés d'accents.

Risque résiduel : en retirant photos et couleurs, le site peut devenir froid
pour une cible collégiens/parents. Garde-fous : ton rédactionnel chaleureux
(tutoiement conservé), témoignages très visibles, vraies initiales/photos des
profs au cœur de la page équipe.
