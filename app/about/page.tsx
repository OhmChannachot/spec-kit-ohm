import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Atlas Atelier",
  description: "Our editorial approach to travel discovery and reviews.",
};

export default function AboutPage() {
  const highlights = [
    {
      title: "Our method",
      copy: "We blend qualitative notes from researchers with quantitative review signals to surface destinations that feel both inspiring and dependable.",
    },
    {
      title: "Your voice",
      copy: "Reviews are stored locally so you can revisit your notes and compare destinations without leaving the page.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        About Atlas Atelier
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-neutral-900">
        Travel discovery crafted like a magazine, built like a product.
      </h1>
      <p className="mt-6 text-base text-neutral-600">
        Atlas Atelier curates destinations with the rigor of an editorial desk
        and the clarity of a modern guide. Each entry is assessed for seasonal
        timing, local texture, and the rituals that define a place.
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {highlights.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-6 text-sm text-neutral-600">
            About details are being curated. Please check back soon.
          </div>
        ) : (
          highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-neutral-900">{item.title}</h2>
              <p className="mt-3 text-sm text-neutral-600">{item.copy}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
