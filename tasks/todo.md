# Refonte design MathSquads — clair, chaleureux, rassurant

Direction validée par Marin : fond clair, palette chaleureuse (corail + navy encre + or
mat + sauge), typo éditoriale (Fraunces + Inter), zéro gradient (règle ui-ux.md), zéro
glow/glass, zéro tic IA (mono uppercase letterspacé, emojis, dégradés).

## 1. Design tokens
Critères : (1) tailwind.config.ts + globals.css portent la nouvelle palette/typo,
(2) plus aucune classe glow/glass/gradient/shimmer dans le CSS, (3) build compile.
- [x] tailwind.config.ts — nouvelle palette (ink, coral, gold, sage, cream), fonts
- [x] globals.css — reset des utilitaires (.card, .btn-primary, .btn-secondary, .section-tag)

## 2. Composants partagés
Critères : Navbar/Footer lisibles sur fond clair, sticky nav propre, plus de mono uppercase.
- [x] Navbar.tsx
- [x] Footer.tsx
- [x] MathParticles.tsx + FloatingMathSymbols.tsx (recolorées pour fond clair)
- [x] SectionLabel.tsx (supprimé, remplacé par .section-tag partout)

## 3. Page d'accueil
Critères : hero éditorial clair, sections alternent fond cream/blanc/ink pour casser le
rythme, plus aucune carte "glass", stats en compteurs conservés.
- [x] Hero.tsx
- [x] ConstatSection, BeforeAfterSection, WhySection, ForWhoSection
- [x] SchoolLogosSection, TestimonialsSection, PricingHomepageSection
- [x] FAQSection, PresenceSection, CTASection
- [x] StatsSection.tsx — supprimé (mort, non importé)

## 4. Composants profs / pricing / formulaire
- [x] ProfCard.tsx, PricingCard.tsx, BookingForm.tsx

## 5. Sous-pages
- [x] profs, tarifs, college-lycee, cpge-postbac, devenir-prof
- [x] cours-maths-en-ligne-lyon (article SEO + FAQ locale)
- [x] not-found.tsx, opengraph-image.tsx
- [x] cgu, confidentialite, mentions-legales (restyle léger, contenu inchangé)

## 6-vérif. Vérification
Preuve requise avant de livrer :
- [x] npm run build sans erreur
- [x] Capture d'écran desktop + mobile 375px (page d'accueil + 1 sous-page)
- [x] Console DevTools sans erreur
- [x] Grep : zéro résidu `glass-card|text-gradient|gradient-border|shimmer|font-mono.*uppercase`
- [x] Contraste AA vérifié sur les couleurs clés (coral/ink sur cream)

## 7. SEO — état des lieux
Déjà en place (bon niveau) : sitemap.ts, robots.ts, JSON-LD (Organization/Website/FAQ/
Course/Breadcrumb), metadata + canonical par page, OG/Twitter cards.
Ajustements prévus : régénérer opengraph-image.tsx avec la nouvelle palette (cohérence
visuelle réseaux sociaux), vérifier que les alt d'images survivent à la refonte.
