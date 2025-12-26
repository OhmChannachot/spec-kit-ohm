"use client";

import type { DestinationTag, Region } from "@/lib/types";
import type { SortOption } from "@/lib/filters";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const regions: Region[] = ["Asia", "Europe", "Americas", "Africa", "Oceania"];
const tags: DestinationTag[] = [
  "Beach",
  "City",
  "Nature",
  "Food",
  "Culture",
  "Luxury",
  "Budget",
];

type DestinationFiltersProps = {
  query: string;
  region: Region | "all";
  sort: SortOption;
  selectedTags: DestinationTag[];
  onQueryChange: (value: string) => void;
  onRegionChange: (value: Region | "all") => void;
  onSortChange: (value: SortOption) => void;
  onToggleTag: (value: DestinationTag) => void;
};

export function DestinationFilters({
  query,
  region,
  sort,
  selectedTags,
  onQueryChange,
  onRegionChange,
  onSortChange,
  onToggleTag,
}: DestinationFiltersProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-[1.2fr_0.5fr_0.5fr]">
        <Input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by destination or country"
          aria-label="Search destinations"
        />
        <Select value={region} onValueChange={(value) => onRegionChange(value as Region | "all")}>
          <SelectTrigger aria-label="Filter by region">
            <SelectValue placeholder="All regions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All regions</SelectItem>
            {regions.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={(value) => onSortChange(value as SortOption)}>
          <SelectTrigger aria-label="Sort destinations">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="topRated">Top rated</SelectItem>
            <SelectItem value="mostReviewed">Most reviewed</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const active = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggleTag(tag)}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
              aria-pressed={active}
            >
              <Badge
                variant={active ? "default" : "outline"}
                className={
                  active
                    ? "bg-neutral-900 text-white"
                    : "border-neutral-200 text-neutral-600"
                }
              >
                {tag}
              </Badge>
            </button>
          );
        })}
      </div>
    </div>
  );
}
