import type { Metadata } from "next";

const BASE_URL = "https://gamehorizon-studio.vercel.app";
const SITE_NAME = "GameHorizon";
const DEFAULT_IMAGE = `${BASE_URL}/og-default.jpg`;

interface SEOConfig {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  keywords = [],
}: SEOConfig): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === "" ? `${SITE_NAME} — ${title}` : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "game development company",
      "gaming studio",
      "indie game studio",
      "mobile game development",
      "pc game development",
      "multiplayer game development",
      "GameHorizon",
      ...keywords,
    ],
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@GameHorizonGG",
      creator: "@GameHorizonGG",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export const siteStructuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GameHorizon",
    url: BASE_URL,
    logo: `${BASE_URL}/icon.svg`,
    description:
      "GameHorizon is a premium game development studio crafting immersive worlds across mobile, PC, and console platforms.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "aimanab253@gmail.com",
    },
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GameHorizon",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/games?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
};
