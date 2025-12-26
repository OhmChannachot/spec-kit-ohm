# Data Model: Travel Discovery & Reviews

## Entities

### Destination

**Fields**
- **slug**: unique, URL-safe identifier
- **name**: display name
- **country**: country name
- **region**: one of Asia, Europe, Americas, Africa, Oceania
- **description**: short editorial overview
- **tags**: list of theme tags (Beach, City, Nature, Food, Culture, Luxury, Budget)
- **ratingAverage**: number (1.0–5.0)
- **reviewCount**: integer (>= 0)
- **highlights**:
  - **bestTimeToVisit**: short text
  - **budgetLevel**: short text (e.g., Budget, Mid-range, Luxury)
  - **mustDo**: list of short bullet items
- **images**: list of image references (local paths or static imports)

**Validation rules**
- slug must be unique and match URL-safe pattern
- region must be one of the defined regions
- ratingAverage must be within 1.0–5.0
- reviewCount must be an integer >= 0

### Review

**Fields**
- **id**: unique identifier
- **destinationSlug**: foreign key to Destination.slug
- **authorName**: non-empty string
- **rating**: integer 1–5
- **title**: non-empty string
- **body**: non-empty string
- **createdAt**: ISO date string

**Validation rules**
- destinationSlug must exist in Destination
- rating must be an integer within 1–5
- title and body must be non-empty and trimmed

## Relationships

- A Destination has many Reviews
- A Review belongs to one Destination

## Derived Fields

- Destination.ratingAverage and Destination.reviewCount are derived from its
  associated reviews plus any seed baseline rating.

## State Transitions

- Review: draft -> validated -> persisted (localStorage)
