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
    shortDesc: "End-to-end development from concept to launch",
    description:
      "We handle every stage of development in-house — concept art, game design, engineering, QA, localization, and post-launch live service. You share the vision; we ship the game.",
    features: [
      "Unreal Engine 5 & Unity development",
      "Custom engine capabilities",
      "Narrative design & scripting",
      "Audio design & composition",
      "Quality assurance & bug fixing",
      "Post-launch support & updates",
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Game Development",
    shortDesc: "iOS & Android games that top the charts",
    description:
      "Mobile gaming is our fastest-growing division. We build performant, monetization-ready mobile titles that respect players — with stunning visuals optimized for every screen size.",
    features: [
      "iOS (Swift/Objective-C) & Android development",
      "Cross-platform with Unity/Flutter",
      "Mobile UI/UX design",
      "App Store & Play Store optimization",
      "In-app purchase systems",
      "Push notifications & retention mechanics",
    ],
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: "pc",
    icon: Monitor,
    title: "PC & Console Games",
    shortDesc: "AAA-quality experiences for PC, PS5, Xbox, and Nintendo",
    description:
      "From indie darlings to console blockbusters, we've shipped games on every major platform. Our team understands the unique nuances of each platform and how to make your game shine.",
    features: [
      "PC (Steam, Epic Games Store) publishing",
      "PlayStation 4/5 certification & release",
      "Xbox One/Series X|S development",
      "Nintendo Switch optimization",
      "Controller support & accessibility",
      "Achievement & trophy systems",
    ],
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: "vr",
    icon: Glasses,
    title: "AR/VR Development",
    shortDesc: "Immersive realities that redefine gaming",
    description:
      "Our XR division specializes in virtual and augmented reality experiences that create genuine presence. We work with Meta Quest, PlayStation VR2, SteamVR, and custom AR platforms.",
    features: [
      "Meta Quest 2/3/Pro development",
      "PlayStation VR2 & SteamVR",
      "Hand tracking & haptic feedback",
      "Spatial audio implementation",
      "Motion sickness mitigation",
      "AR mobile experiences (ARKit/ARCore)",
    ],
    gradient: "from-orange-600 to-red-500",
  },
  {
    id: "multiplayer",
    icon: Network,
    title: "Multiplayer Solutions",
    shortDesc: "Scalable backends for millions of concurrent players",
    description:
      "Building multiplayer is hard. We've done it for games with millions of concurrent players. From real-time PvP to massive open worlds, we architect systems that scale.",
    features: [
      "Dedicated server infrastructure",
      "Client-server & P2P networking",
      "Anti-cheat systems",
      "Matchmaking & leaderboards",
      "Real-time synchronization",
      "Global CDN & server deployment",
    ],
    gradient: "from-sky-600 to-blue-500",
  },
  {
    id: "design",
    icon: Palette,
    title: "Art & Design Services",
    shortDesc: "World-class visual art for any production",
    description:
      "Our award-winning art team offers standalone art production services. Whether you need concept art, 3D assets, UI design, or a complete visual style guide, we deliver.",
    features: [
      "Concept art & visual development",
      "3D character & environment art",
      "UI/UX design for games",
      "Cinematic trailers & cutscenes",
      "Brand identity & marketing art",
      "NFT & collectible design",
    ],
    gradient: "from-pink-600 to-rose-500",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We deep-dive into your vision, target audience, platform needs, and business goals." },
  { step: "02", title: "Prototype", desc: "In 2–4 weeks we build a playable prototype to validate core mechanics and aesthetic direction." },
  { step: "03", title: "Production", desc: "Full-scale development kicks off with weekly builds, regular reviews, and transparent milestones." },
  { step: "04", title: "Polish & QA", desc: "Rigorous quality assurance, optimization, and final polish to ensure a smooth launch." },
  { step: "05", title: "Launch", desc: "We support certification, platform submission, marketing assets, and launch-day infrastructure." },
  { step: "06", title: "Live Service", desc: "Post-launch updates, community management support, and ongoing analytics review." },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6">
              What We <span className="text-gradient">Build</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From mobile casual to AAA console, VR to multiplayer — GameHorizon is a full-service game development partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Text */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-5`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-display font-bold text-3xl text-white mb-2">{service.title}</h2>
                <p className="text-brand-primary font-medium mb-4">{service.shortDesc}</p>
                <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              {/* Visual */}
              <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className={`h-64 lg:h-80 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 relative overflow-hidden border border-white/10`}>
                  <div className="absolute inset-0 grid-pattern opacity-25" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-white/10" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className={`h-1 rounded-full bg-gradient-to-r ${service.gradient}`} />
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
          <SectionTitle label="How We Work" title="Our " highlight="Development Process" description="A transparent, collaborative workflow that keeps you in the loop at every stage." />
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
                <div className="text-brand-primary font-display font-bold text-sm mb-3 tracking-widest">{step.step}</div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-brand-primary transition-colors">{step.title}</h3>
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
