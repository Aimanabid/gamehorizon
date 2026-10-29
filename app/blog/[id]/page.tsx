import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { blogPosts } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo";

const BASE_URL = "https://playgamehorizon.com";

type Params = { id: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.id}`,
    image: `${BASE_URL}${post.image}`,
    keywords: post.tags,
  });
}

// Renders "[text](url)" links inside a line of text.
function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    return (
      <a
        key={i}
        href={m[2]}
        target="_blank"
        rel="noopener"
        className="text-brand-secondary underline underline-offset-2 hover:text-white transition-colors"
      >
        {m[1]}
      </a>
    );
  });
}

function renderContent(content: string) {
  return content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="font-display font-bold text-2xl text-white mt-10 mb-3">
            {block.slice(3)}
          </h2>
        );
      }
      if (block.startsWith("- ")) {
        return (
          <ul key={i} className="list-disc pl-6 space-y-1.5 text-slate-300">
            {block.split("\n").map((line, j) => (
              <li key={j}>{renderInline(line.replace(/^- /, ""))}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="text-slate-300 leading-relaxed">
          {renderInline(block)}
        </p>
      );
    });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${BASE_URL}${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "PlayGame Horizon (SMC-Private) Limited",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: `${BASE_URL}/blog/${post.id}`,
  };

  return (
    <div className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="relative overflow-hidden grid-pattern">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-20 sm:pb-20 min-h-[320px] sm:min-h-[420px] flex flex-col justify-end">
          <Link
            href="/blog"
            className="inline-flex self-start items-center gap-1 text-sm font-semibold text-white/80 hover:text-white hover:gap-2 transition-all mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>
          <span className="self-start px-2 py-0.5 bg-brand-primary/80 text-white text-xs font-medium rounded">
            {post.category}
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 mb-4 drop-shadow-lg">
            {post.cta ? (
              <a href={post.cta.href} target="_blank" rel="noopener" className="hover:text-brand-secondary transition-colors">
                {post.title}
              </a>
            ) : (
              post.title
            )}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <span>{post.author}</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        <div className="space-y-4">{post.content ? renderContent(post.content) : <p className="text-slate-300">{post.excerpt}</p>}</div>

        {post.cta && (
          <a
            href={post.cta.href}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-brand-primary text-white font-semibold shadow-glow-sm hover:bg-brand-royal transition-colors"
          >
            {post.cta.label} <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </article>
      {post.gallery && (
        <section className="px-4 sm:px-6 lg:px-8 pb-4">
          <h2 className="max-w-3xl mx-auto font-display font-bold text-2xl text-white mb-4">Screenshots</h2>
          <ImageCarousel images={post.gallery} />
        </section>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-brand-border/40 text-xs text-slate-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
