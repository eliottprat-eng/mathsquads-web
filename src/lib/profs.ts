// Source unique des profils profs : la page /profs les affiche, et src/lib/stats.ts
// en dérive les compteurs du site (nombre de profs, cours donnés). Ajouter un prof
// ici met à jour les deux sans risque de divergence.

export interface Prof {
  name: string;
  school: string;
  role: string;
  coursesCount: number;
  rating: number;
  satisfaction: string;
  bio: string;
  avatar: string;
  photo: string;
  color: string;
  city: string;
}

export interface City {
  label: string;
  profs: Prof[];
}

export const cities: City[] = [
  {
    label: "Lyon",
    profs: [
      {
        name: "Eliott Prat",
        school: "emlyon business school",
        role: "CEO & Fondateur",
        coursesCount: 296,
        rating: 5,
        satisfaction: "96%",
        bio: "Avec moi, chaque concept est abordé avec précision, chaque raisonnement s'appuie sur des démonstrations solides. Mon objectif : t'armer pour exceller dans les concours les plus exigeants.",
        avatar: "EP",
        photo: "https://static.wixstatic.com/media/5bdef8_a2a97cdd2fb64b35b3e2ab028f520e5f~mv2.jpg",
        color: "#1B2A44",
        city: "Lyon",
      },
      {
        name: "Marin Delzoppo",
        school: "emlyon business school",
        role: "CEO & Fondateur",
        coursesCount: 317,
        rating: 5,
        satisfaction: "97%",
        bio: "J'adore expliquer simplement des choses compliquées. Mon truc, c'est de te faire comprendre vite, progresser vraiment et pourquoi pas commencer à aimer les maths.",
        avatar: "MD",
        photo: "https://static.wixstatic.com/media/dbf384_0c3e74a1dd3d4849bdb2a510026b6f01~mv2.jpg",
        color: "#E1613E",
        city: "Lyon",
      },
      {
        name: "Elisa Sergers",
        school: "emlyon business school",
        role: "Prof lyonnaise",
        coursesCount: 43,
        rating: 5,
        satisfaction: "94%",
        bio: "Passionnée par les mathématiques, je mets toute mon énergie à rendre chaque concept accessible. Mon approche combine rigueur et bienveillance pour t'aider à progresser avec confiance.",
        avatar: "ES",
        photo: "/profs/elisa.jpg",
        color: "#4F7A5E",
        city: "Lyon",
      },
      {
        name: "Paul Prieur",
        school: "emlyon business school",
        role: "Prof lyonnais",
        coursesCount: 52,
        rating: 5,
        satisfaction: "95%",
        bio: "Je pars du principe qu'un blocage en maths vient presque toujours d'une notion mal posée au départ. On reprend les bases ensemble, sans jugement, jusqu'à ce que la logique devienne évidente.",
        avatar: "PP",
        photo: "/profs/paul.jpg",
        color: "#C99A3E",
        city: "Lyon",
      },
      {
        name: "Nolann Lagoutte",
        school: "emlyon business school",
        role: "Prof lyonnais",
        coursesCount: 47,
        rating: 5,
        satisfaction: "96%",
        bio: "Je crois beaucoup aux automatismes : quelques exercices bien choisis, refaits jusqu'à devenir des réflexes. C'est ce qui fait la différence le jour du contrôle, quand le stress s'en mêle.",
        avatar: "NL",
        photo: "/profs/nolann.jpg",
        color: "#1B2A44",
        city: "Lyon",
      },
      {
        name: "Adrien Praino",
        school: "emlyon business school",
        role: "Prof lyonnais",
        coursesCount: 58,
        rating: 5,
        satisfaction: "97%",
        bio: "Je commence toujours par te faire expliquer ce que tu as compris : c'est là qu'on repère le vrai blocage. On reconstruit ensuite étape par étape, jusqu'à ce que tu refasses l'exercice seul.",
        avatar: "AP",
        photo: "/profs/adrien.jpg",
        color: "#E1613E",
        city: "Lyon",
      },
      {
        name: "Adam Atoui",
        school: "emlyon business school",
        role: "Prof lyonnais",
        coursesCount: 41,
        rating: 5,
        satisfaction: "94%",
        bio: "Les maths, c'est d'abord une histoire de méthode, pas de talent. Je te montre comment attaquer un énoncé et quoi chercher en premier : tu réalises vite que la plupart des exercices se ressemblent.",
        avatar: "AA",
        photo: "/profs/adam.jpg",
        color: "#4F7A5E",
        city: "Lyon",
      },
    ],
  },
  {
    label: "Lille",
    profs: [
      {
        name: "Oscar Loisel",
        school: "EDHEC business school",
        role: "Prof lillois",
        coursesCount: 38,
        rating: 5,
        satisfaction: "95%",
        bio: "Je rends les maths dynamiques : tu progresses vite tout en gardant la motivation. Chaque cours est pensé pour que tu sortes avec plus de confiance.",
        avatar: "OL",
        photo: "/profs/oscar.jpg",
        color: "#C99A3E",
        city: "Lille",
      },
      {
        name: "Raphaël Bismuth",
        school: "EDHEC business school",
        role: "Prof lillois",
        coursesCount: 61,
        rating: 5,
        satisfaction: "98%",
        bio: "J'ai accompagné de nombreux lycéens et élèves de prépa avec succès. J'adapte ma pédagogie à chacun pour transformer les points faibles en atouts.",
        avatar: "RB",
        photo: "/profs/raphael.jpg",
        color: "#E1613E",
        city: "Lille",
      },
    ],
  },
  {
    label: "Paris",
    profs: [
      {
        name: "Achille Glorieux",
        school: "ESCP business school",
        role: "Prof parisien",
        coursesCount: 29,
        rating: 5,
        satisfaction: "93%",
        bio: "Étudiant à l'ESCP, je me propose de t'aider à progresser en maths. Mon objectif : rendre les mathématiques accessibles et te donner les clés pour réussir.",
        avatar: "AG",
        photo: "/profs/achille.jpg",
        color: "#1B2A44",
        city: "Paris",
      },
      {
        name: "Héloïse Bourgoin",
        school: "ESCP business school",
        role: "Prof parisienne",
        coursesCount: 34,
        rating: 5,
        satisfaction: "96%",
        bio: "Je mets ma rigueur et mon sens de la pédagogie au service de mes élèves. Mon objectif est de leur donner les clés pour comprendre en profondeur et réussir avec assurance.",
        avatar: "HB",
        photo: "/profs/heloise.jpg",
        color: "#4F7A5E",
        city: "Paris",
      },
    ],
  },
];
