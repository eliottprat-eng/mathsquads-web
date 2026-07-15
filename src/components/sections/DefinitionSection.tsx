// Server component : bloc de réponse autonome placé dans le premier tiers de la
// page, formulé pour être extractible tel quel par les moteurs de recherche IA.
export default function DefinitionSection() {
  return (
    <section aria-label="Qu'est-ce que MathSquads" className="relative py-14 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-5">
          Qu&apos;est-ce que MathSquads ?
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          MathSquads est un service français de cours particuliers de mathématiques,
          fondé par Eliott Prat et Marin Delzoppo, étudiants à emlyon business school.
          Les cours sont assurés exclusivement par des profs issus du Top 5 des grandes
          écoles françaises (emlyon, ESCP, EDHEC), en visioconférence partout en France
          ou en présentiel à Lyon, Lille et Paris.
        </p>
        <p className="text-ink/70 leading-relaxed">
          Les tarifs vont de 20€ à 35€ de l&apos;heure selon le niveau (collège, lycée,
          CPGE et post-bac) et le format, sans abonnement ni frais cachés. La première
          heure est offerte et chaque élève bénéficie d&apos;un suivi entre les séances,
          avec la garantie satisfait ou remboursé. Plus de 475 cours ont été donnés
          depuis le lancement.
        </p>
      </div>
    </section>
  );
}
