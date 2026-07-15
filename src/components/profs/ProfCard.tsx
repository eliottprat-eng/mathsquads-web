"use client";

import { motion } from "framer-motion";
import { Star, BookOpen, GraduationCap, Quote, MapPin } from "lucide-react";
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
  color = "#E1613E",
  delay = 0,
  city,
}: ProfCardProps) {
  return (
    <motion.div
      className="relative card overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: color }} />

      <div className="relative z-10 p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl relative overflow-hidden flex-shrink-0 shadow-soft">
              {photo ? (
                <Image
                  src={photo}
                  alt={`${name}, prof de maths MathSquads, ${school}`}
                  fill
                  className="object-cover object-top"
                  sizes="96px"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center font-display font-bold text-3xl text-white"
                  style={{ background: color }}
                >
                  {avatar}
                </div>
              )}
            </div>

            <div>
              <h3 className="font-display font-semibold text-xl text-ink">{name}</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <GraduationCap size={13} className="text-ink/40" />
                <span className="text-sm text-ink/50">{school}</span>
              </div>
              <div
                className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: `${color}14`, color }}
              >
                {role}
              </div>
            </div>
          </div>

          {/* City badge */}
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-ink/5 text-xs text-ink/50">
              <MapPin size={11} />
              {city}
            </div>
            <div className="flex items-center gap-1">
              <Star size={12} className="text-gold fill-gold" />
              <span className="text-sm font-bold text-ink/70">{rating}.0</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-2 rounded-xl p-3 bg-ink/[0.03]">
            <BookOpen size={14} style={{ color }} />
            <div>
              <div className="font-bold text-ink text-sm">{coursesCount}</div>
              <div className="text-xs text-ink/40">cours donnés</div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl p-3 bg-ink/[0.03]">
            <Star size={14} className="text-gold" />
            <div>
              <div className="font-bold text-ink text-sm">{satisfaction}</div>
              <div className="text-xs text-ink/40">satisfaction</div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="relative">
          <Quote size={16} className="text-ink/20 mb-2" />
          <p className="text-sm text-ink/65 leading-relaxed italic">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
}
