"use client";

import { motion } from "framer-motion";
import { Cpu, Users, Rocket, Award, Headphones, Globe } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description:
      "We leverage Unreal Engine 5, proprietary rendering pipelines, and AI-assisted tools to achieve visual fidelity that rivals blockbuster productions.",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Users,
    title: "Player-First Philosophy",
    description:
      "Every design decision is made with players in mind. No dark patterns, no predatory monetization — just games built to delight.",
    gradient: "from-cyan-600 to-cyan-400",
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description:
      "Our agile pipeline goes from concept to playable prototype in weeks, not months — letting us iterate fast and ship smart.",
    gradient: "from-indigo-600 to-indigo-400",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "Six industry awards and counting. Our commitment to excellence shows in every frame, every mechanic, every moment.",
    gradient: "from-violet-600 to-violet-400",
  },
  {
    icon: Globe,
    title: "Cross-Platform Expertise",
    description:
      "We ship on mobile, PC, and console without compromise. One cohesive experience across every screen your players own.",
    gradient: "from-teal-600 to-teal-400",
  },
  {
    icon: Headphones,
    title: "Full-Cycle Development",
    description:
      "From concept art to post-launch live service, we handle every stage of the game development lifecycle in-house.",
    gradient: "from-sky-600 to-sky-400",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Why GameHorizon"
          title="We Don't Just Make Games,"
          highlight=" We Craft Worlds"
          description="Partnering with GameHorizon means working with a team obsessed with craft, quality, and creating experiences that outlast trends."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-brand-card rounded-xl p-6 border border-brand-border/40 hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-xl">
                <div className="absolute top-0 right-0 w-full h-full bg-blue-gradient opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-15 mb-5`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-brand-primary/0 via-brand-primary/40 to-brand-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
