# Quickstart: Travel Discovery & Reviews

## Prerequisites

- Node.js LTS
- npm

## Create the project

```bash
npx create-next-app@latest travel-discovery-reviews
```

Choose:
- TypeScript: Yes
- App Router: Yes
- Tailwind CSS: Yes
- ESLint: Yes

## Initialize shadcn/ui

```bash
npx shadcn@latest init
```

Add required components:

```bash
npx shadcn@latest add button card badge tabs accordion dialog input select separator skeleton toast
```

## Run locally

```bash
npm install
npm run dev
```

## Notes

- Use `next/image` with explicit width/height or static imports for local images.
- Reviews persist client-side via localStorage.
