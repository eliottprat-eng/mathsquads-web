"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Users, Clock, Euro, CheckCircle, Send, Trophy, Heart } from "lucide-react";
import FloatingMathSymbols from "@/components/ui/FloatingMathSymbols";

const benefits = [
  {
    icon: Euro,
    title: "Rémunération attractive",
    desc: "Des tarifs compétitifs, payés rapidement, avec une totale transparence.",
    color: "#FFBB0A",
  },
  {
    icon: Clock,
    title: "Flexibilité totale",
    desc: "Tu choisis tes créneaux selon tes disponibilités. Aucun engagement minimum.",
    color: "#5B8DEF",
  },
  {
    icon: Users,
    title: "Communauté de qualité",
    desc: "Rejoins une équipe de profs passionnés issus des meilleures écoles.",
    color: "#10B981",
  },
  {
    icon: Heart,
    title: "Impact réel",
    desc: "Vois tes élèves progresser et transformer leur rapport aux maths.",
    color: "#8B5CF6",
  },
];

const requirements = [
  "Être issu d'une grande école ou d'un parcours d'excellence (Top 5 écoles, ENS, Polytechnique...)",
  "Avoir une passion pour la transmission et la pédagogie",
  "Être disponible au minimum 4h/semaine",
  "Maîtriser les outils de cours en ligne (visio, tableau partagé)",
  "Avoir un excellent niveau en mathématiques (Bac+2 minimum)",
];

export default function DevenirProfPage() {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", ecole: "", niveaux: "", motivation: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-electric/50 transition-all duration-200 text-sm";

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <FloatingMathSymbols />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 30%, rgba(139,92,246,0.12) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(91,141,239,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mb-6 inline-flex">Rejoindre l&apos;équipe</div>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
              Devenir Prof
              <br />
              <span className="text-gradient">MathSquads</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Tu es issu d&apos;une grande école ? Tu veux transmettre ta passion des maths tout en gagnant bien ta vie ?
              Rejoins notre équipe de profs d&apos;excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Pourquoi rejoindre MathSquads ?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="glass-card rounded-2xl p-6 border border-white/5 text-center group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${b.color}15`, border: `1px solid ${b.color}25` }}
                  >
                    <b.icon size={20} style={{ color: b.color }} />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="section-tag mb-6 inline-flex">Profil recherché</div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-6">
                On recrute les <span className="text-gradient">meilleurs</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Chez MathSquads, la qualité passe avant tout. On ne recrute pas massivement —
                on sélectionne les profs qui partagent notre vision : l&apos;excellence académique au service d&apos;une vraie pédagogie.
              </p>
              <div className="flex flex-col gap-3">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-electric/15 border border-electric/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={11} className="text-electric" />
                    </div>
                    <span className="text-sm text-slate-300">{req}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 glass-card rounded-2xl p-5 border border-gold/20">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy size={18} className="text-gold" />
                  <span className="font-semibold text-white text-sm">Notre équipe actuelle</span>
                </div>
                <p className="text-xs text-slate-400">
                  Marin Delzoppo & Eliott Prat — emlyon business school (Top 5 FR) —
                  475+ cours donnés, 5/5 de satisfaction.
                </p>
              </div>
            </ScrollReveal>

            {/* Application form */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass-card rounded-3xl border border-white/6 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric via-electric-light to-transparent" />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle size={28} className="text-green-400" />
                      </motion.div>
                      <h3 className="font-display font-bold text-xl text-white mb-2">
                        Candidature reçue ! 🎉
                      </h3>
                      <p className="text-slate-400 text-sm">
                        On étudie ta candidature et on revient vers toi sous 48h.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity: 0 }}>
                      <h3 className="font-display font-bold text-xl text-white mb-2">
                        Candidater
                      </h3>
                      <p className="text-slate-400 text-xs mb-6">On étudie chaque candidature avec attention.</p>

                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <label className="block text-xs text-slate-400 mb-1.5">Prénom</label>
                          <input type="text" name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Thomas" className={inputCls} />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 mb-1.5">Nom</label>
                          <input type="text" name="nom" value={form.nom} onChange={handleChange} required placeholder="Dupont" className={inputCls} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="block text-xs text-slate-400 mb-1.5">Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="thomas@exemple.fr" className={inputCls} />
                      </div>

                      <div className="mb-3">
                        <label className="block text-xs text-slate-400 mb-1.5">École / Parcours</label>
                        <input type="text" name="ecole" value={form.ecole} onChange={handleChange} required placeholder="emlyon, HEC, ENS..." className={inputCls} />
                      </div>

                      <div className="mb-3">
                        <label className="block text-xs text-slate-400 mb-1.5">Niveaux que tu peux enseigner</label>
                        <input type="text" name="niveaux" value={form.niveaux} onChange={handleChange} required placeholder="Lycée, CPGE, Licence..." className={inputCls} />
                      </div>

                      <div className="mb-6">
                        <label className="block text-xs text-slate-400 mb-1.5">Motivation</label>
                        <textarea
                          name="motivation"
                          value={form.motivation}
                          onChange={handleChange}
                          required
                          rows={3}
                          placeholder="Pourquoi veux-tu rejoindre MathSquads ?"
                          className={`${inputCls} resize-none`}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary justify-center text-sm"
                        whileTap={{ scale: 0.98 }}
                      >
                        {loading ? (
                          <motion.div
                            className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <>
                            <Send size={14} />
                            Envoyer ma candidature
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Le processus de recrutement
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Candidature", desc: "Tu remplis le formulaire ci-dessus" },
              { step: "02", title: "Entretien", desc: "Un call de 30min avec l'équipe" },
              { step: "03", title: "Cours test", desc: "Un cours fictif pour valider ta pédagogie" },
              { step: "04", title: "Bienvenue !", desc: "Tu rejoins l'équipe et reçois tes premiers élèves" },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-5 border border-white/5 text-center relative overflow-hidden">
                  <div className="absolute top-2 right-3 font-display font-black text-5xl text-white/5">{s.step}</div>
                  <div className="w-9 h-9 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mx-auto mb-3 relative z-10">
                    <span className="text-xs font-bold text-electric">{s.step}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-white mb-1 relative z-10">{s.title}</h3>
                  <p className="text-xs text-slate-400 relative z-10">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
