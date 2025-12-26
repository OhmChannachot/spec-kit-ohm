import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterCta() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 text-white md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-300">
            Newsletter
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Receive destination briefings, monthly.
          </h2>
          <p className="mt-3 text-sm text-neutral-300">
            Curated itineraries and review highlights, delivered with intent.
          </p>
        </div>
        <form className="flex w-full max-w-md flex-col gap-3 md:flex-row">
          <Input
            type="email"
            placeholder="Email address"
            className="border-0 bg-white/10 text-white placeholder:text-neutral-300"
            aria-label="Email address"
          />
          <Button type="submit" className="bg-white text-neutral-950 hover:bg-neutral-200">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
