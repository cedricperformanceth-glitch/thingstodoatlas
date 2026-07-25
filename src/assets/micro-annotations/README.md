# Micro-annotations

This is the reusable handwritten visual library for ThingsToDoAtlas. The family folders are `navigation`, `terrain`, and `transport`; their labels are organisational only, not production checklists.

Micro-annotations support the travel-journal hierarchy. They must never replace essential readable navigation or overwhelm the page.

Photography communicates the place; WebP drawings provide visual personality; SVG micro-annotations connect, guide and add contextual notes.

## Progressive workflow

The library grows from real design needs. New annotations are created during page work, reviewed in context, added to the shared system and reused across the website.

Never create a large annotation family in advance unless explicitly requested. Before creating one, check the registry and reuse a suitable asset whenever possible. By default, create only one to three new assets during a page iteration.

The registry currently contains three travel-journal assets used by the homepage: `field-notes-stamp` for a collected notebook mark, `keep-this-feeling` for a handwritten memory, and `notebook-compass` for a light direction cue.

## Usage

```astro
<MicroAnnotation name="next-destination" family="navigation" color="saffron" size="medium" />
```

Supported sizes are `small`, `medium`, and `large`. Colours are `saffron`, `turquoise`, `green`, and restrained `ink`. Use `rotation` sparingly at the placement level. Keep the annotation adjacent to real HTML text or a link; never use it as the only label. Decorative instances are hidden from assistive technology. For meaningful use, pass `decorative={false}` and a concise `label`, while keeping the same information in readable HTML.

To add an annotation, identify the real page need, create one lowercase kebab-case SVG in the relevant family, add one definition to `src/data/micro-annotations.ts`, expose it through `MicroAnnotation`, add it to the internal preview, document its intended use, and use it on the current page. Use `currentColor` for strokes/text. Keep viewBoxes tight, backgrounds transparent, and paths simple.

Usage guidance:

- `field-notes-stamp` is a subtle, decorative notebook/passport mark. Place it near photography or an editorial heading; do not use it as a brand logo.
- `keep-this-feeling` is a short, decorative handwritten memory. Keep the readable phrase in nearby HTML when the phrase carries meaning.
- `notebook-compass` is a decorative direction cue. Use it near a route, coordinate or travel image, never as the only directional label.

All three assets inherit `currentColor`, accept the shared size and colour props, and should be rotated only lightly at the placement level.
