"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Target,
  GraduationCap,
  Video,
  MapPin,
} from "lucide-react";

type IconType = typeof User;

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  format: "presentiel" | "visio" | "";
  ville: string;
  niveau: "" | "college" | "lycee" | "prepa" | "postbac";
  jour: "" | "semaine" | "weekend" | "indifferent";
  creneau: "" | "matin" | "apresmidi" | "soir";
  duree: string;
  objectifs: string;
}

const initialData: FormData = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  format: "",
  ville: "",
  niveau: "",
  jour: "",
  creneau: "",
  duree: "",
  objectifs: "",
};

const niveaux = [
  { value: "college", label: "Collège (6ème → 3ème)" },
  { value: "lycee", label: "Lycée (2nde → Terminale)" },
  { value: "prepa", label: "Prépa (CPGE)" },
  { value: "postbac", label: "Post-bac (Licence, BTS, BUT...)" },
];

const villes = [
  { value: "lyon", label: "Lyon" },
  { value: "lille", label: "Lille" },
  { value: "paris", label: "Paris" },
];

const jours = [
  { value: "semaine", label: "En semaine" },
  { value: "weekend", label: "Week-end" },
  { value: "indifferent", label: "Indifférent" },
];

const creneaux = [
  { value: "matin", label: "Matin" },
  { value: "apresmidi", label: "Après-midi" },
  { value: "soir", label: "Soir" },
];

const inputCls =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold/40 focus:bg-white/8 transition-colors duration-150 text-sm";

const labelCls = "block text-xs font-medium text-slate-400 mb-1.5";

function FieldLabel({ icon: Icon, children }: { icon: IconType; children: React.ReactNode }) {
  return (
    <label className={labelCls}>
      <span className="flex items-center gap-1.5">
        <Icon size={12} />
        {children}
      </span>
    </label>
  );
}

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const setFormat = (format: "presentiel" | "visio") => {
    setForm((f) => ({ ...f, format, ville: format === "visio" ? "" : f.ville }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: brancher l'envoi sur Formspree, Resend, ou l'API mail interne
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="relative glass-card rounded-2xl overflow-hidden">
      <div className="p-8 sm:p-10">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center py-12"
              role="status"
              aria-live="polite"
            >
              <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-gold" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Demande envoyée
              </h3>
              <p className="text-slate-400 max-w-sm mx-auto">
                On te recontacte sous 24h pour confirmer ton premier cours gratuit.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              noValidate
            >
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Réserver un cours
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                On revient vers toi sous 24h — 1ère heure gratuite garantie.
              </p>

              {/* Identité */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <FieldLabel icon={User}>Prénom</FieldLabel>
                  <input id="prenom" type="text" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Thomas" required autoComplete="given-name" className={inputCls} />
                </div>
                <div>
                  <FieldLabel icon={User}>Nom</FieldLabel>
                  <input id="nom" type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Dupont" required autoComplete="family-name" className={inputCls} />
                </div>
                <div>
                  <FieldLabel icon={Mail}>Email</FieldLabel>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="thomas@exemple.fr" required autoComplete="email" className={inputCls} />
                </div>
                <div>
                  <FieldLabel icon={Phone}>Téléphone</FieldLabel>
                  <input id="telephone" type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="06 12 34 56 78" required autoComplete="tel" className={inputCls} />
                </div>
              </div>

              {/* Niveau */}
              <div className="mb-4">
                <FieldLabel icon={GraduationCap}>Niveau</FieldLabel>
                <select id="niveau" name="niveau" value={form.niveau} onChange={handleChange} required className={inputCls}>
                  <option value="">Sélectionner un niveau</option>
                  {niveaux.map((n) => (
                    <option key={n.value} value={n.value}>{n.label}</option>
                  ))}
                </select>
              </div>

              {/* Format */}
              <div className="mb-4">
                <span className={labelCls}>Format souhaité</span>
                <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Format souhaité">
                  {([
                    { value: "presentiel", label: "Présentiel", sub: "Lyon · Lille · Paris", icon: MapPin },
                    { value: "visio", label: "Visio", sub: "Partout en France", icon: Video },
                  ] as const).map((opt) => {
                    const selected = form.format === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => setFormat(opt.value)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-colors duration-150 ${
                          selected
                            ? "bg-gold/10 border-gold/40 text-white"
                            : "bg-white/5 border-white/10 text-slate-300 hover:border-white/30"
                        }`}
                      >
                        <opt.icon size={16} className={selected ? "text-gold" : "text-slate-400"} />
                        <div>
                          <div className="text-sm font-semibold">{opt.label}</div>
                          <div className="text-xs text-slate-500">{opt.sub}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Ville (si présentiel) */}
              {form.format === "presentiel" && (
                <div className="mb-4">
                  <FieldLabel icon={MapPin}>Ville</FieldLabel>
                  <select id="ville" name="ville" value={form.ville} onChange={handleChange} required className={inputCls}>
                    <option value="">Sélectionner une ville</option>
                    {villes.map((v) => (
                      <option key={v.value} value={v.value}>{v.label}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Créneaux indicatifs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <FieldLabel icon={Calendar}>Disponibilité</FieldLabel>
                  <select id="jour" name="jour" value={form.jour} onChange={handleChange} required className={inputCls}>
                    <option value="">Jour préféré</option>
                    {jours.map((j) => (
                      <option key={j.value} value={j.value}>{j.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <FieldLabel icon={Clock}>Créneau</FieldLabel>
                  <select id="creneau" name="creneau" value={form.creneau} onChange={handleChange} required className={inputCls}>
                    <option value="">Moment de la journée</option>
                    {creneaux.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Durée */}
              <div className="mb-4">
                <FieldLabel icon={Clock}>Durée du cours</FieldLabel>
                <select id="duree" name="duree" value={form.duree} onChange={handleChange} required className={inputCls}>
                  <option value="">Sélectionner une durée</option>
                  <option value="1h">1 heure</option>
                  <option value="1h30">1h30</option>
                  <option value="2h">2 heures</option>
                </select>
              </div>

              {/* Objectifs */}
              <div className="mb-8">
                <FieldLabel icon={Target}>Objectifs</FieldLabel>
                <textarea
                  id="objectifs"
                  name="objectifs"
                  value={form.objectifs}
                  onChange={handleChange}
                  placeholder="Ex : besoin de revoir les dérivées et intégrales avant le bac..."
                  required
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full btn-gold text-base justify-center"
                whileTap={{ scale: 0.99 }}
                aria-busy={loading}
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                    Envoi en cours…
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer ma demande — 1ère heure gratuite
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
