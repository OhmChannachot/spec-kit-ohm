import Link from "next/link";
import { Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Compass className="size-4 text-neutral-700" />
          Atlas Atelier
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-700 transition hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/destinations">Explore</Link>
          </Button>
          <Button asChild className="bg-neutral-950 text-white hover:bg-neutral-800">
            <Link href="/destinations">Start Planning</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
