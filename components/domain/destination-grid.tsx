import type { Destination } from "@/lib/types";
import { DestinationCard } from "@/components/domain/destination-card";

type DestinationGridProps = {
  destinations: Destination[];
};

export function DestinationGrid({ destinations }: DestinationGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <DestinationCard key={destination.slug} destination={destination} />
      ))}
    </div>
  );
}
