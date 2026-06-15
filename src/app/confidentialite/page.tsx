import type { Metadata } from "next";
import FloatingMathSymbols from "@/components/ui/FloatingMathSymbols";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et gestion des données personnelles sur MathSquads.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <FloatingMathSymbols opacity={0.06} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-slate-400 text-lg">Contenu à venir.</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" />
    </>
  );
}
