"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, ArrowRight, Users, Gamepad2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/home/CTASection";
import { jobs, benefits } from "@/lib/data/jobs";

const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];

const levelColors: Record<string, string> = {
  Junior: "bg-green-500/15 text-green-400 border-green-500/30",
  Mid: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Senior: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  Lead: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Director: "bg-red-500/15 text-red-400 border-red-500/30",
};

function JobCard({ job }: { job: typeof jobs[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      layout
      className="bg-brand-card border border-brand-border/40 rounded-xl overflow-hidden hover:border-brand-primary/40 transition-all duration-300"
    >
      <div
        className="p-5 cursor-pointer"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 rounded border text-xs font-semibold ${levelColors[job.level]}`}>
                {job.level}
              </span>
              <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded">{job.department}</span>
              <span className="text-xs text-brand-primary font-medium">{job.type}</span>
            </div>
            <h3 className="font-bold text-white text-lg mb-1">{job.title}</h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
              {job.salary && <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.salary}</span>}
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />Posted {new Date(job.posted).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="hidden sm:block text-xs text-brand-primary font-semibold">{expanded ? "Less" : "Details"}</span>
            {expanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>
        </div>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-brand-border/30 p-5"
        >
          <p className="text-slate-300 text-sm leading-relaxed mb-5">{job.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 mt-1.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Nice to Have</h4>
              <ul className="space-y-2">
                {job.niceToHave.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 mt-1.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a
            href={`mailto:careers@gamehorizon.gg?subject=Application: ${job.title}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-gradient text-white text-sm font-bold rounded-lg hover:opacity-90 transition shadow-glow-sm"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");

  const filtered = jobs.filter((j) => activeDept === "All" || j.department === activeDept);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6">
              Join the <span className="text-gradient">Horizon</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              We&apos;re building the future of gaming. Come build it with us. Remote-friendly, passion-driven, and always pushing the limits.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-border/40 text-sm text-slate-300">
                <Users className="w-4 h-4 text-brand-primary" /> 120+ Team Members
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-border/40 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-brand-primary" /> Remote-First
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-border/40 text-sm text-slate-300">
                <Gamepad2 className="w-4 h-4 text-brand-primary" /> 6 Open Roles
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/3 border-y border-brand-border/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Life at GameHorizon" title="Benefits That " highlight="Matter" description="We take care of our team so they can focus on building incredible games." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="bg-brand-card border border-brand-border/40 rounded-xl p-5 hover:border-brand-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2">{b.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <SectionTitle label="Open Roles" title="Current " highlight="Openings" centered={false} />
            <div className="flex flex-wrap gap-2">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDept(d)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeDept === d
                      ? "bg-brand-primary text-white shadow-glow-sm"
                      : "bg-white/5 text-slate-400 border border-brand-border/40 hover:text-white"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="mt-10 bg-glass glow-border rounded-xl p-6 text-center">
            <p className="text-slate-300 mb-3">Don&apos;t see a role that fits? We&apos;re always interested in exceptional talent.</p>
            <a
              href="mailto:careers@gamehorizon.gg?subject=Open Application"
              className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
            >
              Send an Open Application <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
