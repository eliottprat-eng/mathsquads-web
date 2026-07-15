import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, site } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
  alternates: { canonical: "/" },
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
    <html lang="fr" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
