import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { destinations } from "@/data/destinations";
import { DestinationDetail } from "@/components/domain/destination-detail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return {
      title: "Destination not found | Atlas Atelier",
      description: "We could not find that destination.",
    };
  }

  return {
    title: `${destination.name} | Atlas Atelier`,
    description: destination.description,
    openGraph: {
      title: `${destination.name} | Atlas Atelier`,
      description: destination.description,
      type: "article",
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <DestinationDetail destination={destination} />
    </section>
  );
}
