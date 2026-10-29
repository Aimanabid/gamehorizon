import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, Mail, Newspaper } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/home/CTASection";
import { buildMetadata } from "@/lib/seo";
import { games } from "@/lib/data/games";

export const metadata = buildMetadata({
  title: "Press Kit",
  description:
    "Press kit for PlayGame Horizon, a Lahore-based game studio: company fact sheet, boilerplate, logos, screenshots and press contact for Village Farm 2027.",
  path: "/press",
  keywords: ["press kit", "Village Farm 2027 press", "PlayGame Horizon media"],
});

const game = games.find((g) => g.id === "village-farm-2027")!;
const IMG = "/images/blog/village-farm";
const screenshots = Array.from({ length: 9 }, (_, i) => `${IMG}/screenshot-${i + 1}.jpg`);

const studioFacts = [
  { label: "Legal name", value: "PlayGame Horizon (SMC-Private) Limited" },
  { label: "Founded", value: "2024" },
  { label: "Location", value: "Main Bazar, Old Anarkali, Lahore, Pakistan" },
  { label: "Registration", value: "Registered with the SECP" },
  { label: "Focus", value: "Mobile, PC and web games" },
  { label: "Website", value: "playgamehorizon.com" },
];

const gameFacts = [
  { label: "Title", value: game.title },
  { label: "Genre", value: game.genre },
  { label: "Platform", value: "Android" },
  { label: "Price", value: "Free to play" },
  { label: "Release date", value: "October 29, 2026" },
  { label: "Developer / publisher", value: "PlayGame Horizon" },
];

const boilerplate =
  "PlayGame Horizon (SMC-Private) Limited is a small, focused game development studio based in Lahore, Pakistan. Founded in 2024 and registered with the SECP, the studio builds thoughtful, player-first games for mobile, PC and web, and partners with clients who care about quality as much as it does.";

const gameBlurb =
  "Village Farm 2027 is a free-to-play 3D farming simulation for Android. Players plough fields, grow wheat, corn and tomatoes, milk cows, look after pigs, chickens and goats, drive a bullock cart or a red tractor, and sell their harvest to build their dream farm.";

const links = [
  { label: "Village Farm 2027 on Google Play", href: game.storeUrl! },
  { label: "Game page", href: `/games/${game.id}` },
  { label: "Studio blog", href: "/blog" },
  { label: "Facebook", href: "https://facebook.com/playgamehorizon" },
  { label: "Instagram", href: "https://instagram.com/playgamehorizon" },
  { label: "X / Twitter", href: "https://twitter.com/playgamehorizon" },
  { label: "LinkedIn", href: "https://linkedin.com/company/playgamehorizon" },
  { label: "YouTube", href: "https://youtube.com/@playgamehorizon" },
];

