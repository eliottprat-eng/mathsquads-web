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

export interface CityGroup {
  label: string;
  profs: Prof[];
}

export const cities: CityGroup[] = [
  {
    label: "Lyon",
    profs: [
      {
        name: "Marin Delzoppo",
        school: "emlyon business school",
        role: "Co-fondateur",
        coursesCount: 317,
        rating: 5,
        satisfaction: "97%",
        bio: "J'adore expliquer simplement des choses compliquées. Mon truc, c'est de te faire comprendre vite, progresser vraiment et pourquoi pas commencer à aimer les maths.",
        avatar: "MD",
        // TODO: ajouter la photo de Marin dans /public/profs/marin.jpg
        // (ancienne source wixstatic supprimée — téléchargement bloqué depuis cet environnement)
        photo: "",
        color: "#5B8DEF",
        city: "Lyon",
      },
      {
        name: "Eliott Prat",
        school: "emlyon business school",
        role: "Co-fondateur",
        coursesCount: 158,
        rating: 5,
        satisfaction: "96%",
        bio: "Avec moi, chaque concept est abordé avec précision, chaque raisonnement s'appuie sur des démonstrations solides. Mon objectif : t'armer pour exceller dans les concours les plus exigeants.",
        avatar: "EP",
        // TODO: ajouter la photo d'Eliott dans /public/profs/eliott.jpg
        // (ancienne source wixstatic supprimée — téléchargement bloqué depuis cet environnement)
        photo: "",
        color: "#FFBB0A",
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
        color: "#10B981",
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
        color: "#8B5CF6",
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
        color: "#F97316",
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
        color: "#EC4899",
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
        color: "#06B6D4",
        city: "Paris",
      },
    ],
  },
];
