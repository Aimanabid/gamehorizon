"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Twitter, Linkedin, Youtube, Github, ChevronDown, ChevronUp, Send, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const contactReasons = [
  "Game Development Partnership",
  "Mobile Game Development",
  "VR/AR Project",
  "Multiplayer Backend",
  "Art & Design Services",
  "Press Inquiry",
  "Career Inquiry",
  "General Question",
];

const offices = [
  { city: "Austin, TX", country: "USA", address: "123 Innovation Blvd, Austin, TX 78701", role: "HQ & Engineering" },
  { city: "London", country: "UK", address: "45 Shoreditch High Street, London E1 6JJ", role: "Art & Design Studio" },
  { city: "Tokyo", country: "Japan", address: "2-1-1 Shinjuku, Tokyo 160-0022", role: "XR Division" },
];

const faqs = [
  {
    q: "How long does a typical game development project take?",
    a: "Timelines vary by scope. A mobile casual game can take 4–8 months. A mid-size PC title typically takes 12–24 months. We always start with a discovery phase to give you an accurate estimate.",
  },
  {
    q: "Do you work with existing intellectual properties?",
    a: "Absolutely. We've worked extensively on licensed IPs, co-developed sequels, and provided development support for existing franchises. We sign robust NDAs and take IP protection seriously.",
  },
  {
    q: "What's your minimum project budget?",
    a: "Mobile projects start around $80K. PC/console projects typically start at $250K. VR projects begin around $150K. We can discuss options for all budgets during the discovery call.",
  },
  {
    q: "Can you take over a project that's already in development?",
    a: "Yes — rescue and takeover projects are something we've done successfully. We'll conduct a thorough code and art audit, then provide a realistic roadmap to completion.",
  },
  {
    q: "Do you offer publishing services?",
    a: "We offer co-publishing for select projects that align with our portfolio. This includes platform relations, marketing support, and storefront optimization.",
  },
  {
    q: "What engines do you specialize in?",
    a: "We primarily use Unreal Engine 5 and Unity. We also have proprietary mobile tooling. For bespoke requirements, we can evaluate custom engine work.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-brand-border/40 rounded-xl overflow-hidden hover:border-brand-primary/30 transition-colors">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold text-white text-sm">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-brand-border/30 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">
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
                <div className="space-y-4">
                  <a href="mailto:contact@gamehorizon.gg" className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-brand-border/40 hover:border-brand-primary/40 transition group">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Email</div>
                      <div className="text-white text-sm font-medium group-hover:text-brand-primary transition-colors">contact@gamehorizon.gg</div>
                    </div>
                  </a>
                  <a href="mailto:press@gamehorizon.gg" className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-brand-border/40 hover:border-brand-primary/40 transition group">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Press</div>
                      <div className="text-white text-sm font-medium group-hover:text-brand-primary transition-colors">press@gamehorizon.gg</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Offices */}
              <div>
                <h3 className="font-bold text-white mb-4">Our Studios</h3>
                <div className="space-y-3">
                  {offices.map((o) => (
                    <div key={o.city} className="p-4 rounded-xl bg-brand-card border border-brand-border/40">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                        <span className="font-semibold text-white text-sm">{o.city}, {o.country}</span>
                        <span className="text-xs text-brand-primary font-medium">· {o.role}</span>
                      </div>
                      <p className="text-slate-400 text-xs ml-5">{o.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Twitter, href: "https://twitter.com/GameHorizonGG", label: "Twitter" },
                    { icon: Linkedin, href: "https://linkedin.com/company/gamehorizon", label: "LinkedIn" },
                    { icon: Youtube, href: "https://youtube.com/@GameHorizonGG", label: "YouTube" },
                    { icon: Github, href: "https://github.com/gamehorizon", label: "GitHub" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary/40 transition"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center bg-glass glow-border rounded-2xl p-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand-primary mb-5" />
                  <h3 className="font-display font-bold text-2xl text-white mb-3">Message Received!</h3>
                  <p className="text-slate-300 leading-relaxed max-w-sm">
                    Thanks for reaching out. Our team will get back to you within 1–2 business days.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="bg-glass glow-border rounded-2xl p-7 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: "Full Name", name: "name", type: "text", placeholder: "John Doe", required: true },
                      { label: "Email Address", name: "email", type: "email", placeholder: "john@company.com", required: true },
                      { label: "Company / Studio", name: "company", type: "text", placeholder: "Your Studio Name", required: false },
                    ].map((field) => (
                      <div key={field.name} className={field.name === "company" ? "sm:col-span-2" : ""}>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">{field.label}{field.required && <span className="text-brand-primary ml-0.5">*</span>}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={form[field.name as keyof typeof form]}
                          onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                          className="w-full bg-white/5 border border-brand-border/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition"
                        />
                      </div>
                    ))}
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
                </motion.form>
              )}
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
    </div>
  );
}
