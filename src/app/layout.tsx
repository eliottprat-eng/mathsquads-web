import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, site } from "@/lib/site";
import { organizationSchema, websiteSchema, foundersSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MathSquads — Cours particuliers de maths dès 20€/h",
    template: "%s | MathSquads",
  },
  description:
    "Cours particuliers de maths avec des profs issus du Top 5 des meilleures écoles de France. Visio partout en France, présentiel à Lyon. 1ère heure offerte.",
  applicationName: site.name,
  // Pas de `alternates.canonical` ici : un canonical défini au layout racine est
  // hérité par toute page qui n'en déclare pas, qui se déclarerait alors
  // canonique vers "/". Chaque page porte le sien.
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: site.name,
    title: "MathSquads — Cours particuliers de maths dès 20€/h",
    description:
      "Des profs issus des meilleures grandes écoles de France. Visio partout en France, présentiel à Lyon. 1ère heure offerte.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MathSquads — Cours particuliers de maths dès 20€/h",
    description:
      "Des profs issus des meilleures grandes écoles de France. Visio partout en France, présentiel à Lyon. 1ère heure offerte.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema(), ...foundersSchema()]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
