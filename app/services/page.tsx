"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor, Gamepad2, Glasses, Network, Palette, CheckCircle, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/home/CTASection";
import Link from "next/link";

const services = [
  {
    id: "development",
    icon: Gamepad2,
    title: "Full-Cycle Game Development",
    shortDesc: "From concept to launch — handled end-to-end",
    description:
      "We take ownership of your project from the first sketch to the final build. Concept, design, art, engineering, QA, and release — all under one roof, with transparent timelines and honest communication throughout.",
    features: [
      "Unity & Unreal Engine development",
      "Design & narrative support",
      "Original art and audio",
      "Thorough QA and bug fixing",
      "Store submission (App Store, Play Store, Steam)",
      "Post-launch patches & support",
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Game Development",
    shortDesc: "iOS & Android games built to perform",
    description:
      "Mobile is our primary focus. We build smooth, performant titles optimized for a wide range of devices — from premium flagships to budget phones common across South Asia. Monetization that respects your players.",
    features: [
      "Native iOS & Android development",
      "Cross-platform with Unity",
      "Mobile-first UI/UX",
      "Store listing & ASO support",
      "Ethical IAP & ad integration",
      "Analytics & live-ops setup",
    ],
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: "pc",
    icon: Monitor,
    title: "PC & Web Games",
    shortDesc: "Great games for Steam, itch.io, and the open web",
    description:
      "From compact indie titles to larger PC games, we build experiences that showcase your idea without burning your budget. Pure-web browser games are also a specialty — fast loading, controller-friendly, no install required.",
    features: [
      "Steam & itch.io publishing support",
      "WebGL / HTML5 web games",
      "Controller & keyboard support",
      "Achievements & cloud saves",
      "Localization-ready pipelines",
      "Performance tuning for low-end hardware",
    ],
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: "vr",
    icon: Glasses,
    title: "AR / VR Experiences",
    shortDesc: "Immersive apps for Meta Quest and modern AR platforms",
    description:
      "Prototype or production-ready AR / VR work. We build with comfort, accessibility, and real-world performance in mind — not just impressive-looking demos that fall apart under scrutiny.",
    features: [
      "Meta Quest 2 / 3 development",
      "WebXR for browser-based experiences",
      "Hand tracking integration",
      "Comfort & motion-sickness design",
      "Spatial audio",
      "Mobile AR (ARKit / ARCore)",
    ],
    gradient: "from-orange-600 to-red-500",
  },
  {
    id: "multiplayer",
    icon: Network,
    title: "Multiplayer & Backend",
    shortDesc: "Reliable multiplayer, matchmaking, and live services",
    description:
      "Multiplayer is hard to get right. We handle the backend architecture, matchmaking, leaderboards, and anti-cheat so your gameplay team can focus on gameplay.",
    features: [
      "Dedicated server setup",
      "Realtime sync (WebSockets, UDP)",
      "Matchmaking & lobbies",
      "Leaderboards & cloud saves",
      "Basic anti-cheat & integrity checks",
      "Cost-aware cloud deployment",
    ],
    gradient: "from-sky-600 to-blue-500",
  },
  {
    id: "design",
    icon: Palette,
    title: "Art & Design Services",
    shortDesc: "Standalone art, UI, and visual identity for games",
    description:
      "Not building a full game with us? We also take on standalone art commissions — concept art, 2D illustrations, 3D assets, UI design, and promotional artwork for stores and trailers.",
    features: [
      "Concept art & visual development",
      "2D & 3D asset creation",
      "Game UI / UX design",
      "Promotional & store artwork",
      "Logo & brand identity",
      "Localized key art for different regions",
    ],
    gradient: "from-pink-600 to-rose-500",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We talk through your vision, audience, platform, and budget — and share honest feedback on scope and timing." },
  { step: "02", title: "Prototype", desc: "A short prototype phase (typically 2–4 weeks) to lock in the core gameplay feel and visual direction." },
  { step: "03", title: "Production", desc: "Full development with regular builds, weekly check-ins, and clear milestones you can track." },
  { step: "04", title: "Polish & QA", desc: "Thorough testing, optimization, and polish passes — no project ships without this." },
  { step: "05", title: "Launch", desc: "Store submission, launch assets, and release-day support to make sure your game lands well." },
  { step: "06", title: "Post-Launch", desc: "Patches, community updates, and performance monitoring — we don't disappear after launch day." },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-secondary text-sm font-semibold">
              Our Services
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              What We <span className="text-gradient">Build</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From casual mobile titles to deeper PC games — PlayGame Horizon is a full-service
              game development studio for teams who care about quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-24 ${i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Text */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-5`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">{service.title}</h2>
                <p className="text-brand-secondary font-medium mb-4">{service.shortDesc}</p>
                <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 text-brand-secondary font-semibold hover:gap-3 transition-all">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              {/* Visual */}
              <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className={`h-64 lg:h-80 rounded-2xl bg-gradient-to-br ${service.gradient} relative overflow-hidden border border-white/10`}>
                  <div className="absolute inset-0 grid-pattern opacity-25" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-white/15" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-1 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/4 border-y border-brand-border/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="How We Work" title="Our " highlight="Development Process" description="A transparent, collaborative workflow that keeps you informed every step of the way." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-brand-card border border-brand-border/40 rounded-xl p-6 relative overflow-hidden group hover:border-brand-primary/40 transition-all hover:-translate-y-1"
              >
                <div className="absolute -top-4 -right-4 font-display font-black text-7xl text-brand-primary/8 select-none">
                  {step.step}
                </div>
                <div className="text-brand-secondary font-display font-bold text-sm mb-3 tracking-widest">{step.step}</div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-brand-secondary transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
