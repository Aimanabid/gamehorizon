import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedGames from "@/components/home/FeaturedGames";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LatestNews from "@/components/home/LatestNews";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "GameHorizon — Where Epic Worlds Are Born",
  description:
    "GameHorizon is a premium game development studio creating immersive worlds across mobile, PC, and console. 1M+ players. 50+ games. Award-winning studio.",
  keywords: [
    "game development company",
    "gaming studio",
    "indie game studio",
    "mobile game development",
    "best game development company",
    "professional gaming studio",
  ],
  openGraph: {
    title: "GameHorizon — Where Epic Worlds Are Born",
    description:
      "Premium game development studio. 1M+ players, 50+ titles shipped. We create worlds worth living in.",
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
