"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { destinations } from "@/data/destinations";
import { applyDestinationFilters, type SortOption } from "@/lib/filters";
import type { DestinationTag, Region } from "@/lib/types";
import { DestinationFilters } from "@/components/domain/destination-filters";
import { DestinationGrid } from "@/components/domain/destination-grid";
import { DestinationSkeletonGrid } from "@/components/domain/destination-skeleton-grid";
import { EmptyState } from "@/components/domain/empty-state";
import { Button } from "@/components/ui/button";

const PAGE_SIZE = 6;

export function DestinationsPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [region, setRegion] = useState<Region | "all">("all");
  const [sort, setSort] = useState<SortOption>("topRated");
  const [selectedTags, setSelectedTags] = useState<DestinationTag[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return applyDestinationFilters(destinations, {
      query,
      region: region === "all" ? "" : region,
      tags: selectedTags,
      sort,
    });
  }, [query, region, selectedTags, sort]);

  const visibleItems = filtered.slice(0, visibleCount);
  const canLoadMore = filtered.length > visibleItems.length;

  const handleReset = () => {
    setQuery("");
    setRegion("all");
    setSort("topRated");
    setSelectedTags([]);
  };

  const handleToggleTag = (tag: DestinationTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Destination index
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-neutral-900">
          Explore by mood, region, and ritual.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600">
          Filter by region, style, and seasonality to find the journeys that
          match your pace.
        </p>
      </div>
      <DestinationFilters
        query={query}
        region={region}
        sort={sort}
        selectedTags={selectedTags}
        onQueryChange={setQuery}
        onRegionChange={setRegion}
        onSortChange={setSort}
        onToggleTag={handleToggleTag}
      />
      {filtered.length === 0 ? (
        <EmptyState
          title="No destinations match your filters"
          description="Try adjusting your search or clearing a filter to see more options."
          onReset={handleReset}
        />
      ) : (
        <div className="space-y-6">
          {visibleItems.length === 0 ? (
            <DestinationSkeletonGrid />
          ) : (
            <DestinationGrid destinations={visibleItems} />
          )}
          {canLoadMore ? (
            <div className="flex justify-center">
              <Button variant="outline" onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}>
                Load more destinations
              </Button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
