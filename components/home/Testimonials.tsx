"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Elena Vasquez",
    role: "CEO, Nexus Interactive",
    avatar: "EV",
    rating: 5,
    text: "GameHorizon built our mobile RPG from scratch and delivered beyond our wildest expectations. The quality, professionalism, and communication throughout the project was second to none.",
  },
  {
    id: 2,
    name: "David Park",
    role: "Founder, PixelForge Studios",
    avatar: "DP",
    rating: 5,
    text: "We brought in GameHorizon to rescue a troubled multiplayer project. In 6 months, they turned it into the fastest-growing title in our portfolio. Exceptional talent, exceptional results.",
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "Head of Product, ArcadeVault",
    avatar: "SM",
    rating: 5,
    text: "Their VR expertise is unmatched. Arcane Realms VR set a new bar for immersive storytelling. Our player retention numbers are the best we've ever seen.",
  },
  {
    id: 4,
    name: "James Okonkwo",
    role: "Game Director, StormBreaker Games",
    avatar: "JO",
    rating: 5,
    text: "I've worked with many studios. GameHorizon is in a different league. They care deeply about the craft and it shows in every single pixel of the final product.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/3 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Testimonials"
          title="What Our "
          highlight="Clients Say"
          description="Don't take our word for it. Here's what developers and studios have to say about working with GameHorizon."
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
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-glass glow-border rounded-2xl p-8 sm:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 font-medium">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
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
                    className="w-10 h-10 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
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
