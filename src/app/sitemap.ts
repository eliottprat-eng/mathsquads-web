import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/cours-maths-en-ligne-lyon", changeFrequency: "weekly", priority: 0.9 },
    { path: "/college-lycee", changeFrequency: "monthly", priority: 0.8 },
    { path: "/cpge-postbac", changeFrequency: "monthly", priority: 0.8 },
    { path: "/profs", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tarifs", changeFrequency: "monthly", priority: 0.8 },
    { path: "/devenir-prof", changeFrequency: "monthly", priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
