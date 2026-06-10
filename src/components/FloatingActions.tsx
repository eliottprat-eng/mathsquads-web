"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "33664195752";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour, je souhaite réserver ma 1ère heure gratuite de maths"
);
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hideSticky = pathname === "/tarifs";

  return (
    <>
      {/* WhatsApp flottant — toutes plateformes */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp avec MathSquads"
        className={`fixed z-40 right-4 sm:right-6 bottom-20 sm:bottom-6 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-xl ${
          scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <MessageCircle size={26} strokeWidth={2.2} />
      </a>

      {/* CTA sticky mobile — masqué sur /tarifs (déjà sur la page de réservation) */}
      {!hideSticky && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden border-t border-white/8 bg-navy-900/95 backdrop-blur-md px-4 py-3 transition-transform duration-200 ${
            scrolled ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <Link
            href="/tarifs#booking"
            className="btn-gold w-full justify-center text-sm group"
          >
            1ère heure gratuite
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </>
  );
}
