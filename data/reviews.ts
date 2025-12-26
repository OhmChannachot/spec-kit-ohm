import type { Review } from "@/lib/types";

export const seedReviews: Review[] = [
  {
    id: "rev-kyoto-1",
    destinationSlug: "kyoto-echoes",
    authorName: "Mina R.",
    rating: 5,
    title: "A quiet masterpiece",
    body: "Even the busiest lanes feel cinematic. Book a tea ceremony and walk early.",
    createdAt: "2025-03-02",
  },
  {
    id: "rev-amalfi-1",
    destinationSlug: "amalfi-ribbon",
    authorName: "Jonas P.",
    rating: 4,
    title: "Sun-drenched cliffs",
    body: "Golden light, incredible food. Bring comfortable shoes for the steps.",
    createdAt: "2025-02-22",
  },
  {
    id: "rev-seoul-1",
    destinationSlug: "seoul-nightmark",
    authorName: "Hana K.",
    rating: 5,
    title: "City of contrasts",
    body: "High design and timeless palaces in one weekend. Night markets are essential.",
    createdAt: "2025-02-14",
  },
  {
    id: "rev-ubud-1",
    destinationSlug: "bali-terraces",
    authorName: "Elise T.",
    rating: 4,
    title: "Restorative and lush",
    body: "Morning yoga, jungle sounds, and perfect coffee. Stay outside the center.",
    createdAt: "2025-01-29",
  },
];
