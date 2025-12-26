import Link from "next/link";

import { Button } from "@/components/ui/button";

export function TravelGuidesTeaser() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="grid gap-8 rounded-3xl border border-neutral-200 bg-white p-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Travel guides
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
            Seasonal itineraries built for slow travel.
          </h2>
          <p className="mt-4 text-sm text-neutral-600">
            Each guide includes day-by-day pacing, neighborhood notes, and a
            carefully edited list of stays, cafes, and cultural experiences.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="rounded-2xl bg-neutral-100 p-6 text-sm text-neutral-700">
            "Think of it as your printed magazine, updated monthly with new
            itineraries and the stories behind them."
          </div>
          <Button asChild className="self-start bg-neutral-950 text-white">
            <Link href="/about">Preview the guides</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
