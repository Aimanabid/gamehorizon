"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Games",    href: "/games" },
  { label: "Careers",  href: "/careers" },
  { label: "Blog",     href: "/blog" },
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
          ? "bg-brand-dark/92 backdrop-blur-xl border-b border-brand-primary/20 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
          : "bg-brand-dark/40 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0" aria-label="PlayGame Horizon home">
          <div className="relative h-10 w-[150px] sm:w-[180px] drop-shadow-[0_0_12px_rgba(41,121,255,0.4)] group-hover:drop-shadow-[0_0_18px_rgba(0,229,255,0.6)] transition-all duration-300">
            <Image
              src="/logo.png"
              alt="PlayGame Horizon"
              fill
              sizes="180px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 group ${
                    active ? "text-brand-secondary" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className={`absolute left-3 right-3 bottom-1 h-px bg-brand-secondary transition-transform origin-left duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="tel:+923356507151"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-brand-secondary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> +92 335 6507151
          </a>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-lg overflow-hidden group shadow-glow-sm hover:shadow-glow transition-shadow"
          >
            <span className="absolute inset-0 bg-blue-gradient" />
            <span className="absolute inset-0 bg-shine bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity" />
            <span className="relative">Get a Quote</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white transition rounded-lg bg-brand-card border border-brand-border/60"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-brand-dark/97 backdrop-blur-xl border-t border-brand-primary/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  active
                    ? "bg-brand-primary/12 text-brand-secondary border border-brand-primary/25"
                    : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />}
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 space-y-2">
            <a
              href="tel:+923356507151"
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-brand-secondary bg-brand-primary/10 border border-brand-primary/25 rounded-lg"
            >
              <Phone className="w-4 h-4" /> +92 335 6507151
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-gradient rounded-lg shadow-glow-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
