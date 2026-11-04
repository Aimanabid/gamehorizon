import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Gamepad,
  Monitor,
  Smartphone,
  Star,
  Tag,
  ExternalLink,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";
import { games, type Game } from "@/lib/data/games";
import { buildMetadata } from "@/lib/seo";

const BASE_URL = "https://playgamehorizon.com";

type Params = { id: string };

export function generateStaticParams() {
  return games.map((g) => ({ id: g.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const game = games.find((g) => g.id === id);
  if (!game) return {};
  return buildMetadata({
    title: game.title,
    description: game.description,
    path: `/games/${game.id}`,
    image: `${BASE_URL}${game.image}`,
    keywords: [game.title, game.genre, ...game.tags],
  });
}

const platformIcons: Record<string, React.ElementType> = {
  PC: Monitor,
  Mac: Monitor,
  Mobile: Smartphone,
  Web: Monitor,
  PlayStation: Gamepad,
  Xbox: Gamepad,
  Console: Gamepad,
  VR: Gamepad,
};

const statusStyle: Record<Game["status"], string> = {
  released: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "coming-soon": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "in-development": "bg-blue-500/20 text-blue-300 border-blue-500/30",
};

const statusLabel: Record<Game["status"], string> = {
  released: "Released",
  "coming-soon": "Coming Soon",
  "in-development": "In Development",
};

function formatDate(date?: string) {
  if (!date) return null;
  if (date.startsWith("Q") || date === "TBA") return date;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);
  if (!game) notFound();

  const related = games.filter((g) => g.id !== game.id && g.genre === game.genre).slice(0, 3);
  const formattedDate = formatDate(game.releaseDate);

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.longDescription,
    genre: game.genre,
    gamePlatform: game.platform,
    image: `${BASE_URL}${game.image}`,
    url: `${BASE_URL}/games/${game.id}`,
    datePublished: game.releaseDate,
    publisher: {
      "@type": "Organization",
      name: "PlayGame Horizon (SMC-Private) Limited",
    },
    ...(game.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: game.rating,
        bestRating: 5,
        ratingCount: 100,
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />

      <div className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${game.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/90 to-brand-dark" />
          <div className="absolute inset-0 grid-pattern opacity-10" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link
              href="/games"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-secondary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all games
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusStyle[game.status]}`}
                  >
                    {statusLabel[game.status]}
                  </span>
                  <span className="text-brand-secondary text-sm font-semibold">
                    {game.genre}
                  </span>
                </div>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
                  {game.title}
                </h1>
                <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                  {game.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                  {game.rating && (
                    <span className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-white font-semibold">{game.rating}</span>
                      <span>/ 5</span>
                    </span>
                  )}
                  {formattedDate && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {game.status === "released" ? "Released" : "Target"}: {formattedDate}
                    </span>
                  )}
                  <span className="flex items-center gap-2">
                    {game.platform.map((p) => {
                      const Icon = platformIcons[p] ?? Gamepad;
                      return (
                        <span key={p} className="flex items-center gap-1">
                          <Icon className="w-4 h-4" />
                          {p}
                        </span>
                      );
                    })}
                  </span>
                </div>

                {game.storeUrl && (
                  <a
                    href={game.storeUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-xl bg-blue-gradient text-white font-semibold hover:opacity-90 transition-opacity shadow-glow-sm"
                  >
                    Get it on Google Play
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Overview + sidebar */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-10">
              <article className="space-y-6">
                <h2 className="font-display font-bold text-2xl text-white">About {game.title}</h2>
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                  {game.longDescription}
                </p>

                <div className="pt-6 border-t border-brand-border/40">
                  <h3 className="font-display font-bold text-xl text-white mb-4">
                    What makes it ours
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex gap-3">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                      <span>
                        Built in Lahore by the PlayGame Horizon team &mdash; a small studio
                        that ships deliberately, not in a rush.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                      <span>
                        {game.status === "released"
                          ? "Live now and actively supported with updates."
                          : game.status === "in-development"
                            ? "Currently in active development &mdash; follow us for build updates and early looks."
                            : "On the roadmap &mdash; follow us to be the first to hear when it opens for playtests."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                      <span>
                        Designed around the {game.genre.toLowerCase()} style &mdash; polished,
                        player-first, no predatory monetisation.
                      </span>
                    </li>
                  </ul>
                </div>

                {game.storeUrl && (
                  <div className="mt-8 rounded-2xl bg-glass border border-brand-primary/20 p-6">
                    <h3 className="font-display font-bold text-xl text-white mb-2">
                      Play {game.title} today
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      Available now on Google Play &mdash; free to download.
                    </p>
                    <a
                      href={game.storeUrl}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-semibold hover:bg-brand-royal transition-colors"
                    >
                      Open in Google Play
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </article>

              <aside className="space-y-6">
                <div className="rounded-2xl bg-brand-card border border-brand-border/40 p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-4">
                    At a glance
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                        Status
                      </dt>
                      <dd className="text-slate-200">{statusLabel[game.status]}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                        Genre
                      </dt>
                      <dd className="text-slate-200">{game.genre}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                        Platforms
                      </dt>
                      <dd className="text-slate-200">{game.platform.join(", ")}</dd>
                    </div>
                    {formattedDate && (
                      <div>
                        <dt className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                          {game.status === "released" ? "Released" : "Expected"}
                        </dt>
                        <dd className="text-slate-200">{formattedDate}</dd>
                      </div>
                    )}
                    {game.rating && (
                      <div>
                        <dt className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                          Rating
                        </dt>
                        <dd className="text-slate-200 flex items-center gap-1.5">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          {game.rating} / 5
                        </dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                        Studio
                      </dt>
                      <dd className="text-slate-200">PlayGame Horizon</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl bg-brand-card border border-brand-border/40 p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-brand-primary" /> Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related games */}
        {related.length > 0 && (
          <section className="pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl text-white mb-8">
                More {game.genre.toLowerCase()} games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/games/${r.id}`}
                    className="group bg-brand-card border border-brand-border/40 rounded-xl overflow-hidden hover:border-brand-primary/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-40 relative overflow-hidden bg-brand-deep">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.image}
                        alt={r.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-white group-hover:text-brand-primary transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-brand-primary/70 text-xs font-medium mb-2">
                        {r.genre}
                      </p>
                      <p className="text-slate-400 text-sm line-clamp-2">{r.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </div>
    </>
  );
}
