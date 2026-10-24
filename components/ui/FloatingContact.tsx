"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      icon: Phone,
      label: "Call us",
      value: "+92 335 6507151",
      href: "tel:+923356507151",
      accent: "bg-emerald-500/90 hover:bg-emerald-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+92 335 6507151",
      href: "https://wa.me/923356507151?text=Hi%20PlayGame%20Horizon%2C%20I'd%20like%20to%20discuss%20a%20project.",
      accent: "bg-[#25D366]/95 hover:bg-[#25D366]",
      external: true,
    },
    {
      icon: Mail,
      label: "Email us",
      value: "info@playgamehorizon.com",
      href: "mailto:info@playgamehorizon.com",
      accent: "bg-brand-primary/95 hover:bg-brand-primary",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2"
          >
            {actions.map((action, i) => {
              const Icon = action.icon;
              const linkProps = action.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  {...linkProps}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`group flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-full text-white text-sm font-medium shadow-lg backdrop-blur-md ${action.accent} transition-all hover:translate-x-[-2px]`}
                >
                  <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[11px] opacity-80 font-normal">{action.label}</span>
                    <span className="text-xs font-semibold">{action.value}</span>
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="relative w-14 h-14 rounded-full bg-blue-gradient text-white shadow-glow hover:shadow-glow-lg flex items-center justify-center transition-shadow"
      >
        {/* Pulse ring (only when closed) */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-brand-primary/60 animate-pulse-ring pointer-events-none" />
            <span
              className="absolute inset-0 rounded-full bg-brand-primary/40 animate-pulse-ring pointer-events-none"
              style={{ animationDelay: "0.8s" }}
            />
          </>
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
