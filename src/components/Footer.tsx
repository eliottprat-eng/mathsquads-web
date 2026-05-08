import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/profs", label: "Vos Profs" },
      { href: "/college-lycee", label: "Collège & Lycée" },
      { href: "/cpge-postbac", label: "CPGE & Post-Bac" },
      { href: "/tarifs", label: "Nos Tarifs" },
    ],
  },
  {
    title: "Rejoindre",
    links: [
      { href: "/devenir-prof", label: "Devenir Prof" },
      { href: "/tarifs#booking", label: "Réserver un cours" },
      { href: "/tarifs", label: "1ère heure gratuite" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/50 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-electric-dark flex items-center justify-center shadow-glow">
                <span className="text-white font-display font-bold">M²</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">MathSquads</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Des profs issus des meilleures écoles de France pour rendre les maths accessibles à tous, dès 20€/h.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:lamathsquad@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-electric transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-electric" />
                </div>
                lamathsquad@gmail.com
              </a>
              <a
                href="tel:0664195752"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-electric transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-electric" />
                </div>
                06 64 19 57 52
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-electric" />
                </div>
                Lyon & toute la France (distanciel)
              </div>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MathSquads. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-slate-500">Disponible pour de nouveaux élèves</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
