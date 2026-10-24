"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, Youtube,
  ChevronDown, ChevronUp, Send, CheckCircle2, Clock, X,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const contactReasons = [
  "Game Development Partnership",
  "Mobile Game Development",
  "PC / Web Game Development",
  "AR / VR Project",
  "Art & Design Services",
  "Press / Media Inquiry",
  "Career Inquiry",
  "General Question",
];

const faqs = [
  {
    q: "What services does PlayGame Horizon offer?",
    a: "We offer full-cycle game development across mobile, PC, and web — including concept, design, art, programming, QA, and post-launch support. We also take on standalone art, prototyping, and consulting engagements.",
  },
  {
    q: "Are you a registered company?",
    a: "Yes. PlayGame Horizon (SMC-Private) Limited is a company registered with the Securities and Exchange Commission of Pakistan (SECP). Our registered office is in Lahore, Pakistan.",
  },
  {
    q: "How long does a typical game development project take?",
    a: "Timelines depend on scope. A small hyper-casual mobile title can take 2–4 months. A mid-size mobile or PC title usually takes 6–12 months. We always begin with a discovery phase to give you an honest estimate before any contracts are signed.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Absolutely. We work with clients worldwide and are comfortable collaborating across time zones. Communication is primarily in English, with regular video calls and clear async updates.",
  },
  {
    q: "What's your typical project budget?",
    a: "Small mobile prototypes start from PKR 5 lakh. Mid-size production projects typically range from PKR 15 lakh to PKR 50 lakh+. We'll scope and quote clearly during the discovery call — no hidden costs.",
  },
  {
    q: "Can you continue a project that's already in development?",
    a: "Yes. We're happy to take over or help finish an existing project. We'll do a code and asset audit first, then share a realistic roadmap to completion.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-brand-border/40 rounded-xl overflow-hidden hover:border-brand-primary/30 transition-colors">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-sm">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-brand-border/30 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 12 }}
          transition={{ type: "spring", damping: 20 }}
          className="relative bg-brand-card border border-brand-primary/40 rounded-2xl max-w-md w-full p-8 text-center shadow-glow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", damping: 12 }}
            className="relative mx-auto mb-5"
          >
            <div className="absolute inset-0 bg-brand-primary/30 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-20 h-20 mx-auto rounded-full bg-blue-gradient flex items-center justify-center shadow-glow">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h3 className="font-display font-bold text-2xl text-white mb-3">Message prepared!</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            Your email client should have opened with your message pre-filled.
            If it didn&apos;t, you can email us directly at{" "}
            <a href="mailto:info@playgamehorizon.com" className="text-brand-secondary hover:underline">
              info@playgamehorizon.com
            </a>.
          </p>
          <p className="text-xs text-slate-500 mb-6">
            We typically respond within 1–2 business days.
          </p>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-blue-gradient text-white text-sm font-semibold rounded-xl hover:opacity-90 transition shadow-glow-sm"
          >
            Great, thanks!
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", reason: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.reason || "Inquiry"}] from ${form.name} — PlayGame Horizon`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.reason ? `Reason: ${form.reason}` : "",
      "",
      "Message:",
      form.message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:info@playgamehorizon.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const resetForm = () => {
    setSent(false);
    setForm({ name: "", email: "", company: "", phone: "", reason: "", message: "" });
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Have a project in mind? A question? Or just want to say hello? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-white mb-6">Get in Touch</h2>
                <div className="space-y-3">
                  <a href="mailto:info@playgamehorizon.com" className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-brand-border/40 hover:border-brand-primary/40 transition group">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500 mb-0.5">Primary Email</div>
                      <div className="text-white text-sm font-medium group-hover:text-brand-secondary transition-colors truncate">info@playgamehorizon.com</div>
                    </div>
                  </a>
                  <a href="mailto:playgamehorizon@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-brand-border/40 hover:border-brand-primary/40 transition group">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500 mb-0.5">Alternate Email</div>
                      <div className="text-white text-sm font-medium group-hover:text-brand-secondary transition-colors truncate">playgamehorizon@gmail.com</div>
                    </div>
                  </a>
                  <a href="tel:+923174682744" className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-brand-border/40 hover:border-brand-primary/40 transition group">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Phone / WhatsApp</div>
                      <div className="text-white text-sm font-medium group-hover:text-brand-secondary transition-colors">+92 317 4682744</div>
                    </div>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Main+Bazar+Old+Anarkali+Lahore+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-brand-border/40 hover:border-brand-primary/40 transition group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Office</div>
                      <div className="text-white text-sm font-medium group-hover:text-brand-secondary transition-colors">Main Bazar, Old Anarkali, Lahore, Pakistan</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-glass glow-border rounded-xl p-5">
                <div className="flex items-center gap-2 text-brand-secondary text-sm font-semibold mb-3">
                  <Clock className="w-4 h-4" /> Business Hours
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Monday – Friday</span>
                    <span className="text-white font-medium">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Saturday</span>
                    <span className="text-white font-medium">11:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-slate-500 font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">All times are PKT (UTC+5).</p>
              </div>

              {/* Socials */}
              <div>
                <h3 className="font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-2">
                  {[
                    { icon: Facebook,  href: "https://facebook.com/playgamehorizon",  label: "Facebook" },
                    { icon: Instagram, href: "https://instagram.com/playgamehorizon", label: "Instagram" },
                    { icon: Twitter,   href: "https://twitter.com/playgamehorizon",   label: "Twitter" },
                    { icon: Linkedin,  href: "https://linkedin.com/company/playgamehorizon", label: "LinkedIn" },
                    { icon: Youtube,   href: "https://youtube.com/@playgamehorizon",  label: "YouTube" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-slate-400 hover:text-brand-secondary hover:bg-brand-primary/10 hover:border-brand-primary/40 transition"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <motion.form
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="bg-glass glow-border rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">Send us a message</h2>
                  <p className="text-sm text-slate-400">We&apos;ll get back to you within 1–2 business days.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name <span className="text-brand-primary">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Khan"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full bg-white/5 border border-brand-border/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Email <span className="text-brand-primary">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full bg-white/5 border border-brand-border/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full bg-white/5 border border-brand-border/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Company (optional)</label>
                    <input
                      type="text"
                      placeholder="Your company or studio"
                      value={form.company}
                      onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      className="w-full bg-white/5 border border-brand-border/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">What can we help with? <span className="text-brand-primary">*</span></label>
                  <select
                    required
                    value={form.reason}
                    onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
                    className="w-full bg-white/5 border border-brand-border/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-primary/60 transition"
                  >
                    <option value="" className="bg-brand-dark">Select a reason…</option>
                    {contactReasons.map((r) => (
                      <option key={r} value={r} className="bg-brand-dark">{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Message <span className="text-brand-primary">*</span></label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, timeline, and goals…"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full bg-white/5 border border-brand-border/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-gradient text-white font-bold rounded-xl hover:opacity-90 transition shadow-glow-sm hover:shadow-glow"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                <p className="text-xs text-slate-500 text-center">
                  By submitting, you&apos;ll open your email client with the message pre-filled. We never share your info.
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 relative">
        <div className="absolute inset-0 bg-brand-primary/3 border-y border-brand-border/30" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="FAQ" title="Frequently Asked " highlight="Questions" description="Quick answers to the questions we hear most often." />
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {sent && <SuccessModal onClose={resetForm} />}
    </div>
  );
}
