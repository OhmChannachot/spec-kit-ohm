import type { Destination } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type DestinationHighlightsProps = {
  destination: Destination;
};

export function DestinationHighlights({ destination }: DestinationHighlightsProps) {
  return (
    <Card className="border-neutral-200">
      <CardContent className="grid gap-6 p-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Best time
          </p>
          <p className="mt-2 text-sm font-medium text-neutral-800">
            {destination.highlights.bestTimeToVisit}
          </p>
        </div>
        <Separator orientation="vertical" className="hidden h-full md:block" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Budget
          </p>
          <p className="mt-2 text-sm font-medium text-neutral-800">
            {destination.highlights.budgetLevel}
          </p>
        </div>
        <Separator orientation="vertical" className="hidden h-full md:block" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Must-do list
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-neutral-700">
            {destination.highlights.mustDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