function FactList({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-brand-border/40">
      {facts.map((f) => (
        <div key={f.label} className="flex flex-col sm:flex-row sm:gap-6 py-3">
          <dt className="sm:w-48 shrink-0 text-sm font-semibold text-brand-secondary">{f.label}</dt>
          <dd className="text-slate-300 text-sm">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function PressPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-secondary text-sm font-semibold">
            Press Kit
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Press &amp; <span className="text-gradient">Media</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
            Everything you need to write about PlayGame Horizon and Village Farm 2027: facts,
            descriptions, logos and screenshots, free to use in coverage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/press-kit.zip"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-gradient text-white font-semibold hover:shadow-glow-sm transition-shadow"
            >
              <Download className="w-4 h-4" /> Download full press kit (.zip)
            </a>
            <a
              href="mailto:info@playgamehorizon.com?subject=Press%20enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-primary/40 text-white font-semibold hover:bg-brand-primary/10 transition-colors"
            >
              <Mail className="w-4 h-4" /> Press contact
            </a>
          </div>
        </div>
      </section>

      {/* Fact sheets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Fact Sheet" title="Quick " highlight="Facts" />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-glass glow-border rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-white mb-4">The studio</h3>
              <FactList facts={studioFacts} />
            </div>
            <div className="bg-glass glow-border rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-white mb-4">Village Farm 2027</h3>
              <FactList facts={gameFacts} />
            </div>
          </div>
        </div>
      </section>

      {/* Descriptions */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/4 border-y border-brand-border/30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Copy" title="Descriptions " highlight="to Use" />
          <div className="mt-12 space-y-6">
            {[
              { title: "About PlayGame Horizon", text: boilerplate },
              { title: "About Village Farm 2027", text: gameBlurb },
            ].map((b) => (
              <div key={b.title} className="bg-brand-card border border-brand-border/40 rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-2">{b.title}</h3>
                <p className="text-slate-300 leading-relaxed">{b.text}</p>
              </div>
            ))}
            <p className="text-sm text-slate-400">
              Feel free to quote or adapt these. When linking, please point to{" "}
              <a
                href={game.storeUrl}
                className="text-brand-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                the Google Play page
              </a>{" "}
              or{" "}
              <Link href="/" className="text-brand-secondary hover:underline">
                playgamehorizon.com
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Brand" title="Logos & " highlight="Icons" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { src: "/logo.png", name: "Studio logo", file: "playgamehorizon-logo.png" },
              { src: "/logo-icon.png", name: "Logo icon", file: "playgamehorizon-icon.png" },
            ].map((l) => (
              <div key={l.src} className="bg-brand-card border border-brand-border/40 rounded-xl p-6 text-center">
                <div className="relative h-40 mb-4">
                  <Image src={l.src} alt={`PlayGame Horizon ${l.name.toLowerCase()}`} fill sizes="320px" className="object-contain" />
                </div>
                <h3 className="font-bold text-white mb-3">{l.name}</h3>
                <a
                  href={l.src}
                  download={l.file}
                  className="inline-flex items-center gap-2 text-sm text-brand-secondary hover:underline"
                >
                  <Download className="w-4 h-4" /> Download PNG
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/3 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Media" title="Village Farm 2027 " highlight="Screenshots" />
          <div className="mt-12">
            <div className="relative aspect-[1024/500] max-w-3xl mx-auto rounded-xl overflow-hidden border border-brand-border/40">
              <Image
                src={`${IMG}/feature-graphic.jpg`}
                alt="Village Farm 2027 feature graphic"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-center">
              <a
                href={`${IMG}/feature-graphic.jpg`}
                download="village-farm-2027-feature-graphic.jpg"
                className="inline-flex items-center gap-2 text-sm text-brand-secondary hover:underline"
              >
                <Download className="w-4 h-4" /> Download feature graphic
              </a>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {screenshots.map((src, i) => (
              <a
                key={src}
                href={src}
                download={`village-farm-2027-screenshot-${i + 1}.jpg`}
                className="group relative block aspect-video rounded-lg overflow-hidden border border-brand-border/40 hover:border-brand-primary/50 transition-colors"
                aria-label={`Download Village Farm 2027 screenshot ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Village Farm 2027 gameplay screenshot ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Links & contact */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-glass glow-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="w-5 h-5 text-brand-secondary" />
              <h3 className="font-display font-bold text-xl text-white">Press contact</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Review requests, interviews, promo codes and assets: we reply to press enquiries as
              quickly as we can.
            </p>
            <a href="mailto:info@playgamehorizon.com" className="text-brand-secondary hover:underline">
              info@playgamehorizon.com
            </a>
            <p className="text-slate-400 text-sm mt-2">Phone / WhatsApp: +92 335 6507151</p>
          </div>
          <div className="bg-glass glow-border rounded-2xl p-8">
            <h3 className="font-display font-bold text-xl text-white mb-4">Links</h3>
            <ul className="space-y-2">
              {links.map((l) => {
                const external = l.href.startsWith("http");
                return (
                  <li key={l.href}>
                    {external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-brand-secondary transition-colors"
                      >
                        {l.label} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link href={l.href} className="text-sm text-slate-300 hover:text-brand-secondary transition-colors">
                        {l.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
