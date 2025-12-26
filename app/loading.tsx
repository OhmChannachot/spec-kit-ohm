import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col">
      <section className="bg-neutral-950 px-6 py-20">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <Skeleton className="h-3 w-40 bg-white/20" />
          <Skeleton className="h-12 w-full max-w-2xl bg-white/20" />
          <Skeleton className="h-6 w-full max-w-xl bg-white/20" />
          <div className="flex max-w-xl gap-3">
            <Skeleton className="h-12 flex-1 bg-white/20" />
            <Skeleton className="h-12 w-32 bg-white/20" />
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <Skeleton className="h-6 w-56" />
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-60" />
          ))}
        </div>
      </section>
    </div>
  );
}
