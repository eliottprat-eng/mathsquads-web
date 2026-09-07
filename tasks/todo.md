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

---

## Objectif : Exécution playbook GEO — mentions de marque (solo, 06/08)

Base : `tasks/geo-mentions-playbook.md` (déjà écrit le 30/07, pas encore exécuté —
vérifié le 06/08 : pas de page LinkedIn société trouvée, pas de GBP, pas de YouTube).
Delta par rapport au playbook d'origine : Eliott non impliqué pour l'instant (Marin
gère seul), et objectif double — GEO (citations IA long terme) **+** leads directs
(threads à intention d'achat immédiate), pas juste GEO.

Contrainte outillage : reddit.com est bloqué par la politique de mon navigateur —
je ne peux pas chercher les threads live ni poster à ta place. Cette partie reste
manuelle ; je fournis les requêtes de recherche et les brouillons prêts à adapter.

- [ ] 1. Google Business Profile "MathSquads"
      Critères : (1) fiche créée, catégorie "Service de soutien scolaire", zone Lyon
      métropole, (2) lien mathsquads.com + tél renseignés, (3) 3 avis élèves obtenus
      dans la semaine.
      Pourquoi en premier : 20 min, impact direct sur "cours de maths Lyon" en
      recherche locale ET en Google AI Overviews — le plus fort ratio effort/résultat.
- [ ] 1-vérif. Rechercher "MathSquads" sur Google Maps → fiche visible + capture d'écran
- [ ] 2. Page LinkedIn société MathSquads
      Critères : (1) page créée avec tagline + description du playbook (section 1),
      (2) Marin ajoute "Cofondateur, MathSquads" à son profil, (3) 1 post d'annonce publié.
      Note : le post fondateur croisé (Eliott + Marin) attend qu'il soit dispo — ne pas
      bloquer la page pour ça, la créer maintenant.
- [ ] 2-vérif. URL de la page LinkedIn accessible publiquement + capture d'écran
- [ ] 3. Reddit — cadence GEO (mentions différées, autorité)
      Critères : (1) 3 réponses utiles postées sur r/prepas/r/etudiants/r/Lyon sans
      mention MathSquads sur 2 semaines, (2) ton no mode entier de leçon de "je suis
      concerné" respecté, (3) ratio 9 utile / 1 mention tenu.
      Recherches à lancer manuellement chaque semaine (reddit.com bloqué côté outil) :
      "prépa ECG méthode maths", "terminale spé maths méthode", "rattraper retard maths".
- [ ] 3-vérif. Capture des réponses postées (ou lien) + relecture ton/ratio par Marin
- [ ] 4. Reddit — cadence leads directs (intention d'achat immédiate)
      Critères : (1) recherche hebdo sur les 3 requêtes ci-dessous, (2) réponse avec
      mention transparente ("je suis concerné") postée sous 24-48h sur les threads
      pertinents trouvés, (3) lien de suivi (1ère heure gratuite) uniquement si demandé
      explicitement dans le fil, jamais en push.
      Requêtes de recherche Reddit à lancer par Marin : "recommandation prof de maths"
      Lyon/Paris, "cours particuliers avis" Lyon/Paris, "soutien scolaire terminale
      conseil". Brouillon de réponse : reprendre le template section 3 du playbook
      ("Sur cours particuliers Lyon, vous recommandez quoi ?").
- [ ] 4-vérif. Tableau simple (date, sub, lien thread, mention ou pas, résultat) tenu
      à jour par Marin — même sommaire, sert de preuve et évite le spam répété au même sub
- [ ] FINAL. Check d'intégration : GBP + LinkedIn + 1er cycle Reddit (GEO et lead)
      vécus une fois de bout en bout, calendrier hebdo tenable posé pour la suite.
