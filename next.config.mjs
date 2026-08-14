/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ── Canonicalisation de l'hôte ───────────────────────────────────────
      // Toutes les URL canoniques du site pointent vers www.mathsquads.com.
      // Sans cette règle, si le domaine nu répond aussi en 200, Google voit
      // deux sites identiques et dilue l'indexation. Placée en premier pour
      // que le domaine nu soit redirigé en un seul saut.
      // Ne se déclenche que pour l'hôte exact "mathsquads.com" : l'hôte www
      // ne correspond pas, donc pas de boucle de redirection.
      {
        source: "/:path*",
        has: [{ type: "host", value: "mathsquads.com" }],
        destination: "https://www.mathsquads.com/:path*",
        permanent: true,
      },

      // ── Accueil ──────────────────────────────────────────────────────────
      { source: "/home",        destination: "/", permanent: true },
      { source: "/accueil",     destination: "/", permanent: true },
      { source: "/index",       destination: "/", permanent: true },
      { source: "/blank-1",     destination: "/", permanent: true },
      { source: "/blank_1",     destination: "/", permanent: true },
      { source: "/copy-of",     destination: "/", permanent: true },

      // ── Profs ────────────────────────────────────────────────────────────
      { source: "/vos-profs",   destination: "/profs", permanent: true },
      { source: "/nos-profs",   destination: "/profs", permanent: true },
      { source: "/professeurs", destination: "/profs", permanent: true },
      { source: "/equipe",      destination: "/profs", permanent: true },

      // ── Niveaux ──────────────────────────────────────────────────────────
      { source: "/la-prepa-maths",       destination: "/cpge-postbac",   permanent: true },
      { source: "/la-pr%C3%A9pa-maths",  destination: "/cpge-postbac",   permanent: true },
      { source: "/prepa",                destination: "/cpge-postbac",   permanent: true },
      { source: "/cpge",                 destination: "/cpge-postbac",   permanent: true },
      { source: "/college",              destination: "/college-lycee",  permanent: true },
      { source: "/lycee",                destination: "/college-lycee",  permanent: true },

      // ── Tarifs ───────────────────────────────────────────────────────────
      { source: "/nos-tarifs",  destination: "/tarifs", permanent: true },
      { source: "/tarif",       destination: "/tarifs", permanent: true },
      { source: "/prix",        destination: "/tarifs", permanent: true },
      { source: "/reservation", destination: "/tarifs", permanent: true },
      { source: "/reserver",    destination: "/tarifs", permanent: true },
      { source: "/booking",     destination: "/tarifs", permanent: true },
      { source: "/services-5",  destination: "/tarifs", permanent: true },
      { source: "/services_5",  destination: "/tarifs", permanent: true },

      // ── Recrutement ──────────────────────────────────────────────────────
      { source: "/rejoindre",    destination: "/devenir-prof", permanent: true },
      { source: "/recrutement",  destination: "/devenir-prof", permanent: true },
      { source: "/candidature",  destination: "/devenir-prof", permanent: true },

      // ── Pages légales ────────────────────────────────────────────────────
      { source: "/politique-de-confidentialite", destination: "/confidentialite", permanent: true },
      { source: "/privacy",                      destination: "/confidentialite", permanent: true },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
