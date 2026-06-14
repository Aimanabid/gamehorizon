"use client";

import Link from "next/link";
import { Gamepad2, Twitter, Youtube, Linkedin, Github, MessageCircle, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press Kit", href: "/press" },
    { label: "Blog", href: "/blog" },
  ],
  Games: [
    { label: "All Games", href: "/games" },
    { label: "Coming Soon", href: "/games#coming-soon" },
    { label: "Mobile Games", href: "/games#mobile" },
    { label: "PC Games", href: "/games#pc" },
  ],
  Services: [
    { label: "Game Development", href: "/services#development" },
    { label: "Mobile Games", href: "/services#mobile" },
    { label: "VR/AR", href: "/services#vr" },
    { label: "Multiplayer", href: "/services#multiplayer" },
  ],
  Support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/contact#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://twitter.com/GameHorizonGG", label: "Twitter" },
  { icon: MessageCircle, href: "https://discord.gg/gamehorizon", label: "Discord" },
  { icon: Youtube, href: "https://youtube.com/@GameHorizonGG", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/gamehorizon", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/gamehorizon", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-border/40 bg-brand-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand-primary/20 border border-brand-primary/30">
                <Gamepad2 className="w-5 h-5 text-brand-primary" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider">
                GAME<span className="text-gradient">HORIZON</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Crafting immersive gaming worlds that push the boundaries of imagination.
              From indie spirit to AAA execution.
            </p>
            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <a href="mailto:contact@gamehorizon.gg" className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-primary transition-colors">
                <Mail className="w-4 h-4" />
                contact@gamehorizon.gg
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4" />
                Austin, TX • London • Tokyo
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-brand-border/40 text-slate-400 hover:text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary/40 transition-all duration-200"
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
                      className="text-slate-400 text-sm hover:text-brand-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-glass rounded-xl p-6 mb-10 glow-border">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">Stay on the Horizon</h3>
              <p className="text-slate-400 text-sm">
                Get game announcements, dev updates, and exclusive early access invites.
              </p>
            </div>
            <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-56 bg-white/5 border border-brand-border/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-gradient text-white text-sm font-semibold rounded-lg hover:opacity-90 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-brand-border/30">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} GameHorizon. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 text-sm hover:text-brand-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-slate-500 text-sm hover:text-brand-primary transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="text-slate-500 text-sm hover:text-brand-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
