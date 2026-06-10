"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Users, CreditCard, BookOpen } from "lucide-react";

const symbols = [
  { char: "∑", top: "10%", left: "5%",  size: "8rem", delay: 0 },
  { char: "π", top: "15%", left: "85%", size: "7rem", delay: 1.2 },
  { char: "√", top: "70%", left: "8%",  size: "7rem", delay: 2.5 },
  { char: "∫", top: "75%", left: "88%", size: "8rem", delay: 0.7 },
  { char: "Δ", top: "40%", left: "92%", size: "6rem", delay: 3 },
  { char: "θ", top: "85%", left: "45%", size: "6rem", delay: 1.8 },
];

const quickLinks = [
  { icon: Home,     label: "Accueil",         href: "/",             color: "#7E96BF" },
  { icon: Users,    label: "Nos Profs",        href: "/profs",        color: "#FFBB0A" },
  { icon: CreditCard, label: "Nos Tarifs",     href: "/tarifs",       color: "#7E96BF" },
  { icon: BookOpen, label: "Collège & Lycée",  href: "/college-lycee", color: "#7E96BF" },
];

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ background: "#0F172A" }}
    >
      {/* Symboles flottants */}
      {symbols.map((s, i) => (
        <motion.span
          key={i}
          className="absolute select-none pointer-events-none font-display font-black leading-none"
          style={{ top: s.top, left: s.left, fontSize: s.size, color: "#3B82F6", opacity: 0.07 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7 + i, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {s.char}
        </motion.span>
      ))}

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold leading-none bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text"
          style={{ fontSize: "clamp(5rem, 15vw, 8rem)", WebkitTextFillColor: "transparent" }}
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <h1 className="font-display font-bold text-3xl text-white">
            Cette page n&apos;existe pas.
          </h1>
          <p className="text-slate-400 text-lg">
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
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/6 hover:border-white/15 transition-all duration-200 group"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${link.color}18`, border: `1px solid ${link.color}30` }}
              >
                <link.icon size={18} style={{ color: link.color }} />
              </div>
              <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
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
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
            style={{ background: "#3B82F6" }}
          >
            Retour à l&apos;accueil
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
