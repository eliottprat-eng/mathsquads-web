import { site, absoluteUrl } from "./site";

// Reusable @id for the organization so other nodes can reference it.
const ORG_ID = `${site.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.alternateNames,
    url: site.url,
    logo: site.logo,
    email: site.email,
    telephone: site.phone,
    description:
      "Cours particuliers de maths assurés par des profs issus des meilleures grandes écoles de France. En visio partout en France et en présentiel à Lyon.",
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    provider: {
      "@type": "EducationalOrganization",
      "@id": ORG_ID,
      name: site.name,
      url: site.url,
    },
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
