import { seedReviews } from "@/data/reviews";
import type { Destination, Review } from "@/lib/types";
import { getStoredValue, setStoredValue } from "@/lib/storage";

const REVIEWS_KEY = "atlas-reviews";

export function getStoredReviews(): Review[] {
  return getStoredValue<Review[]>(REVIEWS_KEY, []);
}

export function getReviewsForDestination(destinationSlug: string) {
  const stored = getStoredReviews();
  const combined = [...seedReviews, ...stored].filter(
    (review) => review.destinationSlug === destinationSlug,
  );

  return combined.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export function addReview(review: Review) {
  const stored = getStoredReviews();
  const updated = [review, ...stored];
  setStoredValue(REVIEWS_KEY, updated);
  return updated;
}

export function buildMergedRating(destination: Destination) {
  const baseCount = destination.reviewCount;
  const baseTotal = destination.ratingAverage * baseCount;
  const reviews = getReviewsForDestination(destination.slug);

  if (reviews.length === 0) {
    return {
      ratingAverage: destination.ratingAverage,
      reviewCount: destination.reviewCount,
    };
  }

  const reviewTotal = reviews.reduce((sum, review) => sum + review.rating, 0);
  const mergedCount = baseCount + reviews.length;
  const mergedTotal = baseTotal + reviewTotal;

  return {
    ratingAverage: mergedTotal / mergedCount,
    reviewCount: mergedCount,
  };
}

export function validateReviewInput(
  input: Pick<Review, "authorName" | "title" | "body" | "rating">,
) {
  if (!input.authorName.trim()) {
    return "Name is required.";
  }
  if (!input.title.trim()) {
    return "Title is required.";
  }
  if (!input.body.trim()) {
    return "Review text is required.";
  }
  if (input.rating < 1 || input.rating > 5) {
    return "Rating must be between 1 and 5.";
  }
  return "";
}
