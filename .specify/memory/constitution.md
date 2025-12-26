<!--
Sync Impact Report
- Version change: 1.0.0 -> 2.0.0
- Modified principles:
  - I. Spec-Driven Delivery -> I. Approved Stack Only
  - II. Independently Testable User Stories -> II. Documentation via Context7
  - III. Test-First When Tests Are Requested -> III. Standard Project Initialization
  - IV. Traceable Artifacts and Explicit Paths -> IV. Editorial UI Quality
  - V. Simplicity with Explicit Exceptions -> V. shadcn-First Components
  - (new) VI. Local Data with Predictable State
  - (new) VII. Run-Ready, Accessible, Maintainable
- Added sections: Implementation Requirements; Design & Quality Standards
- Removed sections: Operational Standards; Development Workflow
- Templates requiring updates: updated .specify/templates/plan-template.md; updated .specify/templates/spec-template.md; updated .specify/templates/tasks-template.md
- Follow-up TODOs: TODO(RATIFICATION_DATE): original adoption date not found; TODO(COMMAND_TEMPLATES_DIR): .specify/templates/commands/ not present
-->
# Test Spec Kit Constitution

## Core Principles

### I. Approved Stack Only
The stack MUST be Next.js (latest stable) with App Router, TypeScript (strict),
Tailwind CSS, and shadcn/ui. Deviations require a formal amendment. Rationale:
consistent tooling keeps velocity high and integration predictable.

### II. Documentation via Context7
MCP server context7 MUST be the source of truth for Next.js APIs and App Router
conventions, Tailwind CSS setup and configuration, and shadcn/ui installation
and usage. APIs or patterns MUST NOT be guessed. Rationale: verified docs prevent
compatibility errors.

### III. Standard Project Initialization
Projects MUST be created with `create-next-app@latest`, use App Router, and
initialize Tailwind via the official Next.js integration. shadcn/ui MUST be
initialized with `npx shadcn@latest init`. Rationale: standardized bootstrap
reduces configuration drift.

### IV. Editorial UI Quality
Interfaces MUST feel modern, premium, and editorial, with a clear typography
hierarchy (hero -> section titles -> body), generous whitespace, restrained
color usage, and subtle purposeful motion. Rationale: consistent design quality
is part of the product definition.

### V. shadcn-First Components
shadcn/ui primitives MUST be used for Button, Card, Badge, Tabs, Accordion,
Dialog, Input, Select, Separator, Skeleton, and toast. Custom components MUST
compose these primitives and follow the structure: `components/ui`,
`components/sections`, `components/domain`. Rationale: composition preserves
accessibility and design consistency.

### VI. Local Data with Predictable State
Destination data MUST use local seed data, and user reviews MUST persist via
localStorage. Client-side state MUST remain predictable and clean. Rationale:
local-first data keeps the project self-contained and reliable.

### VII. Run-Ready, Accessible, Maintainable
The project MUST run via `npm install` and `npm run dev` with no missing configs,
TODOs, or broken imports. Accessibility MUST be respected with semantic HTML and
keyboard navigation. Code MUST be readable, modular, and maintainable. Rationale:
quality and DX are non-negotiable for delivery.

## Implementation Requirements

- Stack is fixed to Next.js (latest stable) with App Router, TypeScript (strict),
  Tailwind CSS, and shadcn/ui.
- Initialization MUST use `create-next-app@latest`, the official Next.js +
  Tailwind integration, and `npx shadcn@latest init`.
- UI primitives MUST come from shadcn/ui and be composed into higher-level
  components; directory layout is `components/ui`, `components/sections`,
  `components/domain`.
- Destination data is local seed data; reviews persist in localStorage; no
  external backend is required.
- MCP context7 MUST be consulted for Next.js, Tailwind, and shadcn/ui usage.

## Design & Quality Standards

- Maintain the editorial visual style with strong typography hierarchy and
  generous whitespace.
- Color usage MUST remain restrained and harmonious.
- Motion MUST be subtle and purposeful (hover, focus, light transitions).
- Output MUST be immediately runnable with `npm install` and `npm run dev`.
- Accessibility and code maintainability are mandatory.

## Governance

- The constitution supersedes other guidance when conflicts exist.
- Amendments require documented rationale, a Sync Impact Report update, and a
  version bump in this file.
- Versioning follows semantic rules: MAJOR for incompatible governance changes,
  MINOR for new principles or sections, PATCH for clarifications.
- Reviews MUST confirm constitution compliance and document any deviations with
  rationale and remediation plans.

**Version**: 2.0.0 | **Ratified**: Ratified on: 2025-12-25 | **Last Amended**: 2025-12-25
