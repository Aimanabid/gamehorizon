"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/50 via-brand-primary/10 to-brand-dark" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-primary/15 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-secondary text-sm font-semibold tracking-wide">
            Have a project in mind?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Let&apos;s Build Your
            <br />
            <span className="text-gradient">Next Great Game</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From an early concept to a shippable title — we&apos;d love to hear what you&apos;re working on
            and explore how PlayGame Horizon can help bring it to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-shadow w-full sm:w-auto justify-center"
            >
              <span className="absolute inset-0 bg-blue-gradient" />
              <Mail className="w-4 h-4 relative" />
              <span className="relative">Start Your Project</span>
              <ArrowRight className="w-4 h-4 relative transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+923174682744"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-secondary rounded-xl bg-brand-primary/10 border border-brand-primary/30 hover:bg-brand-primary/20 transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" /> +92 317 4682744
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Or email us at{" "}
            <a href="mailto:info@playgamehorizon.com" className="text-brand-secondary hover:underline">info@playgamehorizon.com</a>
            {" · "}
            <a href="mailto:playgamehorizon@gmail.com" className="text-brand-secondary hover:underline">playgamehorizon@gmail.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
