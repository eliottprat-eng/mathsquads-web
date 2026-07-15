// Single source of truth for FAQ content, shared between the rendered
// FAQ UI and the FAQPage JSON-LD so they never drift apart.

export type Faq = { q: string; a: string };

export const lyonFaqs: Faq[] = [
  {
    q: "Comment se passent les cours de maths en ligne à Lyon ?",
    a: "Les cours se déroulent en visioconférence avec un tableau blanc interactif partagé entre le prof et l'élève. Vous suivez votre cours depuis chez vous, partout à Lyon et dans la métropole, sans déplacement. Il suffit d'un ordinateur ou d'une tablette et d'une connexion internet.",
  },
  {
    q: "Proposez-vous aussi des cours de maths en présentiel à Lyon ?",
    a: "Oui. En plus des cours en visio, nous proposons des cours particuliers de maths en présentiel à Lyon. La majorité de nos élèves lyonnais choisissent toutefois la visio pour sa souplesse et l'absence de temps de trajet.",
  },
  {
    q: "Pour quels niveaux donnez-vous des cours de maths à Lyon ?",
    a: "Du collège (6ème à 3ème) au lycée (Seconde à Terminale, spécialité maths et option maths expertes), jusqu'aux classes préparatoires (MPSI, PCSI, ECG…) et au post-bac. Nos profs adaptent le cours au programme et aux objectifs de chaque élève.",
  },
  {
    q: "Qui sont les profs de maths qui interviennent à Lyon ?",
    a: "Nos profs sont issus des meilleures grandes écoles françaises, dont emlyon business school, basée à Lyon. Ils maîtrisent le programme et savent expliquer les maths simplement, avec une vraie exigence pédagogique.",
  },
  {
    q: "Combien coûtent les cours de maths en ligne à Lyon ?",
    a: "Nos tarifs commencent à 20€/h, sans abonnement ni frais cachés. Vous payez à la séance et vous annulez quand vous voulez. La première heure est offerte pour faire connaissance avec votre prof.",
  },
  {
    q: "La première heure de cours est-elle vraiment gratuite ?",
    a: "Oui. La première séance est 100% offerte et sans engagement. Si elle ne vous convient pas, vous ne payez rien et vous êtes libre de ne pas continuer.",
  },
  {
    q: "Accompagnez-vous les élèves des grands lycées lyonnais ?",
    a: "Oui, nous accompagnons des élèves de tous les établissements de Lyon et de sa métropole, qu'ils soient au lycée du Parc, à Ampère, Saint-Just, La Martinière ou ailleurs, ainsi que les étudiants en prépa.",
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "Comment se déroule la 1ère heure gratuite ?",
    a: "Tu nous contactes via le formulaire ou directement par téléphone. On te met en relation avec le prof le plus adapté à ton niveau et tes objectifs. La première séance est 100% offerte : si tu n'es pas satisfait, tu ne paies rien et tu n'as aucune obligation de continuer.",
  },
  {
    q: "Quelle est la différence avec Superprof ou Acadomia ?",
    a: "Nos profs sont exclusivement issus du Top 5 des grandes écoles françaises (emlyon, ESCP, EDHEC...). Ce ne sont pas des étudiants lambda mais des profils d'exception, capables d'expliquer les maths de façon simple et efficace. Et nos tarifs commencent à 20€/h, bien en dessous du marché premium.",
  },
  {
    q: "Puis-je changer de prof si le courant ne passe pas ?",
    a: "Oui, sans aucun problème. Notre priorité est ta progression. Si tu n'es pas à l'aise avec ton prof, on te propose immédiatement une alternative.",
  },
  {
    q: "Les cours sont-ils disponibles partout en France ?",
    a: "Oui ! En visio (tableau blanc interactif partagé), les cours sont disponibles partout en France. Les cours en présentiel sont disponibles à Lyon.",
  },
  {
    q: "Comment se passe le suivi entre les séances ?",
    a: "Ton prof reste disponible par message entre les séances pour répondre à tes questions. Chaque élève bénéficie d'un bilan régulier et d'objectifs clairs définis avec son prof.",
  },
  {
    q: "Mes parents doivent-ils être impliqués ?",
    a: "C'est à vous de choisir. On peut envoyer un compte-rendu après chaque séance si les parents le souhaitent. On s'adapte à votre organisation.",
  },
  {
    q: "Pour quels niveaux proposez-vous des cours ?",
    a: "Collège (6ème à 3ème), Lycée (Seconde à Terminale), et Classes Préparatoires (MPSI, MP, PCSI, PSI...) ainsi que post-bac.",
  },
  {
    q: "Comment réserver un cours ?",
    a: "Utilise le formulaire sur la page Tarifs, ou contacte-nous directement par email (lamathsquad@gmail.com) ou téléphone (06 64 19 57 52 ou 07 83 53 57 72). On te répond sous 24h.",
  },
  {
    q: "Les cours sont-ils remboursés si je ne suis pas satisfait ?",
    a: "Oui. 100% satisfait ou remboursé, sans condition ni justification. C'est notre engagement.",
  },
  {
    q: "Proposez-vous des forfaits ou packs de cours ?",
    a: "Pour l'instant nos cours sont à la séance, sans engagement. Tu peux réserver autant ou aussi peu de séances que tu veux, selon tes besoins et ton rythme.",
  },
];
