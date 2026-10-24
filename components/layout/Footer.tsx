"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  Services: [
    { label: "Game Development", href: "/services#development" },
    { label: "Mobile Games", href: "/services#mobile" },
    { label: "PC & Console", href: "/services#pc" },
    { label: "AR / VR Experiences", href: "/services#vr" },
  ],
  Support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/contact#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  { icon: Facebook,  href: "https://facebook.com/playgamehorizon",  label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/playgamehorizon", label: "Instagram" },
  { icon: Twitter,   href: "https://twitter.com/playgamehorizon",   label: "Twitter" },
  { icon: Linkedin,  href: "https://linkedin.com/company/playgamehorizon", label: "LinkedIn" },
  { icon: Youtube,   href: "https://youtube.com/@playgamehorizon",  label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const subject = encodeURIComponent("Newsletter subscription — PlayGame Horizon");
    const body = encodeURIComponent(`Hi PlayGame Horizon team,\n\nPlease add this email to your newsletter list: ${email}\n\nThank you.`);
    window.location.href = `mailto:info@playgamehorizon.com?subject=${subject}&body=${body}`;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative border-t border-brand-border/40 bg-brand-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        {/* Newsletter */}
        <div className="bg-glass glow-border rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
            <div className="flex-1">
              <h3 className="font-display font-bold text-xl text-white mb-1">Stay updated with PlayGame Horizon</h3>
              <p className="text-slate-400 text-sm">
                Project launches, dev updates, and company news — straight to your inbox.
              </p>
            </div>
            <form className="flex gap-2 w-full lg:w-auto" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 lg:w-64 bg-white/5 border border-brand-border/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-gradient text-white text-sm font-semibold rounded-lg hover:opacity-90 transition flex items-center gap-1.5 whitespace-nowrap"
              >
                {subscribed ? <CheckCircle2 className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                {subscribed ? "Sent" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex flex-col items-start gap-2 mb-4" aria-label="PlayGame Horizon home">
              <div className="relative h-14 w-[200px] drop-shadow-[0_0_14px_rgba(41,121,255,0.4)]">
                <Image src="/logo.png" alt="PlayGame Horizon" fill sizes="200px" className="object-contain object-left" />
              </div>
              <div className="text-[11px] text-slate-500 tracking-wider">(SMC-PRIVATE) LIMITED</div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              A Pakistan-based game development studio building thoughtful, player-first
              experiences for mobile, PC, and web platforms.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a href="mailto:info@playgamehorizon.com" className="flex items-start gap-2 text-sm text-slate-400 hover:text-brand-secondary transition-colors group">
                <Mail className="w-4 h-4 mt-0.5 text-brand-primary group-hover:text-brand-secondary transition-colors flex-shrink-0" />
                <span>info@playgamehorizon.com</span>
              </a>
              <a href="mailto:playgamehorizon@gmail.com" className="flex items-start gap-2 text-sm text-slate-400 hover:text-brand-secondary transition-colors group">
                <Mail className="w-4 h-4 mt-0.5 text-brand-primary group-hover:text-brand-secondary transition-colors flex-shrink-0" />
                <span>playgamehorizon@gmail.com</span>
              </a>
              <a href="tel:+923356507151" className="flex items-start gap-2 text-sm text-slate-400 hover:text-brand-secondary transition-colors group">
                <Phone className="w-4 h-4 mt-0.5 text-brand-primary group-hover:text-brand-secondary transition-colors flex-shrink-0" />
                <span>+92 335 6507151</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-primary flex-shrink-0" />
                <span>Main Bazar, Old Anarkali,<br />Lahore, Pakistan</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-brand-border/40 text-slate-400 hover:text-brand-secondary hover:bg-brand-primary/10 hover:border-brand-primary/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-brand-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-brand-border/40">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} PlayGame Horizon (SMC-Private) Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 text-sm hover:text-brand-secondary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-slate-500 text-sm hover:text-brand-secondary transition-colors">Terms</Link>
            <Link href="/contact" className="text-slate-500 text-sm hover:text-brand-secondary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
