"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Monitor, Smartphone, Gamepad, ArrowRight, type LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { games } from "@/lib/data/games";

const platformIcons: Record<string, LucideIcon> = {
  PC: Monitor,
  Mac: Monitor,
  Mobile: Smartphone,
  PlayStation: Gamepad,
  Xbox: Gamepad,
  Console: Gamepad,
  VR: Gamepad,
};

const statusColors = {
  released: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "coming-soon": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "in-development": "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

const statusLabels = {
  released: "Released",
  "coming-soon": "Coming Soon",
  "in-development": "In Development",
};

const bgGradients = [
  "bg-gradient-to-br from-blue-900/60 via-brand-deep/80 to-brand-dark",
  "bg-gradient-to-br from-purple-900/60 via-brand-deep/80 to-brand-dark",
  "bg-gradient-to-br from-teal-900/60 via-brand-deep/80 to-brand-dark",
  "bg-gradient-to-br from-orange-900/60 via-brand-deep/80 to-brand-dark",
];

function PlatformBadge({ platform }: { platform: string }) {
  const Icon = platformIcons[platform];
  if (!Icon) return null;
  return (
    <span className="text-xs text-slate-400 flex items-center gap-1">
      <Icon className="w-3 h-3" />
      {platform}
    </span>
  );
}

export default function FeaturedGames() {
  const featured = games.slice(0, 4);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Our Portfolio"
          title="Featured "
          highlight="Games"
          description="From action-packed adventures to massive online worlds, explore the titles that define the GameHorizon experience."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-brand-card border border-brand-border/40 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-glow ${
                i === 0 ? "md:col-span-2 h-80" : "h-64"
              }`}
            >
              <div className={`absolute inset-0 ${bgGradients[i]}`} />
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors duration-300" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`inline-flex self-start mb-3 px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[game.status]}`}>
                  {statusLabels[game.status]}
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1">
                    <h3 className={`font-display font-bold text-white mb-1 ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                      {game.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-3 line-clamp-2">{game.description}</p>
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="text-xs text-slate-500 font-medium">{game.genre}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      {game.platform.slice(0, 3).map((p) => (
                        <PlatformBadge key={p} platform={p} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {game.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="text-white font-bold text-sm">{game.rating}</span>
                      </div>
                    )}
                    <Link
                      href={`/games#${game.id}`}
                      className="flex items-center gap-1 text-xs font-semibold text-brand-primary group-hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/games"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-glass border border-brand-primary/30 text-brand-primary font-semibold hover:bg-brand-primary/10 hover:border-brand-primary/60 transition-all duration-200"
          >
            View All Games <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
