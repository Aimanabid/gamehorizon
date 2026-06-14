"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Gamepad2 } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Games",    href: "/games" },
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "Blog",     href: "/blog" },
  { label: "Careers",  href: "/careers" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-xl border-b border-brand-primary/20 shadow-[0_0_40px_rgba(41,121,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      {/* Top neon line when scrolled */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent" />
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative w-8 h-8 flex items-center justify-center clip-corner-both"
            style={{ background: "linear-gradient(135deg,#2979FF,#00E5FF)" }}>
            <Gamepad2 className="w-4 h-4 text-white relative z-10" />
          </div>
          <span className="font-display font-bold text-lg tracking-[0.1em]">
            GAME<span className="text-gradient">HORIZON</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 font-display text-xs tracking-[0.12em] font-semibold transition-all duration-200 group ${
                    active
                      ? "text-brand-secondary"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {/* Active indicator */}
                  {active && (
                    <>
                      <span className="absolute inset-0 bg-brand-primary/10 border border-brand-primary/25" />
                      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-brand-secondary" />
                    </>
                  )}
                  {/* Hover underline */}
                  {!active && (
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-5 py-2 font-display text-xs tracking-[0.12em] font-bold text-white clip-corner overflow-hidden group shadow-glow-sm hover:shadow-glow transition-shadow"
          >
            <span className="absolute inset-0 bg-blue-gradient" />
            <span className="absolute inset-0 bg-shine bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity" />
            <span className="relative">GET IN TOUCH</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-slate-400 hover:text-white transition clip-corner bg-brand-card border border-brand-border/40"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-brand-dark/97 backdrop-blur-xl border-t border-brand-primary/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-3 font-display text-xs tracking-[0.12em] font-semibold transition-all ${
                  active
                    ? "bg-brand-primary/12 text-brand-secondary border-l-2 border-brand-secondary"
                    : "text-slate-400 hover:text-white hover:bg-white/4 border-l-2 border-transparent"
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />}
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-4 py-3 font-display text-xs tracking-widest font-bold text-white bg-blue-gradient clip-corner shadow-glow-sm"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
