"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Star, BookOpen, GraduationCap, Quote } from "lucide-react";
import { useRef } from "react";
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
  color = "#5B8DEF",
  delay = 0,
  city,
}: ProfCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative"
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative glass-card rounded-3xl border border-white/6 overflow-hidden cursor-default"
      >
        {/* Dynamic glow on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${color}15 0%, transparent 60%)`,
            opacity: 0.7,
          }}
        />

        {/* Top gradient bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}60, transparent)`,
          }}
        />

        <div className="relative z-10 p-7">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-2xl relative overflow-hidden flex-shrink-0"
                style={{ boxShadow: `0 10px 32px ${color}50` }}
              >
                {photo ? (
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center font-display font-black text-3xl text-white"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }}
                  >
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
                <div
                  className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                  style={{ background: `${color}18`, color }}
                >
                  {role}
                </div>
              </div>
            </div>

            {/* City badge */}
            <div className="flex flex-col items-end gap-1.5">
              <div className="px-2.5 py-1 rounded-lg glass text-xs text-slate-400 border border-white/8">
                📍 {city}
              </div>
              <div className="flex items-center gap-1">
                <Star size={12} className="text-gold fill-gold" />
                <span className="text-sm font-bold text-gold">{rating}.0</span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="flex items-center gap-2 glass rounded-xl p-3 border border-white/5">
              <BookOpen size={14} style={{ color }} />
              <div>
                <div className="font-bold text-white text-sm">{coursesCount}</div>
                <div className="text-xs text-slate-500">cours donnés</div>
              </div>
            </div>
            <div className="flex items-center gap-2 glass rounded-xl p-3 border border-white/5">
              <Star size={14} className="text-gold" />
              <div>
                <div className="font-bold text-white text-sm">{satisfaction}</div>
                <div className="text-xs text-slate-500">satisfaction</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="relative">
            <Quote size={16} className="text-slate-600 mb-2" />
            <p className="text-sm text-slate-300 leading-relaxed italic">{bio}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
