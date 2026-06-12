"use client";

import { motion } from "framer-motion";
import { Star, BookOpen, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

interface ProfCardProps {
  name: string;
  school: string;
  role: string;
  coursesCount: number;
  rating: number;
  satisfaction: string;
  bio: string;
  avatar: string;
  photo?: string;
  color?: string;
  delay?: number;
  city: string;
}

export default function ProfCard({
  name,
  school,
  role,
  coursesCount,
  rating,
  satisfaction,
  bio,
  avatar,
  photo,
  delay = 0,
  city,
}: ProfCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative glass-card rounded-2xl overflow-hidden h-full hover:border-white/15"
    >
      <div className="p-7">
        {/* Nom → école → ville : hiérarchie nette */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-2xl relative overflow-hidden flex-shrink-0 border border-white/10">
              {photo ? (
                <Image
                  src={photo}
                  alt={`${name} — prof de maths MathSquads à ${city}`}
                  fill
                  className="object-cover object-top saturate-[0.92]"
                  sizes="96px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-display font-black text-3xl text-white bg-white/6">
                  {avatar}
                </div>
              )}
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-white">{name}</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <GraduationCap size={13} className="text-slate-400" />
                <span className="text-sm text-slate-400">{school}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin size={13} className="text-slate-500" />
                <span className="text-xs text-slate-500">{city} · {role}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0">
            <Star size={12} className="text-gold fill-gold" />
            <span className="text-sm font-bold text-white">{rating}.0</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-2 rounded-xl p-3 border border-white/6 bg-white/3">
            <BookOpen size={14} className="text-electric" />
            <div>
              <div className="font-bold text-white text-sm">{coursesCount}</div>
              <div className="text-xs text-slate-500">cours donnés</div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl p-3 border border-white/6 bg-white/3">
            <Star size={14} className="text-electric" />
            <div>
              <div className="font-bold text-white text-sm">{satisfaction}</div>
              <div className="text-xs text-slate-500">satisfaction</div>
            </div>
          </div>
        </div>

        {/* Citation */}
        <p className="text-sm text-slate-300 leading-relaxed italic">&ldquo;{bio}&rdquo;</p>
      </div>
    </motion.div>
  );
}
