import type { ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DestinationTabsProps = {
  overview: ReactNode;
  reviews: ReactNode;
  guide: ReactNode;
};

export function DestinationTabs({ overview, reviews, guide }: DestinationTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="guide">Travel Guide</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-6">
        {overview}
      </TabsContent>
      <TabsContent value="reviews" className="mt-6">
        {reviews}
      </TabsContent>
      <TabsContent value="guide" className="mt-6">
        {guide}
      </TabsContent>
    </Tabs>
  );
}
