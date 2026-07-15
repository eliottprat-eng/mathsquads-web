import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Dates réelles de dernière modification substantielle par page : un
// lastModified honnête est un signal de fraîcheur que les moteurs IA
// exploitent, un `new Date()` à chaque build est ignoré comme du bruit.
const routes: {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", lastModified: "2026-07-13", changeFrequency: "weekly", priority: 1 },
  { path: "/cours-maths-en-ligne-lyon", lastModified: "2026-07-13", changeFrequency: "weekly", priority: 0.9 },
  { path: "/college-lycee", lastModified: "2026-07-13", changeFrequency: "monthly", priority: 0.8 },
  { path: "/cpge-postbac", lastModified: "2026-07-13", changeFrequency: "monthly", priority: 0.8 },
  { path: "/profs", lastModified: "2026-07-13", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tarifs", lastModified: "2026-07-13", changeFrequency: "monthly", priority: 0.8 },
  { path: "/devenir-prof", lastModified: "2026-07-13", changeFrequency: "monthly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
