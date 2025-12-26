import Image from "next/image";

import type { Destination } from "@/lib/types";
import { formatRating } from "@/lib/format";
import { Badge } from "@/components/ui/badge";

type DestinationHeaderProps = {
  destination: Destination;
  ratingAverage: number;
  reviewCount: number;
};

export function DestinationHeader({
  destination,
  ratingAverage,
  reviewCount,
}: DestinationHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="relative h-[360px] w-full overflow-hidden rounded-3xl">
        <Image
          src={destination.images[0]}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-6 left-6 space-y-2 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {destination.region}
          </p>
          <h1 className="text-4xl font-semibold">{destination.name}</h1>
          <p className="text-sm text-white/80">{destination.country}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="secondary" className="bg-neutral-100 text-neutral-700">
          {formatRating(ratingAverage)} rating
        </Badge>
        <Badge variant="outline" className="border-neutral-200 text-neutral-600">
          {reviewCount} reviews
        </Badge>
        {destination.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="border-neutral-200 text-neutral-600">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
