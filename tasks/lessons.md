# Lessons — MathSquads

[2026-07-13] | `@apply border border-ink/8` et `@apply ... shadow-soft` plantaient le build (Tailwind ne résolvait pas le modificateur d'opacité ni le nom d'ombre custom dans `@apply`) | Dans `globals.css` de ce projet, éviter les modificateurs d'opacité (`/8`) et les noms d'ombre custom à l'intérieur d'un `@apply` — écrire la couleur en `rgba()` brut à côté de l'`@apply`, ou utiliser la classe Tailwind directement en JSX plutôt que via un composant CSS.

[2026-07-13] | Un fade en `bg-gradient-to-r from-cream via-cream/40 to-transparent` avait été utilisé pour estomper le bord d'une photo hero | La règle "zéro gradient" (ui-ux.md) s'applique aussi aux fondus monochromes, pas seulement aux dégradés colorés visibles. Préférer une image encadrée (rounded-3xl, bords nets) plutôt qu'un fade en bord de section.
