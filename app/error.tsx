"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-20 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Something went wrong</p>
      <h1 className="text-3xl font-semibold text-neutral-900">
        We hit an unexpected issue.
      </h1>
      <p className="text-sm text-neutral-600">
        Please try again. If the issue persists, refresh the page.
      </p>
      <Button onClick={reset} className="bg-neutral-950 text-white">
        Try again
      </Button>
    </section>
  );
}
