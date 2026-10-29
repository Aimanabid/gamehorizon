import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopLoader from "@/components/ui/TopLoader";
import WelcomePopup from "@/components/ui/WelcomePopup";
import FloatingContact from "@/components/ui/FloatingContact";
import { siteStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "PlayGame Horizon — Thoughtful Games, Built in Lahore",
    template: "%s | PlayGame Horizon",
  },
  description:
    "PlayGame Horizon (SMC-Private) Limited is a Lahore-based game development studio. We build polished, player-first games for mobile, PC, and the web.",
  keywords: [
    "PlayGame Horizon",
    "game development Pakistan",
    "Lahore game studio",
    "mobile game development",
    "indie game studio Pakistan",
    "custom game development",
    "SECP registered game company",
  ],
  authors: [{ name: "PlayGame Horizon", url: "https://playgamehorizon.com" }],
  creator: "PlayGame Horizon",
  publisher: "PlayGame Horizon (SMC-Private) Limited",
  metadataBase: new URL("https://playgamehorizon.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playgamehorizon.com",
    siteName: "PlayGame Horizon",
    title: "PlayGame Horizon — Thoughtful Games, Built in Lahore",
    description:
      "A Pakistan-based game development studio building thoughtful, player-first games for mobile, PC, and the web.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "PlayGame Horizon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@playgamehorizon",
    creator: "@playgamehorizon",
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
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
        <TopLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WelcomePopup />
        <FloatingContact />
      </body>
    </html>
  );
}
