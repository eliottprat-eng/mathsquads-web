import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et gestion des données personnelles sur MathSquads.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "1. Qui est responsable de vos données ?",
    body: [
      `Le site ${site.url} est édité par MathSquads, représenté par ses cofondateurs Marin Delzoppo et Eliott Prat. Pour toute question relative à vos données personnelles : ${site.email} ou ${site.phoneDisplay}.`,
    ],
  },
  {
    title: "2. Quelles données collectons-nous ?",
    body: [
      "Lorsque vous remplissez le formulaire de réservation, nous collectons : votre prénom, votre numéro de téléphone, votre adresse email, le niveau scolaire de l'élève et, si vous le précisez, vos objectifs.",
      "Le site ne dépose aucun cookie de suivi ou de publicité et n'utilise aucun outil d'analyse d'audience. Aucune donnée de navigation n'est collectée.",
    ],
  },
  {
    title: "3. Pourquoi et sur quelle base ?",
    body: [
      "Ces données servent uniquement à vous recontacter pour organiser votre premier cours et assurer le suivi pédagogique. La base légale est l'exécution de mesures précontractuelles prises à votre demande (article 6.1.b du RGPD).",
      "Vos données ne sont jamais vendues, louées ni utilisées à des fins publicitaires.",
    ],
  },
  {
    title: "4. Qui a accès à vos données ?",
    body: [
      "Les demandes du formulaire nous parviennent par email via le prestataire FormSubmit (formsubmit.co), qui agit comme sous-traitant technique de transmission. Elles sont ensuite traitées uniquement par les cofondateurs de MathSquads.",
      "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis, dont les serveurs peuvent être situés hors de l'Union européenne. Vercel adhère aux clauses contractuelles types de la Commission européenne.",
    ],
  },
  {
    title: "5. Combien de temps les conservons-nous ?",
    body: [
      "Les données des prospects qui ne deviennent pas élèves sont supprimées au plus tard 3 ans après le dernier contact. Les données des élèves sont conservées pendant la durée de l'accompagnement, puis archivées le temps des obligations légales (facturation notamment).",
    ],
  },
  {
    title: "6. Quels sont vos droits ?",
    body: [
      `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation du traitement et de portabilité de vos données. Pour les exercer, écrivez-nous à ${site.email} : nous répondons sous 30 jours.`,
      "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (cnil.fr).",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden bg-cream">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink mb-4">
            Politique de confidentialité
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
