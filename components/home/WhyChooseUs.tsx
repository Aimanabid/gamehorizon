"use client";

import { motion } from "framer-motion";
import { Cpu, Users, Rocket, Award, Headphones, Globe } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "We work with Unity, Unreal Engine, and modern web stacks to deliver smooth, performant experiences on every target device.",
    accent: "#2979FF",
  },
  {
    icon: Users,
    title: "Player-First Design",
    description: "Every design decision is made with players in mind — no dark patterns, no predatory monetization, just games people enjoy.",
    accent: "#00E5FF",
  },
  {
    icon: Rocket,
    title: "Fast Prototyping",
    description: "From concept to playable prototype in weeks. We iterate quickly so you can validate ideas before committing to full production.",
    accent: "#7B2FFF",
  },
  {
    icon: Award,
    title: "Craft & Polish",
    description: "We ship work we're proud of. Polish, UX, and performance aren't afterthoughts — they're built into every milestone.",
    accent: "#2979FF",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "One cohesive experience across mobile, PC, and web, with careful attention to each platform's strengths and conventions.",
    accent: "#00E5FF",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description: "Concept, art, engineering, QA, and post-launch — handled in-house with transparent communication throughout.",
    accent: "#7B2FFF",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/4 border-y border-brand-border/30" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(41,121,255,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-purple/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Why PlayGame Horizon"
          title="We Build Games with "
          highlight="Care"
          description="Partnering with us means working with a small, focused team obsessed with craft, communication, and shipping work that holds up over time."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-brand-card border border-brand-border/50 rounded-2xl p-6
                hover:border-brand-primary/50 hover:-translate-y-1.5 hover:shadow-glow-sm
                transition-all duration-300 overflow-hidden"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-shadow duration-300 group-hover:shadow-glow-sm"
                style={{
                  background: `linear-gradient(135deg, ${feature.accent}25, ${feature.accent}10)`,
                  border: `1px solid ${feature.accent}50`,
                }}
              >
                <feature.icon className="w-5 h-5" style={{ color: feature.accent }} />
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-secondary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
