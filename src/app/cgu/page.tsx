import FloatingMathSymbols from "@/components/ui/FloatingMathSymbols";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions générales d'utilisation du site MathSquads.",
  alternates: { canonical: "/cgu" },
};

export default function CGUPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <FloatingMathSymbols opacity={0.06} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Conditions Générales d&apos;Utilisation
          </h1>
          <p className="text-slate-400 text-lg">Contenu à venir.</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" />
    </>
  );
}
