"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "Comment se déroule la 1ère heure gratuite ?",
    a: "Tu nous contactes via le formulaire ou directement par téléphone. On te met en relation avec le prof le plus adapté à ton niveau et tes objectifs. La première séance est 100% offerte — si tu n'es pas satisfait, tu ne paies rien et tu n'as aucune obligation de continuer.",
  },
  {
    q: "Quelle est la différence avec Superprof ou Acadomia ?",
    a: "Nos profs sont exclusivement issus des meilleures Grandes Écoles de commerce françaises (emlyon, ESCP, EDHEC). Ce ne sont pas des étudiants lambda mais des profils d'exception, capables d'expliquer les maths de façon simple et efficace. Et nos tarifs commencent à 20€/h, bien en dessous du marché premium.",
  },
  {
    q: "Puis-je changer de prof si le courant ne passe pas ?",
    a: "Oui, sans aucun problème. Notre priorité est ta progression. Si tu n'es pas à l'aise avec ton prof, on te propose immédiatement une alternative.",
  },
  {
    q: "Les cours sont-ils disponibles partout en France ?",
    a: "Oui ! En visio (tableau blanc interactif partagé), les cours sont disponibles partout en France. Les cours en présentiel sont disponibles à Lyon, Lille et Paris.",
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
    a: "Utilise le formulaire sur la page Tarifs, ou contacte-nous directement par email (contact@mathsquads.com) ou téléphone (06 64 19 57 52). On te répond sous 24h.",
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

function FAQItem({
  faq,
  index,
  openIndex,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  openIndex: number | null;
  onToggle: (i: number) => void;
}) {
  const isOpen = openIndex === index;

  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-electric/40 bg-electric/5"
          : "border-white/6 bg-white/2 hover:border-white/10"
      }`}
      style={isOpen ? { borderLeft: "3px solid #5B8DEF" } : {}}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-semibold leading-snug transition-colors ${isOpen ? "text-white" : "text-slate-300"}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <Plus size={18} className={isOpen ? "text-electric" : "text-slate-500"} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-5">
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 40%, rgba(91,141,239,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel number="06" label="FAQ" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Questions{" "}
            <span className="text-gradient">fréquentes</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {leftFaqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i * 2}
                openIndex={openIndex}
                onToggle={toggle}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {rightFaqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i * 2 + 1}
                openIndex={openIndex}
                onToggle={toggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
