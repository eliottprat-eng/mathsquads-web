import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/sections/CTASection";
import { lyonFaqs } from "@/lib/faqs";
import { breadcrumbSchema, courseSchema, faqSchema, webPageSchema } from "@/lib/structured-data";

const PATH = "/cours-maths-en-ligne-lyon";
const DATE_PUBLISHED = "2026-06-21";
const DATE_MODIFIED = "2026-07-13";
const DATE_MODIFIED_DISPLAY = "13 juillet 2026";

export const metadata: Metadata = {
  title: "Cours de maths en ligne à Lyon dès 20€/h",
  description:
    "Cours de maths en ligne à Lyon : profs de grandes écoles, du collège à la prépa, en visio ou en présentiel. Dès 20€/h. Réservez votre 1ère heure offerte.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Cours de maths en ligne à Lyon dès 20€/h",
    description:
      "Profs de grandes écoles, du collège à la prépa, en visio ou en présentiel à Lyon. Dès 20€/h. Réservez votre 1ère heure offerte.",
    url: PATH,
  },
};

export default function CoursMathsLyonPage() {
  return (
    <>
      <JsonLd
        data={[
          courseSchema({
            name: "Cours de maths en ligne à Lyon",
            description:
              "Cours particuliers de mathématiques en ligne et en présentiel à Lyon, du collège à la prépa, assurés par des profs issus des grandes écoles.",
            url: PATH,
            priceFrom: 20,
          }),
          webPageSchema({
            url: PATH,
            name: "Cours de maths en ligne à Lyon dès 20€/h",
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_MODIFIED,
          }),
          faqSchema(lyonFaqs),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Cours de maths en ligne à Lyon", url: PATH },
          ]),
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden bg-cream">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-tag mb-6">Cours de maths à Lyon</div>
          <h1 className="font-display font-semibold text-5xl sm:text-6xl text-ink leading-tight mb-6">
            Cours de maths <span className="italic text-coral">en ligne à Lyon</span>
          </h1>
          <p className="text-xl text-ink/60 max-w-2xl mx-auto mb-4">
            Progressez en maths avec des profs issus des meilleures grandes écoles, en visio
            depuis chez vous à Lyon ou en présentiel. Du collège à la prépa, dès 20€/h.
          </p>
          <p className="text-sm text-ink/40 mb-10">
            Mis à jour le <time dateTime={DATE_MODIFIED}>{DATE_MODIFIED_DISPLAY}</time>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/tarifs#booking" className="btn-primary text-base group">
              Réserver ma 1ère heure gratuite
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/profs" className="btn-secondary text-base">
              Découvrir nos profs lyonnais
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contenu ── */}
      <article className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 text-ink/70 leading-relaxed">

          <section>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              Pourquoi choisir des cours de maths en ligne à Lyon ?
            </h2>
            <p className="mb-4">
              À Lyon comme ailleurs, les maths sont souvent la matière qui fait la différence,
              au collège, au lycée et plus encore en classe préparatoire. Pourtant, trouver le
              bon prof près de chez soi, organiser les déplacements et concilier le tout avec un
              emploi du temps chargé n&apos;est jamais simple. Les cours de maths en ligne lèvent
              ces obstacles : votre enfant suit son cours depuis le 6ème arrondissement, la
              Croix-Rousse, Gerland ou la périphérie lyonnaise, sans perdre de temps en trajet.
            </p>
            <p>
              Chez MathSquads, la visio n&apos;est pas une version dégradée du cours particulier,
              c&apos;est un format à part entière, avec un tableau blanc interactif partagé, un
              suivi régulier et la même exigence pédagogique qu&apos;en présentiel. Les élèves
              lyonnais y gagnent en souplesse et en régularité, deux conditions essentielles pour
              progresser vraiment en mathématiques.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              Du collège à la prépa : tous les niveaux couverts
            </h2>
            <p className="mb-4">
              Nos cours s&apos;adressent à tous les élèves de Lyon et de sa métropole, quel que
              soit leur niveau et leur objectif :
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3">
                <Check size={20} className="text-coral flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-ink">Collège (6ème à 3ème)</strong> : consolidation
                  des bases, calcul, géométrie, préparation au Brevet.
                </span>
              </li>
              <li className="flex gap-3">
                <Check size={20} className="text-coral flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-ink">Lycée (Seconde à Terminale)</strong> :
                  spécialité maths, option maths expertes et complémentaires, préparation au Bac
                  et au Grand Oral.
                </span>
              </li>
              <li className="flex gap-3">
                <Check size={20} className="text-coral flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-ink">Prépa CPGE &amp; post-bac</strong> : MPSI, PCSI,
                  ECG, prépa au concours, méthode et entraînement aux colles.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Selon le profil de l&apos;élève, nous orientons vers l&apos;accompagnement le plus
              adapté : découvrez le détail de notre offre{" "}
              <Link href="/college-lycee" className="text-coral hover:underline">
                cours de maths collège et lycée
              </Link>{" "}
              ou notre programme{" "}
              <Link href="/cpge-postbac" className="text-coral hover:underline">
                cours de maths prépa CPGE et post-bac
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              Des profs issus des grandes écoles, dont emlyon à Lyon
            </h2>
            <p className="mb-4">
              La qualité d&apos;un cours de maths tient avant tout à la qualité du prof. Nos
              enseignants sont issus du Top 5 des grandes écoles françaises, emlyon business
              school, dont le campus historique se trouve à Lyon, mais aussi ESCP, EDHEC, HEC ou
              l&apos;ESSEC. Tous ont eux-mêmes affronté l&apos;exigence des concours et savent
              transmettre une méthode claire, structurée et rassurante.
            </p>
            <p>
              Faites connaissance avec l&apos;équipe sur la page{" "}
              <Link href="/profs" className="text-coral hover:underline">
                nos profs de maths
              </Link>{" "}
              : chaque profil précise son école, son expérience et sa spécialité.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              Comment se déroule un cours en visio depuis Lyon ?
            </h2>
            <p className="mb-4">
              Le fonctionnement est pensé pour être simple et efficace. Après un premier échange
              pour cerner les besoins, nous mettons l&apos;élève en relation avec le prof le plus
              adapté. Le cours se déroule en visioconférence sur un tableau blanc interactif
              partagé : le prof et l&apos;élève écrivent, tracent des courbes et résolvent les
              exercices ensemble, en temps réel, comme côte à côte.
            </p>
            <p>
              Entre les séances, le prof reste joignable par message pour débloquer un exercice
              ou répondre à une question. Un bilan régulier permet de suivre la progression et de
              fixer des objectifs concrets. Les cours en présentiel restent possibles à Lyon pour
              les familles qui le préfèrent.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              Un accompagnement pour tous les lycées lyonnais
            </h2>
            <p>
              Nous accompagnons des élèves de l&apos;ensemble de Lyon et de sa métropole, du 1er
              au 9ème arrondissement comme à Villeurbanne, Caluire, Écully ou Tassin. Que votre
              enfant soit scolarisé au lycée du Parc, à Ampère, Saint-Just, La Martinière ou dans
              un établissement de quartier, nos profs s&apos;adaptent au programme suivi et au
              rythme de la classe. Les étudiants en prépa des grands établissements lyonnais
              bénéficient quant à eux d&apos;un entraînement ciblé sur les concours.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              Des tarifs clairs, à partir de 20€/h
            </h2>
            <p>
              Pas d&apos;abonnement, pas de frais cachés : vous payez à la séance, dès 20€/h, et
              vous restez libre d&apos;annuler quand vous le souhaitez. Et pour commencer sans
              risque, la <strong className="text-ink">première heure est offerte</strong>.
              Consultez le détail sur la page{" "}
              <Link href="/tarifs" className="text-coral hover:underline">
                tarifs des cours particuliers de maths
              </Link>{" "}
              et réservez votre première séance gratuite en quelques clics.
            </p>
          </section>
        </div>
      </article>

      {/* ── FAQ locale ── */}
      <section className="relative py-16 bg-cream-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink text-center mb-10">
            Questions fréquentes : cours de maths à Lyon
          </h2>
          <div className="flex flex-col gap-3">
            {lyonFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-ink/8 bg-white px-5 py-4 open:border-coral/30 open:bg-coral/5"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-ink/80 group-open:text-ink">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
