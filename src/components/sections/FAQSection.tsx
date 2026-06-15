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
        isOpen
          ? "border-electric/40 bg-electric/5"
          : "border-white/6 bg-white/2 hover:border-white/10"
      }`}
      style={isOpen ? { borderLeft: "3px solid #5B8DEF" } : {}}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-semibold leading-snug transition-colors ${isOpen ? "text-white" : "text-slate-300"}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <Plus size={18} className={isOpen ? "text-electric" : "text-slate-500"} />
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
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 40%, rgba(91,141,239,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel number="06" label="FAQ" />
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Questions{" "}
            <span className="text-gradient">fréquentes</span>
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
