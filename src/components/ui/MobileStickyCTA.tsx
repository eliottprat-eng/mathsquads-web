"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

// Barre CTA fixe en bas d'écran, mobile uniquement. Apparaît une fois le hero
// dépassé pour garder l'action principale accessible sur toute la page.
export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur border-t border-ink/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <div className="flex items-center gap-3">
            <Link href="/tarifs#booking" className="btn-primary flex-1 justify-center text-sm py-3">
              Réserver ma 1ère heure gratuite
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:0664195752"
              aria-label="Appeler MathSquads"
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-ink/15 text-ink flex-shrink-0"
            >
              <Phone size={18} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
