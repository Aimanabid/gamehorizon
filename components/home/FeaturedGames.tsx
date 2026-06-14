"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Monitor, Smartphone, Gamepad, ArrowRight, type LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { games } from "@/lib/data/games";

const platformIcons: Record<string, LucideIcon> = {
  PC: Monitor, Mac: Monitor, Mobile: Smartphone,
  PlayStation: Gamepad, Xbox: Gamepad, Console: Gamepad, VR: Gamepad,
};

const statusConfig = {
  "released":       { label: "// LIVE",        cls: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
  "coming-soon":    { label: "// COMING SOON",  cls: "text-amber-400  border-amber-500/40  bg-amber-500/10" },
  "in-development": { label: "// IN DEV",       cls: "text-brand-primary border-brand-primary/40 bg-brand-primary/10" },
};

const cardAccents = [
  "from-brand-primary/25 via-brand-deep/40 to-brand-dark",
  "from-purple-800/30  via-brand-deep/40 to-brand-dark",
  "from-teal-800/25    via-brand-deep/40 to-brand-dark",
  "from-orange-800/25  via-brand-deep/40 to-brand-dark",
];

function PlatformBadge({ platform }: { platform: string }) {
  const Icon = platformIcons[platform];
  if (!Icon) return null;
  return (
    <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
      <Icon className="w-3 h-3" />{platform}
    </span>
  );
}

export default function FeaturedGames() {
  const featured = games.slice(0, 4);

  return (
    <section className="py-24 relative">
      {/* faint hex dot bg */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(41,121,255,0.1) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Our Portfolio"
          title="Featured "
          highlight="Games"
          description="From action-packed adventures to massive online worlds — the titles that define the GameHorizon experience."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((game, i) => {
            const status = statusConfig[game.status];
            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden bg-brand-card border border-brand-border/50
                  hover:border-brand-primary/60 transition-all duration-300 hover:shadow-glow
                  clip-corner-lg scan-sweep
                  ${i === 0 ? "md:col-span-2 h-80" : "h-64"}`}
              >
                {/* Card background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cardAccents[i]}`} />

                {/* Hex grid overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(41,121,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-shine bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

                {/* Top-right corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0
                    border-l-[64px] border-l-transparent
                    border-t-[64px] border-t-brand-primary/20
                    group-hover:border-t-brand-primary/40 transition-colors" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Status */}
                  <div className={`inline-flex self-start mb-3 px-3 py-0.5 border font-display text-[10px] tracking-[0.15em] font-semibold ${status.cls}`}>
                    {status.label}
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div className="flex-1">
                      <h3 className={`font-display font-bold text-white mb-1 group-hover:text-brand-secondary transition-colors ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                        {game.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-3 line-clamp-2 leading-relaxed">
                        {game.description}
                      </p>
                      <div className="flex items-center flex-wrap gap-3">
                        <span className="hud-label opacity-60">{game.genre}</span>
                        <span className="w-px h-3 bg-brand-border" />
                        {game.platform.slice(0, 3).map((p) => (
                          <PlatformBadge key={p} platform={p} />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
                      {game.rating && (
                        <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2 py-1">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-white font-bold text-sm font-display">{game.rating}</span>
                        </div>
                      )}
                      <Link
                        href={`/games#${game.id}`}
                        className="flex items-center gap-1 text-xs font-semibold font-display tracking-wider text-brand-primary group-hover:text-brand-secondary group-hover:gap-2 transition-all"
                      >
                        VIEW <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom neon line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-secondary/80 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/games"
            className="inline-flex items-center gap-2 px-6 py-3 clip-corner bg-glass border border-brand-primary/30 text-brand-primary font-display font-semibold text-sm tracking-wider hover:bg-brand-primary/10 hover:border-brand-primary/60 hover:shadow-glow-sm transition-all duration-200"
          >
            VIEW ALL GAMES <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
