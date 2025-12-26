import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import type { Destination } from "@/lib/types";
import { formatRating } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.slug}`}>
      <Card className="group h-full overflow-hidden border-neutral-200 transition hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={destination.images[0]}
            alt={destination.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="space-y-3 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900">
              {destination.name}
            </h3>
            <Badge variant="secondary" className="bg-neutral-100 text-neutral-700">
              {formatRating(destination.ratingAverage)}
            </Badge>
          </div>
          <p className="flex items-center gap-2 text-sm text-neutral-600">
            <MapPin className="size-4 text-neutral-400" />
            {destination.country} / {destination.region}
          </p>
          <p className="text-sm text-neutral-500">
            {destination.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {destination.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="border-neutral-200 text-neutral-600">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
