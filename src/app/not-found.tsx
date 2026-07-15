"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Users, CreditCard, BookOpen } from "lucide-react";

const quickLinks = [
  { icon: Home,       label: "Accueil",        href: "/",              color: "#1B2A44" },
  { icon: Users,      label: "Nos Profs",       href: "/profs",         color: "#E1613E" },
  { icon: CreditCard, label: "Nos Tarifs",      href: "/tarifs",        color: "#4F7A5E" },
  { icon: BookOpen,   label: "Collège & Lycée", href: "/college-lycee", color: "#C99A3E" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 bg-cream">
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-coral leading-none"
          style={{ fontSize: "clamp(5rem, 15vw, 8rem)" }}
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <h1 className="font-display font-semibold text-3xl text-ink">
            Cette page n&apos;existe pas.
          </h1>
          <p className="text-ink/55 text-lg">
            Tu cherches peut-être l&apos;une de ces pages ?
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full"
        >
          {quickLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl card hover:shadow-card transition-all duration-200 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${link.color}14`, border: `1px solid ${link.color}28` }}
              >
                <link.icon size={18} style={{ color: link.color }} />
              </div>
              <span className="text-sm text-ink/70 font-medium group-hover:text-ink transition-colors">
                {link.label}
              </span>
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
