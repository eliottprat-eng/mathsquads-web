"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, User, Mail, Phone, GraduationCap, AlertCircle } from "lucide-react";
import { sendBookingRequest, type BookingRequest } from "@/services/booking";

const initialData: BookingRequest = {
  prenom: "",
  telephone: "",
  email: "",
  niveau: "",
  objectifs: "",
};

const niveaux = ["Collège", "Lycée", "Prépa (CPGE)", "Post-bac", "Autre"];

export default function BookingForm() {
  const [form, setForm] = useState<BookingRequest>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await sendBookingRequest(form);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-ink/[0.03] border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink/35 focus:outline-none focus:border-coral/50 focus:bg-white transition-all duration-200 text-sm";
  const labelCls = "block text-xs font-medium text-ink/55 mb-1.5";

  return (
    <div className="relative card overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-coral" />

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
                className="w-20 h-20 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle size={36} className="text-sage" />
              </motion.div>
              <h3 className="font-display font-semibold text-2xl text-ink mb-3">
                Demande envoyée !
              </h3>
              <p className="text-ink/55 max-w-sm mx-auto">
                On te rappelle sous 24h pour organiser ton premier cours gratuit
                avec le prof le plus adapté à ton niveau.
              </p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-display font-semibold text-2xl text-ink mb-2">
                Réserver ma 1ère heure gratuite
              </h3>
              <p className="text-ink/55 text-sm mb-8">
                30 secondes à remplir. On te rappelle sous 24h, sans engagement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="prenom" className={labelCls}>
                    <span className="flex items-center gap-1.5"><User size={12} />Prénom</span>
                  </label>
                  <input id="prenom" type="text" name="prenom" value={form.prenom} onChange={handleChange}
                    placeholder="Thomas" required className={inputCls} />
                </div>
                <div>
                  <label htmlFor="telephone" className={labelCls}>
                    <span className="flex items-center gap-1.5"><Phone size={12} />Téléphone</span>
                  </label>
                  <input id="telephone" type="tel" name="telephone" value={form.telephone} onChange={handleChange}
                    placeholder="06 12 34 56 78" required className={inputCls} />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>
                    <span className="flex items-center gap-1.5"><Mail size={12} />Email</span>
                  </label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="thomas@exemple.fr" required className={inputCls} />
                </div>
                <div>
                  <label htmlFor="niveau" className={labelCls}>
                    <span className="flex items-center gap-1.5"><GraduationCap size={12} />Niveau de l&apos;élève</span>
                  </label>
                  <select id="niveau" name="niveau" value={form.niveau} onChange={handleChange} required className={inputCls}>
                    <option value="">Sélectionner un niveau</option>
                    {niveaux.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="objectifs" className={labelCls}>
                  Objectifs <span className="text-ink/35">(facultatif)</span>
                </label>
                <textarea id="objectifs" name="objectifs" value={form.objectifs} onChange={handleChange}
                  placeholder="Ex : revoir les dérivées avant le bac, préparer les concours..."
                  rows={2} className={`${inputCls} resize-none`} />
              </div>

              {error && (
                <div className="flex items-start gap-2.5 mb-6 p-4 rounded-xl bg-coral/10 border border-coral/25 text-sm text-ink/75">
                  <AlertCircle size={17} className="text-coral flex-shrink-0 mt-0.5" />
                  <span>
                    L&apos;envoi a échoué. Réessaie, ou contacte-nous directement au{" "}
                    <a href="tel:0664195752" className="font-semibold text-coral-dark">06 64 19 57 52</a> ou{" "}
                    <a href="tel:0783535772" className="font-semibold text-coral-dark">07 83 53 57 72</a> ou sur{" "}
                    <a href="mailto:lamathsquad@gmail.com" className="font-semibold text-coral-dark">lamathsquad@gmail.com</a>.
                  </span>
                </div>
              )}

              <motion.button type="submit" disabled={loading} className="w-full btn-primary text-base" whileTap={{ scale: 0.98 }}>
                {loading ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Send size={16} />
                    Réserver ma 1ère heure gratuite
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-ink/40 mt-4">
                Gratuit · Sans engagement · Tu préfères parler à quelqu&apos;un ?{" "}
                <a href="tel:0664195752" className="text-coral-dark font-medium">06 64 19 57 52</a> ou{" "}
                <a href="tel:0783535772" className="text-coral-dark font-medium">07 83 53 57 72</a>
              </p>
              <p className="text-center text-xs text-ink/40 mt-2">
                En envoyant ce formulaire, tu acceptes nos{" "}
                <a href="/cgu" className="underline underline-offset-2 hover:text-ink/60">CGU</a> et notre{" "}
                <a href="/confidentialite" className="underline underline-offset-2 hover:text-ink/60">politique de confidentialité</a>.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
