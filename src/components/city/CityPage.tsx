import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/sections/CTASection";
import ProfCard from "@/components/profs/ProfCard";
import { cities } from "@/lib/profs";
import type { CityPageData, PriceTier } from "@/lib/city-pages";
import { breadcrumbSchema, courseSchema, faqSchema, webPageSchema } from "@/lib/structured-data";

function PriceTable({ title, tiers }: { title: string; tiers: PriceTier[] }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <h3 className="font-display font-semibold text-xl text-ink mb-4">{title}</h3>
      <ul className="flex flex-col gap-3">
        {tiers.map((tier) => (
          <li key={tier.level} className="flex items-baseline justify-between gap-4">
            <span className="text-ink/70">{tier.level}</span>
            <span className="font-semibold text-ink">{tier.price}€/h</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CityPage({ data }: { data: CityPageData }) {
  const profs = cities.find((c) => c.label === data.profsKey)?.profs ?? [];
  const priceFrom = Math.min(...data.onsiteTiers.map((t) => t.price), ...data.onlineTiers.map((t) => t.price));

  return (
    <>
      <JsonLd
        data={[
          courseSchema({
            name: `${data.heroTitle} ${data.heroHighlight}`,
            description: data.metaDescription,
            url: data.path,
            priceFrom,
          }),
          webPageSchema({
            url: data.path,
            name: data.title,
            datePublished: data.datePublished,
            dateModified: data.dateModified,
          }),
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: data.title, url: data.path },
          ]),
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden bg-cream">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-tag mb-6">Cours de maths à {data.city}</div>
          <h1 className="font-display font-semibold text-5xl sm:text-6xl text-ink leading-tight mb-6">
            {data.heroTitle} <span className="italic text-coral">{data.heroHighlight}</span>
          </h1>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto mb-4">{data.heroText}</p>
          <p className="text-sm text-ink/70 mb-10">
            Mis à jour le <time dateTime={data.dateModified}>{data.dateModifiedDisplay}</time>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/tarifs#booking" className="btn-primary text-base group">
              Réserver ma 1ère heure gratuite
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/profs" className="btn-secondary text-base">
              Découvrir nos profs {data.profsAdjective}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contenu ── */}
      <article className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 text-ink/70 leading-relaxed">
          {data.sections.slice(0, 1).map((s) => (
            <Section key={s.title} {...s} />
          ))}

          <section>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              Du collège à la prépa : tous les niveaux
            </h2>
            <p className="mb-4">{data.levelsIntro}</p>
            <ul className="flex flex-col gap-3">
              {data.levels.map((level) => (
                <li key={level.label} className="flex gap-3">
                  <Check size={20} className="text-coral flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-ink">{level.label}</strong> : {level.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Le détail de l&apos;offre est sur les pages{" "}
              <Link href="/college-lycee" className="text-coral-deep hover:underline">
                cours de maths collège et lycée
              </Link>{" "}
              et{" "}
              <Link href="/cpge-postbac" className="text-coral-deep hover:underline">
                cours de maths prépa CPGE et post-bac
              </Link>
              .
            </p>
          </section>

          {data.sections.slice(1, -1).map((s) => (
            <Section key={s.title} {...s} />
          ))}

          <section>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              {data.sections[data.sections.length - 1].title}
            </h2>
            {data.sections[data.sections.length - 1].paragraphs.map((p) => (
              <p key={p} className="mb-6">
                {p}
              </p>
            ))}
            <div className="grid gap-4 sm:grid-cols-2">
              <PriceTable title={`En présentiel à ${data.city}`} tiers={data.onsiteTiers} />
              <PriceTable title="En visio, partout en France" tiers={data.onlineTiers} />
            </div>
            <p className="mt-4">
              Le détail complet est sur la page{" "}
              <Link href="/tarifs" className="text-coral-deep hover:underline">
                tarifs des cours particuliers de maths
              </Link>
              .
            </p>
          </section>
        </div>
      </article>

      {/* ── Profs ── */}
      {profs.length > 0 && (
        <section className="relative py-16 bg-cream-soft">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink text-center mb-10">
              Vos profs de maths à {data.city}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {profs.map((prof, i) => (
                <ProfCard key={prof.name} {...prof} delay={i * 0.15} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ locale ── */}
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink text-center mb-10">
            {data.faqHeading}
          </h2>
          <div className="flex flex-col gap-3">
            {data.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-ink/8 bg-white px-5 py-4 open:border-coral/30 open:bg-coral/5"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-ink/80 group-open:text-ink">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Section({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section>
      <h2 className="font-display font-semibold text-3xl text-ink mb-4">{title}</h2>
      {paragraphs.map((p) => (
        <p key={p} className="mb-4 last:mb-0">
          {p}
        </p>
      ))}
    </section>
  );
}
