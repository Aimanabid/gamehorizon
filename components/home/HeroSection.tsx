"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, Mail, Sparkles, Trophy, Shield } from "lucide-react";

const badges = [
  { icon: Sparkles, text: "Creative Game Studio" },
  { icon: Trophy,   text: "Player-First Approach" },
  { icon: Shield,   text: "SECP-Registered Company" },
];

/* Deterministic pseudo-random so SSR and client agree */
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/* Floating ambient particles */
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: seededRandom(i + 1) * 100,
    top: seededRandom(i + 100) * 100,
    size: seededRandom(i + 200) * 3 + 1,
    duration: seededRandom(i + 300) * 10 + 10,
    delay: seededRandom(i + 400) * 8,
    color: i % 3 === 0 ? "#00E5FF" : i % 3 === 1 ? "#2979FF" : "#7B2FFF",
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* Rotating orbital rings around the hero logo */
function OrbitalRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="absolute w-[480px] h-[480px] rounded-full border border-brand-primary/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-secondary shadow-[0_0_12px_rgba(0,229,255,0.9)]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(41,121,255,0.9)]" />
      </motion.div>
      <motion.div
        className="absolute w-[620px] h-[620px] rounded-full border border-brand-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_12px_rgba(123,47,255,0.8)]" />
        <span className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-secondary shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
      </motion.div>
      <motion.div
        className="absolute w-[780px] h-[780px] rounded-full border border-brand-primary/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* Headline with per-word stagger reveal */
function AnimatedHeadline() {
  const line1 = ["Where", "Imagination"];
  const line2 = ["Meets", "Great", "Games"];
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const word = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    show:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
    >
      <span className="block">
        {line1.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-3">
            {w}
          </motion.span>
        ))}
      </span>
      <span className="block">
        {line2.map((w, i) => (
          <motion.span
            key={i}
            variants={word}
            className={`inline-block mr-3 ${w === "Great" || w === "Games" ? "text-gradient" : ""}`}
          >
            {w}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );
}

export default function HeroSection() {
  /* Mouse-tracked spotlight */
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotX = useSpring(mx, { damping: 25, stiffness: 100 });
  const spotY = useSpring(my, { damping: 25, stiffness: 100 });
  const spotlight = useTransform(
    [spotX, spotY] as const,
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}% ${y}%, rgba(41,121,255,0.18), rgba(0,229,255,0.08) 25%, transparent 55%)`
  );

  /* Parallax tilt on the logo */
  const tiltX = useTransform(spotY, [0, 100], [8, -8]);
  const tiltY = useTransform(spotX, [0, 100], [-8, 8]);

  const sectionRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative min-h-[94vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background base */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Hex dot pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(41,121,255,0.14) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Mouse-tracked spotlight */}
      {mounted && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: spotlight }}
        />
      )}

      {/* Big floating color orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-primary/18 blur-[130px] pointer-events-none"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-brand-purple/12 blur-[130px] pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-brand-secondary/10 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbital rings behind logo */}
      <OrbitalRings />

      {/* Floating particles */}
      <Particles />

      {/* Horizontal scan line sweep (very subtle, once every 8s) */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(0,229,255,0.45),transparent)",
        }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />

      {/* Fade to bg at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Hero logo with glow aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 mb-7"
          style={{ perspective: 1000 }}
        >
          <motion.div
            style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* Pulsing aura behind logo */}
            <div className="absolute inset-0 rounded-full bg-brand-primary/30 blur-3xl animate-pulse-slow pointer-events-none" />
            <div className="absolute -inset-6 rounded-full bg-brand-secondary/15 blur-2xl pointer-events-none" />

            {/* The actual logo */}
            <motion.div
              className="relative h-28 sm:h-32 md:h-40 w-[260px] sm:w-[320px] md:w-[400px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/logo.png"
                alt="PlayGame Horizon logo"
                fill
                sizes="(min-width: 768px) 400px, (min-width: 640px) 320px, 260px"
                className="object-contain drop-shadow-[0_0_30px_rgba(41,121,255,0.5)]"
                priority
              />

              {/* Shimmer sweep over the logo (every 6s) */}
              <motion.div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                aria-hidden
              >
                <motion.div
                  className="absolute top-0 bottom-0 w-1/3"
                  style={{
                    background:
                      "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
                    mixBlendMode: "overlay",
                  }}
                  animate={{ left: ["-40%", "140%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-secondary text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary" />
            </span>
            PlayGame Horizon (SMC-Private) Limited
          </motion.span>
        </motion.div>

        {/* Headline */}
        <AnimatedHeadline />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10"
        >
          We&apos;re a Lahore-based game development studio crafting polished,
          thoughtfully designed games for mobile, PC, and the web — built with
          care, shipped with pride.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-shadow duration-300 w-full sm:w-auto justify-center"
          >
            <span className="absolute inset-0 bg-blue-gradient" />
            <span className="absolute inset-0 bg-shine bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Start Your Project</span>
            <ArrowRight className="w-4 h-4 relative transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl bg-glass border border-brand-primary/30 hover:border-brand-primary/70 hover:bg-brand-primary/10 transition-all duration-200 w-full sm:w-auto justify-center overflow-hidden"
          >
            <span className="absolute inset-0 bg-shine bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-60 transition-opacity" />
            <span className="relative">Explore Services</span>
          </Link>
        </motion.div>

        {/* Quick contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mb-10"
        >
          <a href="tel:+923356507151" className="inline-flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
            <Phone className="w-3.5 h-3.5" /> +92 335 6507151
          </a>
          <a href="mailto:info@playgamehorizon.com" className="inline-flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
            <Mail className="w-3.5 h-3.5" /> info@playgamehorizon.com
          </a>
        </motion.div>

        {/* Badge strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.35 }}
          className="flex flex-wrap items-center justify-center gap-2.5"
        >
          {badges.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={text}
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-primary/20 text-sm text-slate-300 hover:border-brand-primary/50 hover:bg-brand-primary/10 transition-colors backdrop-blur-sm"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Icon className="w-3.5 h-3.5 text-brand-secondary" />
              {text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
