"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = blogPosts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  const featured = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">
              Dev <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Insights from our studio — game design deep-dives, industry analysis, and behind-the-scenes dev stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Featured" title="Editor's " highlight="Picks" centered={false} />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-brand-card border border-brand-border/40 rounded-xl overflow-hidden hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300"
              >
                <div className={`h-48 relative overflow-hidden ${
                  i === 0 ? "bg-gradient-to-br from-blue-900/60 to-brand-deep" :
                  i === 1 ? "bg-gradient-to-br from-violet-900/60 to-brand-deep" :
                  "bg-gradient-to-br from-teal-900/60 to-brand-deep"
                }`}>
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-bold text-white/50">
                      {post.author[0]}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-brand-primary/80 rounded text-xs font-semibold text-white">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} min</span>
                  </div>
                  <h3 className="font-bold text-white leading-snug mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{post.author}</span>
                    <Link href={`/blog/${post.id}`} className="text-xs font-semibold text-brand-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All posts */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center justify-between">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-brand-card border border-brand-border/60 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/60 transition"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    category === cat
                      ? "bg-brand-primary text-white shadow-glow-sm"
                      : "bg-white/5 text-slate-400 border border-brand-border/40 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts list */}
          <div className="space-y-5">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group bg-brand-card border border-brand-border/40 rounded-xl p-5 flex flex-col sm:flex-row gap-5 hover:border-brand-primary/40 transition-all duration-200"
              >
                <div className={`w-full sm:w-36 h-24 flex-shrink-0 rounded-lg overflow-hidden ${
                  i % 3 === 0 ? "bg-gradient-to-br from-blue-800/50 to-brand-deep" :
                  i % 3 === 1 ? "bg-gradient-to-br from-purple-800/50 to-brand-deep" :
                  "bg-gradient-to-br from-teal-800/50 to-brand-deep"
                }`}>
                  <div className="w-full h-full grid-pattern opacity-20" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 bg-brand-primary/15 border border-brand-primary/20 text-brand-primary text-xs font-medium rounded">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500"><Clock className="w-3 h-3" />{post.readTime} min</span>
                  </div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{post.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/30 flex items-center justify-center text-xs font-bold text-brand-primary">{post.author[0]}</div>
                      <span className="text-xs text-slate-400">{post.author} · {post.authorRole}</span>
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-xs font-semibold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-slate-400">
                <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p>No articles found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
