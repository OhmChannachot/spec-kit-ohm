import Image from "next/image";
import Link from "next/link";

import { destinations } from "@/data/destinations";
import { formatRating } from "@/lib/format";
import { Badge } from "@/components/ui/badge";

export function TopRatedRow() {
  const topRated = [...destinations]
    .sort((a, b) => b.ratingAverage - a.ratingAverage)
    .slice(0, 5);

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Top rated this month
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
              Editors' favorites
            </h2>
          </div>
          <Link href="/destinations" className="text-sm text-neutral-600 underline">
            See ranking
          </Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {topRated.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group rounded-2xl border border-neutral-200 bg-white p-4 transition hover:shadow-lg"
            >
              <div className="relative h-32 w-full overflow-hidden rounded-xl">
                <Image
                  src={destination.images[0]}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-neutral-900">
                  {destination.name}
                </h3>
                <Badge variant="secondary" className="bg-neutral-100 text-neutral-700">
                  {formatRating(destination.ratingAverage)}
                </Badge>
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                {destination.country}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
