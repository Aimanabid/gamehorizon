"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
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
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary text-sm font-semibold tracking-wide">
            Ready to Build Something Epic?
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Let&apos;s Create the
            <br />
            <span className="text-gradient">Next Big Thing</span>
            <br />
            Together
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you have a concept sketch or a full GDD, GameHorizon is ready to
            bring your vision to life. Let&apos;s talk about your project today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-shadow"
            >
              <span className="absolute inset-0 bg-blue-gradient" />
              <span className="absolute inset-0 bg-shine bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="w-5 h-5 relative" />
              <span className="relative">Start Your Project</span>
            </Link>
            <Link
              href="/games"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-brand-primary rounded-xl bg-brand-primary/10 border border-brand-primary/30 hover:bg-brand-primary/20 transition-all"
            >
              Explore Our Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
