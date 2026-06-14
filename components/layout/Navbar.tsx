"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Gamepad2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-xl border-b border-brand-border/60 shadow-[0_4px_32px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-blue-gradient opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
            <Gamepad2 className="w-6 h-6 text-brand-primary relative z-10" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider">
            GAME<span className="text-gradient">HORIZON</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    active
                      ? "text-brand-primary"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-lg bg-brand-primary/10 border border-brand-primary/30" />
                  )}
                  <span className="relative">{link.label}</span>
                  {!active && (
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-brand-primary to-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-gradient opacity-100 group-hover:opacity-90 transition-opacity" />
            <span className="absolute inset-0 bg-shine bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Get in Touch</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-brand-dark/95 backdrop-blur-xl border-t border-brand-border/40 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-brand-primary/15 text-brand-primary border border-brand-primary/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block text-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-blue-gradient"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
