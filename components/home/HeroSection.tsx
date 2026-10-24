"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, Sparkles, Trophy, Shield } from "lucide-react";

const badges = [
  { icon: Sparkles, text: "Creative Game Studio" },
  { icon: Trophy,   text: "Player-First Approach" },
  { icon: Shield,   text: "SECP-Registered Company" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-16 pb-16">

      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(41,121,255,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-primary/15 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />

      {/* Fade to bg at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Logo + eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-6"
        >
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-brand-primary/40 shadow-glow">
            <Image src="/logo.jpeg" alt="PlayGame Horizon" fill sizes="80px" className="object-cover" priority />
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-secondary text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
            PlayGame Horizon (SMC-Private) Limited
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
        >
          Where Imagination
          <br />
          Meets <span className="text-gradient">Great Games</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
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
          transition={{ duration: 0.7, delay: 0.4 }}
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
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl bg-glass border border-brand-primary/30 hover:border-brand-primary/70 hover:bg-brand-primary/10 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Quick contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mb-10"
        >
          <a href="tel:+923174682744" className="inline-flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
            <Phone className="w-3.5 h-3.5" /> +92 317 4682744
          </a>
          <a href="mailto:info@playgamehorizon.com" className="inline-flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
            <Mail className="w-3.5 h-3.5" /> info@playgamehorizon.com
          </a>
        </motion.div>

        {/* Badge strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2.5"
        >
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-primary/20 text-sm text-slate-300 hover:border-brand-primary/50 hover:bg-brand-primary/10 transition-all"
            >
              <Icon className="w-3.5 h-3.5 text-brand-secondary" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
