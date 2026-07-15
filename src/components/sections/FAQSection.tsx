"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { homeFaqs as faqs } from "@/lib/faqs";

function FAQItem({
  faq,
  index,
  openIndex,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  openIndex: number | null;
  onToggle: (i: number) => void;
}) {
  const isOpen = openIndex === index;

  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
        isOpen ? "border-coral/30 bg-coral/5" : "border-ink/8 bg-white hover:border-ink/15"
      }`}
      style={isOpen ? { borderLeft: "3px solid #E1613E" } : {}}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-semibold leading-snug transition-colors ${isOpen ? "text-ink" : "text-ink/70"}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <Plus size={18} className={isOpen ? "text-coral" : "text-ink/35"} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-5">
              <p className="text-ink/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel number="06" label="FAQ" />
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-ink">
            Questions <span className="italic text-coral">fréquentes</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {leftFaqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i * 2}
                openIndex={openIndex}
                onToggle={toggle}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {rightFaqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i * 2 + 1}
                openIndex={openIndex}
                onToggle={toggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
