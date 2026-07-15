import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Crawlers des moteurs de recherche IA, autorisés explicitement pour que le
// site reste citable par ChatGPT, Claude, Perplexity et Google AI même si la
// règle générique se resserre un jour.
const AI_SEARCH_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...AI_SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
