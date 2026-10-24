"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "Product Manager, Local Studio",
    avatar: "AR",
    rating: 5,
    text: "PlayGame Horizon brought our mobile concept to life with the kind of care we didn't expect from a young studio. Clear communication, honest timelines, and strong attention to detail from day one.",
  },
  {
    id: 2,
    name: "Fatima Khan",
    role: "Founder, Indie Project",
    avatar: "FK",
    rating: 5,
    text: "Working with the team felt genuinely collaborative. They treated our ideas as their own and shipped a polished prototype in a fraction of the time we had budgeted.",
  },
  {
    id: 3,
    name: "Hassan Ali",
    role: "Creative Director",
    avatar: "HA",
    rating: 5,
    text: "A refreshing studio to work with — talented, humble, and genuinely focused on quality. They care about the games they make, and it shows in every interaction.",
  },
  {
    id: 4,
    name: "Sana Malik",
    role: "Startup Co-Founder",
    avatar: "SM",
    rating: 5,
    text: "Great value, great craft, and great people. They helped us scope realistically and delivered a mobile build that our testers genuinely enjoyed playing.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/3 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Testimonials"
          title="What Clients "
          highlight="Say"
          description="Honest words from the people we've had the pleasure of working with."
        />

        <div className="mt-14 relative">
          <div className="absolute -top-6 left-8 text-brand-primary/20">
            <Quote className="w-24 h-24" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-glass glow-border rounded-2xl p-8 sm:p-10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 font-medium">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-gradient flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonials[current].name}</div>
                    <div className="text-sm text-slate-400">{testimonials[current].role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-brand-primary"
                    : "w-1.5 bg-brand-border/60 hover:bg-brand-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
