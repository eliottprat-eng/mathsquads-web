// Centralised site/brand constants used for SEO metadata and structured data.
// Keep these in sync with the values displayed in the UI (Footer, Hero…), with
// the one documented exception of `phone` ci-dessous.

export const SITE_URL = "https://www.mathsquads.com";

export const site = {
  name: "MathSquads",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-emlyon.svg`,
  email: "lamathsquad@gmail.com",
  // Numéro déclaré dans les données structurées, sur demande explicite (14/08/2026).
  // Il diffère volontairement de `phoneDisplay` affiché dans l'UI : ne pas
  // « réaligner » les deux sans validation (cf. commit f5fdc40, 30/07/2026).
  phone: "+33664195752",
  // Numéro affiché dans l'UI (Footer, CTASection, BookingForm, pages légales).
  phoneDisplay: "07 83 53 57 72",
  // Zones couvertes (présentiel + visio partout en France)
  areaServed: ["Lyon", "Lille", "Paris", "France"],
  priceFrom: 20,
  currency: "EUR",
} as const;

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
