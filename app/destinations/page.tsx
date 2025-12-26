import type { Metadata } from "next";

import { DestinationsPageContent } from "@/components/domain/destinations-page";

export const metadata: Metadata = {
  title: "Destinations | Atlas Atelier",
  description: "Browse curated destinations and filter by region, tags, and ratings.",
};

export default function DestinationsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14">
      <DestinationsPageContent />
    </section>
  );
}
