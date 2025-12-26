import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  title: string;
  description: string;
  onReset?: () => void;
};

export function EmptyState({ title, description, onReset }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-white px-6 py-14 text-center">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
      {onReset ? (
        <Button onClick={onReset} variant="outline" className="mt-6">
          Reset filters
        </Button>
      ) : null}
    </div>
  );
}
