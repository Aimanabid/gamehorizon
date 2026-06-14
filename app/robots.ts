import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://gamehorizon-studio.vercel.app/sitemap.xml",
    host: "https://gamehorizon-studio.vercel.app",
  };
}
