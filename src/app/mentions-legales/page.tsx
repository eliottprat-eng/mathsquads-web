import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de MathSquads : éditeur du site, directeurs de la publication, hébergeur, propriété intellectuelle et coordonnées de contact de la structure.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "Éditeur du site",
    body: [
      `Le site ${site.url} est édité par Eliott Prat, entrepreneur individuel (EI), régime micro-entrepreneur, exerçant sous la marque MathSquads.`,
      "SIRET : 105 953 715 00015. Immatriculation : Registre national des entreprises (RNE). Siège : 42410 Chavanay, France. TVA non applicable, article 293 B du CGI.",
      `Directeur de la publication : Eliott Prat. Contact : ${site.email} ou +33 6 64 19 57 52.`,
    ],
  },
  {
    title: "Hébergement",
    body: [
      "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis (vercel.com).",
    ],
  },
  {
    title: "Propriété intellectuelle",
    body: [
      "L'ensemble des contenus du site (textes, visuels, logo, structure) est protégé par le droit de la propriété intellectuelle. Toute reproduction, même partielle, est soumise à l'autorisation écrite préalable de MathSquads.",
    ],
  },
  {
    title: "Données personnelles",
    body: [
      "Les modalités de collecte et de traitement des données personnelles sont décrites dans la Politique de confidentialité, accessible depuis le pied de page du site.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden bg-cream">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink mb-4">
            Mentions légales
          </h1>
          <p className="text-ink/70 text-lg">
            Dernière mise à jour : <time dateTime="2026-11-09">9 novembre 2026</time>
          </p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {sections.map((s) => (
          <section key={s.title} className="mb-10">
            <h2 className="font-display font-semibold text-2xl text-ink mb-4">{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-ink/70 leading-relaxed mb-3">{p}</p>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
