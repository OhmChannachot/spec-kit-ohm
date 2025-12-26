import type { Metadata } from "next";

import { HomeHero } from "@/components/sections/home-hero";
import { TrendingDestinations } from "@/components/sections/trending-destinations";
import { TopRatedRow } from "@/components/sections/top-rated-row";
import { TravelGuidesTeaser } from "@/components/sections/travel-guides-teaser";
import { NewsletterCta } from "@/components/sections/newsletter-cta";

export const metadata: Metadata = {
  title: "Atlas Atelier | Curated Travel Discovery",
  description:
    "Editorial travel discovery with trending destinations, top-rated escapes, and insider guides.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <TrendingDestinations />
      <TopRatedRow />
      <TravelGuidesTeaser />
      <NewsletterCta />
    </div>
  );
}
