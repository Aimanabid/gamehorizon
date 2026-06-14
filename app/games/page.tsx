"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, Monitor, Smartphone, Gamepad, X, Play, Calendar } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import { games, categories, type Game } from "@/lib/data/games";

const platformIcons: Record<string, React.ElementType> = {
  PC: Monitor,
  Mac: Monitor,
  Mobile: Smartphone,
  PlayStation: Gamepad,
  Xbox: Gamepad,
  Console: Gamepad,
  VR: Gamepad,
};

const statusConfig = {
  released: { label: "Released", className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  "coming-soon": { label: "Coming Soon", className: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  "in-development": { label: "In Development", className: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
};

function GameModal({ game, onClose }: { game: Game; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 24 }}
          transition={{ type: "spring", damping: 20 }}
          className="bg-brand-card border border-brand-primary/30 rounded-2xl max-w-2xl w-full overflow-hidden shadow-glow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header image */}
          <div className="h-52 relative overflow-hidden bg-brand-deep">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={game.image} alt={game.title} className="absolute inset-0 w-full h-full object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusConfig[game.status].className}`}>
                {statusConfig[game.status].label}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="font-display font-bold text-2xl text-white">{game.title}</h2>
                <p className="text-brand-primary font-medium">{game.genre}</p>
              </div>
              {game.rating && (
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-white text-lg">{game.rating}</span>
                </div>
              )}
            </div>
            <p className="text-slate-300 leading-relaxed mb-5">{game.longDescription}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {game.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-medium">{tag}</span>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-brand-border/30 pt-4">
              <div className="flex gap-3">
                {game.platform.map((p) => {
                  const PIcon = platformIcons[p];
                  return (
                    <span key={p} className="flex items-center gap-1 text-xs text-slate-400">
                      {PIcon && <PIcon className="w-3.5 h-3.5" />} {p}
                    </span>
                  );
                })}
              </div>
              {game.releaseDate && (
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {game.releaseDate.startsWith("Q") ? game.releaseDate : new Date(game.releaseDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GamesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filtered = games.filter((g) => {
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase()) || g.genre.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || g.genre === activeCategory;
    return matchSearch && matchCategory;
  });

  const released = filtered.filter((g) => g.status === "released");
  const upcoming = filtered.filter((g) => g.status !== "released");

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">
              Our <span className="text-gradient">Games</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From action-packed shooters to sprawling MMORPGs — discover the worlds GameHorizon has built.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 border-b border-brand-border/30 bg-brand-dark/80 sticky top-16 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-brand-card border border-brand-border/60 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition"
              />
            </div>
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-brand-primary text-white shadow-glow-sm"
                      : "bg-white/5 text-slate-400 border border-brand-border/40 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {released.length > 0 && (
            <>
              <h2 className="font-display font-bold text-2xl text-white mb-8">Released</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {released.map((game, i) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    onClick={() => setSelectedGame(game)}
                    className="group bg-brand-card border border-brand-border/40 rounded-xl overflow-hidden cursor-pointer hover:border-brand-primary/50 hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300"
                  >
                    <div className="h-44 relative overflow-hidden bg-brand-deep">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={game.image} alt={game.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
                      <div className="absolute inset-0 grid-pattern opacity-10" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-brand-primary/80 flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-white group-hover:text-brand-primary transition-colors">{game.title}</h3>
                          <p className="text-brand-primary/70 text-xs font-medium">{game.genre}</p>
                        </div>
                        {game.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span className="text-white text-sm font-bold">{game.rating}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-4">{game.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {game.tags.slice(0, 3).map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-brand-primary/10 text-brand-primary/80">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {upcoming.length > 0 && (
            <>
              <h2 id="coming-soon" className="font-display font-bold text-2xl text-white mb-8">Coming Soon</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcoming.map((game, i) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    onClick={() => setSelectedGame(game)}
                    className="group relative bg-brand-card border border-amber-500/20 rounded-xl overflow-hidden cursor-pointer hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                        {statusConfig[game.status].label}
                      </span>
                    </div>
                    <div className="h-44 relative overflow-hidden bg-brand-deep">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={game.image} alt={game.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-black/30" />
                      <div className="absolute inset-0 grid-pattern opacity-10" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{game.title}</h3>
                      <p className="text-brand-primary/70 text-xs font-medium mb-2">{game.genre}</p>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-3">{game.description}</p>
                      {game.releaseDate && (
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="w-3 h-3" /> Expected: {game.releaseDate}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No games found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}

      <CTASection />
    </div>
  );
}
