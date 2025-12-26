import type { Destination, DestinationTag, Region } from "@/lib/types";

export type SortOption = "topRated" | "mostReviewed" | "newest";

export type DestinationFilters = {
  query?: string;
  region?: Region | "";
  tags?: DestinationTag[];
  sort?: SortOption;
};

const normalize = (value: string) => value.trim().toLowerCase();

export function filterDestinations(
  destinations: Destination[],
  { query, region, tags }: DestinationFilters,
) {
  const normalizedQuery = query ? normalize(query) : "";

  return destinations.filter((destination) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      normalize(destination.name).includes(normalizedQuery) ||
      normalize(destination.country).includes(normalizedQuery);

    const matchesRegion = !region || destination.region === region;

    const matchesTags =
      !tags || tags.length === 0
        ? true
        : tags.every((tag) => destination.tags.includes(tag));

    return matchesQuery && matchesRegion && matchesTags;
  });
}

export function sortDestinations(
  destinations: Destination[],
  sort: SortOption | undefined,
) {
  if (!sort) {
    return destinations;
  }

  const sorted = [...destinations];

  sorted.sort((a, b) => {
    if (sort === "topRated") {
      return b.ratingAverage - a.ratingAverage;
    }
    if (sort === "mostReviewed") {
      return b.reviewCount - a.reviewCount;
    }
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });

  return sorted;
}

export function applyDestinationFilters(
  destinations: Destination[],
  filters: DestinationFilters,
) {
  const filtered = filterDestinations(destinations, filters);
  return sortDestinations(filtered, filters.sort);
}
