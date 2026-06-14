"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, ChevronDown, Zap, Shield, Globe } from "lucide-react";

const badges = [
  { icon: Zap, text: "50+ Games Shipped" },
  { icon: Shield, text: "Award-Winning Studio" },
  { icon: Globe, text: "1M+ Players Worldwide" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-pattern">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-primary/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-secondary/10 blur-3xl animate-pulse-slow [animation-delay:1.5s]" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-brand-royal/15 blur-2xl animate-pulse-slow [animation-delay:0.8s]" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brand-primary/40"
          style={{
            left: `${5 + (i * 4.5) % 90}%`,
            top: `${10 + (i * 7) % 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
        >
          WHERE EPIC
          <br />
          <span className="text-gradient glow-text">WORLDS ARE</span>
          <br />
          BORN
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed mb-10"
        >
          GameHorizon is a premium game development studio crafting immersive,
          boundary-pushing experiences across mobile, PC, and console platforms.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/games"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-shadow duration-300"
          >
            <span className="absolute inset-0 bg-blue-gradient" />
            <span className="absolute inset-0 bg-shine bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Explore Our Games</span>
            <span className="relative">→</span>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl bg-glass border border-brand-border/60 hover:border-brand-primary/50 transition-all duration-200"
          >
            <Play className="w-4 h-4 text-brand-primary" />
            Watch Showreel
          </Link>
        </motion.div>

        {/* Badge strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
            >
              <Icon className="w-4 h-4 text-brand-primary" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
