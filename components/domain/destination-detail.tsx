"use client";

import { useMemo, useState } from "react";

import type { Destination, Review } from "@/lib/types";
import { buildMergedRating, getReviewsForDestination } from "@/lib/reviews";
import { DestinationHeader } from "@/components/domain/destination-header";
import { DestinationHighlights } from "@/components/domain/destination-highlights";
import { DestinationTabs } from "@/components/domain/destination-tabs";
import { ReviewFormDialog } from "@/components/domain/review-form-dialog";
import { ReviewList } from "@/components/domain/review-list";
import { DestinationFaq } from "@/components/domain/destination-faq";
import Image from "next/image";

const guideHighlights = [
  "Book a boutique stay within a 15-minute walk of the main sights.",
  "Plan one early morning excursion to avoid crowds.",
  "Reserve a slow afternoon for neighborhood cafes and markets.",
];

type DestinationDetailProps = {
  destination: Destination;
};

export function DestinationDetail({ destination }: DestinationDetailProps) {
  const [reviews, setReviews] = useState<Review[]>(() =>
    getReviewsForDestination(destination.slug),
  );

  const merged = useMemo(() => buildMergedRating(destination), [destination, reviews]);

  const overview = (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600">{destination.description}</p>
      <div className="grid gap-4 md:grid-cols-3">
        {destination.images.map((image, index) => (
          <div key={`${image}-${index}`} className="relative h-40 overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={`${destination.name} gallery ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const reviewsContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Reviews
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
            Traveler impressions
          </h3>
        </div>
        <ReviewFormDialog
          destinationSlug={destination.slug}
          onReviewCreated={(review) => setReviews((prev) => [review, ...prev])}
        />
      </div>
      <ReviewList reviews={reviews} />
    </div>
  );

  const guideContent = (
    <div className="space-y-4">
      <p className="text-sm text-neutral-600">
        Our editors curate a three-day arc that balances cultural immersion,
        culinary highlights, and slow moments.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700">
        {guideHighlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-10">
      <DestinationHeader
        destination={destination}
        ratingAverage={merged.ratingAverage}
        reviewCount={merged.reviewCount}
      />
      <DestinationHighlights destination={destination} />
      <DestinationTabs overview={overview} reviews={reviewsContent} guide={guideContent} />
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">FAQ</p>
        <DestinationFaq />
      </div>
    </div>
  );
}
