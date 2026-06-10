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
  title: "MathSquads — Les Maths Accessibles dès 20€/h",
  description:
    "Cours particuliers de maths avec des profs issus des meilleures Grandes Écoles françaises (emlyon, EDHEC, ESCP). Visio & Présentiel, 1ère heure GRATUITE.",
  openGraph: {
    title: "MathSquads — Les Maths Accessibles dès 20€/h",
    description: "Cours particuliers de maths avec des profs issus des meilleures Grandes Écoles françaises.",
    type: "website",
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
