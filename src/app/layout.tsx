import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://mathsquads.com"),
  title: {
    default:
      "MathSquads — Cours particuliers de maths dès 20€/h | Lyon, Lille, Paris & visio",
    template: "%s | MathSquads",
  },
  description:
    "Cours particuliers de maths avec des profs issus des meilleures Grandes Écoles françaises (emlyon, EDHEC, ESCP). Visio & présentiel, 1ère heure gratuite.",
  openGraph: {
    siteName: "MathSquads",
    title: "MathSquads — Cours particuliers de maths dès 20€/h",
    description:
      "Des profs issus des meilleures Grandes Écoles françaises. Lyon, Lille, Paris & visio partout en France. 1ère heure gratuite.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
