# Implementation Plan: Travel Discovery & Reviews

**Branch**: `001-travel-discovery-reviews` | **Date**: 2025-12-25 | **Spec**: /Users/channachot/Desktop/WORK/test-spec-kit/specs/001-travel-discovery-reviews/spec.md
**Input**: Feature specification from `/specs/001-travel-discovery-reviews/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Deliver a production-ready, editorial travel discovery experience with four
core routes (home, destinations index, destination detail, about), curated local
seed data, client-side filtering/sorting, and localStorage-backed reviews. The
implementation follows App Router conventions, uses shadcn/ui primitives for
all UI foundations, and includes loading, empty, and not-found states with
responsive layout and accessibility checks.

## Technical Context

**Language/Version**: TypeScript (strict)  
**Primary Dependencies**: Next.js (latest stable, App Router), Tailwind CSS, shadcn/ui  
**Storage**: Local seed data module + localStorage (reviews)  
**Testing**: Manual QA (no automated tests requested)  
**Target Platform**: Modern evergreen browsers (desktop + mobile)  
**Project Type**: Web app (frontend-only)  
**Performance Goals**: Primary content visible within 2s on broadband; smooth
filtering and tab transitions  
**Constraints**: No backend, no external APIs, run-ready with `npm install` and
`npm run dev`  
**Scale/Scope**: 4 routes, 12+ destinations, local reviews persisted per
Destination

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Stack matches Next.js (latest stable, App Router), TypeScript (strict),
  Tailwind CSS, and shadcn/ui
- MCP context7 is the source of truth for Next.js, Tailwind, and shadcn/ui
- App Router is used; Pages Router is not used
- shadcn/ui primitives are used for applicable UI elements and composed into
  sections/domain components
- Component layout follows `components/ui`, `components/sections`,
  `components/domain`
- Destination data uses local seed data; reviews persist via localStorage
- Spec exists and uses the spec template with prioritized, independently
  testable user stories
- Requirements are testable and traceable to at least one user story
- If tests are requested, test tasks are listed before implementation tasks
- Tasks reference explicit file paths and story/requirement identifiers
- Any complexity exceptions are justified in the Complexity Tracking section

**Gate status**: PASS

## Project Structure

### Documentation (this feature)

```text
specs/001-travel-discovery-reviews/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── destinations-api.yaml
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── layout.tsx
├── page.tsx
├── loading.tsx
├── not-found.tsx
├── about/
│   └── page.tsx
├── destinations/
│   ├── page.tsx
│   ├── loading.tsx
│   └── [slug]/
│       ├── page.tsx
│       ├── loading.tsx
│       └── not-found.tsx

components/
├── ui/              # shadcn/ui primitives
├── sections/        # home + index sections
└── domain/          # destination + review components

data/
└── destinations.ts

lib/
├── filters.ts
├── reviews.ts
├── storage.ts
└── format.ts

public/
└── images/
```

**Structure Decision**: Single Next.js App Router project with shared sections
and domain components. Loading and not-found files exist at root and for dynamic
route segments where needed.

## Implementation Steps

### 1) Project initialization (context7-backed)

- Create the project with `npx create-next-app@latest` (Next.js docs) and
  select:
  - TypeScript: Yes
  - App Router: Yes
  - Tailwind CSS: Yes
  - ESLint: Yes
- Initialize shadcn/ui with `npx shadcn@latest init` (shadcn/ui CLI docs).
- Add required shadcn/ui components using the CLI:
  - `npx shadcn@latest add button card badge tabs accordion dialog input select separator skeleton toast`

### 2) Data and state flow design

- Seed destinations from `data/destinations.ts` and expose helpers in
  `lib/filters.ts` for search, filter, and sort.
- Apply filters/sort client-side in the destinations index and in any shared
  discovery sections.
- Store reviews in localStorage keyed by `destinationSlug` using
  `lib/storage.ts` and `lib/reviews.ts` helpers.
- Derive ratingAverage and reviewCount by combining seed rating with user
  reviews. Plan:
  - Seed ratingAverage/reviewCount represent baseline editorial rating.
  - On render, merge baseline + user reviews to compute displayed values.
  - Destination detail reads merged values for metadata, badges, and cards.

### 3) Route-level implementation

- `/` (Home): hero + search, trending grid, top-rated row, travel guide teaser,
  newsletter CTA. Use `components/sections/*` for modular layout.
- `/destinations`: search input, region/tag filters, sort control, results grid
  using shadcn Card, Skeletons on load, empty state when no results.
- `/destinations/[slug]`: cover image (local placeholder), metadata, highlights,
  Tabs for Overview/Reviews/Travel Guide, review list, review dialog form with
  validation, FAQ accordion, not-found for invalid slug.
- `/about`: editorial mission and methodology.

### 4) UI composition and primitives

- Use shadcn/ui for Button, Card, Badge, Tabs, Accordion, Dialog, Input, Select,
  Separator, Skeleton, and toast across all applicable UI.
- Compose primitives into `components/domain` for DestinationCard, ReviewCard,
  ReviewFormDialog, and filter controls.

### 5) Metadata and images (context7-backed)

- Define static metadata for static routes via `export const metadata`.
- Use `generateMetadata` for destination detail pages based on slug.
- Use `next/image` with explicit `width`/`height` for local or remote images.

### 6) Quality gates and checks

- Accessibility: labels for inputs, keyboard navigation for Tabs/Dialog, focus
  trapping in dialog, and semantic headings.
- States: loading for `/`, `/destinations`, `/destinations/[slug]`; empty states
  for filters; not-found for invalid slugs.
- Responsive: verify hero, grids, tabs, review form, and CTA sections across
  mobile/tablet/desktop breakpoints.

## Definition of Done

- [ ] `npm install` and `npm run dev` succeed with no missing configs
- [ ] All routes render correctly: `/`, `/destinations`, `/destinations/[slug]`, `/about`
- [ ] Filters and sorting work client-side on destinations index
- [ ] Reviews can be submitted and persist across reloads (localStorage)
- [ ] Loading, empty, and not-found states are present and functional
- [ ] UI is polished, cohesive, and editorial (non-generic)
- [ ] No broken links or runtime errors
- [ ] Accessibility checks pass (labels, keyboard nav, dialog focus)

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
