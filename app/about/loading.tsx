import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <Skeleton className="h-3 w-40" />
      <Skeleton className="mt-4 h-10 w-full max-w-3xl" />
      <Skeleton className="mt-4 h-4 w-full max-w-2xl" />
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <Skeleton className="h-36" />
        <Skeleton className="h-36" />
      </div>
    </section>
  );
}
