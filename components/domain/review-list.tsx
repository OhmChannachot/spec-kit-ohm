import type { Review } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ratingLabels = ["", "Poor", "Fair", "Good", "Great", "Exceptional"];

type ReviewListProps = {
  reviews: Review[];
};

export function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-200 bg-white px-6 py-10 text-center">
        <p className="text-sm text-neutral-600">
          Be the first to leave a review for this destination.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id} className="border-neutral-200">
          <CardContent className="space-y-3 p-5">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-base font-semibold text-neutral-900">
                  {review.title}
                </h4>
                <p className="text-xs text-neutral-500">
                  {review.authorName} / {formatDate(review.createdAt)}
                </p>
              </div>
              <Badge variant="secondary" className="bg-neutral-100 text-neutral-700">
                {review.rating} / {ratingLabels[review.rating]}
              </Badge>
            </div>
            <p className="text-sm text-neutral-600">{review.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
