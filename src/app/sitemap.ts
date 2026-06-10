import type { MetadataRoute } from "next";

const BASE_URL = "https://mathsquads.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/tarifs", priority: 0.9 },
    { path: "/profs", priority: 0.9 },
    { path: "/college-lycee", priority: 0.8 },
    { path: "/cpge-postbac", priority: 0.8 },
    { path: "/cours-maths-lyon", priority: 0.8 },
    { path: "/cours-maths-paris", priority: 0.8 },
    { path: "/cours-maths-lille", priority: 0.8 },
    { path: "/devenir-prof", priority: 0.6 },
    { path: "/mentions-legales", priority: 0.2 },
    { path: "/cgu", priority: 0.2 },
    { path: "/confidentialite", priority: 0.2 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
