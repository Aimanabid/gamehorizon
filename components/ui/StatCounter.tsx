"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-4xl lg:text-5xl text-gradient mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-400 text-sm font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
}
