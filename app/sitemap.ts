import { MetadataRoute } from "next";
import { games } from "@/lib/data/games";
import { blogPosts } from "@/lib/data/blog";

const BASE_URL = "https://playgamehorizon.com";

// Bump when static pages (about, services, careers, contact) change.
const STATIC_PAGES_UPDATED = new Date("2026-10-29");

const parseDate = (value?: string) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
  return new Date(value);
};

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = new Date(
    Math.max(...blogPosts.map((post) => new Date(post.date).getTime()))
  );
  const gameDates = games
    .map((game) => parseDate(game.releaseDate))
    .filter((date): date is Date => !!date);
  const latestGame = new Date(Math.max(...gameDates.map((d) => d.getTime())));
  const latestContent = latestPost > latestGame ? latestPost : latestGame;

  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1, lastModified: latestContent },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.8, lastModified: STATIC_PAGES_UPDATED },
    { url: `${BASE_URL}/games`, changeFrequency: "weekly" as const, priority: 0.9, lastModified: latestGame },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly" as const, priority: 0.8, lastModified: STATIC_PAGES_UPDATED },
    { url: `${BASE_URL}/blog`, changeFrequency: "daily" as const, priority: 0.8, lastModified: latestPost },
    { url: `${BASE_URL}/careers`, changeFrequency: "weekly" as const, priority: 0.7, lastModified: STATIC_PAGES_UPDATED },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: STATIC_PAGES_UPDATED },
  ];

  const gamePages = games.map((game) => ({
    url: `${BASE_URL}/games/${game.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: parseDate(game.releaseDate) ?? STATIC_PAGES_UPDATED,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...gamePages, ...blogPages];
}
