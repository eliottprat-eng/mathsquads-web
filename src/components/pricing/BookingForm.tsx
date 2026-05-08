"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, User, Mail, Phone, MapPin, Calendar, Clock, Target } from "lucide-react";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  dateHeure: string;
  duree: string;
  niveauObjectifs: string;
}

const initialData: FormData = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  adresse: "",
  dateHeure: "",
  duree: "",
  niveauObjectifs: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-electric/50 focus:bg-white/8 transition-all duration-200 text-sm";

  const fields = [
    { name: "prenom", label: "Prénom", icon: User, type: "text", placeholder: "Thomas" },
    { name: "nom", label: "Nom", icon: User, type: "text", placeholder: "Dupont" },
    { name: "email", label: "Email", icon: Mail, type: "email", placeholder: "thomas@exemple.fr" },
    { name: "telephone", label: "Téléphone", icon: Phone, type: "tel", placeholder: "06 12 34 56 78" },
    { name: "adresse", label: "Adresse", icon: MapPin, type: "text", placeholder: "Lyon ou ville + visio" },
    { name: "dateHeure", label: "Date & heure souhaitée", icon: Calendar, type: "datetime-local", placeholder: "" },
  ];

  return (
    <div className="relative glass-card rounded-3xl border border-white/6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric via-electric-light to-transparent" />

      <div className="p-8 sm:p-10">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle size={36} className="text-green-400" />
              </motion.div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Demande envoyée ! 🎉
              </h3>
              <p className="text-slate-400 max-w-sm mx-auto">
                Nous te recontactons sous 24h pour confirmer ton premier cours gratuit.
                Prépare-toi à progresser !
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Réserver un cours
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                Remplis ce formulaire et on revient vers toi sous 24h — 1ère heure gratuite garantie.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {fields.map((field) => (
                  <div key={field.name} className={field.name === "adresse" ? "sm:col-span-2" : ""}>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <field.icon size={12} />
                        {field.label}
                      </span>
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={(form as unknown as Record<string, string>)[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className={inputCls}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    Durée du cours
                  </span>
                </label>
                <select
                  name="duree"
                  value={form.duree}
                  onChange={handleChange}
                  required
                  className={inputCls}
                >
                  <option value="">Sélectionner une durée</option>
                  <option value="1h">1 heure</option>
                  <option value="1h30">1h30</option>
                  <option value="2h">2 heures</option>
                  <option value="2h30">2h30</option>
                  <option value="3h">3 heures</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Target size={12} />
                    Niveau & objectifs
                  </span>
                </label>
                <textarea
                  name="niveauObjectifs"
                  value={form.niveauObjectifs}
                  onChange={handleChange}
                  placeholder="Ex : Terminale générale, besoin de revoir les dérivées et intégrales avant le bac..."
                  required
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full btn-gold text-base justify-center relative overflow-hidden"
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
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
