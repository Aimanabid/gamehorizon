"use client";

import { motion } from "framer-motion";
import { Cpu, Users, Rocket, Award, Headphones, Globe } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Cpu,
    title: "Cutting-Edge Tech",
    description: "UE5, proprietary rendering pipelines, and AI-assisted tools deliver visual fidelity that rivals blockbuster productions.",
    accent: "#2979FF",
    tag: "ENGINE",
  },
  {
    icon: Users,
    title: "Player-First",
    description: "Every design decision is made with players in mind. No dark patterns, no predatory monetization — just games built to delight.",
    accent: "#00E5FF",
    tag: "DESIGN",
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Concept to playable prototype in weeks, not months. We iterate fast and ship smart.",
    accent: "#7B2FFF",
    tag: "PIPELINE",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Six industry awards. Our commitment to excellence shows in every frame, every mechanic, every moment.",
    accent: "#2979FF",
    tag: "QUALITY",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "One cohesive experience across mobile, PC, and console — without compromise on any screen.",
    accent: "#00E5FF",
    tag: "PLATFORMS",
  },
  {
    icon: Headphones,
    title: "Full-Cycle Dev",
    description: "Concept art to post-launch live service, handled entirely in-house by our dedicated teams.",
    accent: "#7B2FFF",
    tag: "LIFECYCLE",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-primary/4 border-y border-brand-border/30" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(41,121,255,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-purple/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Why GameHorizon"
          title="We Don't Just Make Games,"
          highlight=" We Craft Worlds"
          description="Partnering with GameHorizon means working with a team obsessed with craft, quality, and creating experiences that outlast trends."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-brand-card border border-brand-border/50 clip-corner-lg p-6
                hover:border-brand-primary/50 hover:-translate-y-1.5 hover:shadow-glow-sm
                transition-all duration-300 overflow-hidden corner-brackets"
            >
              {/* Faint diagonal grid */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(135deg, rgba(41,121,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Hex icon */}
              <div className="relative mb-5">
                {/* Hexagon shape via clip-path */}
                <div
                  className="w-14 h-14 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-glow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${feature.accent}30, ${feature.accent}10)`,
                    border: `1px solid ${feature.accent}50`,
                    clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                  }}
                >
                  <feature.icon className="w-6 h-6 transition-colors duration-300" style={{ color: feature.accent }} />
                </div>
              </div>

              {/* Tag */}
              <div className="hud-label mb-2 opacity-50">{feature.tag}</div>

              <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-brand-secondary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
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
