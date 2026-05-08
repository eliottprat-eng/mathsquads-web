"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

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
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-50px" });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started && ref.current) {
      setStarted(true);
      const node = ref.current;
      const controls = animate(0, target, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(value) {
          node.textContent = `${prefix}${Math.round(value)}${suffix}`;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, started, target, duration, prefix, suffix]);

  return (
    <span ref={inViewRef} className="inline-block">
      <span ref={ref} className={className}>
        {prefix}0{suffix}
      </span>
    </span>
  );
}
