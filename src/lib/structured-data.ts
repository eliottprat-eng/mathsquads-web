import { site, absoluteUrl } from "./site";

// Reusable @id for the organization so other nodes can reference it.
const ORG_ID = `${site.url}/#organization`;

const founders = [
  { name: "Eliott Prat", id: `${site.url}/#eliott-prat` },
  { name: "Marin Delzoppo", id: `${site.url}/#marin-delzoppo` },
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    logo: site.logo,
    email: site.email,
    telephone: site.phone,
    description:
      "Cours particuliers de maths assurés par des profs issus des meilleures grandes écoles de France. En visio partout en France et en présentiel à Lyon, Lille et Paris.",
    priceRange: "20€-35€ / heure",
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    founder: founders.map((f) => ({ "@id": f.id })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "French",
    },
  };
}

export function foundersSchema() {
  return founders.map((f) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": f.id,
    name: f.name,
    jobTitle: "Cofondateur et professeur de mathématiques",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "emlyon business school",
    },
    worksFor: { "@id": ORG_ID },
  }));
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "fr-FR",
    publisher: { "@id": ORG_ID },
  };
}

export function courseSchema(opts: {
  name: string;
  description: string;
  url: string;
  priceFrom?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    inLanguage: "fr-FR",
    provider: {
      "@type": "EducationalOrganization",
      "@id": ORG_ID,
      name: site.name,
      url: site.url,
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Collégiens, lycéens, étudiants en CPGE et post-bac",
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "online",
        location: { "@type": "VirtualLocation", name: "Visioconférence, partout en France" },
      },
      {
        "@type": "CourseInstance",
        courseMode: "onsite",
        location: { "@type": "Place", name: "Lyon, Lille et Paris" },
      },
    ],
    offers: {
      "@type": "Offer",
      category: "Cours particuliers",
      price: String(opts.priceFrom ?? site.priceFrom),
      priceCurrency: site.currency,
      description: `Dès ${opts.priceFrom ?? site.priceFrom}€ de l'heure, première heure offerte, sans abonnement.`,
    },
  };
}

export type PricingGroup = {
  /** Zone commerciale telle qu'affichée sur la page tarifs. */
  area: string;
  /** Zones géographiques couvertes par cette grille. */
  areaServed: string[];
  courseMode: "online" | "onsite";
  tiers: { level: string; price: number }[];
};

// Grille tarifaire réelle en entités Offer, une par couple (zone × niveau).
// Le prix est exprimé en UnitPriceSpecification horaire (unitCode HUR) : sans
// ça, un « 20 » nu se lit comme le prix total de la prestation.
export function pricingCatalogSchema(groups: PricingGroup[]) {
  const offers = groups.flatMap((group) =>
    group.tiers.map((tier) => ({
      "@type": "Offer",
      name: `Cours particuliers de maths ${tier.level} — ${group.area}`,
      category:
        group.courseMode === "online" ? "Cours en visioconférence" : "Cours en présentiel",
      price: String(tier.price),
      priceCurrency: site.currency,
      availability: "https://schema.org/InStock",
      areaServed: group.areaServed.map((name) => ({ "@type": "Place", name })),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(tier.price),
        priceCurrency: site.currency,
        unitCode: "HUR",
        unitText: "heure",
      },
      itemOffered: {
        "@type": "Service",
        name: `Cours particuliers de mathématiques — ${tier.level}`,
        serviceType: "Cours particuliers de mathématiques",
        provider: { "@id": ORG_ID },
      },
    })),
  );

  const prices = offers.map((offer) => Number(offer.price));

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${site.url}/tarifs#offers`,
    name: "Tarifs des cours particuliers de maths MathSquads",
    url: absoluteUrl("/tarifs"),
    provider: { "@id": ORG_ID },
    priceRange: `${Math.min(...prices)}€-${Math.max(...prices)}€ / heure`,
    itemListElement: offers,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

// WebPage node carrying explicit freshness signals for AI surfaces.
export function webPageSchema(opts: {
  url: string;
  name: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(opts.url),
    name: opts.name,
    inLanguage: "fr-FR",
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    publisher: { "@id": ORG_ID },
  };
}
