"use client";

import { motion } from "framer-motion";
import ProfCard from "@/components/profs/ProfCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { GraduationCap, MapPin, Star } from "lucide-react";

const cities = [
  {
    label: "Lyon",
    profs: [
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
        name: "Eliott Prat",
        school: "emlyon business school",
        role: "CEO & Fondateur",
        coursesCount: 158,
        rating: 5,
        satisfaction: "96%",
        bio: "Avec moi, chaque concept est abordé avec précision, chaque raisonnement s'appuie sur des démonstrations solides. Mon objectif : t'armer pour exceller dans les concours les plus exigeants.",
        avatar: "EP",
        photo: "https://static.wixstatic.com/media/5bdef8_a2a97cdd2fb64b35b3e2ab028f520e5f~mv2.jpg",
        color: "#1B2A44",
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

const processSteps = [
  {
    step: "01",
    title: "Tu nous contactes",
    desc: "Remplis le formulaire de réservation avec ton niveau, tes objectifs et tes disponibilités.",
    color: "#1B2A44",
  },
  {
    step: "02",
    title: "On te rappelle sous 24h",
    desc: "Un prof adapté à ton niveau te contacte pour convenir d'un premier cours.",
    color: "#C99A3E",
  },
  {
    step: "03",
    title: "1er cours gratuit",
    desc: "Ta première heure est offerte. Si tu n'es pas satisfait, on te rembourse sans condition.",
    color: "#4F7A5E",
  },
];

export default function ProfsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center pt-32 pb-20 overflow-hidden bg-cream">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mb-6">Notre équipe</div>
            <h1 className="font-display font-semibold text-5xl sm:text-6xl text-ink leading-tight mb-6">
              Des profs issus du <span className="italic text-coral">Top 5 des meilleures écoles</span> de France
            </h1>
            <p className="text-xl text-ink/60 max-w-2xl mx-auto">
              Chaque prof MathSquads est sélectionné pour son excellence académique et sa passion pour la transmission.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              { icon: GraduationCap, label: "Top 5", sub: "Grandes écoles de France" },
              { icon: MapPin, label: "3 villes", sub: "Lyon · Lille · Paris" },
              { icon: Star, label: "5/5", sub: "Note moyenne" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-soft"
              >
                <item.icon size={16} className="text-coral" />
                <div className="text-left">
                  <div className="text-ink font-bold text-sm">{item.label}</div>
                  <div className="text-ink/45 text-xs">{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Profs Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cities.map(({ label, profs }) => (
            <div key={label}>
              <ScrollReveal className="flex items-center gap-3 mb-10">
                <div className="w-9 h-9 rounded-xl bg-coral/10 flex items-center justify-center">
                  <MapPin size={16} className="text-coral" />
                </div>
                <h2 className="font-display font-semibold text-2xl text-ink">{label}</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profs.map((prof, i) => (
                  <div
                    key={i}
                    className={
                      profs.length % 2 !== 0 && i === profs.length - 1
                        ? "md:col-span-2 md:flex md:justify-center"
                        : ""
                    }
                  >
                    <div className={profs.length % 2 !== 0 && i === profs.length - 1 ? "md:w-1/2" : ""}>
                      <ProfCard {...prof} delay={i * 0.15} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-cream-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-ink/60">De ta demande au premier cours en 24h</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {processSteps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="card p-6 text-center relative overflow-hidden">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-lg mx-auto mb-4"
                    style={{
                      background: `${s.color}14`,
                      border: `1px solid ${s.color}25`,
                      color: s.color,
                    }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
