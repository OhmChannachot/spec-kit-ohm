import Image from "next/image";
import Link from "next/link";

import { destinations } from "@/data/destinations";
import { formatRating } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function TrendingDestinations() {
  const trending = [...destinations]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 6);

  if (trending.length === 0) {
    return (
      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="rounded-2xl border border-dashed border-neutral-200 p-10 text-center">
          <p className="text-sm text-neutral-600">No destinations are available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Trending now
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
            Destinations with momentum
          </h2>
        </div>
        <Link href="/destinations" className="text-sm text-neutral-600 underline">
          Browse all
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trending.map((destination) => (
          <Link key={destination.slug} href={`/destinations/${destination.slug}`}>
            <Card className="group h-full overflow-hidden border-neutral-200 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-44 w-full overflow-hidden">
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
                <p className="text-sm text-neutral-600">
                  {destination.country} / {destination.region}
                </p>
                <p className="text-sm text-neutral-500">
                  {destination.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
