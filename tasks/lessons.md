# Lessons — MathSquads

[2026-07-13] | `@apply border border-ink/8` et `@apply ... shadow-soft` plantaient le build (Tailwind ne résolvait pas le modificateur d'opacité ni le nom d'ombre custom dans `@apply`) | Dans `globals.css` de ce projet, éviter les modificateurs d'opacité (`/8`) et les noms d'ombre custom à l'intérieur d'un `@apply` — écrire la couleur en `rgba()` brut à côté de l'`@apply`, ou utiliser la classe Tailwind directement en JSX plutôt que via un composant CSS.

[2026-07-13] | Un fade en `bg-gradient-to-r from-cream via-cream/40 to-transparent` avait été utilisé pour estomper le bord d'une photo hero | La règle "zéro gradient" (ui-ux.md) s'applique aussi aux fondus monochromes, pas seulement aux dégradés colorés visibles. Préférer une image encadrée (rounded-3xl, bords nets) plutôt qu'un fade en bord de section.

[2026-07-30] | FormSubmit répond HTTP 200 même quand l'envoi échoue : le code ne testait que `res.ok`, donc l'écran « Demande envoyée ! » s'affichait alors que rien n'était transmis. Perte silencieuse de demandes pendant des jours | Toujours valider le champ métier de la réponse (`success === "true"`), jamais le seul statut HTTP. Pour un service tiers sans SDK, sonder l'API en échec réel avant de coder la détection de succès.

[2026-07-30] | Relayer FormSubmit par une route serveur Next.js semblait plus robuste (anti-bloqueurs de pub), mais FormSubmit renvoie 403 aux IP de datacenter Vercel | Ces services de formulaires gratuits attendent un appel depuis le navigateur du visiteur. Avant de déplacer un appel tiers côté serveur, comparer la même requête depuis une IP résidentielle et depuis la prod.

[2026-07-30] | Deux formulaires (réservation élève, candidature prof) ont été livrés avec `await new Promise(r => setTimeout(r, 1500))` puis écran de succès : faux envoi, candidatures perdues | Aucun formulaire n'est « terminé » tant qu'une requête réelle n'a pas été observée. Vérif obligatoire : intercepter `window.fetch` dans le navigateur, soumettre, lire l'URL et le payload réellement envoyés.

[2026-07-30] | Un `npm run build` lancé pendant que `next dev` tournait a cassé le cache `.next` : pages non hydratées (0 élément React), ce qui ressemblait à un vrai bug de prod et m'a fait partir sur une fausse piste | Ne pas builder sur le même dossier qu'un dev server actif. Devant une page non hydratée en local, confirmer sur la prod avant de diagnostiquer.

[2026-07-30] | Un `route.ts` exportant une constante partagée (`CONTACT_EMAIL`) a cassé le build avec une erreur de typage obscure sur `OmitWithTag` | Dans un `route.ts`, n'exporter que les handlers HTTP. Les constantes partagées vont dans `/lib` ou `/services`.

[2026-07-30] | Des commits d'Eliott poussés entre deux sessions ont réintroduit un numéro déjà retiré, et un `git push` a été rejeté | Toujours `git fetch` + rebase avant de pousser sur ce repo, et lire ce que ses commits ont changé : un « reste » apparent peut être un ajout délibéré de sa part, à signaler plutôt qu'à écraser en silence.

[2026-09-07] | Tests de formulaire faussés deux fois par l'outil : (a) mocker `window.fetch` depuis la console d'automatisation crée une `Response` cross-realm que le `await res.json()` de la page ne résout jamais (bouton bloqué en chargement, ni succès ni erreur) ; (b) un onglet en arrière-plan (`document.visibilityState === "hidden"`) throttle timers et requêtes, donc l'`AbortController` ne se déclenche pas | Pour prouver qu'un formulaire envoie vraiment : intercepter le fetch UNIQUEMENT pour lire le payload, puis valider le dernier maillon en rejouant ce payload exact vers l'API depuis node. Ne pas conclure « le site est cassé » depuis un onglet masqué.

[2026-09-07] | FormSubmit refuse les soumissions dont l'origine est `localhost` : en dev le formulaire affiche toujours l'état d'erreur | Normal, pas un bug. Tester le vrai envoi depuis la prod ou en rejouant le payload avec l'en-tête `Referer: https://www.mathsquads.com/`.

[2026-09-07] | Resend refuse d'écrire à une autre adresse que celle du compte tant qu'aucun domaine n'est vérifié (`You can only send testing emails to your own email address`) | Avec l'expéditeur de test `onboarding@resend.dev`, seul le mail du compte Resend est joignable. Pour livrer sur une autre boîte : vérifier le domaine sur resend.com/domains (DNS), puis passer `RESEND_FROM` sur une adresse de ce domaine.

[2026-09-07] | Clé API collée en clair dans la conversation | Une clé passée en chat est compromise : la révoquer et en régénérer une après usage. Ne jamais l'écrire dans un fichier versionné — vérifier `git check-ignore .env.local` AVANT d'écrire, et relire `git diff --cached` avant de commiter.
