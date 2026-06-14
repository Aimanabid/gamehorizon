import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "GameHorizon — Where Epic Worlds Are Born",
    template: "%s | GameHorizon",
  },
  description:
    "GameHorizon is a premium game development studio crafting immersive worlds across mobile, PC, and console. Explore our games, services, and open positions.",
  keywords: [
    "game development company",
    "gaming studio",
    "indie game studio",
    "mobile game development",
    "pc game development",
    "multiplayer game development",
    "game design services",
    "custom game development",
    "GameHorizon",
  ],
  authors: [{ name: "GameHorizon", url: "https://www.gamehorizon.gg" }],
  creator: "GameHorizon",
  metadataBase: new URL("https://www.gamehorizon.gg"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gamehorizon.gg",
    siteName: "GameHorizon",
    title: "GameHorizon — Where Epic Worlds Are Born",
    description:
      "Premium game development studio crafting immersive worlds across mobile, PC, and console.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "GameHorizon Gaming Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GameHorizonGG",
    creator: "@GameHorizonGG",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData.website),
          }}
        />
      </head>
      <body className="bg-brand-dark text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
