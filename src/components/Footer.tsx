import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/profs", label: "Vos Profs" },
  { href: "/college-lycee", label: "Collège & Lycée" },
  { href: "/cpge-postbac", label: "CPGE & Post-Bac" },
  { href: "/tarifs", label: "Nos Tarifs" },
  { href: "/devenir-prof", label: "Devenir Prof" },
];

const resourceLinks = [
  { href: "/tarifs#booking", label: "Réserver un cours" },
  { href: "/tarifs", label: "1ère heure gratuite" },
  { href: "/cours-maths-en-ligne-lyon", label: "Cours de maths en ligne à Lyon" },
  { href: "/cours-maths-en-ligne-lyon", label: "Cours de maths en visio" },
  { href: "/cpge-postbac", label: "Cours maths CPGE" },
  { href: "/college-lycee", label: "Cours maths Lycée" },
  { href: "/college-lycee", label: "Cours maths Collège" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Colonne 1 — À propos */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-coral flex items-center justify-center">
                <span className="text-white font-display font-bold">M²</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">MathSquads</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Des profs d&apos;exception pour rendre les maths accessibles à tous.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:lamathsquad@gmail.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-coral" />
                </div>
                lamathsquad@gmail.com
              </a>
              <a
                href="tel:0783535772"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-coral" />
                </div>
                07 83 53 57 72
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-coral" />
                </div>
                Lyon · Lille · Paris &amp; toute la France (visio)
              </div>
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Ressources */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm">
              Ressources
            </h3>
            <ul className="flex flex-col gap-2">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-xs text-white/40">
            © 2026 MathSquads. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/mentions-legales" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Mentions légales
            </Link>
            <span className="text-white/20 text-xs">·</span>
            <Link href="/cgu" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              CGU
            </Link>
            <span className="text-white/20 text-xs">·</span>
            <Link href="/confidentialite" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sage-light" />
            <span className="text-xs text-white/40">Disponible pour de nouveaux élèves</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
