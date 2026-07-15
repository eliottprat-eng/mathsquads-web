import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "Conditions Générales d'Utilisation du site MathSquads.",
  alternates: { canonical: "/cgu" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "1. Objet",
    body: [
      `Les présentes Conditions Générales d'Utilisation encadrent l'accès au site ${site.url} et le recours aux services de MathSquads : mise en relation avec des professeurs particuliers de mathématiques et organisation de cours, en visioconférence partout en France ou en présentiel à Lyon, Lille et Paris.`,
      "En envoyant une demande de réservation via le formulaire du site, vous reconnaissez avoir pris connaissance des présentes conditions et les accepter.",
    ],
  },
  {
    title: "2. Services et réservation",
    body: [
      "Les cours s'adressent aux élèves du collège au post-bac (CPGE, licence, BUT, BTS). Après votre demande, MathSquads vous recontacte sous 24 heures ouvrées pour vous proposer un professeur adapté au niveau et aux objectifs indiqués.",
      "La première heure de cours est offerte et sans engagement. Elle ne donne lieu à aucune facturation, que vous poursuiviez ou non.",
    ],
  },
  {
    title: "3. Tarifs et paiement",
    body: [
      `Les tarifs en vigueur sont affichés sur la page Tarifs et commencent à ${site.priceFrom}€ de l'heure. Les cours se paient à la séance, sans abonnement ni frais cachés. MathSquads se réserve le droit de faire évoluer ses tarifs, sans effet sur les séances déjà convenues.`,
    ],
  },
  {
    title: "4. Satisfait ou remboursé et annulation",
    body: [
      "Si une séance payée ne vous satisfait pas, elle est remboursée intégralement sur simple demande, sans justification. Une séance peut être annulée ou reportée sans frais jusqu'à 24 heures avant l'horaire prévu.",
    ],
  },
  {
    title: "5. Responsabilités",
    body: [
      "MathSquads s'engage à proposer des professeurs sélectionnés, issus des grandes écoles françaises, et à assurer le suivi de l'accompagnement. La progression de l'élève dépend aussi de son travail personnel : aucun résultat scolaire précis ne saurait être garanti.",
      "L'utilisateur s'engage à fournir des informations exactes lors de la réservation et à respecter les horaires convenus avec le professeur.",
    ],
  },
  {
    title: "6. Propriété intellectuelle",
    body: [
      "Les contenus du site (textes, marque, logo, supports de cours) sont la propriété de MathSquads ou de ses professeurs et ne peuvent être reproduits sans autorisation écrite.",
    ],
  },
  {
    title: "7. Données personnelles",
    body: [
      "Le traitement des données collectées via le site est détaillé dans notre Politique de confidentialité, accessible depuis le pied de page.",
    ],
  },
  {
    title: "8. Droit applicable",
    body: [
      "Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux français seront compétents.",
    ],
  },
];

export default function CGUPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden bg-cream">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink mb-4">
            Conditions Générales d&apos;Utilisation
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
