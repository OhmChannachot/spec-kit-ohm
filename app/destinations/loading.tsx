import { DestinationSkeletonGrid } from "@/components/domain/destination-skeleton-grid";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="space-y-4">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-10 w-full max-w-2xl" />
        <Skeleton className="h-4 w-full max-w-xl" />
      </div>
      <div className="mt-8">
        <DestinationSkeletonGrid />
      </div>
    </section>
  );
}
