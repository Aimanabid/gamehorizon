"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { blogPosts } from "@/lib/data/blog";

export default function LatestNews() {
  const recent = blogPosts.slice(0, 3);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <SectionTitle
            label="Latest News"
            title="Dev Insights &"
            highlight=" Updates"
            centered={false}
          />
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:gap-2 transition-all"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recent.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-brand-card rounded-xl border border-brand-border/40 hover:border-brand-primary/40 overflow-hidden hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className={`h-44 relative overflow-hidden ${
                i === 0 ? "bg-gradient-to-br from-blue-900/50 to-brand-deep" :
                i === 1 ? "bg-gradient-to-br from-purple-900/50 to-brand-deep" :
                "bg-gradient-to-br from-teal-900/50 to-brand-deep"
              }`}>
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 rounded-md bg-brand-primary/80 text-white text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-4 mb-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                  </span>
                </div>

                <h3 className="font-bold text-white text-base leading-snug mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/30 flex items-center justify-center text-xs font-bold text-brand-primary">
                      {post.author[0]}
                    </div>
                    <span className="text-xs text-slate-400">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-xs font-semibold text-brand-primary flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
