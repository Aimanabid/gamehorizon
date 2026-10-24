import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedGames from "@/components/home/FeaturedGames";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LatestNews from "@/components/home/LatestNews";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "PlayGame Horizon — Thoughtful Games, Built in Lahore",
  description:
    "PlayGame Horizon (SMC-Private) Limited is a Lahore-based game development studio. We build polished, player-first games for mobile, PC, and the web.",
  keywords: [
    "PlayGame Horizon",
    "game development Pakistan",
    "Lahore game studio",
    "mobile game development Pakistan",
    "best game studio Lahore",
    "indie game studio Pakistan",
  ],
  openGraph: {
    title: "PlayGame Horizon — Thoughtful Games, Built in Lahore",
    description:
      "A Pakistan-based game development studio building thoughtful, player-first games for mobile, PC, and the web.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedGames />
      <WhyChooseUs />
      <LatestNews />
      <Testimonials />
      <CTASection />
    </>
  );
}
