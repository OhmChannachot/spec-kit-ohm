import { Skeleton } from "@/components/ui/skeleton";

type DestinationSkeletonGridProps = {
  count?: number;
};

export function DestinationSkeletonGrid({ count = 6 }: DestinationSkeletonGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} className="h-64" />
      ))}
    </div>
  );
}
