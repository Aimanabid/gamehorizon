import { MetadataRoute } from "next";
import { games } from "@/lib/data/games";
import { blogPosts } from "@/lib/data/blog";

const BASE_URL = "https://www.gamehorizon.gg";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/games`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${BASE_URL}/careers`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const gamePages = games.map((game) => ({
    url: `${BASE_URL}/games/${game.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...gamePages, ...blogPages];
}
