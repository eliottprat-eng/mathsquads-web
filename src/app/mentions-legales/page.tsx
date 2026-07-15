import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site MathSquads.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "Éditeur du site",
    body: [
      `Le site ${site.url} est édité par MathSquads, représenté par ses cofondateurs Eliott Prat et Marin Delzoppo.`,
      `Directeurs de la publication : Eliott Prat et Marin Delzoppo. Contact : ${site.email} ou ${site.phoneDisplay}.`,
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
          <p className="text-ink/55 text-lg">
            Dernière mise à jour : <time dateTime="2026-07-14">14 juillet 2026</time>
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
