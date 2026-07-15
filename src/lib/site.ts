// Centralised site/brand constants used for SEO metadata and structured data.
// Keep these in sync with the values displayed in the UI (Footer, Hero…).

export const SITE_URL = "https://www.mathsquads.com";

export const site = {
  name: "MathSquads",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-emlyon.svg`,
  email: "lamathsquad@gmail.com",
  phone: "+33783535772",
  phoneDisplay: "07 83 53 57 72",
  // Zones couvertes (présentiel + visio partout en France)
  areaServed: ["Lyon", "Lille", "Paris", "France"],
  priceFrom: 20,
  currency: "EUR",
} as const;

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
