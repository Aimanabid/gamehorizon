"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, Sparkles, Mail, ArrowRight } from "lucide-react";

const STORAGE_KEY = "pgh-welcome-seen";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const seen = window.localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        const t = window.setTimeout(() => setOpen(true), 1800);
        return () => window.clearTimeout(t);
      }
    } catch {
      /* localStorage blocked — don't show */
    }
  }, []);

  const close = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 12 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative bg-brand-card border border-brand-primary/40 rounded-2xl max-w-md w-full p-7 sm:p-8 shadow-glow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={close}
              aria-label="Close welcome popup"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-brand-primary/40">
                  <Image src="/logo.jpeg" alt="PlayGame Horizon" fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-white">PlayGame Horizon</div>
                  <div className="text-[11px] text-slate-500 tracking-wider">(SMC-PRIVATE) LIMITED</div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-secondary text-xs font-semibold mb-4">
                <Sparkles className="w-3 h-3" /> Welcome!
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3 leading-snug">
                Thanks for stopping by.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                We&apos;re a small Lahore-based game studio building thoughtful games for
                mobile, PC, and the web. If you have a project in mind — or just want
                to say hello — we&apos;d love to hear from you.
              </p>

              <div className="space-y-2">
                <Link
                  href="/contact"
                  onClick={close}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-blue-gradient text-white text-sm font-semibold rounded-xl hover:opacity-90 transition shadow-glow-sm"
                >
                  <Mail className="w-4 h-4" /> Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={close}
                  className="w-full py-2.5 text-slate-400 text-xs font-medium hover:text-slate-200 transition"
                >
                  Just browsing, thanks
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
