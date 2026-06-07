"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = spanRef.current;
    if (!node) return;

    const runAnimation = () => {
      if (hasRun.current) return;
      hasRun.current = true;

      const controls = animate(0, target, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(v) {
          if (spanRef.current) {
            spanRef.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
          }
        },
        onComplete() {
          if (spanRef.current) {
            spanRef.current.textContent = `${prefix}${target}${suffix}`;
          }
        },
      });

      return () => controls.stop();
    };

    // Already in viewport on mount (above the fold)?
    const rect = node.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight + 200 && rect.bottom > -200;

    if (alreadyVisible) {
      const timer = setTimeout(runAnimation, 300);
      return () => clearTimeout(timer);
    }

    // Otherwise wait for scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          runAnimation();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, prefix, suffix]);

  // Initial render shows the real target value — never shows "0"
  return (
    <span ref={spanRef} className={className}>
      {prefix}{target}{suffix}
    </span>
  );
}
