# ThingsToDoAtlas

Independent static-first travel guide for destinations, places and practical information across Asia. The product combines editorial discovery with a browser-based **My Trip** notebook.

## Product flow

```text
Homepage
→ country map
→ city or landmark
→ practical category
→ place card
→ Add to My Trip
→ trip summary / PDF
```

Visitors can explore freely. Starting from a city creates a trip explicitly; saving the first card can also create the appropriate country trip automatically.

## Technical direction

- **Astro + TypeScript**: static HTML for indexable pages, reusable components and minimal client JavaScript.
- **Static output**: `pnpm build` produces `dist/`.
- **Cloudflare deployment**: Cloudflare deploys the `master` branch automatically.
- **No GitHub Actions**: do not add workflow files for deployment, image processing or routine builds.
- **Local typed content first**: content stays versioned with the site until a CMS is genuinely necessary.

## Core architecture

### Atlas configuration

`src/data/atlasConfig.ts` is the source of truth for:

- countries and chapters;
- country routes;
- cities and city routes;
- city publication status;
- cities available as My Trip starting points.

Do not redeclare these lists inside page components or browser scripts.

### Content model

`src/data/contentModel.ts` defines:

- shared category definitions;
- reusable city-guide content;
- editorial statuses;
- required and recommended place fields.

A city page should provide data to `CityGuidePage.astro` rather than copy a complete page layout.

### My Trip

The global trip interface is split into:

- `TripDrawer.astro`: presentation only;
- `TripManager.astro`: the single browser-side state manager;
- `TripSummaryModal.astro`: summary and PDF export.

Storage key: `thingsToDoAtlas.trips.v2`.

The manager still migrates the old `thingsToDoAtlas.trip.v1` format, but no V1 engine remains active.

Current product rule: **one trip belongs to one country**, while a user may create several trips per country.

### Shared presentation

- `CityGuidePage.astro`: shared city hero and category directory.
- `CountryMapFrame.astro`: shared country-map paper, title, grid and trip-introduction frame.
- `src/styles/atlas-system.css`: global design tokens, spacing and accessibility foundations.

Country-specific landmarks, coordinates and editorial material remain data, not duplicated page structure.

## Route model

```text
/                                  Homepage
/:country                          Country map
/:country/:city                    City guide
/:country/:city/:category          Category listing
```

Landmarks may open from country maps and city guides without requiring an artificial city directory.

## Editorial status

Use these statuses consistently:

- `draft`: internal or incomplete content;
- `needs-review`: useful but not recently field-checked;
- `verified`: location and practical details have been checked recently.

Never present a placeholder or generic image as proof that a commercial listing has been verified.

## Local development

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

## Adding a new city

1. Add the city once in `atlasConfig.ts`.
2. Add its editorial definition in `contentModel.ts`.
3. Create a thin route that renders `CityGuidePage`.
4. Add category content only when useful local addresses exist.
5. Confirm My Trip saves cards under the correct country.
6. Check desktop, mobile, keyboard navigation and PDF summary before merging to `master`.

## Place image sourcing

The image workflow researches sources without Google Places, Google Cloud or paid API keys. Approved sources may replace fallbacks; ambiguous social pages remain `needs-review` and must not be scraped aggressively or accessed with authentication.
