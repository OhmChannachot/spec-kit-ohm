import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-20 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Page not found</p>
      <h1 className="text-3xl font-semibold text-neutral-900">
        This page could not be found.
      </h1>
      <p className="text-sm text-neutral-600">
        Return to the homepage or explore our destinations index.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild className="bg-neutral-950 text-white">
          <Link href="/destinations">Browse destinations</Link>
        </Button>
      </div>
    </section>
  );
}
