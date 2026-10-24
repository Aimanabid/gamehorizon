"use client";

import { motion } from "framer-motion";
import { Heart, Target, Eye, Award, Users, Rocket, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/home/CTASection";
import { team, timeline } from "@/lib/data/team";

const values = [
  { icon: Heart, title: "Passion First", description: "We make games because we love games. That love shows up in every build, every pixel, and every patch." },
  { icon: Target, title: "Player-Centric", description: "Decisions are driven by what's best for players — not by short-term metrics or predatory monetization." },
  { icon: Award, title: "Quality Over Rush", description: "We'd rather ship slightly later than ship something we're not proud of. Polish is non-negotiable." },
  { icon: Users, title: "Honest Communication", description: "Clear timelines, honest updates, and no hidden surprises. Clients and teammates get the same transparency." },
  { icon: Rocket, title: "Thoughtful Innovation", description: "We adopt new tech when it serves the player, not for novelty. Craft always comes first." },
  { icon: Star, title: "Rooted in Pakistan", description: "Proudly Lahore-based. We celebrate local culture and build with the global player in mind." },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-secondary text-sm font-semibold">
              About Us
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              A Studio Built on <span className="text-gradient">Craft</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
              PlayGame Horizon (SMC-Private) Limited is a small, focused game development studio
              based in Lahore, Pakistan. We build thoughtful, player-first games for mobile, PC,
              and web — one well-made title at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionTitle label="Our Story" title="Built in " highlight="Lahore" centered={false} />
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  PlayGame Horizon began with a simple belief: Pakistan has incredible creative
                  and technical talent, and the games industry is where that talent can meet the
                  world on its own terms.
                </p>
                <p>
                  We&apos;re a small team working out of Old Anarkali, Lahore — one of the oldest
                  and liveliest neighborhoods in the city. The energy of the bazaar, the honest
                  craft of the people around us, and the mix of history and hustle all shape how
                  we approach our work.
                </p>
                <p>
                  Today, PlayGame Horizon is officially registered with the SECP as PlayGame
                  Horizon (SMC-Private) Limited. We take on carefully-scoped projects, build our
                  own original titles, and partner with clients who care about quality as much as
                  we do.
                </p>
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
                  <div className="font-display font-black text-7xl text-gradient mb-2">2024</div>
                  <div className="text-slate-300 font-medium">Founded</div>
                </div>
              </div>
              {[
                { label: "Based In", value: "Lahore" },
                { label: "Focus", value: "Mobile · PC · Web" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`absolute ${i === 0 ? "-top-4 -right-4" : "-bottom-4 -left-4"} bg-glass glow-border rounded-xl px-5 py-3 text-center`}
                >
                  <div className="font-display font-bold text-lg text-gradient">{s.value}</div>
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
                text: "To build thoughtful, polished games — and to help creators and partners around the world ship their visions with the same care.",
              },
              {
                icon: Eye,
                label: "Vision",
                title: "Our Vision",
                text: "To be a trusted Pakistani game studio known for quality craft, honest work, and games that feel genuinely cared for.",
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
                  <span className="text-xs font-bold tracking-widest uppercase text-brand-secondary">{label}</span>
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
          <SectionTitle label="What We Stand For" title="Core " highlight="Values" description="The principles that shape how we approach work, teammates, and the games we build." />
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
                key={`${item.year}-${i}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-primary border-2 border-brand-dark shadow-glow-sm z-10" />
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
          <SectionTitle label="The Studio" title="Who We " highlight="Are" description="A small, focused crew that works closely together on every project." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-brand-card border border-brand-border/40 rounded-xl p-6 hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-gradient flex items-center justify-center text-xl font-bold text-white mb-4 group-hover:shadow-glow-sm transition-shadow">
                  {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="font-bold text-white text-base">{member.name}</h3>
                <p className="text-brand-secondary text-sm font-medium mb-3">{member.role}</p>
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
