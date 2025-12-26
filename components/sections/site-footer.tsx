import Link from "next/link";

import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Editorial Promise", href: "/about", key: "editorial-promise" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200/80 bg-neutral-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Travel Letters
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-900">
              Curated journeys, delivered monthly.
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Stories, seasonal guides, and destination intelligence for curious
              travelers.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-neutral-600 md:justify-self-end">
            {footerLinks.map((link) => (
              <Link
                key={link.key ?? link.href}
                href={link.href}
                className="transition hover:text-neutral-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <span>Atlas Atelier. Crafted for modern travel discovery.</span>
          <span>2025 Editorial Bureau</span>
        </div>
      </div>
    </footer>
  );
}
