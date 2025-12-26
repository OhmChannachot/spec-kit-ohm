# Research Notes: Travel Discovery & Reviews

## Decision: App Router structure with layouts and pages

**Decision**: Use the Next.js App Router with `app/layout.tsx` and route-specific
`page.tsx` files for all routes.

**Rationale**: The App Router is the required routing model and supports layout
composition for consistent editorial presentation.

**Alternatives considered**: Pages Router (rejected because App Router is
required).

## Decision: Metadata via `metadata` exports / `generateMetadata`

**Decision**: Define static metadata with `export const metadata` and use
`generateMetadata` for dynamic destination pages.

**Rationale**: Next.js supports typed metadata in layouts/pages and
`generateMetadata` for dynamic values.

**Alternatives considered**: Manual `<head>` management (rejected; not the
preferred Next.js approach).

## Decision: Image handling via `next/image`

**Decision**: Use the `next/image` component with explicit `width`/`height`
for local and remote images, or static imports when available.

**Rationale**: Next.js requires width/height for layout stability and provides
automatic optimization with `next/image`.

**Alternatives considered**: Standard `<img>` tags (rejected; loses built-in
optimization and layout guarantees).

## Decision: Tailwind setup via official Next.js integration

**Decision**: Initialize Tailwind using the official Next.js + Tailwind
integration from the `create-next-app@latest` flow and keep the default setup
unless a requirement dictates change.

**Rationale**: Standard integration reduces drift and aligns with supported
configuration guidance.

**Alternatives considered**: Manual Tailwind setup (rejected to avoid config
misalignment).

## Decision: shadcn/ui initialization and component installation

**Decision**: Initialize shadcn/ui with `npx shadcn@latest init`, then add
required components using `npx shadcn@latest add <component>`.

**Rationale**: The CLI installs required dependencies and standardizes component
structure under `components/ui`.

**Alternatives considered**: Manual component wiring (rejected due to higher
setup risk).

## Decision: LocalStorage for review persistence

**Decision**: Persist reviews in localStorage within client components.

**Rationale**: The experience is frontend-only and must persist reviews across
reloads without a backend.

**Alternatives considered**: Server-side storage (rejected; no backend).
