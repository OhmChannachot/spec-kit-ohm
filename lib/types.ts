export type Region = "Asia" | "Europe" | "Americas" | "Africa" | "Oceania";

export type DestinationTag =
  | "Beach"
  | "City"
  | "Nature"
  | "Food"
  | "Culture"
  | "Luxury"
  | "Budget";

export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: Region;
  description: string;
  tags: DestinationTag[];
  ratingAverage: number;
  reviewCount: number;
  highlights: {
    bestTimeToVisit: string;
    budgetLevel: string;
    mustDo: string[];
  };
  images: string[];
  publishedAt: string;
};

export type Review = {
  id: string;
  destinationSlug: string;
  authorName: string;
  rating: number;
  title: string;
  body: string;
  createdAt: string;
};
