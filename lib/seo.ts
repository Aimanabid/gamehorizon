import type { Metadata } from "next";

const BASE_URL = "https://playgamehorizon.com";
const SITE_NAME = "PlayGame Horizon";
const LEGAL_NAME = "PlayGame Horizon (SMC-Private) Limited";
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
      "PlayGame Horizon",
      "game development Pakistan",
      "Lahore game studio",
      "mobile game development Pakistan",
      "indie game studio",
      "SECP registered game company",
      ...keywords,
    ],
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    creator: SITE_NAME,
    publisher: LEGAL_NAME,
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
      site: "@playgamehorizon",
      creator: "@playgamehorizon",
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
    name: LEGAL_NAME,
    alternateName: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "PlayGame Horizon (SMC-Private) Limited is a Lahore-based game development studio crafting polished, player-first games for mobile, PC, and web.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Bazar, Old Anarkali",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@playgamehorizon.com",
        telephone: "+92-335-6507151",
        availableLanguage: ["English", "Urdu"],
      },
    ],
    sameAs: [
      "https://facebook.com/playgamehorizon",
      "https://instagram.com/playgamehorizon",
      "https://twitter.com/playgamehorizon",
      "https://linkedin.com/company/playgamehorizon",
      "https://youtube.com/@playgamehorizon",
    ],
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/games?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
};
