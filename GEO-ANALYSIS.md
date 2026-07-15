# GEO Analysis — mathsquads.com (13 juillet 2026)

## GEO Readiness Score : 58/100

Bon socle SEO technique (JSON-LD, sitemap, canonicals, SSR Next.js), mais le site
manque des signaux que les moteurs IA extraient pour citer une source : blocs de
réponse autonomes, données chiffrées attribuées, dates, entités personnes, et
directives crawlers IA explicites.

## Breakdown par plateforme

| Plateforme | Score | Pourquoi |
|---|---|---|
| Google AI Overviews | 65/100 | Bon SEO classique + FAQPage/Course schema, mais passages peu citables et zéro date visible |
| Google AI Mode | 55/100 | Fraîcheur non signalée (aucune date), entité MathSquads faible |
| ChatGPT | 45/100 | Aucune présence Wikipedia/Wikidata, entité quasi inexistante hors du site |
| Perplexity | 50/100 | Aucune présence Reddit/communautaire détectable |

## 1. Accès crawlers IA — PARTIEL
`robots.ts` autorise `*` (donc GPTBot, ClaudeBot, PerplexityBot passent), mais
aucune règle explicite. Les règles nommées documentent l'intention et évitent
qu'un futur resserrage du `*` coupe les crawlers IA par accident.

## 2. llms.txt — ABSENT
Aucune preuve primaire que c'est un levier de citation (cf. Mueller/Illyes,
étude SE Ranking 300k domaines), mais coût nul. Ajouté à titre défensif.

## 3. SSR — OK
Next.js App Router : tout le contenu (FAQ comprises) est dans le HTML initial.
Les crawlers IA qui n'exécutent pas le JS voient tout. Rien à faire.

## 4. Citabilité des passages — FAIBLE (le vrai chantier)
- Aucun bloc « MathSquads est… » : une IA qui veut définir le service n'a rien à extraire.
- La home est du copy marketing (« Pas juste des cours. Une vraie transformation. ») : zéro fait extractible dans le premier tiers de page, là où ~44% des citations IA sont prises.
- Les stats de ConstatSection (65%, 33%, 90%) ont des sources vagues (« Enquête nationale ») : inextractibles telles quelles, une IA ne cite pas un chiffre non attribué.
- Bonne nouvelle : la page Lyon a des H2 en questions et des paragraphes courts, structure déjà citable.

## 5. Autorité & fraîcheur — FAIBLE
- Aucune date de publication/mise à jour visible ni en schema : contenu > 6 mois sans date = inéligible à la citation côté AI Mode.
- Fondateurs nommés dans l'UI mais absents du JSON-LD (pas de Person, pas de founder).
- Prix (fait le plus citable du site : « dès 20€/h ») absent du structured data.

## 6. Marque hors-site — INEXISTANT (non applicable en code)
Pas de Wikipedia, Reddit, YouTube détectable. Les mentions de marque corrèlent
3x plus que les backlinks avec les citations IA (Ahrefs 2025). Voir reco #8.

## Top 8 des changements par impact

| # | Changement | Impact | Applicable en code |
|---|---|---|---|
| 1 | Bloc définition citable (134-167 mots) en haut de la home | Fort | Oui |
| 2 | Prix, villes, modes de cours dans le Course/Organization schema | Fort | Oui |
| 3 | Dates visibles + dateModified sur la page Lyon (et sitemap honnête) | Fort | Oui |
| 4 | Person schema fondateurs + founder dans Organization | Moyen | Oui |
| 5 | Règles robots explicites pour GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot | Moyen | Oui |
| 6 | Sourcer ou reformuler les stats de ConstatSection | Moyen | Oui |
| 7 | llms.txt | Faible (défensif) | Oui |
| 8 | Créer une présence Reddit (r/prepa, r/lyon), YouTube, page LinkedIn société | Fort | Non — action manuelle Eliott/Marin |
