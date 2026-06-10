"use client";

import Link from "next/link";
import { MapPin, Wifi, ArrowRight } from "lucide-react";

const columns = [
  { key: "lyon", label: "Lyon", icon: MapPin, featured: false },
  { key: "lille", label: "Lille", icon: MapPin, featured: false },
  { key: "paris", label: "Paris", icon: MapPin, featured: false },
  { key: "visio", label: "Distanciel", icon: Wifi, featured: true },
] as const;

const rows: { level: string; details: string; lyon: number; lille: number; paris: number; visio: number }[] = [
  { level: "Collège", details: "6ème → 3ème", lyon: 20, lille: 20, paris: 25, visio: 20 },
  { level: "Lycée", details: "2nde → Terminale", lyon: 25, lille: 25, paris: 30, visio: 20 },
  { level: "CPGE / Post-bac", details: "Prépa, Licence, BTS...", lyon: 30, lille: 30, paris: 35, visio: 25 },
];

export default function PricingTable() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left border-collapse">
          <caption className="sr-only">
            Tarifs horaires des cours de maths MathSquads par ville et par niveau
          </caption>
          <thead>
            <tr className="border-b border-white/8">
              <th scope="col" className="px-6 py-5 text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-medium">
                Niveau
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`px-6 py-5 ${col.featured ? "bg-gold/6" : ""}`}
                >
                  <div className={`flex items-center gap-2 font-display font-bold text-base ${col.featured ? "text-gold" : "text-white"}`}>
                    <col.icon size={14} />
                    {col.label}
                  </div>
                  <div className="text-xs text-slate-500 font-normal mt-0.5">
                    {col.featured ? "Toute la France" : "Présentiel"}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.level} className="border-b border-white/6 last:border-0">
                <th scope="row" className="px-6 py-5 font-normal">
                  <div className="font-semibold text-white text-sm">{row.level}</div>
                  <div className="text-xs text-slate-500">{row.details}</div>
                </th>
                {columns.map((col) => (
                  <td key={col.key} className={`px-6 py-5 ${col.featured ? "bg-gold/6" : ""}`}>
                    <span className={`font-display font-bold text-xl ${col.featured ? "text-gold" : "text-white"}`}>
                      {row[col.key]}€
                    </span>
                    <span className="text-xs text-slate-500">/h</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 border-t border-white/8">
        <p className="text-sm text-slate-400">
          1ère heure gratuite, sans engagement — quel que soit le format.
        </p>
        <Link href="#booking" className="btn-gold text-sm group flex-shrink-0">
          Réserver ma 1ère heure gratuite
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
