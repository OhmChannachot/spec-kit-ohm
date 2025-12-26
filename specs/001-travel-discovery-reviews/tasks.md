---

description: "Task list template for feature implementation"
---

# Tasks: Travel Discovery & Reviews

**Input**: Design documents from `/specs/001-travel-discovery-reviews/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: No automated tests requested.

**Organization**: Tasks are grouped by execution phase and ordered for sequential delivery.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (not used here; sequential checklist)
- **[Story]**: Which user story this task belongs to (optional in this plan)
- Include exact file paths in descriptions
- Reference the story or requirement ID in the description when applicable

## Phase A: Project bootstrap + configs (Next.js + Tailwind + shadcn)

- [X] T001 Create the app in a staging folder with `npx create-next-app@latest travel-discovery-reviews` (TypeScript, App Router, Tailwind, ESLint) and verify `/Users/channachot/Desktop/WORK/test-spec-kit/travel-discovery-reviews/package.json`
- [X] T002 Move generated app files into repo root from `/Users/channachot/Desktop/WORK/test-spec-kit/travel-discovery-reviews/` and remove the staging folder
- [X] T003 Initialize shadcn/ui with `npx shadcn@latest init` and verify `/Users/channachot/Desktop/WORK/test-spec-kit/components.json`
- [X] T004 Add shadcn/ui components with `npx shadcn@latest add button card badge tabs accordion dialog input select separator skeleton` and verify `/Users/channachot/Desktop/WORK/test-spec-kit/components/ui/`
- [X] T005 Add shadcn/ui toast replacement with `npx shadcn@latest add sonner` and verify `/Users/channachot/Desktop/WORK/test-spec-kit/components/ui/sonner.tsx`
- [X] T006 Create project folders `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections`, `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain`, `/Users/channachot/Desktop/WORK/test-spec-kit/data`, `/Users/channachot/Desktop/WORK/test-spec-kit/lib`, `/Users/channachot/Desktop/WORK/test-spec-kit/public/images`

## Phase B: Shared UI + layout shell (Header/Nav/Footer)

- [X] T007 Define shared layout shell in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/site-header.tsx` (logo, nav, CTA)
- [X] T008 Define shared footer in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/site-footer.tsx` (newsletter, links, credits)
- [X] T009 Wire header/footer into `/Users/channachot/Desktop/WORK/test-spec-kit/app/layout.tsx` and set base metadata

## Phase C: Data + utilities (destinations seed, filtering utils, localStorage helpers)

- [X] T010 Add types in `/Users/channachot/Desktop/WORK/test-spec-kit/lib/types.ts` (Destination, Review)
- [X] T011 Seed destinations in `/Users/channachot/Desktop/WORK/test-spec-kit/data/destinations.ts` (12+ across regions) (FR-013)
- [X] T012 Seed baseline reviews in `/Users/channachot/Desktop/WORK/test-spec-kit/data/reviews.ts`
- [X] T013 Implement filter/search/sort helpers in `/Users/channachot/Desktop/WORK/test-spec-kit/lib/filters.ts` (FR-002, FR-003, FR-004)
- [X] T014 Implement localStorage helpers in `/Users/channachot/Desktop/WORK/test-spec-kit/lib/storage.ts` (FR-009)
- [X] T015 Implement review aggregation helpers in `/Users/channachot/Desktop/WORK/test-spec-kit/lib/reviews.ts` (FR-007, FR-008, FR-009)
- [X] T016 Implement formatting helpers in `/Users/channachot/Desktop/WORK/test-spec-kit/lib/format.ts` (dates, ratings)

## Phase D: Routes (Home, Destinations list, Destination detail, About)

### Home `/`

- [X] T017 Create hero section in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/home-hero.tsx` (FR-001)
- [X] T018 Create trending grid section in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/trending-destinations.tsx` (FR-001)
- [X] T019 Create top-rated row section in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/top-rated-row.tsx` (FR-001)
- [X] T020 Create travel guide teaser in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/travel-guides-teaser.tsx` (FR-001)
- [X] T021 Create newsletter CTA in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/newsletter-cta.tsx` (FR-001)
- [X] T022 Compose home page in `/Users/channachot/Desktop/WORK/test-spec-kit/app/page.tsx` with section components (FR-001)
- [X] T023 Add home metadata in `/Users/channachot/Desktop/WORK/test-spec-kit/app/page.tsx`
- [X] T024 Implement home responsive layout in `/Users/channachot/Desktop/WORK/test-spec-kit/app/page.tsx`
- [X] T025 Implement home skeleton loading in `/Users/channachot/Desktop/WORK/test-spec-kit/app/loading.tsx`
- [X] T026 Add home empty state handling in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/trending-destinations.tsx`

### Destinations index `/destinations`

- [X] T027 Create destination card in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/destination-card.tsx` (FR-002)
- [X] T028 Create filters/sort controls in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/destination-filters.tsx` (FR-002, FR-003, FR-004)
- [X] T029 Create destination grid in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/destination-grid.tsx` (FR-005)
- [X] T030 Create empty state in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/empty-state.tsx` (FR-005)
- [X] T031 Create skeleton grid in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/destination-skeleton-grid.tsx` (FR-005)
- [X] T032 Implement destinations page in `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/page.tsx` with search/filter/sort and states (FR-002, FR-003, FR-004, FR-005)
- [X] T033 Add destinations metadata in `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/page.tsx`
- [X] T034 Implement destinations responsive layout in `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/page.tsx` (FR-012)
- [X] T035 Implement destinations skeleton loading in `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/loading.tsx` (FR-005)
- [X] T036 Verify destinations empty state in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/empty-state.tsx` (FR-005)

### Destination detail `/destinations/[slug]`

- [X] T037 Create destination header in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/destination-header.tsx` (FR-006)
- [X] T038 Create highlights section in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/destination-highlights.tsx` (FR-006)
- [X] T039 Create tabs layout in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/destination-tabs.tsx` (FR-006)
- [X] T040 Create review list in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/review-list.tsx` (FR-007)
- [X] T041 Create review form dialog in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/review-form-dialog.tsx` (FR-008)
- [X] T042 Create FAQ accordion in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/destination-faq.tsx` (FR-010)
- [X] T043 Implement detail page in `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/[slug]/page.tsx` (FR-006, FR-007, FR-010)
- [X] T044 Add detail metadata with `generateMetadata` in `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/[slug]/page.tsx`
- [X] T045 Implement detail responsive layout in `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/[slug]/page.tsx` (FR-012)
- [X] T046 Implement detail skeleton loading in `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/[slug]/loading.tsx` (FR-006)
- [X] T047 Implement detail empty state for no reviews in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/review-list.tsx` (FR-007)
- [X] T048 Add not-found handling in `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/[slug]/not-found.tsx` (FR-014)
- [X] T049 Wire review persistence in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/review-form-dialog.tsx` and `/Users/channachot/Desktop/WORK/test-spec-kit/lib/reviews.ts` (FR-008, FR-009)

### About `/about`

- [X] T050 Implement about page content in `/Users/channachot/Desktop/WORK/test-spec-kit/app/about/page.tsx` (FR-011)
- [X] T051 Add about metadata in `/Users/channachot/Desktop/WORK/test-spec-kit/app/about/page.tsx`
- [X] T052 Implement about responsive layout in `/Users/channachot/Desktop/WORK/test-spec-kit/app/about/page.tsx` (FR-012)
- [X] T053 Implement about skeleton loading in `/Users/channachot/Desktop/WORK/test-spec-kit/app/about/loading.tsx`
- [X] T054 Add about empty state handling in `/Users/channachot/Desktop/WORK/test-spec-kit/app/about/page.tsx`

## Phase E: UX states (loading, empty, not-found, error boundaries if used)

- [X] T055 Verify root not-found state in `/Users/channachot/Desktop/WORK/test-spec-kit/app/not-found.tsx` (FR-014)
- [X] T056 Add top-level error boundary in `/Users/channachot/Desktop/WORK/test-spec-kit/app/error.tsx`
- [X] T057 Confirm loading states render in `/Users/channachot/Desktop/WORK/test-spec-kit/app/loading.tsx`, `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/loading.tsx`, `/Users/channachot/Desktop/WORK/test-spec-kit/app/destinations/[slug]/loading.tsx`, `/Users/channachot/Desktop/WORK/test-spec-kit/app/about/loading.tsx`

## Phase F: Polish (typography scale, spacing, responsive tune, icons, toasts)

- [X] T058 Define typography scale and spacing tokens in `/Users/channachot/Desktop/WORK/test-spec-kit/app/globals.css`
- [X] T059 Add icon usage in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/site-header.tsx` and `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/destination-card.tsx`
- [X] T060 Add toast notifications for review submission in `/Users/channachot/Desktop/WORK/test-spec-kit/components/domain/review-form-dialog.tsx`
- [X] T061 Tune responsive spacing across sections in `/Users/channachot/Desktop/WORK/test-spec-kit/components/sections/*`

## Phase G: Final verification (run dev, fix lint, smoke test navigation)

- [X] T062 Run `npm install` and verify dependencies resolve in `/Users/channachot/Desktop/WORK/test-spec-kit/package.json`
- [ ] T063 Run `npm run dev` and verify local server starts from `/Users/channachot/Desktop/WORK/test-spec-kit`
- [ ] T064 Smoke test navigation across `/`, `/destinations`, `/destinations/[slug]`, `/about`
- [ ] T065 Release checklist: run `npm install`, run `npm run dev`, navigate all routes, submit a review, refresh to confirm persistence
