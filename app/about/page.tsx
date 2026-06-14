"use client";

import { motion } from "framer-motion";
import { Heart, Target, Eye, Award, Users, Rocket, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/home/CTASection";
import { team, timeline } from "@/lib/data/team";

const values = [
  { icon: Heart, title: "Passion First", description: "Every line of code, every polygon, every sound effect is crafted with genuine love for the medium." },
  { icon: Target, title: "Player-Centric", description: "We make decisions based on what's best for players, not quarterly targets or short-term metrics." },
  { icon: Award, title: "Uncompromising Quality", description: "We'd rather delay a launch than ship something we're not proud of. Quality is non-negotiable." },
  { icon: Users, title: "Inclusive Teams", description: "Diverse perspectives make better games. We actively build teams that reflect the players we serve." },
  { icon: Rocket, title: "Innovation Always", description: "We push technology and design forward with every project. Comfort zones are for other studios." },
  { icon: Star, title: "Community-Driven", description: "Our players aren't just customers — they're co-creators. Their feedback shapes every update." },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary text-sm font-semibold">
              Our Story
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              We Build <span className="text-gradient">Worlds</span>
              <br />People Love
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
              GameHorizon was born from a simple belief: that games are the most powerful storytelling medium ever created,
              and that every player deserves experiences crafted with care, skill, and a dash of magic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionTitle label="Our Origins" title="From Garage Dreams to " highlight="Global Studio" centered={false} />
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>In 2020, Jordan Kim and Alex Chen quit their jobs at a major AAA studio with a USB drive full of prototypes and a shared conviction: the best games in the world hadn&apos;t been made yet.</p>
                <p>They rented a small office in Austin, Texas and began building. Within a year, Shadow Realm Online had attracted 100,000 players before it even officially launched. It was proof that quality and passion could compete with any budget.</p>
                <p>Today, GameHorizon employs 120+ artists, engineers, and designers across three continents. But the ethos hasn&apos;t changed: build things that matter, treat players like partners, and never stop reaching for the horizon.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 border border-brand-primary/25 p-8 h-72 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="relative text-center">
                  <div className="font-display font-black text-7xl text-gradient mb-2">2020</div>
                  <div className="text-slate-300 font-medium">Year Founded</div>
                </div>
              </div>
              {/* Floating stats */}
              {[
                { label: "Players", value: "1M+" },
                { label: "Countries", value: "80+" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`absolute ${i === 0 ? "-top-4 -right-4" : "-bottom-4 -left-4"} bg-glass glow-border rounded-xl px-5 py-3 text-center`}
                >
                  <div className="font-display font-bold text-2xl text-gradient">{s.value}</div>
                  <div className="text-xs text-slate-400">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/4 border-y border-brand-border/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                label: "Mission",
                title: "Our Mission",
                text: "To craft immersive, emotionally resonant gaming experiences that push the boundaries of technology and storytelling — making every player feel like the hero of their own epic adventure.",
              },
              {
                icon: Eye,
                label: "Vision",
                title: "Our Vision",
                text: "To become the world's most beloved independent game studio — a name synonymous with quality, creativity, and a genuine love for the art of play.",
              },
            ].map(({ icon: Icon, label, title, text }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-glass glow-border rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-gradient flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-brand-primary">{label}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">{title}</h3>
                <p className="text-slate-300 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="What We Stand For" title="Core " highlight="Values" description="The six principles that guide every decision we make — from code architecture to hiring to how we treat our players." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-brand-card border border-brand-border/40 rounded-xl p-6 hover:border-brand-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                <v.icon className="w-7 h-7 text-brand-primary mb-4" />
                <h3 className="font-bold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/3 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Milestones" title="Our " highlight="Journey" />
          <div className="mt-14 relative">
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary/50 via-brand-primary/20 to-transparent" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-primary border-2 border-brand-dark shadow-glow-sm z-10" />
                {/* Content */}
                <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                  <div className="font-display font-bold text-brand-primary text-2xl mb-1">{item.year}</div>
                  <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="The Crew" title="Meet the " highlight="Team" description="World-class talent united by a singular obsession: making the best games possible." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-brand-card border border-brand-border/40 rounded-xl p-6 hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-blue-gradient flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:shadow-glow-sm transition-shadow">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-bold text-white text-lg">{member.name}</h3>
                <p className="text-brand-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
