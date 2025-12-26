"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HomeHero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    const url = trimmed ? `/destinations?query=${encodeURIComponent(trimmed)}` : "/destinations";
    router.push(url);
  };

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div
        className="absolute inset-0 hero-backdrop"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/13679285/pexels-photo-13679285.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-neutral-950/90" />
      <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full hero-orb" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full hero-orb hero-orb--slow" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20">
        <div className="max-w-2xl">
          <p
            className="text-xs uppercase tracking-[0.4em] text-neutral-300 animate-fade-up"
            style={{ animationDelay: "40ms" }}
          >
            Curated Travel Intelligence
          </p>
          <h1
            className="mt-4 text-4xl font-semibold leading-tight md:text-5xl animate-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            Discover places that feel like a story you can step into.
          </h1>
          <p
            className="mt-4 text-base text-neutral-300 md:text-lg animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            Editorial guides, destination highlights, and local reviews designed to
            make planning feel effortless.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-xl flex-col gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur md:flex-row animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by destination or country"
            className="border-0 bg-white/15 text-white placeholder:text-neutral-300 focus-visible:ring-white/40"
          />
          <Button type="submit" className="bg-white text-neutral-950 hover:bg-neutral-200">
            Explore
          </Button>
        </form>
      </div>
    </section>
  );
}
