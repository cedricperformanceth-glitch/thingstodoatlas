# ThingsToDoAtlas

Independent static-first travel guide for destinations, places and practical information across Asia. The launch prototype focuses on Laos, beginning with Pakse and the Bolaven Plateau area.

## Technical direction

- **Astro + TypeScript**: static HTML for indexable pages, reusable components, minimal client JavaScript.
- **Local typed content first**: `src/data/atlas.ts` is the editorial source for the prototype. It can later be replaced or hydrated from a CMS/Supabase content layer without changing the route contract.
- **Cloudflare Pages ready**: `pnpm build` produces `dist/`; the project is independent from Cedric Training and has no cross-repository imports.
- **Design system**: warm paper background, editorial serif headings, compact sans-serif UI, forest/terracotta accents, restrained borders and generous rhythm.

## Local development

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Route map

```text
/                                  Homepage
/laos                              Country hub (useful once several destinations exist)
/laos/pakse                        City guide hub
/laos/pakse/places            Direct category listing
/laos/pakse/:category              Future category listings
/laos/:city                        Future city hubs
```

The route model is `country → city → category → list`, with no unnecessary category landing page. Only categories with real editorial content should be published.

## Content model

`Country`, `City`, `Category` and `Place` are intentionally separate. A `City` exposes `activeCategories`; a `Place` carries editorial status (`demo`, `verified`, `needs-review`) so placeholders cannot be mistaken for checked commercial information.

## Next steps

1. Replace demo entries with researched, verified Pakse data and licensed/owned photography.
2. Add Tad Lo and Paksong once each has enough unique content to justify a destination hub.
3. Add structured data per page, a generated sitemap, and a real domain/canonical configuration before launch.
4. Define the single-user editorial workflow and Supabase schema only after the content fields settle.
5. Add search and map enhancements after the core static guide is useful without them.

## Place image sourcing

This workflow researches place images before deployment. It does not use Google Places, Google Cloud or paid API keys. Run `npm run images:places` to read the 18 place records and write `src/data/place-images.generated.json`.

Sources are checked in this order: official site, official Facebook page, official Instagram account, Wikimedia Commons, then generic Unsplash/Pexels. Only `status: "approved"` records with a selected image replace the existing `image`; every other record keeps the current fallback from `src/data/atlas.ts`. Ambiguous social pages remain `needs-review` and are not scraped aggressively or accessed with authentication.

The same workflow applies to restaurants, cafés, scooter rentals, accommodation, gyms, markets and essential-information fiches. Use `npm run images:places`.
